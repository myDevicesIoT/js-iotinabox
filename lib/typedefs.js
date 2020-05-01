/**
 * Intellisense type definitions
 */

/**
 * Authentication Options
 *
 * @typedef {Object} TinaAuthOptions
 *
 * @property {String}   [isClient=false]          If interfacing with API with client credentials
 * @property {String}   [clientId=DEFAULT_CLIENT] Client id to set context to
 * @property {String}   [clientSecret]            Client secret
 * @property {String}   [username]                Username
 * @property {String}   [password]                Password for current user
 * @property {Boolean}  [isOffline=false]         Whether to use an offline scope
 * @property {String}   [token]                   Skip authentication and use provided token
 * @property {String}   [refresh]                 Skip authentication and use provided refresh token
 * @property {Function} [logger]                  Logging function to use
 */

/**
 * Available options to send for HTTP Tina Request
 *
 * @typedef {Object} TinaSendOpts
 *
 * @property {Object}  [opts.headers={}]     Headers to send
 * @property {Object}  [opts.query]          Query to send
 * @property {Object}  [opts.payload]        Payload to send
 * @property {Boolean} [opts.isPublic=false] If this request should include authorization
 * @property {String}  [opts.token]          Override the instance token
 * @property {Boolean} [opts.includeStatus]  Returns the status code as `_statusCode`
 */

module.exports = {};
