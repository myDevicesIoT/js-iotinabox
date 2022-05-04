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
    return this.send('POST', `${this.v}/things/datatypes`, opts);
  }

  updateDataType(opts, params) {
    return this.send('PUT', `${this.v}/things/datatypes/${params.id}`, opts);
  }

  getThing(opts, params) {
    return this.send('GET', `${this.v}/things/${params.id}`, opts);
  }

  getThingHistory(opts, params) {
    return this.send('GET', `${this.v}/things/${params.id}/history`, opts);
  }

  getThingRules(opts, params) {
    return this.send('GET', `${this.v}/things/${params.id}/rules`, opts);
  }

  getThingRuleHistory(opts, params) {
    return this.send('GET', `${this.v}/things/${params.id}/rules/history`, opts);
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
      `${this.v}/things/datatypes/${params.id}/properties`,
      opts
    );
  }

  updateDataTypeProperty(opts, params) {
    return this.send(
      'PUT',
      `${this.v}/things/datatypes/${params.id}/properties/${params.pid}`,
      opts
    );
  }

  createAudit(opts) {
    return this.send('POST', `${this.v}/admin/audit`, opts);
  }
  getAudits(opts) {
    return this.send('GET', `${this.v}/admin/audit`, opts);
  }
  getAudit(opts, params) {
    return this.send('GET', `${this.v}/admin/audit/${params.id}`, opts);
  }
  deleteAudit(opts, params) {
    return this.send('DELETE', `${this.v}/admin/audit/${params.id}`, opts);
  }

  //Dashboard and widgets
  getDashboards(opts) {
    return this.send('GET', `${this.v}/dashboards`, opts);
  }
  getDashboard(opts, params) {
    return this.send('GET', `${this.v}/dashboards/${params.id}`, opts);
  }
  getDashboardStatus(opts, params) {
    return this.send('GET', `${this.v}/dashboards/${params.id}/status`, opts);
  }
  createDashboard(opts) {
    return this.send('POST', `${this.v}/dashboards`, opts);
  }
  destroyDashboard(opts, params) {
    return this.send('DELETE', `${this.v}/dashboards/${params.id}`, opts);
  }
  updateDashboard(opts, params) {
    return this.send('PUT', `${this.v}/dashboards/${params.id}`, opts);
  }
  getDashboardWidgets(opts, params) {
    return this.send(
      'GET',
      `${this.v}/dashboards/${params.dashboard_id}/widgets`,
      opts
    );
  }
  getWidget(opts, params) {
    return this.send(
      'GET',
      `${this.v}/dashboards/${params.dashboard_id}/widgets/${params.widget_id}`,
      opts
    );
  }
  createWidget(opts, params) {
    return this.send(
      'POST',
      `${this.v}/dashboards/${params.dashboard_id}/widgets`,
      opts
    );
  }
  destroyWidget(opts, params) {
    return this.send(
      'DELETE',
      `${this.v}/dashboards/${params.dashboard_id}/widgets/${params.widget_id}`,
      opts
    );
  }
  updateWidget(opts, params) {
    return this.send(
      'PUT',
      `${this.v}/dashboards/${params.dashboard_id}/widgets/${params.widget_id}`,
      opts
    );
  }

  //shared resources
  getSharings(opts) {
    return this.send('GET', `${this.v}/sharing`, opts);
  }
  getSharing(opts, params) {
    return this.send('GET', `${this.v}/sharing/${params.id}`, opts);
  }
  getSharingResource(opts, params) {
    return this.send('GET', `${this.v}/sharing/${params.id}/resource`, opts);
  }
  createSharing(opts) {
    return this.send('POST', `${this.v}/sharing`, opts);
  }
  createSharingBulk(opts) {
    return this.send('POST', `${this.v}/sharing/bulk`, opts);
  }
  destroySharing(opts, params) {
    return this.send('DELETE', `${this.v}/sharing/${params.id}`, opts);
  }
  updateSharing(opts, params) {
    return this.send('PUT', `${this.v}/sharing/${params.id}`, opts);
  }

  //TODO: users
}

module.exports = V1;
