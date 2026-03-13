# LineBundle TypeScript SDK

Developer-friendly & type-safe TypeScript SDK for the LineBundle API.

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=openapi&utm_campaign=typescript)
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
* [openapi](#openapi)
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
import { SDK } from "@linebundle-sdk/ts";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.handleOrgCreatedApiV1IntegrationOrgCreatedPost();

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
import { SDK } from "@linebundle-sdk/ts";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.handleOrgCreatedApiV1IntegrationOrgCreatedPost();

  console.log(result);
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { SDK } from "@linebundle-sdk/ts";

const sdk = new SDK({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await sdk.user.getUserListApiV1UserGet({
    permissionDependency: "<YOUR_BEARER_TOKEN_HERE>",
  }, {});

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

- [`aiAgentCancelWorkflowApiV1AiWorkflowsExecutionIdCancelPost`](docs/sdks/aiagent/README.md#cancelworkflowapiv1aiworkflowsexecutionidcancelpost) - Cancel a running workflow
- [`aiAgentCreateSessionApiV1AiSessionsPost`](docs/sdks/aiagent/README.md#createsessionapiv1aisessionspost) - Create a new AI agent session
- [`aiAgentDeleteSessionApiV1AiSessionsSessionIdDelete`](docs/sdks/aiagent/README.md#deletesessionapiv1aisessionssessioniddelete) - Delete AI agent session
- [`aiAgentGetOrgCostsApiV1AiCostsGet`](docs/sdks/aiagent/README.md#getorgcostsapiv1aicostsget) - Get organization-wide cost summary
- [`aiAgentGetSessionApiV1AiSessionsSessionIdGet`](docs/sdks/aiagent/README.md#getsessionapiv1aisessionssessionidget) - Get AI agent session details
- [`aiAgentGetSessionCostsApiV1AiSessionsSessionIdCostsGet`](docs/sdks/aiagent/README.md#getsessioncostsapiv1aisessionssessionidcostsget) - Get session cost breakdown
- [`aiAgentGetWorkflowExecutionApiV1AiWorkflowsExecutionIdGet`](docs/sdks/aiagent/README.md#getworkflowexecutionapiv1aiworkflowsexecutionidget) - Get workflow execution details
- [`aiAgentListSessionsApiV1AiSessionsGet`](docs/sdks/aiagent/README.md#listsessionsapiv1aisessionsget) - List AI agent sessions
- [`aiAgentListWorkflowExecutionsApiV1AiWorkflowsGet`](docs/sdks/aiagent/README.md#listworkflowexecutionsapiv1aiworkflowsget) - List workflow executions
- [`aiAgentSendMessageApiV1AiSessionsSessionIdMessagesPost`](docs/sdks/aiagent/README.md#sendmessageapiv1aisessionssessionidmessagespost) - Send a message to an AI agent session
- [`aiAgentStartWorkflowApiV1AiWorkflowsPost`](docs/sdks/aiagent/README.md#startworkflowapiv1aiworkflowspost) - Start a multi-agent workflow
- [`aiAgentStartWorkflowAsyncApiV1AiWorkflowsAsyncPost`](docs/sdks/aiagent/README.md#startworkflowasyncapiv1aiworkflowsasyncpost) - Start a multi-agent workflow (async)
- [`analyticGetAnalyticTotalsApiV1AnalyticCountsGet`](docs/sdks/analytic/README.md#getanalytictotalsapiv1analyticcountsget) - Get Analytic Totals
- [`analyticGetDashboardAnalyticsApiV1AnalyticDashboardGet`](docs/sdks/analytic/README.md#getdashboardanalyticsapiv1analyticdashboardget) - Get Dashboard Analytics
- [`auditLogsGetPermissionAuditStatsApiV1AuditLogsPermissionsStatsGet`](docs/sdks/auditlogs/README.md#getpermissionauditstatsapiv1auditlogspermissionsstatsget) - Get Permission Audit Stats
- [`auditLogsListPermissionAuditLogsApiV1AuditLogsPermissionsGet`](docs/sdks/auditlogs/README.md#listpermissionauditlogsapiv1auditlogspermissionsget) - List Permission Audit Logs
- [`authContextGetAuthContextApiV1AuthContextGet`](docs/sdks/authcontext/README.md#getauthcontextapiv1authcontextget) - Get Auth Context
- [`automationRulesAutomationHealthCheckApiV1AutomationHealthGet`](docs/sdks/automationrules/README.md#automationhealthcheckapiv1automationhealthget) - Automation Health Check
- [`automationRulesAutomationHealthCheckApiV1AutomationHealthGet`](docs/sdks/health/README.md#automationhealthcheckapiv1automationhealthget) - Automation Health Check
- [`automationRulesCreateRuleApiV1AutomationRulesPost`](docs/sdks/automationrules/README.md#createruleapiv1automationrulespost) - Create Rule
- [`automationRulesCronHealthCheckApiV1AutomationApiV1AutomationCronHealthGet`](docs/sdks/automationcron/README.md#cronhealthcheckapiv1automationapiv1automationcronhealthget) - Cron Health Check
- [`automationRulesCronHealthCheckApiV1AutomationApiV1AutomationCronHealthGet`](docs/sdks/automationrules/README.md#cronhealthcheckapiv1automationapiv1automationcronhealthget) - Cron Health Check
- [`automationRulesDeleteRuleApiV1AutomationRulesRuleIdDelete`](docs/sdks/automationrules/README.md#deleteruleapiv1automationrulesruleiddelete) - Delete Rule
- [`automationRulesExecuteRuleApiV1AutomationRulesRuleIdExecutePost`](docs/sdks/automationrules/README.md#executeruleapiv1automationrulesruleidexecutepost) - Execute Rule
- [`automationRulesGetActionsApiV1AutomationMetadataActionsGet`](docs/sdks/automationmetadata/README.md#getactionsapiv1automationmetadataactionsget) - Get action metadata
- [`automationRulesGetActionsApiV1AutomationMetadataActionsGet`](docs/sdks/automationrules/README.md#getactionsapiv1automationmetadataactionsget) - Get action metadata
- [`automationRulesGetAllMetadataApiV1AutomationMetadataGet`](docs/sdks/automationmetadata/README.md#getallmetadataapiv1automationmetadataget) - Get all metadata
- [`automationRulesGetAllMetadataApiV1AutomationMetadataGet`](docs/sdks/automationrules/README.md#getallmetadataapiv1automationmetadataget) - Get all metadata
- [`automationRulesGetAllTasksApiV1AutomationMetadataTasksGet`](docs/sdks/automationmetadata/README.md#getalltasksapiv1automationmetadatatasksget) - Get all task metadata
- [`automationRulesGetAllTasksApiV1AutomationMetadataTasksGet`](docs/sdks/automationrules/README.md#getalltasksapiv1automationmetadatatasksget) - Get all task metadata
- [`automationRulesGetConditionsApiV1AutomationMetadataConditionsGet`](docs/sdks/automationmetadata/README.md#getconditionsapiv1automationmetadataconditionsget) - Get condition metadata
- [`automationRulesGetConditionsApiV1AutomationMetadataConditionsGet`](docs/sdks/automationrules/README.md#getconditionsapiv1automationmetadataconditionsget) - Get condition metadata
- [`automationRulesGetRuleApiV1AutomationRulesRuleIdGet`](docs/sdks/automationrules/README.md#getruleapiv1automationrulesruleidget) - Get Rule
- [`automationRulesGetRuleExecutionsApiV1AutomationRulesRuleIdExecutionsGet`](docs/sdks/automationrules/README.md#getruleexecutionsapiv1automationrulesruleidexecutionsget) - Get Rule Executions
- [`automationRulesGetTaskMetadataApiV1AutomationMetadataTasksTaskTypeGet`](docs/sdks/automationmetadata/README.md#gettaskmetadataapiv1automationmetadatataskstasktypeget) - Get task metadata
- [`automationRulesGetTaskMetadataApiV1AutomationMetadataTasksTaskTypeGet`](docs/sdks/automationrules/README.md#gettaskmetadataapiv1automationmetadatataskstasktypeget) - Get task metadata
- [`automationRulesGetTriggersApiV1AutomationMetadataTriggersGet`](docs/sdks/automationmetadata/README.md#gettriggersapiv1automationmetadatatriggersget) - Get trigger metadata
- [`automationRulesGetTriggersApiV1AutomationMetadataTriggersGet`](docs/sdks/automationrules/README.md#gettriggersapiv1automationmetadatatriggersget) - Get trigger metadata
- [`automationRulesListRulesApiV1AutomationRulesGet`](docs/sdks/automationrules/README.md#listrulesapiv1automationrulesget) - List Rules
- [`automationRulesPatchRuleApiV1AutomationRulesRuleIdPatch`](docs/sdks/automationrules/README.md#patchruleapiv1automationrulesruleidpatch) - Patch Rule
- [`automationRulesTriggerScheduledAutomationApiV1AutomationApiV1AutomationCronTriggerScheduledPost`](docs/sdks/automationcron/README.md#triggerscheduledautomationapiv1automationapiv1automationcrontriggerscheduledpost) - Trigger Scheduled Automation
- [`automationRulesTriggerScheduledAutomationApiV1AutomationApiV1AutomationCronTriggerScheduledPost`](docs/sdks/automationrules/README.md#triggerscheduledautomationapiv1automationapiv1automationcrontriggerscheduledpost) - Trigger Scheduled Automation
- [`automationRulesUpdateRuleApiV1AutomationRulesRuleIdPut`](docs/sdks/automationrules/README.md#updateruleapiv1automationrulesruleidput) - Update Rule
- [`bookingCheckAvailabilityApiV1BookingCheckAvailabilityPost`](docs/sdks/booking/README.md#checkavailabilityapiv1bookingcheckavailabilitypost) - Check Availability
- [`bookingCreateBookingApiV1BookingPost`](docs/sdks/booking/README.md#createbookingapiv1bookingpost) - Create Booking
- [`bookingDeleteBookingApiV1BookingBookingIdDelete`](docs/sdks/booking/README.md#deletebookingapiv1bookingbookingiddelete) - Delete Booking
- [`bookingGetBookingByIdApiV1BookingBookingIdGet`](docs/sdks/booking/README.md#getbookingbyidapiv1bookingbookingidget) - Get Booking By Id
- [`bookingGetBookingsApiV1BookingGet`](docs/sdks/booking/README.md#getbookingsapiv1bookingget) - Get Bookings
- [`bookingGetPlaceScheduleApiV1BookingPlacesPlaceIdScheduleGet`](docs/sdks/booking/README.md#getplacescheduleapiv1bookingplacesplaceidscheduleget) - Get Place Schedule
- [`bookingUpdateBookingApiV1BookingBookingIdPut`](docs/sdks/booking/README.md#updatebookingapiv1bookingbookingidput) - Update Booking
- [`chatMessagesDeleteMessageApiV1ChatMessagesMessageIdDelete`](docs/sdks/chatmessages/README.md#deletemessageapiv1chatmessagesmessageiddelete) - Delete Message
- [`chatMessagesGetMessageCountApiV1ChatRoomIdMessagesCountGet`](docs/sdks/chatmessages/README.md#getmessagecountapiv1chatroomidmessagescountget) - Get Message Count
- [`chatMessagesGetUnreadCountApiV1ChatRoomIdUnreadCountGet`](docs/sdks/chatmessages/README.md#getunreadcountapiv1chatroomidunreadcountget) - Get Unread Count
- [`chatMessagesListMessagesApiV1ChatRoomIdMessagesGet`](docs/sdks/chatmessages/README.md#listmessagesapiv1chatroomidmessagesget) - List Messages
- [`chatMessagesMarkMessagesAsReadApiV1ChatRoomIdReadPatch`](docs/sdks/chatmessages/README.md#markmessagesasreadapiv1chatroomidreadpatch) - Mark Messages As Read
- [`chatMessagesSendMessageApiV1ChatRoomIdMessagesPost`](docs/sdks/chatmessages/README.md#sendmessageapiv1chatroomidmessagespost) - Send Message
- [`chatRoomsAddMemberToRoomApiV1ChatRoomsRoomIdMembersPost`](docs/sdks/chatrooms/README.md#addmembertoroomapiv1chatroomsroomidmemberspost) - Add Member To Room
- [`chatRoomsCreateDirectRoomApiV1ChatRoomsDirectPost`](docs/sdks/chatrooms/README.md#createdirectroomapiv1chatroomsdirectpost) - Create Direct Room
- [`chatRoomsCreateGroupRoomApiV1ChatRoomsGroupPost`](docs/sdks/chatrooms/README.md#creategrouproomapiv1chatroomsgrouppost) - Create Group Room
- [`chatRoomsGetRoomByIdApiV1ChatRoomsRoomIdGet`](docs/sdks/chatrooms/README.md#getroombyidapiv1chatroomsroomidget) - Get Room By Id
- [`chatRoomsListRoomMembersApiV1ChatRoomsRoomIdMembersGet`](docs/sdks/chatrooms/README.md#listroommembersapiv1chatroomsroomidmembersget) - List Room Members
- [`chatRoomsListUserRoomsApiV1ChatRoomsGet`](docs/sdks/chatrooms/README.md#listuserroomsapiv1chatroomsget) - List User Rooms
- [`chatRoomsRemoveMemberFromRoomApiV1ChatRoomsRoomIdMembersUserIdDelete`](docs/sdks/chatrooms/README.md#removememberfromroomapiv1chatroomsroomidmembersuseriddelete) - Remove Member From Room
- [`chatRoomsUpdateRoomApiV1ChatRoomsRoomIdPatch`](docs/sdks/chatrooms/README.md#updateroomapiv1chatroomsroomidpatch) - Update Room
- [`contactsCreateContactApiV1ContactsPost`](docs/sdks/contacts/README.md#createcontactapiv1contactspost) - Create Contact
- [`contactsDeleteContactApiV1ContactsContactIdDelete`](docs/sdks/contacts/README.md#deletecontactapiv1contactscontactiddelete) - Delete Contact
- [`contactsGetContactApiV1ContactsContactIdGet`](docs/sdks/contacts/README.md#getcontactapiv1contactscontactidget) - Get Contact
- [`contactsListContactsApiV1ContactsGet`](docs/sdks/contacts/README.md#listcontactsapiv1contactsget) - List Contacts
- [`contactsSearchContactsApiV1ContactsSearchGet`](docs/sdks/contacts/README.md#searchcontactsapiv1contactssearchget) - Search Contacts
- [`contactsToggleFavoriteApiV1ContactsContactIdFavoritePatch`](docs/sdks/contacts/README.md#togglefavoriteapiv1contactscontactidfavoritepatch) - Toggle Favorite
- [`contactsUpdateContactApiV1ContactsContactIdPut`](docs/sdks/contacts/README.md#updatecontactapiv1contactscontactidput) - Update Contact
- [`customRolesAddPermissionEndpointApiV1ApiV1RolesRoleIdPermissionsPost`](docs/sdks/customroles/README.md#addpermissionendpointapiv1apiv1rolesroleidpermissionspost) - Add Permission Endpoint
- [`customRolesAssignRoleToUserEndpointApiV1ApiV1RolesUsersUserIdRolesPost`](docs/sdks/customroles/README.md#assignroletouserendpointapiv1apiv1rolesusersuseridrolespost) - Assign Role To User Endpoint
- [`customRolesCreateRoleEndpointApiV1ApiV1RolesPost`](docs/sdks/customroles/README.md#createroleendpointapiv1apiv1rolespost) - Create Role Endpoint
- [`customRolesDeleteRoleEndpointApiV1ApiV1RolesRoleIdDelete`](docs/sdks/customroles/README.md#deleteroleendpointapiv1apiv1rolesroleiddelete) - Delete Role Endpoint
- [`customRolesGetMyPermissionsEndpointApiV1ApiV1RolesMePermissionsGet`](docs/sdks/customroles/README.md#getmypermissionsendpointapiv1apiv1rolesmepermissionsget) - Get My Permissions Endpoint
- [`customRolesGetRoleEndpointApiV1ApiV1RolesRoleIdGet`](docs/sdks/customroles/README.md#getroleendpointapiv1apiv1rolesroleidget) - Get Role Endpoint
- [`customRolesListRolesEndpointApiV1ApiV1RolesGet`](docs/sdks/customroles/README.md#listrolesendpointapiv1apiv1rolesget) - List Roles Endpoint
- [`customRolesRemovePermissionEndpointApiV1ApiV1RolesRoleIdPermissionsPermissionCodeDelete`](docs/sdks/customroles/README.md#removepermissionendpointapiv1apiv1rolesroleidpermissionspermissioncodedelete) - Remove Permission Endpoint
- [`customRolesRemoveRoleFromUserEndpointApiV1ApiV1RolesUsersUserIdRolesRoleIdDelete`](docs/sdks/customroles/README.md#removerolefromuserendpointapiv1apiv1rolesusersuseridrolesroleiddelete) - Remove Role From User Endpoint
- [`customRolesSetPermissionsEndpointApiV1ApiV1RolesRoleIdPermissionsPut`](docs/sdks/customroles/README.md#setpermissionsendpointapiv1apiv1rolesroleidpermissionsput) - Set Permissions Endpoint
- [`customRolesUpdateRoleEndpointApiV1ApiV1RolesRoleIdPut`](docs/sdks/customroles/README.md#updateroleendpointapiv1apiv1rolesroleidput) - Update Role Endpoint
- [`eventArchiveEventApiV1EventEventIdArchivePatch`](docs/sdks/event/README.md#archiveeventapiv1eventeventidarchivepatch) - Archive Event
- [`eventAttendeesAddEventAttendeeApiV1EventsEventIdAttendeesPost`](docs/sdks/eventattendees/README.md#addeventattendeeapiv1eventseventidattendeespost) - Add Event Attendee
- [`eventAttendeesAddEventAttendeesBulkApiV1EventsEventIdAttendeesBulkPost`](docs/sdks/eventattendees/README.md#addeventattendeesbulkapiv1eventseventidattendeesbulkpost) - Add Event Attendees Bulk
- [`eventAttendeesCheckInAttendeeApiV1EventsEventIdAttendeesAttendeeIdCheckInPost`](docs/sdks/eventattendees/README.md#checkinattendeeapiv1eventseventidattendeesattendeeidcheckinpost) - Check In Attendee
- [`eventAttendeesGetEventAttendeesApiV1EventsEventIdAttendeesGet`](docs/sdks/eventattendees/README.md#geteventattendeesapiv1eventseventidattendeesget) - Get Event Attendees
- [`eventAttendeesRemoveEventAttendeeApiV1EventsEventIdAttendeesAttendeeIdDelete`](docs/sdks/eventattendees/README.md#removeeventattendeeapiv1eventseventidattendeesattendeeiddelete) - Remove Event Attendee
- [`eventAttendeesRemoveEventAttendeesBulkApiV1EventsEventIdAttendeesBulkDelete`](docs/sdks/eventattendees/README.md#removeeventattendeesbulkapiv1eventseventidattendeesbulkdelete) - Remove Event Attendees Bulk
- [`eventAttendeesUpdateAttendeesStatusBulkApiV1EventsEventIdAttendeesBulkStatusPatch`](docs/sdks/eventattendees/README.md#updateattendeesstatusbulkapiv1eventseventidattendeesbulkstatuspatch) - Update Attendees Status Bulk
- [`eventAttendeesUpdateEventAttendeeApiV1EventsEventIdAttendeesAttendeeIdPut`](docs/sdks/eventattendees/README.md#updateeventattendeeapiv1eventseventidattendeesattendeeidput) - Update Event Attendee
- [`eventCompareEventVersionsApiV1EventEventIdVersionsCompareGet`](docs/sdks/event/README.md#compareeventversionsapiv1eventeventidversionscompareget) - Compare Event Versions
- [`eventCreateEventApiV1EventPost`](docs/sdks/event/README.md#createeventapiv1eventpost) - Create Event
- [`eventDeleteEventApiV1EventEventIdDelete`](docs/sdks/event/README.md#deleteeventapiv1eventeventiddelete) - Delete Event
- [`eventDocumentsAddDocumentToEventApiV1EventsEventIdDocumentsDocumentIdPost`](docs/sdks/eventdocuments/README.md#adddocumenttoeventapiv1eventseventiddocumentsdocumentidpost) - Add Document To Event
- [`eventDocumentsGetEventDocumentsApiV1EventsEventIdDocumentsGet`](docs/sdks/eventdocuments/README.md#geteventdocumentsapiv1eventseventiddocumentsget) - Get Event Documents
- [`eventDocumentsRemoveDocumentFromEventApiV1EventsEventIdDocumentsDocumentIdDelete`](docs/sdks/eventdocuments/README.md#removedocumentfromeventapiv1eventseventiddocumentsdocumentiddelete) - Remove Document From Event
- [`eventFilterEventsAdvancedApiV1EventFilterPost`](docs/sdks/event/README.md#filtereventsadvancedapiv1eventfilterpost) - Filter Events Advanced
- [`eventGetCalendarEventsApiV1EventCalendarGet`](docs/sdks/event/README.md#getcalendareventsapiv1eventcalendarget) - Get Calendar Events
- [`eventGetEventByIdApiV1EventEventIdGet`](docs/sdks/event/README.md#geteventbyidapiv1eventeventidget) - Get Event By Id
- [`eventGetEventListApiV1EventGet`](docs/sdks/event/README.md#geteventlistapiv1eventget) - Get Event List
- [`eventGetEventsBySpaceApiV1EventSpaceSpaceIdGet`](docs/sdks/event/README.md#geteventsbyspaceapiv1eventspacespaceidget) - Get Events By Space
- [`eventGetEventSettingsApiV1EventEventIdSettingsGet`](docs/sdks/event/README.md#geteventsettingsapiv1eventeventidsettingsget) - Get Event Settings
- [`eventGetEventVersionApiV1EventEventIdVersionsTransactionIdGet`](docs/sdks/event/README.md#geteventversionapiv1eventeventidversionstransactionidget) - Get Event Version
- [`eventGetLatestEventVersionApiV1EventEventIdVersionsLatestGet`](docs/sdks/event/README.md#getlatesteventversionapiv1eventeventidversionslatestget) - Get Latest Event Version
- [`eventGetSectionContentApiV1EventEventIdSectionContentGet`](docs/sdks/event/README.md#getsectioncontentapiv1eventeventidsectioncontentget) - Get Section Content
- [`eventGetSectionIdentificationApiV1EventEventIdSectionIdentificationGet`](docs/sdks/event/README.md#getsectionidentificationapiv1eventeventidsectionidentificationget) - Get Section Identification
- [`eventGetSectionSettingsApiV1EventEventIdSectionSettingsGet`](docs/sdks/event/README.md#getsectionsettingsapiv1eventeventidsectionsettingsget) - Get Section Settings
- [`eventGetSocialFeedApiV1EventSocialFeedGet`](docs/sdks/event/README.md#getsocialfeedapiv1eventsocialfeedget) - Get Social Feed
- [`eventGetTimezoneInfoApiV1EventTimezonesGet`](docs/sdks/event/README.md#gettimezoneinfoapiv1eventtimezonesget) - Get Timezone Info
- [`eventGetTimezoneInfoApiV1EventTimezonesGet`](docs/sdks/timezones/README.md#gettimezoneinfoapiv1eventtimezonesget) - Get Timezone Info
- [`eventListEventVersionsApiV1EventEventIdVersionsGet`](docs/sdks/event/README.md#listeventversionsapiv1eventeventidversionsget) - List Event Versions
- [`eventLocationGetEventLocationApiV1EventsEventIdLocationGet`](docs/sdks/eventlocation/README.md#geteventlocationapiv1eventseventidlocationget) - Get Event Location
- [`eventLocationUpdateEventLocationApiV1EventsEventIdLocationPut`](docs/sdks/eventlocation/README.md#updateeventlocationapiv1eventseventidlocationput) - Update Event Location
- [`eventPatchEventContentApiV1EventEventIdContentPatch`](docs/sdks/event/README.md#patcheventcontentapiv1eventeventidcontentpatch) - Patch Event Content
- [`eventPatchEventIdentificationApiV1EventEventIdIdentificationPatch`](docs/sdks/event/README.md#patcheventidentificationapiv1eventeventididentificationpatch) - Patch Event Identification
- [`eventPatchEventSettingsApiV1EventEventIdSettingsPatch`](docs/sdks/event/README.md#patcheventsettingsapiv1eventeventidsettingspatch) - Patch Event Settings
- [`eventPublishEventApiV1EventEventIdPublishPatch`](docs/sdks/event/README.md#publisheventapiv1eventeventidpublishpatch) - Publish Event
- [`eventPublishEventVersionApiV1EventEventIdVersionsPublishPost`](docs/sdks/event/README.md#publisheventversionapiv1eventeventidversionspublishpost) - Publish Event Version
- [`eventPublishEventWithNotificationsApiV1EventEventIdPublishWithNotificationsPost`](docs/sdks/event/README.md#publisheventwithnotificationsapiv1eventeventidpublishwithnotificationspost) - Publish Event With Notifications
- [`eventRollbackEventVersionApiV1EventEventIdVersionsRollbackPost`](docs/sdks/event/README.md#rollbackeventversionapiv1eventeventidversionsrollbackpost) - Rollback Event to Version
- [`eventTimelineCreateMilestoneApiV1EventEventIdTimelineMilestonesPost`](docs/sdks/eventtimeline/README.md#createmilestoneapiv1eventeventidtimelinemilestonespost) - Create and link milestone
- [`eventTimelineGetPublishedTimelineApiV1EventEventIdTimelinePublishedGet`](docs/sdks/eventtimeline/README.md#getpublishedtimelineapiv1eventeventidtimelinepublishedget) - Get published event timeline
- [`eventTimelineGetTimelineApiV1EventEventIdTimelineGet`](docs/sdks/eventtimeline/README.md#gettimelineapiv1eventeventidtimelineget) - Get event timeline
- [`eventTimelineLinkMilestoneApiV1EventEventIdTimelineLinkPost`](docs/sdks/eventtimeline/README.md#linkmilestoneapiv1eventeventidtimelinelinkpost) - Link existing event
- [`eventTimelineUnlinkMilestoneApiV1EventEventIdTimelineMilestoneEventIdDelete`](docs/sdks/eventtimeline/README.md#unlinkmilestoneapiv1eventeventidtimelinemilestoneeventiddelete) - Unlink milestone
- [`eventTransferEventApiV1EventEventIdTransferPost`](docs/sdks/event/README.md#transfereventapiv1eventeventidtransferpost) - Transfer Event
- [`eventUnpublishEventVersionApiV1EventEventIdVersionsUnpublishPost`](docs/sdks/event/README.md#unpublisheventversionapiv1eventeventidversionsunpublishpost) - Unpublish Event (Mark as Draft)
- [`eventUpdateCoverApiV1EventEventIdCoverPatch`](docs/sdks/event/README.md#updatecoverapiv1eventeventidcoverpatch) - Update Cover
- [`eventUpdateEventApiV1EventEventIdPut`](docs/sdks/event/README.md#updateeventapiv1eventeventidput) - Update Event
- [`eventValidateTimezoneApiV1EventTimezonesValidateGet`](docs/sdks/event/README.md#validatetimezoneapiv1eventtimezonesvalidateget) - Validate Timezone
- [`eventValidateTimezoneApiV1EventTimezonesValidateGet`](docs/sdks/timezones/README.md#validatetimezoneapiv1eventtimezonesvalidateget) - Validate Timezone
- [`getFeatureFlagsConfigFeaturesGet`](docs/sdks/sdk/README.md#getfeatureflagsconfigfeaturesget) - Get Feature Flags
- [`getLatestPublishedVersionApiV1PublicSpaceSpaceIdVersionsLatestGet`](docs/sdks/sdk/README.md#getlatestpublishedversionapiv1publicspacespaceidversionslatestget) - Get Latest Published Version
- [`handleOrgCreatedApiV1IntegrationOrgCreatedPost`](docs/sdks/sdk/README.md#handleorgcreatedapiv1integrationorgcreatedpost) - Webhook from Zitadel for organization creation
- [`handleOrgRemovedApiV1IntegrationOrgRemovedPost`](docs/sdks/sdk/README.md#handleorgremovedapiv1integrationorgremovedpost) - Webhook from Zitadel for organization removal
- [`handleUserRemovedApiV1IntegrationUserRemovedPost`](docs/sdks/sdk/README.md#handleuserremovedapiv1integrationuserremovedpost) - Webhook from Zitadel for user removal
- [`healthCheckHealthGet`](docs/sdks/sdk/README.md#healthcheckhealthget) - Health Check
- [`metricsMetricsGet`](docs/sdks/sdk/README.md#metricsmetricsget) - Metrics
- [`notificationHealthCheckHealthNotificationsGet`](docs/sdks/sdk/README.md#notificationhealthcheckhealthnotificationsget) - Notification Health Check
- [`organizationsArchiveOrganizationEndpointApiV1OrganizationsOrgIdDelete`](docs/sdks/organizations/README.md#archiveorganizationendpointapiv1organizationsorgiddelete) - Archive Organization Endpoint
- [`organizationsCreateInviteEndpointApiV1OrganizationsOrgIdInvitesPost`](docs/sdks/organizations/README.md#createinviteendpointapiv1organizationsorgidinvitespost) - Create Invite Endpoint
- [`organizationsCreateOrganizationEndpointApiV1OrganizationsPost`](docs/sdks/organizations/README.md#createorganizationendpointapiv1organizationspost) - Create Organization Endpoint
- [`organizationsDeleteInviteEndpointApiV1OrganizationsOrgIdInvitesInviteIdDelete`](docs/sdks/organizations/README.md#deleteinviteendpointapiv1organizationsorgidinvitesinviteiddelete) - Delete Invite Endpoint
- [`organizationsGetCurrentOrganizationEndpointApiV1OrganizationsMeGet`](docs/sdks/organizations/README.md#getcurrentorganizationendpointapiv1organizationsmeget) - Get Current Organization Endpoint
- [`organizationsGetOrganizationEndpointApiV1OrganizationsOrgIdGet`](docs/sdks/organizations/README.md#getorganizationendpointapiv1organizationsorgidget) - Get Organization Endpoint
- [`organizationsGetOrganizationInvitesEndpointApiV1OrganizationsOrgIdInvitesGet`](docs/sdks/organizations/README.md#getorganizationinvitesendpointapiv1organizationsorgidinvitesget) - Get Organization Invites Endpoint
- [`organizationsListOrganizationsEndpointApiV1OrganizationsGet`](docs/sdks/organizations/README.md#listorganizationsendpointapiv1organizationsget) - List Organizations Endpoint
- [`organizationsUpdateOrganizationEndpointApiV1OrganizationsOrgIdPut`](docs/sdks/organizations/README.md#updateorganizationendpointapiv1organizationsorgidput) - Update Organization Endpoint
- [`permissionsGetPermissionEndpointApiV1ApiV1PermissionsPermissionCodeGet`](docs/sdks/permissions/README.md#getpermissionendpointapiv1apiv1permissionspermissioncodeget) - Get Permission Endpoint
- [`permissionsListPermissionsEndpointApiV1ApiV1PermissionsGet`](docs/sdks/permissions/README.md#listpermissionsendpointapiv1apiv1permissionsget) - List Permissions Endpoint
- [`placeArchivePlaceApiV1PlacePlaceIdArchivePatch`](docs/sdks/place/README.md#archiveplaceapiv1placeplaceidarchivepatch) - Archive Place
- [`placeCreatePlaceApiV1PlacePost`](docs/sdks/place/README.md#createplaceapiv1placepost) - Create Place
- [`placeDeletePlaceApiV1PlacePlaceIdDelete`](docs/sdks/place/README.md#deleteplaceapiv1placeplaceiddelete) - Delete Place
- [`placeGetPlaceByIdApiV1PlacePlaceIdGet`](docs/sdks/place/README.md#getplacebyidapiv1placeplaceidget) - Get Place By Id
- [`placeGetPlaceListApiV1PlaceGet`](docs/sdks/place/README.md#getplacelistapiv1placeget) - Get Place List
- [`placePublishPlaceApiV1PlacePlaceIdPublishPatch`](docs/sdks/place/README.md#publishplaceapiv1placeplaceidpublishpatch) - Publish Place
- [`placeUpdatePlaceApiV1PlacePlaceIdPut`](docs/sdks/place/README.md#updateplaceapiv1placeplaceidput) - Update Place
- [`publicEventsGetLatestPublicEventVersionApiV1PublicEventEventIdVersionsLatestGet`](docs/sdks/publicevents/README.md#getlatestpubliceventversionapiv1publiceventeventidversionslatestget) - Get Latest Event Version (Public Access)
- [`realtimeGetWs`](docs/sdks/realtime/README.md#getws) - Establish realtime WebSocket connection (upgrade)
- [`realtimeRealtimeInfoRealtimeInfoGet`](docs/sdks/realtime/README.md#realtimeinforealtimeinfoget) - Realtime WebSocket protocol info
- [`spaceAddSpaceMemberApiV1SpaceSpaceIdMembersPost`](docs/sdks/space/README.md#addspacememberapiv1spacespaceidmemberspost) - Add Space Member
- [`spaceArchiveSpaceApiV1SpaceSpaceIdArchivePatch`](docs/sdks/space/README.md#archivespaceapiv1spacespaceidarchivepatch) - Archive Space
- [`spaceAssignPermissionToSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPost`](docs/sdks/space/README.md#assignpermissiontospaceroleapiv1spacespacesspaceidrolesroleidpermissionspost) - Assign Permission To Space Role
- [`spaceAssignPermissionToSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPost`](docs/sdks/spaceroles/README.md#assignpermissiontospaceroleapiv1spacespacesspaceidrolesroleidpermissionspost) - Assign Permission To Space Role
- [`spaceAssignUserToSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesPost`](docs/sdks/space/README.md#assignusertospaceroleapiv1spacespacesspaceidmembersuseridrolespost) - Assign User To Space Role
- [`spaceAssignUserToSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesPost`](docs/sdks/spacememberroles/README.md#assignusertospaceroleapiv1spacespacesspaceidmembersuseridrolespost) - Assign User To Space Role
- [`spaceBulkUpdateSpaceParentApiV1SpaceBulkParentPatch`](docs/sdks/space/README.md#bulkupdatespaceparentapiv1spacebulkparentpatch) - Bulk Update Space Parent
- [`spaceCompareSpaceVersionsApiV1SpaceSpaceIdVersionsCompareGet`](docs/sdks/space/README.md#comparespaceversionsapiv1spacespaceidversionscompareget) - Compare space versions
- [`spaceContactsAddContactToSpaceApiV1SpacesSpaceIdContactsPost`](docs/sdks/spacecontacts/README.md#addcontacttospaceapiv1spacesspaceidcontactspost) - Add Contact To Space
- [`spaceContactsBulkAddContactsToSpaceApiV1SpacesSpaceIdContactsBulkPost`](docs/sdks/spacecontacts/README.md#bulkaddcontactstospaceapiv1spacesspaceidcontactsbulkpost) - Bulk Add Contacts To Space
- [`spaceContactsBulkRemoveContactsFromSpaceApiV1SpacesSpaceIdContactsBulkDelete`](docs/sdks/spacecontacts/README.md#bulkremovecontactsfromspaceapiv1spacesspaceidcontactsbulkdelete) - Bulk Remove Contacts From Space
- [`spaceContactsCountSpaceContactsApiV1SpacesSpaceIdContactsCountGet`](docs/sdks/spacecontacts/README.md#countspacecontactsapiv1spacesspaceidcontactscountget) - Count Space Contacts
- [`spaceContactsGetContactSpacesApiV1ContactsContactIdSpacesGet`](docs/sdks/spacecontacts/README.md#getcontactspacesapiv1contactscontactidspacesget) - Get Contact Spaces
- [`spaceContactsGetSpaceContactApiV1SpaceContactsSpaceContactIdGet`](docs/sdks/spacecontacts/README.md#getspacecontactapiv1spacecontactsspacecontactidget) - Get Space Contact
- [`spaceContactsGetSpaceContactsApiV1SpacesSpaceIdContactsGet`](docs/sdks/spacecontacts/README.md#getspacecontactsapiv1spacesspaceidcontactsget) - Get Space Contacts
- [`spaceContactsRemoveContactFromSpaceApiV1SpaceContactsSpaceContactIdDelete`](docs/sdks/spacecontacts/README.md#removecontactfromspaceapiv1spacecontactsspacecontactiddelete) - Remove Contact From Space
- [`spaceCreateSpaceApiV1SpacePost`](docs/sdks/space/README.md#createspaceapiv1spacepost) - Create Space
- [`spaceCreateSpaceRoleApiV1SpaceSpacesSpaceIdRolesPost`](docs/sdks/space/README.md#createspaceroleapiv1spacespacesspaceidrolespost) - Create Space Role
- [`spaceCreateSpaceRoleApiV1SpaceSpacesSpaceIdRolesPost`](docs/sdks/spaceroles/README.md#createspaceroleapiv1spacespacesspaceidrolespost) - Create Space Role
- [`spaceCreateSpaceWithParentApiV1SpaceWithParentPost`](docs/sdks/space/README.md#createspacewithparentapiv1spacewithparentpost) - Create Space With Parent
- [`spaceDeleteSpaceApiV1SpaceSpaceIdDelete`](docs/sdks/space/README.md#deletespaceapiv1spacespaceiddelete) - Delete Space
- [`spaceDeleteSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdDelete`](docs/sdks/space/README.md#deletespaceroleapiv1spacespacesspaceidrolesroleiddelete) - Delete Space Role
- [`spaceDeleteSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdDelete`](docs/sdks/spaceroles/README.md#deletespaceroleapiv1spacespacesspaceidrolesroleiddelete) - Delete Space Role
- [`spaceDetachSpaceFromParentApiV1SpaceSpaceIdParentDelete`](docs/sdks/space/README.md#detachspacefromparentapiv1spacespaceidparentdelete) - Detach Space From Parent
- [`spaceDocumentsAddDocumentToSpaceApiV1SpacesSpaceIdDocumentsDocumentIdPost`](docs/sdks/spacedocuments/README.md#adddocumenttospaceapiv1spacesspaceiddocumentsdocumentidpost) - Add Document To Space
- [`spaceDocumentsGetSpaceDocumentsApiV1SpacesSpaceIdDocumentsGet`](docs/sdks/spacedocuments/README.md#getspacedocumentsapiv1spacesspaceiddocumentsget) - Get Space Documents
- [`spaceDocumentsRemoveDocumentFromSpaceApiV1SpacesSpaceIdDocumentsDocumentIdDelete`](docs/sdks/spacedocuments/README.md#removedocumentfromspaceapiv1spacesspaceiddocumentsdocumentiddelete) - Remove Document From Space
- [`spaceEventsAddEventToSpaceApiV1SpacesSpaceIdEventsPost`](docs/sdks/spaceevents/README.md#addeventtospaceapiv1spacesspaceideventspost) - Add Event To Space
- [`spaceEventsBulkAddEventsToSpaceApiV1SpacesSpaceIdEventsBulkPost`](docs/sdks/spaceevents/README.md#bulkaddeventstospaceapiv1spacesspaceideventsbulkpost) - Bulk Add Events To Space
- [`spaceEventsBulkRemoveEventsFromSpaceApiV1SpacesSpaceIdEventsBulkDelete`](docs/sdks/spaceevents/README.md#bulkremoveeventsfromspaceapiv1spacesspaceideventsbulkdelete) - Bulk Remove Events From Space
- [`spaceEventsCountSpaceEventsApiV1SpacesSpaceIdEventsCountGet`](docs/sdks/spaceevents/README.md#countspaceeventsapiv1spacesspaceideventscountget) - Count Space Events
- [`spaceEventsGetEventSpacesApiV1EventsEventIdSpacesGet`](docs/sdks/spaceevents/README.md#geteventspacesapiv1eventseventidspacesget) - Get Event Spaces
- [`spaceEventsGetSpaceEventApiV1SpaceEventsSpaceEventIdGet`](docs/sdks/spaceevents/README.md#getspaceeventapiv1spaceeventsspaceeventidget) - Get Space Event
- [`spaceEventsGetSpaceEventsApiV1SpacesSpaceIdEventsGet`](docs/sdks/spaceevents/README.md#getspaceeventsapiv1spacesspaceideventsget) - Get Space Events
- [`spaceEventsRemoveEventFromSpaceApiV1SpaceEventsSpaceEventIdDelete`](docs/sdks/spaceevents/README.md#removeeventfromspaceapiv1spaceeventsspaceeventiddelete) - Remove Event From Space
- [`spaceGetJoinableSpacesByUserApiV1SpaceByUserUserIdJoinableGet`](docs/sdks/space/README.md#getjoinablespacesbyuserapiv1spacebyuseruseridjoinableget) - Get Joinable Spaces By User
- [`spaceGetLatestSpaceVersionApiV1SpaceSpaceIdVersionsLatestGet`](docs/sdks/space/README.md#getlatestspaceversionapiv1spacespaceidversionslatestget) - Get latest published space version
- [`spaceGetSpaceByIdApiV1SpaceSpaceIdGet`](docs/sdks/space/README.md#getspacebyidapiv1spacespaceidget) - Get Space By Id
- [`spaceGetSpaceChildrenApiV1SpaceSpaceIdChildrenGet`](docs/sdks/space/README.md#getspacechildrenapiv1spacespaceidchildrenget) - Get Space Children
- [`spaceGetSpaceHierarchyApiV1SpaceSpaceIdHierarchyGet`](docs/sdks/space/README.md#getspacehierarchyapiv1spacespaceidhierarchyget) - Get Space Hierarchy
- [`spaceGetSpaceListApiV1SpaceGet`](docs/sdks/space/README.md#getspacelistapiv1spaceget) - Get Space List
- [`spaceGetSpaceMembersApiV1SpaceSpaceIdMembersGet`](docs/sdks/space/README.md#getspacemembersapiv1spacespaceidmembersget) - Get Space Members
- [`spaceGetSpaceParentApiV1SpaceSpaceIdParentGet`](docs/sdks/space/README.md#getspaceparentapiv1spacespaceidparentget) - Get Space Parent
- [`spaceGetSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdGet`](docs/sdks/space/README.md#getspaceroleapiv1spacespacesspaceidrolesroleidget) - Get Space Role
- [`spaceGetSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdGet`](docs/sdks/spaceroles/README.md#getspaceroleapiv1spacespacesspaceidrolesroleidget) - Get Space Role
- [`spaceGetSpaceVersionApiV1SpaceSpaceIdVersionsVersionNumberGet`](docs/sdks/space/README.md#getspaceversionapiv1spacespaceidversionsversionnumberget) - Get specific space version
- [`spaceGetUserSpaceRolesApiV1SpaceSpacesSpaceIdMembersUserIdRolesGet`](docs/sdks/space/README.md#getuserspacerolesapiv1spacespacesspaceidmembersuseridrolesget) - Get User Space Roles
- [`spaceGetUserSpaceRolesApiV1SpaceSpacesSpaceIdMembersUserIdRolesGet`](docs/sdks/spacememberroles/README.md#getuserspacerolesapiv1spacespacesspaceidmembersuseridrolesget) - Get User Space Roles
- [`spaceJoinSpaceApiV1SpaceSpaceIdJoinPost`](docs/sdks/space/README.md#joinspaceapiv1spacespaceidjoinpost) - Join Space
- [`spaceListSpaceRolesApiV1SpaceSpacesSpaceIdRolesGet`](docs/sdks/space/README.md#listspacerolesapiv1spacespacesspaceidrolesget) - List Space Roles
- [`spaceListSpaceRolesApiV1SpaceSpacesSpaceIdRolesGet`](docs/sdks/spaceroles/README.md#listspacerolesapiv1spacespacesspaceidrolesget) - List Space Roles
- [`spaceListSpaceVersionsApiV1SpaceSpaceIdVersionsGet`](docs/sdks/space/README.md#listspaceversionsapiv1spacespaceidversionsget) - List space versions
- [`spacePublishSpaceApiV1SpaceSpaceIdPublishPatch`](docs/sdks/space/README.md#publishspaceapiv1spacespaceidpublishpatch) - Publish Space
- [`spacePublishSpaceApiV1SpaceSpaceIdPublishPost`](docs/sdks/space/README.md#publishspaceapiv1spacespaceidpublishpost) - Publish space
- [`spaceRemovePermissionFromSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPermissionIdDelete`](docs/sdks/space/README.md#removepermissionfromspaceroleapiv1spacespacesspaceidrolesroleidpermissionspermissioniddelete) - Remove Permission From Space Role
- [`spaceRemovePermissionFromSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPermissionIdDelete`](docs/sdks/spaceroles/README.md#removepermissionfromspaceroleapiv1spacespacesspaceidrolesroleidpermissionspermissioniddelete) - Remove Permission From Space Role
- [`spaceRemoveSpaceMemberApiV1SpaceSpaceIdMembersUserIdDelete`](docs/sdks/space/README.md#removespacememberapiv1spacespaceidmembersuseriddelete) - Remove Space Member
- [`spaceRemoveUserFromSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesSpaceRoleIdDelete`](docs/sdks/space/README.md#removeuserfromspaceroleapiv1spacespacesspaceidmembersuseridrolesspaceroleiddelete) - Remove User From Space Role
- [`spaceRemoveUserFromSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesSpaceRoleIdDelete`](docs/sdks/spacememberroles/README.md#removeuserfromspaceroleapiv1spacespacesspaceidmembersuseridrolesspaceroleiddelete) - Remove User From Space Role
- [`spaceRollbackSpaceApiV1SpaceSpaceIdRollbackPost`](docs/sdks/space/README.md#rollbackspaceapiv1spacespaceidrollbackpost) - Rollback space to version
- [`spaceTestAuthApiV1SpaceTestAuthGet`](docs/sdks/space/README.md#testauthapiv1spacetestauthget) - Test Auth
- [`spaceTransferSpaceApiV1SpaceSpaceIdTransferPost`](docs/sdks/space/README.md#transferspaceapiv1spacespaceidtransferpost) - Transfer Space
- [`spaceUnpublishSpaceApiV1SpaceSpaceIdUnpublishPost`](docs/sdks/space/README.md#unpublishspaceapiv1spacespaceidunpublishpost) - Unpublish space
- [`spaceUpdateSpaceApiV1SpaceSpaceIdPut`](docs/sdks/space/README.md#updatespaceapiv1spacespaceidput) - Update Space
- [`spaceUpdateSpaceMemberRoleApiV1SpaceSpaceIdMembersUserIdPatch`](docs/sdks/space/README.md#updatespacememberroleapiv1spacespaceidmembersuseridpatch) - Update Space Member Role
- [`spaceUpdateSpaceParentApiV1SpaceSpaceIdParentPatch`](docs/sdks/space/README.md#updatespaceparentapiv1spacespaceidparentpatch) - Update Space Parent
- [`spaceUpdateSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPut`](docs/sdks/space/README.md#updatespaceroleapiv1spacespacesspaceidrolesroleidput) - Update Space Role
- [`spaceUpdateSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPut`](docs/sdks/spaceroles/README.md#updatespaceroleapiv1spacespacesspaceidrolesroleidput) - Update Space Role
- [`triggerSentryErrorSentryDebugGet`](docs/sdks/sdk/README.md#triggersentryerrorsentrydebugget) - Trigger Sentry Error
- [`userCreateAssistantApiV1UserAssistantPost`](docs/sdks/user/README.md#createassistantapiv1userassistantpost) - Create Assistant
- [`userDeleteAvatarApiV1UserMeAvatarDelete`](docs/sdks/user/README.md#deleteavatarapiv1usermeavatardelete) - Delete Avatar
- [`userGetAssistantApiV1UserAssistantGet`](docs/sdks/user/README.md#getassistantapiv1userassistantget) - Get Assistant
- [`userGetAvatarApiV1UserMeAvatarGet`](docs/sdks/user/README.md#getavatarapiv1usermeavatarget) - Get Avatar
- [`userGetCurrentUserProfileApiV1UserMeGet`](docs/sdks/user/README.md#getcurrentuserprofileapiv1usermeget) - Get Current User Profile
- [`userGetUserAvatarApiV1UserAvatarUserIdGet`](docs/sdks/user/README.md#getuseravatarapiv1useravataruseridget) - Get User Avatar
- [`userGetUserListApiV1UserGet`](docs/sdks/user/README.md#getuserlistapiv1userget) - Get User List
- [`userGetUserProfileByIdApiV1UserUserIdGet`](docs/sdks/user/README.md#getuserprofilebyidapiv1useruseridget) - Get User Profile By Id
- [`userSearchUsersApiV1UserSearchGet`](docs/sdks/user/README.md#searchusersapiv1usersearchget) - Search Users
- [`userUpdateProfileApiV1UserMePut`](docs/sdks/user/README.md#updateprofileapiv1usermeput) - Update Profile
- [`userUploadAvatarApiV1UserMeAvatarPost`](docs/sdks/user/README.md#uploadavatarapiv1usermeavatarpost) - Upload Avatar

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
import { openAsBlob } from "node:fs";
import { SDK } from "@linebundle-sdk/ts";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.user.uploadAvatarApiV1UserMeAvatarPost({
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
import { SDK } from "@linebundle-sdk/ts";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.handleOrgCreatedApiV1IntegrationOrgCreatedPost({
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
import { SDK } from "@linebundle-sdk/ts";

const sdk = new SDK({
  serverURL: "https://api.example.com",
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
  const result = await sdk.handleOrgCreatedApiV1IntegrationOrgCreatedPost();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`SDKError`](./src/models/errors/sdk-error.ts) is the base class for all HTTP error responses. It has the following properties:

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
import { SDK } from "@linebundle-sdk/ts";
import * as errors from "@linebundle-sdk/ts/models/errors";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  try {
    const result = await sdk
      .getLatestPublishedVersionApiV1PublicSpaceSpaceIdVersionsLatestGet({
        spaceId: 745559,
      });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.SDKError) {
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
**Primary error:**
* [`SDKError`](./src/models/errors/sdk-error.ts): The base class for HTTP error responses.

<details><summary>Less common errors (7)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`SDKError`](./src/models/errors/sdk-error.ts)**:
* [`HTTPValidationError`](./src/models/errors/http-validation-error.ts): Validation Error. Status code `422`. Applicable to 192 of 241 methods.*
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

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
import { SDK } from "@linebundle-sdk/ts";
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

const sdk = new SDK({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { SDK } from "@linebundle-sdk/ts";

const sdk = new SDK({ debugLogger: console });
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

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=openapi&utm_campaign=typescript)
