/** @typedef {import('../typedefs.js').TinaAuthOptions} TinaAuthOptions */
/** @typedef {import('../typedefs.js').TinaSendOpts} TinaSendOpts */

const Auth = require('../Auth');

/** V0 API class */
class V0 extends Auth {
  /**
   * Constructs the TinaV1 API class
   *
   * @param {String}          baseUrl
   * @param {TinaAuthOptions} opts
   */
  constructor(baseUrl, opts) {
    super(baseUrl, opts);
  }

  /**
   * API status check
   *
   * @public
   */
  status() {
    return this.send('GET', '/status', { isPublic: true });
  }

  /**
   * Token Operations
   */

  /**
   * Retrieve a JWT
   * @public
   * @param {TinaSendOpts} opts
   */
  getToken(opts) {
    return this.send('POST', '/oauth/token', { ...opts, isPublic: true });
  }
  forgotPassword(opts) {
    return this.send('POST', `/users/password/forgot`, opts);
  }

  /**
   * User Operations
   */

  /**
   * Gets all users provided token has access to
   * @public
   * @param {TinaSendOpts} opts
   */
  getAllUsers(opts) {
    return this.send('GET', `/users`, opts);
  }
  /**
   * Returns user's information
   * @public
   * @param {TinaSendOpts} opts
   */
  getSelf(opts) {
    return this.getUser(opts, { id: 'me' });
  }
  /**
   * Get's a user information
   * @public
   * @param {TinaSendOpts} opts
   * @param {Object}       params
   * @param {String}       params.id
   */
  getUser(opts, params) {
    return this.send('GET', `/users/${params.id}`, opts);
  }
  /**
   * Creates a user
   * @public
   * @param {TinaSendOpts} opts
   */
  createUser(opts) {
    return this.send('POST', `/users`, { ...opts, isPublic: true });
  }
  /**
   * Updates a user
   * @param {TinaSendOpts} opts
   * @param {Object}       params
   * @param {String}       params.id
   */
  updateUser(opts, params) {
    return this.send('PUT', `/users/${params.id}`, opts);
  }
  deleteUser(opts) {
    return this.send('DELETE', `/users`, opts);
  }

  /**
   * Permissions
   */

  /**
   * @param {TinaSendOpts} opts
   */
  getLinkedPermissions(opts, params) {
    return this.send('GET', `/users/${params.userId}/permissions`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   */
  updateLinkedUserPermission(opts, params) {
    return this.send('PUT', `/users/${params.userId}/permissions`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   */
  linkUser(opts) {
    return this.send('POST', `/users/permissions`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   */
  unlinkUser(opts, params) {
    return this.send('DELETE', `/users/${params.userId}`, opts);
  }

  /**
   * Invited Users
   */

  /**
   * @param {TinaSendOpts} opts
   */
  getInvitedUser(opts, params) {
    return this.send('GET', `/users/invite/${params.inviteCode}`, {
      ...opts,
      isPublic: true
    });
  }

  /**
   * @param {TinaSendOpts} opts
   */
  createInvitedUser(opts, params) {
    return this.send('POST', `/users/invite/${params.inviteCode}`, {
      ...opts,
      isPublic: true
    });
  }

  /**
   * @param {TinaSendOpts} opts
   */
  userAppend(opts, params) {
    return this.send('POST', `/users/${params.userId}/append`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   */
  userAppendRemove(opts, params) {
    return this.send('DELETE', `/users/${params.userId}/append`, opts);
  }

  /**
   * Companies
   */

  /**
   * @param {TinaSendOpts} opts
   */
  getAllCompanies(opts) {
    return this.send('GET', `/companies`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getCompany(opts, params) {
    return this.send('GET', `/companies/${params.companyId}`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   */
  createCompany(opts) {
    return this.send('POST', `/companies`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   */
  updateCompany(opts, params) {
    return this.send('PUT', `/companies/${params.companyId}`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   */
  deleteCompany(opts, params) {
    return this.send('DELETE', `/companies/${params.companyId}`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getAllCompaniesStatus(opts) {
    return this.send('GET', `/companies/status`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getCompanyStatus(opts, params) {
    return this.send('GET', `/companies/${params.companyId}/status`, opts);
  }

  /**
   * Locations
   */

  /**
   * @param {TinaSendOpts} opts
   */
  getAllLocations(opts, params) {
    return this.send('GET', `/companies/${params.companyId}/locations`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getLocation(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  createLocation(opts, params) {
    return this.send('POST', `/companies/${params.companyId}/locations`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   */
  updateLocation(opts, params) {
    return this.send(
      'PUT',
      `/companies/${params.companyId}/locations/${params.locationId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  deleteLocation(opts, params) {
    return this.send(
      'DELETE',
      `/companies/${params.companyId}/locations/${params.locationId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getLocationStatus(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}/status`,
      opts
    );
  }

  /**
   * Location Things
   */

  /**
   * @param {TinaSendOpts} opts
   */
  baseGetThing(opts, params) {
    return this.send('GET', `/things/${params.thingId}`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   */
  baseDeleteThing(opts, params) {
    return this.send('DELETE', `/things/${params.thingId}`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getAllThings(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}/things`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getThing(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/things/${params.thingId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  createThing(opts, params) {
    return this.send(
      'POST',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/things/sensors`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  createGateway(opts, params) {
    return this.send(
      'POST',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/things/gateway`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  updateThing(opts, params) {
    return this.send(
      'PUT',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/things/${params.thingId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  deleteThing(opts, params) {
    return this.send(
      'DELETE',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/things/${params.thingId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getThingLatest(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/things/latest`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getSensorHistory(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/things/sensors/${params.thingId}/history`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getThingAlertHistory(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/rules/things/${params.thingId}/history`,
      opts
    );
  }

  /**
   * Location Rules
   */

  /**
   * @param {TinaSendOpts} opts
   */
  getAllRules(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}/rules`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getAllRulesByThings(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/rules/things/${params.thingId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getRule(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/rules/${params.ruleId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getRuleHistory(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/rules/${params.ruleId}/history`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  createRule(opts, params) {
    return this.send(
      'POST',
      `/companies/${params.companyId}/locations/${params.locationId}/rules`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  updateRule(opts, params) {
    return this.send(
      'PUT',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/rules/${params.ruleId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  toggleRule(opts, params) {
    return this.send(
      'PUT',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/rules/${params.ruleId}/${params.state}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  deleteRule(opts, params) {
    return this.send(
      'DELETE',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/rules/${params.ruleId}`,
      opts
    );
  }

  /**
   * Corrective Action - Options
   */

  /**
   * @param {TinaSendOpts} opts
   */
  getAllOptions(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}/options`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getOption(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/options/${params.optionId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  createOption(opts, params) {
    return this.send(
      'POST',
      `/companies/${params.companyId}/locations/${params.locationId}/options`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  updateOption(opts, params) {
    return this.send(
      'PUT',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/options/${params.optionId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  deleteOption(opts, params) {
    return this.send(
      'DELETE',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/options/${params.optionId}`,
      opts
    );
  }

  /**
   * Corrective Action - Notes
   */

  /**
   * @param {TinaSendOpts} opts
   */
  getAllNotes(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/rules/${params.ruleId}/notifications/${params.notificationId}/notes`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getNote(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/rules/${params.ruleId}/notifications/${params.notificationId}` +
        `/notes/${params.noteId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  createNote(opts, params) {
    return this.send(
      'POST',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/rules/${params.ruleId}/notifications/${params.notificationId}/notes`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  updateNote(opts, params) {
    return this.send(
      'PUT',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/rules/${params.ruleId}/notifications/${params.notificationId}` +
        `/notes/${params.noteId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  deleteNote(opts, params) {
    return this.send(
      'DELETE',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/rules/${params.ruleId}/notifications/${params.notificationId}` +
        `/notes/${params.noteId}`,
      opts
    );
  }

  /**
   * Corrective Action - Actions
   */

  /**
   * @param {TinaSendOpts} opts
   */
  getAllActions(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/rules/${params.ruleId}/notifications/${params.notificationId}` +
        `/actions`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getAction(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/rules/${params.ruleId}/notifications/${params.notificationId}` +
        `/actions/${params.actionId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  createAction(opts, params) {
    return this.send(
      'POST',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/rules/${params.ruleId}/notifications/${params.notificationId}` +
        `/actions`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  updateAction(opts, params) {
    return this.send(
      'PUT',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/rules/${params.ruleId}/notifications/${params.notificationId}` +
        `/actions/${params.actionId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  deleteAction(opts, params) {
    return this.send(
      'DELETE',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/rules/${params.ruleId}/notifications/${params.notificationId}` +
        `/actions/${params.actionId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getLatestAction(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/actions`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getActionCount(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/rules/${params.ruleId}/actions/count`,
      opts
    );
  }

  /**
   * Maps
   */

  /**
   * @param {TinaSendOpts} opts
   */
  getAllMaps(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}/maps`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getMap(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/maps/${params.mapId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  deleteMap(opts, params) {
    return this.send(
      'DELETE',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/maps/${params.mapId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  createGoogleMap(opts, params) {
    return this.send(
      'POST',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/maps/google`,
      opts
    );
  }

  /**
   * Markers
   */

  /**
   * @param {TinaSendOpts} opts
   */
  getAllMarkers(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/maps/${params.mapId}/markers`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getMarker(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/maps/${params.mapId}/markers/${params.markerId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  createMarker(opts, params) {
    return this.send(
      'POST',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/maps/${params.mapId}/markers`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  updateMarker(opts, params) {
    return this.send(
      'PUT',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/maps/${params.mapId}/markers/${params.markerId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  deleteMarker(opts, params) {
    return this.send(
      'DELETE',
      `/companies/${params.companyId}/locations/${params.locationId}` +
        `/maps/${params.mapId}/markers/${params.markerId}`,
      opts
    );
  }

  /**
   * Reports
   */

  /**
   * @param {TinaSendOpts} opts
   */
  createReportTimes(opts, params) {
    return this.send(
      'POST',
      `/companies/${params.companyId}/reports${params.reportId}/times`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  deleteReportTimes(opts, params) {
    return this.send(
      'DELETE',
      `/companies/${params.companyId}/reports${params.reportId}` +
        `/times/${params.timeId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  createReportThings(opts, params) {
    return this.send(
      'POST',
      `/companies/${params.companyId}/reports/${params.reportId}/things`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  deleteReportThings(opts, params) {
    return this.send(
      'DELETE',
      `/companies/${params.companyId}/reports/${params.reportId}` +
        `/things/${params.thingId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getAllReports(opts, params) {
    return this.send('GET', `/companies/${params.companyId}/reports`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getReport(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/reports/${params.reportId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  createReport(opts, params) {
    return this.send('POST', `/companies/${params.companyId}/reports`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   */
  updateReport(opts, params) {
    return this.send(
      'PUT',
      `/companies/${params.companyId}/reports/${params.reportId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  toggleReport(opts, params) {
    return this.send(
      'PUT',
      `/companies/${params.companyId}/reports/${params.reportId}` +
        `/${params.state}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  deleteReport(opts, params) {
    return this.send(
      'DELETE',
      `/companies/${params.companyId}/reports/${params.reportId}`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  getReportHistory(opts, params) {
    return this.send(
      'GET',
      `/companies/${params.companyId}/reports/${params.reportId}/history`,
      opts
    );
  }

  /**
   * @param {TinaSendOpts} opts
   */
  generateReport(opts, params) {
    return this.send('POST', `/reports/${params.reportId}/generate`, opts);
  }

  /**
   * Utils
   */

  /**
   * @param {TinaSendOpts} opts
   */
  getAllTypes(opts) {
    return this.send('GET', `/things/types`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   */
  notify(opts) {
    return this.send('POST', `/notify`, opts);
  }

  /**
   * @param {TinaSendOpts} opts
   */
  notifyInvited(opts, params) {
    return this.send('POST', `/notify/invite/${params.userId}`, opts);
  }
}

module.exports = V0;
