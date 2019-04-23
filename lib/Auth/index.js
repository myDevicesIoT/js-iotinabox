/** @typedef {import('../typedefs.js').TinaAuthOptions} TinaAuthOptions */
/** @typedef {import('../typedefs.js').TinaSendOpts} TinaSendOpts */

const jwt = require('jsonwebtoken');
const superagent = require('superagent');

const TinaError = require('./TinaError');

/** @const Number Max failure retries */
const MAX_RETRIES = 1;

/** @const String Default URL */
const DEFAULT_URL = 'https://iotinabox-api.mydevices.com';

/** @const String Default client id */
const DEFAULT_CLIENT = 'iotinabox';

/** @const String Offline access scope */
const OFFLINE_SCOPE = 'offline_access';

/** @const Object Grant types */
const GRANTS = {
  PASSWORD: 'password',
  CLIENT: 'client_credentials',
  REFRESH: 'refresh_token'
};

/** Auth class handles authentication */
class Auth {
  /**
   * Constructs the Auth class
   *
   * @param {String}          [baseUrl=DEFAULT_URL]
   * @param {TinaAuthOptions} opts
   */
  constructor(baseUrl = DEFAULT_URL, opts) {
    opts = Object.assign({ isOffline: false, clientId: DEFAULT_CLIENT }, opts);

    this.baseUrl = baseUrl;
    this.logger = opts.logger;

    /** Client configuration */
    this.isClient = !!(opts.clientId && opts.clientSecret);
    this.clientId = opts.clientId;
    this.clientSecret = opts.clientSecret;

    /** User configuration */
    this.isUser = !!(opts.username && !!opts.password);
    this.username = opts.username;
    this.password = opts.password;

    /** Token override configuration */
    this.isToken = !!opts.token;
    this.token = opts.token;

    /** Configure token properties */
    this.grant = this.isClient ? GRANTS.CLIENT : GRANTS.PASSWORD;
    this.refresh = null;
    this.content = {
      exp: 0
    };
    this.tokenFailed = false;
    this.isOffline = opts.isOffline;
    this.invalidCredentials;
  }

  /**
   * Authenticates the configured settings
   *
   * @public
   *
   * @param {Number} [retry=0] Ensures recursive requests does not exceed maximum
   *
   * @returns {Promise.<String>} Access token
   */
  async authenticate(retry = 0) {
    if (this.isToken) {
      return this.access;
    }

    if (retry > MAX_RETRIES) {
      throw TinaError.MaxAuthenticationRequestsReached();
    }
    if (this.invalidCredentials) {
      throw this.invalidCredentials;
    }

    let grant;
    if (this.token && this.isExpired()) {
      grant = GRANTS.REFRESH;
    } else if (this.token && this.tokenFailed) {
      grant = this.grant;
    } else if (this.token && !this.isExpired()) {
      return this.access;
    } else {
      grant = this.grant;
    }

    const payload = {
      client_id: this.clientId,
      grant_type: grant
    };
    if (this.isOffline) {
      payload.scope = OFFLINE_SCOPE;
    }
    if (this.isUser) {
      payload.username = this.username;
      payload.password = this.password;
    }
    if (this.isClient) {
      payload.client_secret = this.clientSecret;
    }
    if (grant === GRANTS.REFRESH) {
      payload.refresh_token = this.refresh;
    }

    const { access_token, refresh_token } = await this.send(
      'POST',
      '/oauth/token',
      { isPublic: true, payload }
    ).catch(error => {
      if (error.status === 400 && grant === GRANTS.REFRESH) {
        this.token = null;
        return this.getApplicationToken(++retry);
      } else if (
        error.status === 400 &&
        grant === GRANTS.CLIENT &&
        !this.access.token
      ) {
        this.invalidCredentials = TinaError.InvalidApplicationCredentials();
        throw this.invalidCredentials;
      }

      throw error;
    });

    this.token = `Bearer ${access_token}`;
    this.refresh = refresh_token;

    return this.access;
  }

  /**
   * Sends an HTTP request
   *
   * @public
   *
   * @param {String}       method REST method to use
   * @param {String}       path   Endpoint
   * @param {TinaSendOpts} opts   Additional options
   * @param {Number}       retry  Allow retries in case of expired token
   */
  async send(method, path, opts, retry = 0) {
    if (this.invalidCredentials) {
      throw this.invalidCredentials;
    }

    opts = Object.assign({ headers: {}, isPublic: false }, opts);

    let begin = new Date().getTime();
    let url = `${this.baseUrl}${path}`;
    try {
      if (retry > this.MAX_RETRIES) {
        throw TinaError.MaxAuthenticatedRequestsReached();
      }

      if (!opts.isPublic) {
        opts.headers.authorization = opts.token
          ? opts.token
          : await this.authenticate();
      }

      begin = new Date().getTime();
      const response = await superagent(method, url)
        .set(opts.headers)
        .query(opts.query)
        .send(opts.payload);

      this.log(
        `${method}, code: ${response.status}, t: ${this.timeDelta(
          begin
        )} ms -> url: ${path}, query: ${JSON.stringify(opts.query || {})}`
      );

      this.tokenFailed = false;
      return response.body;
    } catch (error) {
      if (
        !opts.isPublic &&
        error.status === 401 &&
        error.typeof !== TinaError.MaxAuthenticatedRequestsReached
      ) {
        this.tokenFailed = true;
        return this.send(method, path, opts, ++retry);
      }

      throw this.getError(
        error,
        url,
        method,
        this.timeDelta(begin),
        opts.query
      );
    }
  }

  /**
   * Create the Core Error and logs it
   *
   * @private
   *
   * @param {Error}  error  Error returned
   * @param {String} url    Endpoint
   * @param {String} method REST method used
   * @param {Number} tDelta Request time in ms
   * @param {Object} query  The query sent
   */
  getError(error, url, method, tDelta, query) {
    const log = () => {
      const errorText =
        !!error.response && !!error.response.text
          ? error.response.text
          : error.stack;
      this.log(
        `${method}, code: ${
          error.status
        }, t: ${tDelta} ms -> url: ${url}, query: ${JSON.stringify(
          query || {}
        )} -> error response ${errorText}`,
        'error'
      );
    };

    if (!(error instanceof TinaError)) {
      error = new TinaError(error, { statusCode: error.status });
    }

    log();
    return error;
  }

  /**
   * Check if token is expired
   *
   * @public
   *
   * @returns {Boolean} `true` if token is expired, otherwise `false`
   */
  isExpired() {
    if (this.access.indexOf('Basic') !== -1) {
      return false;
    }

    try {
      this.token = this.access.replace('Bearer ', '');
      this.content = jwt.decode(this.access);
    } catch (error) {
      this.content = {
        exp: 0
      };
    }

    return this.content.exp * 1000 < Date.now();
  }

  /**
   * Returns timedelta in ms
   *
   * @private
   *
   * @param {Number} begin ms
   */
  timeDelta(begin) {
    return new Date().getTime() - begin;
  }

  /**
   * Log the message if enabled and with applicable log level
   *
   * @public
   *
   * @param {String} message
   * @param {String} level
   */
  log(message, level) {
    if (typeof this.logger === 'boolean' && !this.logger) {
      return;
    }

    const logLevel = level || 'verbose';

    if (
      typeof this.logger === 'object' &&
      typeof this.logger[logLevel] === 'function'
    ) {
      this.logger[logLevel](message);
      return;
    }

    if (typeof this.logger === 'function') {
      this.logger(`[iotinabox] ${message}`);
      return;
    }
  }
}

module.exports = Auth;
