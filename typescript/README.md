# @linebundle-sdk/ts

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *@linebundle-sdk/ts* API.

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=@linebundle-sdk/ts&utm_campaign=typescript)
[![License: MIT](https://img.shields.io/badge/LICENSE_//_MIT-3b5bdb?style=for-the-badge&labelColor=eff6ff)](https://opensource.org/licenses/MIT)



<!-- Start Summary [summary] -->
## Summary

LineBundle API: LineBundle multi-tenant SaaS API

## Realtime WebSocket
Connect to the realtime channel at `wss://<host>/ws` (or `ws://localhost:8000/ws` in dev). Requires the same authentication context (JWT) as HTTP requests.

On successful connection the server sends a single ACK message:
```json
{
  "tenant_id": "<uuid>",
  "correlation_id": "<uuid|null>"
}
```
After the ACK the server may push events (client messages are currently ignored). For more details see `/realtime-info` endpoint.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@linebundle-sdk/ts](#linebundle-sdkts)
  * [Realtime WebSocket](#realtime-websocket)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @linebundle-sdk/ts
```

### PNPM

```bash
pnpm add @linebundle-sdk/ts
```

### Bun

```bash
bun add @linebundle-sdk/ts
```

### Yarn

```bash
yarn add @linebundle-sdk/ts
```

> [!NOTE]
> This package is published as an ES Module (ESM) only. For applications using
> CommonJS, use `await import()` to import and use this package.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.user.getAssistant();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name         | Type   | Scheme      |
| ------------ | ------ | ----------- |
| `oidc`       | apiKey | API key     |
| `bearerAuth` | http   | HTTP Bearer |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.user.getAssistant();

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

For the full list of SDK methods grouped by domain, see the **[SDK Reference](https://docs.linebundle.com/sdk-reference/event)** in the LineBundle docs.

<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`aiAgentCancelWorkflow`](docs/sdks/aiagent/README.md#cancelworkflow) - Cancel a running workflow
- [`aiAgentCreateSession`](docs/sdks/aiagent/README.md#createsession) - Create a new AI agent session
- [`aiAgentGetSession`](docs/sdks/aiagent/README.md#getsession) - Get AI agent session details
- [`aiAgentGetSessionCosts`](docs/sdks/aiagent/README.md#getsessioncosts) - Get session cost breakdown
- [`aiAgentListSessions`](docs/sdks/aiagent/README.md#listsessions) - List AI agent sessions
- [`aiAgentListWorkflows`](docs/sdks/aiagent/README.md#listworkflows) - List workflow executions
- [`aiAgentSendMessage`](docs/sdks/aiagent/README.md#sendmessage) - Send a message to an AI agent session
- [`aiAgentsGetOrgCosts`](docs/sdks/aiagents/README.md#getorgcosts) - Get organization-wide cost summary
- [`aiAgentStartWorkflow`](docs/sdks/aiagent/README.md#startworkflow) - Start a multi-agent workflow
- [`aiAgentStartWorkflowAsync`](docs/sdks/aiagent/README.md#startworkflowasync) - Start a multi-agent workflow (async)
- [`aiDeleteSession`](docs/sdks/ai/README.md#deletesession) - Delete AI agent session
- [`aiWorkflowsGetExecutionDetails`](docs/sdks/aiworkflows/README.md#getexecutiondetails) - Get workflow execution details
- [`analyticGetDashboard`](docs/sdks/analytic/README.md#getdashboard) - Get Dashboard Analytics
- [`analyticGetTotals`](docs/sdks/analytic/README.md#gettotals) - Get Analytic Totals
- [`auditLogsGetPermissionStats`](docs/sdks/auditlogs/README.md#getpermissionstats) - Get Permission Audit Stats
- [`auditLogsListPermissions`](docs/sdks/auditlogs/README.md#listpermissions) - List Permission Audit Logs
- [`authContextsGet`](docs/sdks/authcontexts/README.md#get) - Get Auth Context
- [`automationCronHealthCheck`](docs/sdks/automationcron/README.md#healthcheck) - Cron Health Check
- [`automationCronTriggerScheduled`](docs/sdks/automationcron/README.md#triggerscheduled) - Trigger Scheduled Automation
- [`automationMetadataGetActions`](docs/sdks/automationmetadata/README.md#getactions) - Get action metadata
- [`automationMetadataGetTask`](docs/sdks/automationmetadata/README.md#gettask) - Get task metadata
- [`automationMetadataGetTasks`](docs/sdks/automationmetadata/README.md#gettasks) - Get all task metadata
- [`automationMetadataGetTriggers`](docs/sdks/automationmetadata/README.md#gettriggers) - Get trigger metadata
- [`automationRulesCreate`](docs/sdks/automationrules/README.md#create) - Create Rule
- [`automationRulesDelete`](docs/sdks/automationrules/README.md#delete) - Delete Rule
- [`automationRulesExecute`](docs/sdks/automationrules/README.md#execute) - Execute Rule
- [`automationRulesGet`](docs/sdks/automationrules/README.md#get) - Get Rule
- [`automationRulesGetConditions`](docs/sdks/automationrules/README.md#getconditions) - Get condition metadata
- [`automationRulesGetExecutions`](docs/sdks/automationrules/README.md#getexecutions) - Get Rule Executions
- [`automationRulesGetMetadata`](docs/sdks/automationrules/README.md#getmetadata) - Get all metadata
- [`automationRulesList`](docs/sdks/automationrules/README.md#list) - List Rules
- [`automationRulesPatch`](docs/sdks/automationrules/README.md#patch) - Patch Rule
- [`automationRulesUpdate`](docs/sdks/automationrules/README.md#update) - Update Rule
- [`bookingCreate`](docs/sdks/booking/README.md#create) - Create Booking
- [`bookingsCheckAvailability`](docs/sdks/bookings/README.md#checkavailability) - Check Availability
- [`bookingsDelete`](docs/sdks/bookings/README.md#delete) - Delete Booking
- [`bookingsGetById`](docs/sdks/bookings/README.md#getbyid) - Get Booking By Id
- [`bookingsGetPlaceSchedule`](docs/sdks/bookings/README.md#getplaceschedule) - Get Place Schedule
- [`bookingsList`](docs/sdks/bookings/README.md#list) - Get Bookings
- [`bookingsUpdate`](docs/sdks/bookings/README.md#update) - Update Booking
- [`chatMessagesDelete`](docs/sdks/chatmessages/README.md#delete) - Delete Message
- [`chatMessagesGetCount`](docs/sdks/chatmessages/README.md#getcount) - Get Message Count
- [`chatMessagesGetUnreadCount`](docs/sdks/chatmessages/README.md#getunreadcount) - Get Unread Count
- [`chatMessagesList`](docs/sdks/chatmessages/README.md#list) - List Messages
- [`chatMessagesMarkRead`](docs/sdks/chatmessages/README.md#markread) - Mark Messages As Read
- [`chatMessagesSend`](docs/sdks/chatmessages/README.md#send) - Send Message
- [`chatRoomsAddMember`](docs/sdks/chatrooms/README.md#addmember) - Add Member To Room
- [`chatRoomsCreateDirect`](docs/sdks/chatrooms/README.md#createdirect) - Create Direct Room
- [`chatRoomsCreateGroup`](docs/sdks/chatrooms/README.md#creategroup) - Create Group Room
- [`chatRoomsGetById`](docs/sdks/chatrooms/README.md#getbyid) - Get Room By Id
- [`chatRoomsList`](docs/sdks/chatrooms/README.md#list) - List User Rooms
- [`chatRoomsListMembers`](docs/sdks/chatrooms/README.md#listmembers) - List Room Members
- [`chatRoomsRemoveMember`](docs/sdks/chatrooms/README.md#removemember) - Remove Member From Room
- [`chatRoomsUpdate`](docs/sdks/chatrooms/README.md#update) - Update Room
- [`contactsCreate`](docs/sdks/contacts/README.md#create) - Create Contact
- [`contactsDelete`](docs/sdks/contacts/README.md#delete) - Delete Contact
- [`contactsGet`](docs/sdks/contacts/README.md#get) - Get Contact
- [`contactsList`](docs/sdks/contacts/README.md#list) - List Contacts
- [`contactsSearch`](docs/sdks/contacts/README.md#search) - Search Contacts
- [`contactsToggleFavorite`](docs/sdks/contacts/README.md#togglefavorite) - Toggle Favorite
- [`contactsUpdate`](docs/sdks/contacts/README.md#update) - Update Contact
- [`customRolesAddPermission`](docs/sdks/customroles/README.md#addpermission) - Add Permission Endpoint
- [`customRolesAssignToUser`](docs/sdks/customroles/README.md#assigntouser) - Assign Role To User Endpoint
- [`customRolesCreate`](docs/sdks/customroles/README.md#create) - Create Role Endpoint
- [`customRolesGet`](docs/sdks/customroles/README.md#get) - Get Role Endpoint
- [`customRolesGetMyPermissions`](docs/sdks/customroles/README.md#getmypermissions) - Get My Permissions Endpoint
- [`customRolesList`](docs/sdks/customroles/README.md#list) - List Roles Endpoint
- [`customRolesRemovePermission`](docs/sdks/customroles/README.md#removepermission) - Remove Permission Endpoint
- [`customRolesRemoveUserRole`](docs/sdks/customroles/README.md#removeuserrole) - Remove Role From User Endpoint
- [`customRolesSetPermissions`](docs/sdks/customroles/README.md#setpermissions) - Set Permissions Endpoint
- [`customRolesUpdate`](docs/sdks/customroles/README.md#update) - Update Role Endpoint
- [`eventAttendeesAdd`](docs/sdks/eventattendees/README.md#add) - Add Event Attendee
- [`eventAttendeesAddBulk`](docs/sdks/eventattendees/README.md#addbulk) - Add Event Attendees Bulk
- [`eventAttendeesCheckIn`](docs/sdks/eventattendees/README.md#checkin) - Check In Attendee
- [`eventAttendeesGet`](docs/sdks/eventattendees/README.md#get) - Get Event Attendees
- [`eventAttendeesRemove`](docs/sdks/eventattendees/README.md#remove) - Remove Event Attendee
- [`eventAttendeesRemoveBulk`](docs/sdks/eventattendees/README.md#removebulk) - Remove Event Attendees Bulk
- [`eventAttendeesUpdate`](docs/sdks/eventattendees/README.md#update) - Update Event Attendee
- [`eventAttendeesUpdateBulkStatus`](docs/sdks/eventattendees/README.md#updatebulkstatus) - Update Attendees Status Bulk
- [`eventCompareVersions`](docs/sdks/event/README.md#compareversions) - Compare Event Versions
- [`eventDocumentsAddDocument`](docs/sdks/eventdocuments/README.md#adddocument) - Add Document To Event
- [`eventDocumentsGetDocuments`](docs/sdks/eventdocuments/README.md#getdocuments) - Get Event Documents
- [`eventDocumentsRemove`](docs/sdks/eventdocuments/README.md#remove) - Remove Document From Event
- [`eventGet`](docs/sdks/event/README.md#get) - Get Event By Id
- [`eventGetLatestVersion`](docs/sdks/event/README.md#getlatestversion) - Get Latest Event Version
- [`eventGetSectionSettings`](docs/sdks/event/README.md#getsectionsettings) - Get Section Settings
- [`eventGetVersion`](docs/sdks/event/README.md#getversion) - Get Event Version
- [`eventLocationGet`](docs/sdks/eventlocation/README.md#get) - Get Event Location
- [`eventLocationUpdate`](docs/sdks/eventlocation/README.md#update) - Update Event Location
- [`eventsArchive`](docs/sdks/events/README.md#archive) - Archive Event
- [`eventsCreate`](docs/sdks/events/README.md#create) - Create Event
- [`eventsDelete`](docs/sdks/events/README.md#delete) - Delete Event
- [`eventsFilterAdvanced`](docs/sdks/events/README.md#filteradvanced) - Filter Events Advanced
- [`eventsGetSectionContent`](docs/sdks/events/README.md#getsectioncontent) - Get Section Content
- [`eventsGetSectionIdentification`](docs/sdks/events/README.md#getsectionidentification) - Get Section Identification
- [`eventsGetSettings`](docs/sdks/events/README.md#getsettings) - Get Event Settings
- [`eventsGetSocialFeed`](docs/sdks/events/README.md#getsocialfeed) - Get Social Feed
- [`eventsGetTimezones`](docs/sdks/events/README.md#gettimezones) - Get Timezone Info
- [`eventsList`](docs/sdks/events/README.md#list) - Get Event List
- [`eventsListBySpace`](docs/sdks/events/README.md#listbyspace) - Get Events By Space
- [`eventsListCalendar`](docs/sdks/events/README.md#listcalendar) - Get Calendar Events
- [`eventsListVersions`](docs/sdks/events/README.md#listversions) - List Event Versions
- [`eventsPatchContent`](docs/sdks/events/README.md#patchcontent) - Patch Event Content
- [`eventsPatchIdentification`](docs/sdks/events/README.md#patchidentification) - Patch Event Identification
- [`eventsPatchSettings`](docs/sdks/events/README.md#patchsettings) - Patch Event Settings
- [`eventsPublish`](docs/sdks/events/README.md#publish) - Publish Event
- [`eventsPublishVersion`](docs/sdks/events/README.md#publishversion) - Publish Event Version
- [`eventsPublishWithNotifications`](docs/sdks/events/README.md#publishwithnotifications) - Publish Event With Notifications
- [`eventsRollbackVersion`](docs/sdks/events/README.md#rollbackversion) - Rollback Event to Version
- [`eventsTransfer`](docs/sdks/events/README.md#transfer) - Transfer Event
- [`eventsUpdateCover`](docs/sdks/events/README.md#updatecover) - Update Cover
- [`eventTimelineCreateMilestone`](docs/sdks/eventtimeline/README.md#createmilestone) - Create and link milestone
- [`eventTimelineGet`](docs/sdks/eventtimeline/README.md#get) - Get event timeline
- [`eventTimelineGetPublished`](docs/sdks/eventtimeline/README.md#getpublished) - Get published event timeline
- [`eventTimelineLinkMilestone`](docs/sdks/eventtimeline/README.md#linkmilestone) - Link existing event
- [`eventTimelineUnlink`](docs/sdks/eventtimeline/README.md#unlink) - Unlink milestone
- [`eventTimezonesValidate`](docs/sdks/eventtimezones/README.md#validate) - Validate Timezone
- [`eventUnpublishVersion`](docs/sdks/event/README.md#unpublishversion) - Unpublish Event (Mark as Draft)
- [`eventUpdate`](docs/sdks/event/README.md#update) - Update Event
- [`featuresGet`](docs/sdks/features/README.md#get) - Get Feature Flags
- [`healthCheck`](docs/sdks/health/README.md#check) - Health Check
- [`healthCheckAutomation`](docs/sdks/health/README.md#checkautomation) - Automation Health Check
- [`healthNotificationsCheck`](docs/sdks/healthnotifications/README.md#check) - Notification Health Check
- [`integrationHandleOrgRemoved`](docs/sdks/integration/README.md#handleorgremoved) - Webhook from Zitadel for organization removal
- [`integrationsHandleOrgCreated`](docs/sdks/integrations/README.md#handleorgcreated) - Webhook from Zitadel for organization creation
- [`integrationUserHandleRemoved`](docs/sdks/integrationuser/README.md#handleremoved) - Webhook from Zitadel for user removal
- [`metricsGet`](docs/sdks/metrics/README.md#get) - Metrics
- [`organizationsArchive`](docs/sdks/organizations/README.md#archive) - Archive Organization Endpoint
- [`organizationsCreate`](docs/sdks/organizations/README.md#create) - Create Organization Endpoint
- [`organizationsCreateInvite`](docs/sdks/organizations/README.md#createinvite) - Create Invite Endpoint
- [`organizationsDeleteInvite`](docs/sdks/organizations/README.md#deleteinvite) - Delete Invite Endpoint
- [`organizationsGetById`](docs/sdks/organizations/README.md#getbyid) - Get Organization Endpoint
- [`organizationsGetCurrent`](docs/sdks/organizations/README.md#getcurrent) - Get Current Organization Endpoint
- [`organizationsGetInvites`](docs/sdks/organizations/README.md#getinvites) - Get Organization Invites Endpoint
- [`organizationsList`](docs/sdks/organizations/README.md#list) - List Organizations Endpoint
- [`organizationsUpdate`](docs/sdks/organizations/README.md#update) - Update Organization Endpoint
- [`permissionsGet`](docs/sdks/permissions/README.md#get) - Get Permission Endpoint
- [`permissionsList`](docs/sdks/permissions/README.md#list) - List Permissions Endpoint
- [`placeArchive`](docs/sdks/place/README.md#archive) - Archive Place
- [`placePublish`](docs/sdks/place/README.md#publish) - Publish Place
- [`placesCreate`](docs/sdks/places/README.md#create) - Create Place
- [`placesDelete`](docs/sdks/places/README.md#delete) - Delete Place
- [`placesGet`](docs/sdks/places/README.md#get) - Get Place By Id
- [`placesList`](docs/sdks/places/README.md#list) - Get Place List
- [`placesUpdate`](docs/sdks/places/README.md#update) - Update Place
- [`publicEventsGetLatestVersion`](docs/sdks/publicevents/README.md#getlatestversion) - Get Latest Event Version (Public Access)
- [`publicSpacesGetLatestVersion`](docs/sdks/publicspaces/README.md#getlatestversion) - Get Latest Published Version
- [`realtimeConnect`](docs/sdks/realtime/README.md#connect) - Establish realtime WebSocket connection (upgrade)
- [`realtimeGetInfo`](docs/sdks/realtime/README.md#getinfo) - Realtime WebSocket protocol info
- [`rolesDelete`](docs/sdks/roles/README.md#delete) - Delete Role Endpoint
- [`sentryTriggerError`](docs/sdks/sentry/README.md#triggererror) - Trigger Sentry Error
- [`spaceArchive`](docs/sdks/space/README.md#archive) - Archive Space
- [`spaceAssignUserToRole`](docs/sdks/space/README.md#assignusertorole) - Assign User To Space Role
- [`spaceAssignUserToRole`](docs/sdks/spacememberroles/README.md#assignusertorole) - Assign User To Space Role
- [`spaceBulkUpdateParent`](docs/sdks/space/README.md#bulkupdateparent) - Bulk Update Space Parent
- [`spaceContactsAdd`](docs/sdks/spacecontacts/README.md#add) - Add Contact To Space
- [`spaceContactsAddBulk`](docs/sdks/spacecontacts/README.md#addbulk) - Bulk Add Contacts To Space
- [`spaceContactsBulkDelete`](docs/sdks/spacecontacts/README.md#bulkdelete) - Bulk Remove Contacts From Space
- [`spaceContactsCount`](docs/sdks/spacecontacts/README.md#count) - Count Space Contacts
- [`spaceContactsGet`](docs/sdks/spacecontacts/README.md#get) - Get Space Contact
- [`spaceContactsGetContactsBySpace`](docs/sdks/spacecontacts/README.md#getcontactsbyspace) - Get Space Contacts
- [`spaceContactsGetSpacesByContact`](docs/sdks/spacecontacts/README.md#getspacesbycontact) - Get Contact Spaces
- [`spaceContactsRemove`](docs/sdks/spacecontacts/README.md#remove) - Remove Contact From Space
- [`spaceDocumentsAdd`](docs/sdks/spacedocuments/README.md#add) - Add Document To Space
- [`spaceDocumentsGet`](docs/sdks/spacedocuments/README.md#get) - Get Space Documents
- [`spaceDocumentsRemove`](docs/sdks/spacedocuments/README.md#remove) - Remove Document From Space
- [`spaceEventsAdd`](docs/sdks/spaceevents/README.md#add) - Add Event To Space
- [`spaceEventsBulkAdd`](docs/sdks/spaceevents/README.md#bulkadd) - Bulk Add Events To Space
- [`spaceEventsBulkRemove`](docs/sdks/spaceevents/README.md#bulkremove) - Bulk Remove Events From Space
- [`spaceEventsCount`](docs/sdks/spaceevents/README.md#count) - Count Space Events
- [`spaceEventsGet`](docs/sdks/spaceevents/README.md#get) - Get Space Events
- [`spaceEventsGetById`](docs/sdks/spaceevents/README.md#getbyid) - Get Space Event
- [`spaceEventsGetEventSpaces`](docs/sdks/spaceevents/README.md#geteventspaces) - Get Event Spaces
- [`spaceEventsRemoveEvent`](docs/sdks/spaceevents/README.md#removeevent) - Remove Event From Space
- [`spaceGetLatestVersion`](docs/sdks/space/README.md#getlatestversion) - Get latest published space version
- [`spaceGetUserRoles`](docs/sdks/space/README.md#getuserroles) - Get User Space Roles
- [`spaceGetUserRoles`](docs/sdks/spacememberroles/README.md#getuserroles) - Get User Space Roles
- [`spacePublish`](docs/sdks/space/README.md#publish) - Publish Space
- [`spaceRolesAssignPermission`](docs/sdks/spaceroles/README.md#assignpermission) - Assign Permission To Space Role
- [`spaceRolesCreate`](docs/sdks/spaceroles/README.md#create) - Create Space Role
- [`spaceRolesDelete`](docs/sdks/spaceroles/README.md#delete) - Delete Space Role
- [`spaceRolesGet`](docs/sdks/spaceroles/README.md#get) - Get Space Role
- [`spaceRolesListRoles`](docs/sdks/spaceroles/README.md#listroles) - List Space Roles
- [`spaceRolesRemovePermission`](docs/sdks/spaceroles/README.md#removepermission) - Remove Permission From Space Role
- [`spaceRolesUpdateRole`](docs/sdks/spaceroles/README.md#updaterole) - Update Space Role
- [`spacesAddMember`](docs/sdks/spaces/README.md#addmember) - Add Space Member
- [`spacesCompareVersions`](docs/sdks/spaces/README.md#compareversions) - Compare space versions
- [`spacesCreateSpace`](docs/sdks/spaces/README.md#createspace) - Create Space
- [`spacesCreateWithParent`](docs/sdks/spaces/README.md#createwithparent) - Create Space With Parent
- [`spacesDeleteById`](docs/sdks/spaces/README.md#deletebyid) - Delete Space
- [`spacesDetachParent`](docs/sdks/spaces/README.md#detachparent) - Detach Space From Parent
- [`spacesGetById`](docs/sdks/spaces/README.md#getbyid) - Get Space By Id
- [`spacesGetHierarchy`](docs/sdks/spaces/README.md#gethierarchy) - Get Space Hierarchy
- [`spacesGetJoinableByUser`](docs/sdks/spaces/README.md#getjoinablebyuser) - Get Joinable Spaces By User
- [`spacesGetMembers`](docs/sdks/spaces/README.md#getmembers) - Get Space Members
- [`spacesGetParent`](docs/sdks/spaces/README.md#getparent) - Get Space Parent
- [`spacesGetVersion`](docs/sdks/spaces/README.md#getversion) - Get specific space version
- [`spacesJoin`](docs/sdks/spaces/README.md#join) - Join Space
- [`spacesList`](docs/sdks/spaces/README.md#list) - Get Space List
- [`spacesListChildren`](docs/sdks/spaces/README.md#listchildren) - Get Space Children
- [`spacesListVersions`](docs/sdks/spaces/README.md#listversions) - List space versions
- [`spacesPublishVersion`](docs/sdks/spaces/README.md#publishversion) - Publish space
- [`spacesRemoveMember`](docs/sdks/spaces/README.md#removemember) - Remove Space Member
- [`spacesRemoveUserFromRole`](docs/sdks/spaces/README.md#removeuserfromrole) - Remove User From Space Role
- [`spacesRollback`](docs/sdks/spaces/README.md#rollback) - Rollback space to version
- [`spacesUnpublish`](docs/sdks/spaces/README.md#unpublish) - Unpublish space
- [`spacesUpdateParent`](docs/sdks/spaces/README.md#updateparent) - Update Space Parent
- [`spaceTestAuth`](docs/sdks/space/README.md#testauth) - Test Auth
- [`spaceTransfer`](docs/sdks/space/README.md#transfer) - Transfer Space
- [`spaceUpdate`](docs/sdks/space/README.md#update) - Update Space
- [`spaceUpdateMemberRole`](docs/sdks/space/README.md#updatememberrole) - Update Space Member Role
- [`userCreateAssistant`](docs/sdks/user/README.md#createassistant) - Create Assistant
- [`userGetAssistant`](docs/sdks/user/README.md#getassistant) - Get Assistant
- [`userGetProfile`](docs/sdks/user/README.md#getprofile) - Get User Profile By Id
- [`userList`](docs/sdks/user/README.md#list) - Get User List
- [`usersDeleteAvatar`](docs/sdks/users/README.md#deleteavatar) - Delete Avatar
- [`usersGetAvatar`](docs/sdks/users/README.md#getavatar) - Get Avatar
- [`usersGetAvatarById`](docs/sdks/users/README.md#getavatarbyid) - Get User Avatar
- [`usersGetCurrentProfile`](docs/sdks/users/README.md#getcurrentprofile) - Get Current User Profile
- [`usersSearch`](docs/sdks/users/README.md#search) - Search Users
- [`userUpdateProfile`](docs/sdks/user/README.md#updateprofile) - Update Profile
- [`userUploadAvatar`](docs/sdks/user/README.md#uploadavatar) - Upload Avatar

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Linebundle } from "@linebundle-sdk/ts";
import { openAsBlob } from "node:fs";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.user.uploadAvatar({
    file: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.user.getAssistant({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.user.getAssistant();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`LinebundleError`](./src/models/errors/linebundle-error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Linebundle } from "@linebundle-sdk/ts";
import * as errors from "@linebundle-sdk/ts/models/errors";

const linebundle = new Linebundle();

async function run() {
  try {
    const result = await linebundle.user.list({});

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.LinebundleError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.HTTPValidationError) {
        console.log(error.data$.detail); // ValidationError[]
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`LinebundleError`](./src/models/errors/linebundle-error.ts): The base class for HTTP error responses.
  * [`HTTPValidationError`](./src/models/errors/http-validation-error.ts): Validation Error. Status code `422`. *

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`LinebundleError`](./src/models/errors/linebundle-error.ts)**:
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  serverURL: "https://api.linebundle.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.user.getAssistant();

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { Linebundle } from "@linebundle-sdk/ts";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@linebundle-sdk/ts/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Linebundle({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const sdk = new Linebundle({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@linebundle-sdk/ts&utm_campaign=typescript)
