const Boom = require('boom');

/** TinaError class */
class TinaError extends Boom {
  static [Symbol.hasInstance](instance) {
    return TinaError.isTina(instance);
  }

  /**
   * Checks if provided error is a Tina error
   *
   * @param {*} err
   *
   * @returns {Boolean}
   */
  static isTina(err) {
    return err instanceof Error && !!err.isTina;
  }

  /**
   * Constructs the Tina Error
   *
   * @param {String | Error} message
   * @param {Object}         [options]
   */
  constructor(message, options) {
    options = Object.assign({}, options);

    const { ctr = TinaError, isInternal = false } = options;
    if (message && !message.isBoom && message instanceof Error) {
      message.name = `${TinaError.name} - ${message.name}`;
    }

    super(message ? message : undefined, options);

    if (typeof message === 'string' || !this.isServer) {
      Error.captureStackTrace(this, ctr);
    } else {
      this.message = 'Internal error';
    }

    this.name = TinaError.name;
    this.isTina = true;
    this.status = this.output.statusCode;
    this.typeof = ctr;
    this.isInternal = isInternal;

    return this;
  }

  static InvalidApplicationCredentials() {
    return this.unauthorized(this.InvalidApplicationCredentials.name, {
      ctr: this.InvalidApplicationCredentials,
      isInternal: true
    });
  }

  static MaxAuthenticationRequestsReached() {
    return this.unauthorized(this.MaxAuthenticationRequestsReached.name, {
      ctr: this.MaxAuthenticationRequestsReached,
      isInternal: true
    });
  }

  static MaxAuthenticatedRequestsReached() {
    return this.unauthorized(this.MaxAuthenticatedRequestsReached.name, {
      ctr: this.MaxAuthenticatedRequestsReached,
      isInternal: true
    });
  }

  /**
   * Overrides Boom static to create under Core instance
   * @param {String} fnName
   */
  static override(fnName) {
    const errorFn = super[this[fnName].name];

    TinaError[fnName] = function(message, options) {
      const error = errorFn(message);
      return new TinaError(error, {
        ctr: this[fnName],
        ...options
      });
    };
    Object.defineProperty(TinaError[fnName], 'name', {
      value: errorFn.name
    });
  }
}

TinaError.override('unauthorized');

module.exports = TinaError;
