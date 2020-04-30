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
    return this.send('GET', `${this.v}/integrations`, {
      ...opts,
      isPublic: true
    });
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getIntegration(opts, params) {
    return this.send('GET', `${this.v}/integrations/${params.integrationId}`, {
      ...opts,
      isPublic: true
    });
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
   * @param {Object} opts
   * @param {Object} opts.query
   * @param {string} opts.query.fields
   * @param {string} opts.query.user_id
   * @param {string} opts.query.thingId
   * @param {string} opts.query.rule_id
   * @param {Object} [opts.headers]
   */
  expandFuseData(opts) {
    return this.send('GET', `${this.v}/fuses/data`, opts);
  }

  /**
   * Uses
   */

  /**
   * @param {TinaSendOpts} opts
   */
  getAllUses(opts) {
    return this.send('GET', `${this.v}/things/uses`, opts);
  }
  /**
   * @param {TinaSendOpts} opts
   * @param {} params
   */
  getUse(opts, params) {
    return this.send('GET', `${this.v}/things/uses/${params.id}`, opts);
  }
  /**
   * @param {TinaSendOpts} opts
   */
  createUse(opts) {
    return this.send('POST', `${this.v}/things/uses`, opts);
  }
  /**
   * @param {TinaSendOpts} opts
   * @param {} params
   */
  updateUse(opts, params) {
    return this.send('PUT', `${this.v}/things/uses/${params.id}`, opts);
  }
  /**
   * @param {TinaSendOpts} opts
   * @param {} params
   */
  deleteUse(opts, params) {
    return this.send('DELETE', `${this.v}/things/uses/${params.id}`, opts);
  }

  /**
   * Attributes and Groups
   */

  /**
   * @param {TinaSendOpts} opts
   * @param {} params
   */
  getAllGroups(opts, params) {
    return this.send('GET', `${this.v}/things/${params.thingId}/groups`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   * @param {} params
   */
  getGroup(opts, params) {
    return this.send(
      'GET',
      `${this.v}/things/${params.thingId}/groups/${params.groupId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   * @param {} params
   */
  createGroup(opts, params) {
    return this.send('POST', `${this.v}/things/${params.thingId}/groups`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   * @param {} params
   */
  updateGroup(opts, params) {
    return this.send(
      'PUT',
      `${this.v}/things/${params.thingId}/groups/${params.groupId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   * @param {} params
   */
  deleteGroup(opts, params) {
    return this.send(
      'DELETE',
      `${this.v}/things/${params.thingId}/groups/${params.groupId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   * @param {} params
   */
  createAttribute(opts, params) {
    return this.send(
      'POST',
      `${this.v}/things/${params.thingId}/groups/${params.groupId}/attributes`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   * @param {} params
   */
  updateAttribute(opts, params) {
    return this.send(
      'PUT',
      `${this.v}/things/${params.thingId}/groups/${params.groupId}/attributes/${
        params.attributeId
      }`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   * @param {} params
   */
  deleteAttribute(opts, params) {
    return this.send(
      'DELETE',
      `${this.v}/things/${params.thingId}/groups/${params.groupId}/attributes/${
        params.attributeId
      }`,
      opts
    );
  }
}

module.exports = V1;
