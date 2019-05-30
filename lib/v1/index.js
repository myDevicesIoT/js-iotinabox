/** @typedef {import('../typedefs.js').TinaAuthOptions} TinaAuthOptions */
/** @typedef {import('../typedefs.js').TinaSendOpts} TinaSendOpts */

const V0 = require('../v0');

/** V1 API class */
class V1 extends V0 {
  /**
   * Constructs the V1 API class
   *
   * @param {String}          baseUrl
   * @param {TinaAuthOptions} opts
   */
  constructor(baseUrl, opts) {
    super(baseUrl, opts);

    this.v = '/v1.0';
  }

  /**
   * Integrations
   */

  /**
   * @param {TinaSendOpts} opts
   */
  getAllIntegrations(opts) {
    return this.send('GET', `${this.v}/integrations`, opts);
  }
  /**
   * @param {TinaSendOpts} opts
   */
  getIntegration(opts, params) {
    return this.send(
      'GET',
      `${this.v}/integrations/${params.integrationId}`,
      opts
    );
  }

  /**
   * Fuses
   */

  /**
   * @param {TinaSendOpts} opts
   */
  getAllFuses(opts) {
    return this.send('GET', `${this.v}/fuses`, opts);
  }
  /**
   * @param {TinaSendOpts} opts
   */
  getFuse(opts, params) {
    return this.send('GET', `${this.v}/fuses/${params.fuseId}`, opts);
  }
  /**
   * @param {TinaSendOpts} opts
   */
  createFuse(opts) {
    return this.send('POST', `${this.v}/fuses`, opts);
  }
  updateFuse(opts, params) {
    return this.send('PUT', `${this.v}/fuses/${params.fuseId}`, opts);
  }
  /**
   * @param {TinaSendOpts} opts
   */
  deleteFuse(opts, params) {
    return this.send('DELETE', `${this.v}/fuses/${params.fuseId}`, opts);
  }

  /**
  * Uses
  */

  /**
   * @param {TinaSendOpts} opts 
   */
  createUses(opts) {
    return this.send(
      'POST',
      `${this.v}/uses`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts 
   * @param {} params
   */
  updateUses(opts, params) {
    return this.send(
      'PUT',
      `${this.v}/uses/${params.id}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts 
   * @param {} params
   */
  deleteUses(opts, params) {
    return this.send(
      'DELETE',
      `${this.v}/uses/${params.id}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getAllUses(opts) {
    return this.send('GET', `${this.v}/uses`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   * @param {} params
   */
  getUses(opts, params) {
    return this.send(
      'GET',
      `${this.v}/uses/${params.id}`,
      opts
    );
  }
}

module.exports = V1;
