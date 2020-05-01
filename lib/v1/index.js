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
    return this.send('POST', `${this.v}/things/uses`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   * @param {} params
   */
  updateUses(opts, params) {
    return this.send('PUT', `${this.v}/things/uses/${params.id}`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   * @param {} params
   */
  deleteUses(opts, params) {
    return this.send('DELETE', `${this.v}/things/uses/${params.id}`, opts);
  }

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
  getUses(opts, params) {
    return this.send('GET', `${this.v}/things/uses/${params.id}`, opts);
  }

  /**
   * Attributes and Groups
   */

  /**
   * @param {TinaSendOpts} opts
   * @param {} params
   */
  getAttributeGroups(opts, params) {
    return this.send('GET', `${this.v}/things/${params.thing_id}/groups`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   * @param {} params
   */
  createGroup(opts, params) {
    return this.send(
      'POST',
      `${this.v}/things/${params.thing_id}/groups`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   * @param {} params
   */
  updateGroup(opts, params) {
    return this.send(
      'PUT',
      `${this.v}/things/${params.thing_id}/groups/${params.group_id}`,
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
      `${this.v}/things/${params.thing_id}/groups/${params.group_id}`,
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
      `${this.v}/things/${params.thing_id}/groups/${
        params.group_id
      }/attributes`,
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
      `${this.v}/things/${params.thing_id}/groups/${
        params.group_id
      }/attributes/${params.attribute_id}`,
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
      `${this.v}/things/${params.thing_id}/groups/${
        params.group_id
      }/attributes/${params.attribute_id}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getThingTypes(opts) {
    return this.send('GET', `${this.v}/things/types`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getThingType(opts, params) {
    return this.send('GET', `${this.v}/things/types/${params.id}`, opts);
  }

  createThingType(opts) {
    return this.send('POST', `${this.v}/things/types`, opts);
  }

  updateThingType(opts, params) {
    return this.send('PUT', `${this.v}/things/types/${params.id}`, opts);
  }

  deleteThingType(opts, params) {
    return this.send('DELETE', `${this.v}/things/types/${params.id}`, opts);
  }

  getThingTypeChannels(opts, params) {
    return this.send(
      'GET',
      `${this.v}/things/types/${params.thingTypeId}/channels`,
      opts
    );
  }

  getThingTypeChannel(opts, params) {
    return this.send(
      'GET',
      `${this.v}/things/types/${params.thingTypeId}/channels/${params.id}`,
      opts
    );
  }
  createThingTypeChannel(opts, params) {
    return this.send(
      'POST',
      `${this.v}/things/types/${params.thingTypeId}/channels`,
      opts
    );
  }
  updateThingTypeChannel(opts, params) {
    return this.send(
      'PUT',
      `${this.v}/things/types/${params.thingTypeId}/channels/${params.id}`,
      opts
    );
  }
  deleteThingTypeChannel(opts, params) {
    return this.send(
      'DELETE',
      `${this.v}/things/types/${params.thingTypeId}/channels/${params.id}`,
      opts
    );
  }

  getThingTypeMetas(opts, params) {
    return this.send(
      'GET',
      `${this.v}/things/types/${params.thingTypeId}/meta`,
      opts
    );
  }

  getThingTypeMeta(opts, params) {
    return this.send(
      'GET',
      `${this.v}/things/types/${params.thingTypeId}/meta/${params.id}`,
      opts
    );
  }
  createThingTypeMeta(opts, params) {
    return this.send(
      'POST',
      `${this.v}/things/types/${params.thingTypeId}/meta`,
      opts
    );
  }
  updateThingTypeMeta(opts, params) {
    return this.send(
      'PUT',
      `${this.v}/things/types/${params.thingTypeId}/meta/${params.id}`,
      opts
    );
  }
  deleteThingTypeMeta(opts, params) {
    return this.send(
      'DELETE',
      `${this.v}/things/types/${params.thingTypeId}/meta/${params.id}`,
      opts
    );
  }

  getThingTypeUses(opts, params) {
    return this.send(
      'GET',
      `${this.v}/things/types/${params.thingTypeId}/uses`,
      opts
    );
  }
  getThingTypeUse(opts, params) {
    return this.send(
      'GET',
      `${this.v}/things/types/${params.thingTypeId}/uses/${params.id}`,
      opts
    );
  }
  createThingTypeUses(opts, params) {
    return this.send(
      'POST',
      `${this.v}/things/types/${params.thingTypeId}/uses`,
      opts
    );
  }
  updateThingTypeUses(opts, params) {
    return this.send(
      'PUT',
      `${this.v}/things/types/${params.thingTypeId}/uses/${params.id}`,
      opts
    );
  }
  deleteThingTypeUses(opts, params) {
    return this.send(
      'DELETE',
      `${this.v}/things/types/${params.thingTypeId}/uses/${params.id}`,
      opts
    );
  }

  getDataTypes(opts) {
    return this.send('GET', `${this.v}/things/datatypes`, opts);
  }

  getDataType(opts, params) {
    return this.send('GET', `${this.v}/things/datatypes/${params.id}`, opts);
  }

  deleteDataType(opts, params) {
    return this.send('DELETE', `${this.v}/things/datatypes/${params.id}`, opts);
  }

  createDataType(opts) {
    return this.send('POST', `${this.v}/things/dataypes`, opts);
  }

  updateDataType(opts, params) {
    return this.send('POST', `${this.v}/things/dataypes/${params.id}`, opts);
  }

  getDataTypeProperties(opts, params) {
    return this.send(
      'GET',
      `${this.v}/things/datatypes/${params.id}/properties`,
      opts
    );
  }

  getDataTypeProperty(opts, params) {
    return this.send(
      'GET',
      `${this.v}/things/datatypes/${params.id}/properties/${params.pid}`,
      opts
    );
  }

  deleteDataTypeProperty(opts, params) {
    return this.send(
      'DELETE',
      `${this.v}/things/datatypes/${params.id}/properties/${params.pid}`,
      opts
    );
  }

  createDataTypeProperty(opts, params) {
    return this.send(
      'POST',
      `${this.v}/things/dataypes/${params.id}/properties`,
      opts
    );
  }

  updateDataType(opts, params) {
    return this.send(
      'POST',
      `${this.v}/things/dataypes/${params.id}/properties/${params.id}`,
      opts
    );
  }
}

module.exports = V1;
