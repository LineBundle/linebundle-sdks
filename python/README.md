# linebundle-sdk

Developer-friendly & type-safe Python SDK specifically catered to leverage *linebundle-sdk* API.

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=linebundle-sdk&utm_campaign=python)
[![License: MIT](https://img.shields.io/badge/LICENSE_//_MIT-3b5bdb?style=for-the-badge&labelColor=eff6ff)](https://opensource.org/licenses/MIT)


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/linebundle/linebundle). Delete this section before > publishing to a package manager.

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
* [linebundle-sdk](#linebundle-sdk)
  * [Realtime WebSocket](#realtime-websocket)
  * [SDK Installation](#sdk-installation)
  * [IDE Support](#ide-support)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Resource Management](#resource-management)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to PyPI you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


> [!NOTE]
> **Python version upgrade policy**
>
> Once a Python version reaches its [official end of life date](https://devguide.python.org/versions/), a 3-month grace period is provided for users to upgrade. Following this grace period, the minimum python version supported in the SDK will be updated.

The SDK can be installed with *uv*, *pip*, or *poetry* package managers.

### uv

*uv* is a fast Python package installer and resolver, designed as a drop-in replacement for pip and pip-tools. It's recommended for its speed and modern Python tooling capabilities.

```bash
uv add git+<UNSET>.git
```

### PIP

*PIP* is the default package installer for Python, enabling easy installation and management of packages from PyPI via the command line.

```bash
pip install git+<UNSET>.git
```

### Poetry

*Poetry* is a modern tool that simplifies dependency management and package publishing by using a single `pyproject.toml` file to handle project metadata and dependencies.

```bash
poetry add git+<UNSET>.git
```

### Shell and script usage with `uv`

You can use this SDK in a Python shell with [uv](https://docs.astral.sh/uv/) and the `uvx` command that comes with it like so:

```shell
uvx --from linebundle-sdk python
```

It's also possible to write a standalone Python script without needing to set up a whole project like so:

```python
#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "linebundle-sdk",
# ]
# ///

from linebundle_sdk import Linebundle

sdk = Linebundle(
  # SDK arguments
)

# Rest of script here...
```

Once that is saved to a file, you can run it with `uv run script.py` where
`script.py` can be replaced with the actual file name.
<!-- End SDK Installation [installation] -->

<!-- Start IDE Support [idesupport] -->
## IDE Support

### PyCharm

Generally, the SDK will work well with most IDEs out of the box. However, when using PyCharm, you can enjoy much better integration with Pydantic by installing an additional plugin.

- [PyCharm Pydantic Plugin](https://docs.pydantic.dev/latest/integrations/pycharm/)
<!-- End IDE Support [idesupport] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```python
# Synchronous Example
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.user.get_assistant()

    # Handle response
    print(res)
```

</br>

The same SDK client can also be used to make asynchronous requests by importing asyncio.

```python
# Asynchronous Example
import asyncio
from linebundle_sdk import Linebundle, models

async def main():

    async with Linebundle(
        security=models.Security(
            oidc="<YOUR_API_KEY_HERE>",
        ),
    ) as linebundle:

        res = await linebundle.user.get_assistant_async()

        # Handle response
        print(res)

asyncio.run(main())
```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name          | Type   | Scheme      |
| ------------- | ------ | ----------- |
| `oidc`        | apiKey | API key     |
| `bearer_auth` | http   | HTTP Bearer |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.user.get_assistant()

    # Handle response
    print(res)

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Ai](docs/sdks/ai/README.md)

* [delete_session](docs/sdks/ai/README.md#delete_session) - Delete AI agent session

### [AiAgent](docs/sdks/aiagent/README.md)

* [list_sessions](docs/sdks/aiagent/README.md#list_sessions) - List AI agent sessions
* [get_session](docs/sdks/aiagent/README.md#get_session) - Get AI agent session details
* [get_session_costs](docs/sdks/aiagent/README.md#get_session_costs) - Get session cost breakdown
* [list_workflows](docs/sdks/aiagent/README.md#list_workflows) - List workflow executions
* [start_workflow](docs/sdks/aiagent/README.md#start_workflow) - Start a multi-agent workflow
* [start_workflow_async](docs/sdks/aiagent/README.md#start_workflow_async) - Start a multi-agent workflow (async)
* [cancel_workflow](docs/sdks/aiagent/README.md#cancel_workflow) - Cancel a running workflow
* [create_session](docs/sdks/aiagent/README.md#create_session) - Create a new AI agent session
* [send_message](docs/sdks/aiagent/README.md#send_message) - Send a message to an AI agent session

### [AiAgents](docs/sdks/aiagents/README.md)

* [get_org_costs](docs/sdks/aiagents/README.md#get_org_costs) - Get organization-wide cost summary

### [AiWorkflows](docs/sdks/aiworkflows/README.md)

* [get_execution_details](docs/sdks/aiworkflows/README.md#get_execution_details) - Get workflow execution details

### [Analytic](docs/sdks/analytic/README.md)

* [get_totals](docs/sdks/analytic/README.md#get_totals) - Get Analytic Totals
* [get_dashboard](docs/sdks/analytic/README.md#get_dashboard) - Get Dashboard Analytics

### [AuditLogs](docs/sdks/auditlogs/README.md)

* [list_permissions](docs/sdks/auditlogs/README.md#list_permissions) - List Permission Audit Logs
* [get_permission_stats](docs/sdks/auditlogs/README.md#get_permission_stats) - Get Permission Audit Stats

### [AuthContexts](docs/sdks/authcontexts/README.md)

* [get](docs/sdks/authcontexts/README.md#get) - Get Auth Context

### [AutomationCron](docs/sdks/automationcron/README.md)

* [trigger_scheduled](docs/sdks/automationcron/README.md#trigger_scheduled) - Trigger Scheduled Automation
* [health_check](docs/sdks/automationcron/README.md#health_check) - Cron Health Check

### [AutomationMetadata](docs/sdks/automationmetadata/README.md)

* [get_triggers](docs/sdks/automationmetadata/README.md#get_triggers) - Get trigger metadata
* [get_actions](docs/sdks/automationmetadata/README.md#get_actions) - Get action metadata
* [get_task](docs/sdks/automationmetadata/README.md#get_task) - Get task metadata
* [get_tasks](docs/sdks/automationmetadata/README.md#get_tasks) - Get all task metadata

### [AutomationRules](docs/sdks/automationrules/README.md)

* [get_metadata](docs/sdks/automationrules/README.md#get_metadata) - Get all metadata
* [get_conditions](docs/sdks/automationrules/README.md#get_conditions) - Get condition metadata
* [list](docs/sdks/automationrules/README.md#list) - List Rules
* [create](docs/sdks/automationrules/README.md#create) - Create Rule
* [get](docs/sdks/automationrules/README.md#get) - Get Rule
* [update](docs/sdks/automationrules/README.md#update) - Update Rule
* [delete](docs/sdks/automationrules/README.md#delete) - Delete Rule
* [patch](docs/sdks/automationrules/README.md#patch) - Patch Rule
* [execute](docs/sdks/automationrules/README.md#execute) - Execute Rule
* [get_executions](docs/sdks/automationrules/README.md#get_executions) - Get Rule Executions

### [Booking](docs/sdks/booking/README.md)

* [create](docs/sdks/booking/README.md#create) - Create Booking

### [Bookings](docs/sdks/bookings/README.md)

* [list](docs/sdks/bookings/README.md#list) - Get Bookings
* [get_by_id](docs/sdks/bookings/README.md#get_by_id) - Get Booking By Id
* [delete](docs/sdks/bookings/README.md#delete) - Delete Booking
* [check_availability](docs/sdks/bookings/README.md#check_availability) - Check Availability
* [get_place_schedule](docs/sdks/bookings/README.md#get_place_schedule) - Get Place Schedule
* [update](docs/sdks/bookings/README.md#update) - Update Booking

### [ChatMessages](docs/sdks/chatmessages/README.md)

* [list](docs/sdks/chatmessages/README.md#list) - List Messages
* [send](docs/sdks/chatmessages/README.md#send) - Send Message
* [delete](docs/sdks/chatmessages/README.md#delete) - Delete Message
* [get_count](docs/sdks/chatmessages/README.md#get_count) - Get Message Count
* [mark_read](docs/sdks/chatmessages/README.md#mark_read) - Mark Messages As Read
* [get_unread_count](docs/sdks/chatmessages/README.md#get_unread_count) - Get Unread Count

### [ChatRooms](docs/sdks/chatrooms/README.md)

* [create_direct](docs/sdks/chatrooms/README.md#create_direct) - Create Direct Room
* [create_group](docs/sdks/chatrooms/README.md#create_group) - Create Group Room
* [list](docs/sdks/chatrooms/README.md#list) - List User Rooms
* [get_by_id](docs/sdks/chatrooms/README.md#get_by_id) - Get Room By Id
* [update](docs/sdks/chatrooms/README.md#update) - Update Room
* [list_members](docs/sdks/chatrooms/README.md#list_members) - List Room Members
* [add_member](docs/sdks/chatrooms/README.md#add_member) - Add Member To Room
* [remove_member](docs/sdks/chatrooms/README.md#remove_member) - Remove Member From Room

### [Contacts](docs/sdks/contacts/README.md)

* [list](docs/sdks/contacts/README.md#list) - List Contacts
* [create](docs/sdks/contacts/README.md#create) - Create Contact
* [search](docs/sdks/contacts/README.md#search) - Search Contacts
* [get](docs/sdks/contacts/README.md#get) - Get Contact
* [update](docs/sdks/contacts/README.md#update) - Update Contact
* [delete](docs/sdks/contacts/README.md#delete) - Delete Contact
* [toggle_favorite](docs/sdks/contacts/README.md#toggle_favorite) - Toggle Favorite

### [CustomRoles](docs/sdks/customroles/README.md)

* [list](docs/sdks/customroles/README.md#list) - List Roles Endpoint
* [create](docs/sdks/customroles/README.md#create) - Create Role Endpoint
* [get](docs/sdks/customroles/README.md#get) - Get Role Endpoint
* [set_permissions](docs/sdks/customroles/README.md#set_permissions) - Set Permissions Endpoint
* [add_permission](docs/sdks/customroles/README.md#add_permission) - Add Permission Endpoint
* [remove_permission](docs/sdks/customroles/README.md#remove_permission) - Remove Permission Endpoint
* [assign_to_user](docs/sdks/customroles/README.md#assign_to_user) - Assign Role To User Endpoint
* [remove_user_role](docs/sdks/customroles/README.md#remove_user_role) - Remove Role From User Endpoint
* [update](docs/sdks/customroles/README.md#update) - Update Role Endpoint
* [get_my_permissions](docs/sdks/customroles/README.md#get_my_permissions) - Get My Permissions Endpoint

### [Event](docs/sdks/event/README.md)

* [get](docs/sdks/event/README.md#get) - Get Event By Id
* [update](docs/sdks/event/README.md#update) - Update Event
* [get_section_settings](docs/sdks/event/README.md#get_section_settings) - Get Section Settings
* [unpublish_version](docs/sdks/event/README.md#unpublish_version) - Unpublish Event (Mark as Draft)
* [compare_versions](docs/sdks/event/README.md#compare_versions) - Compare Event Versions
* [get_latest_version](docs/sdks/event/README.md#get_latest_version) - Get Latest Event Version
* [get_version](docs/sdks/event/README.md#get_version) - Get Event Version

### [EventAttendees](docs/sdks/eventattendees/README.md)

* [get](docs/sdks/eventattendees/README.md#get) - Get Event Attendees
* [add](docs/sdks/eventattendees/README.md#add) - Add Event Attendee
* [add_bulk](docs/sdks/eventattendees/README.md#add_bulk) - Add Event Attendees Bulk
* [remove_bulk](docs/sdks/eventattendees/README.md#remove_bulk) - Remove Event Attendees Bulk
* [update](docs/sdks/eventattendees/README.md#update) - Update Event Attendee
* [remove](docs/sdks/eventattendees/README.md#remove) - Remove Event Attendee
* [check_in](docs/sdks/eventattendees/README.md#check_in) - Check In Attendee
* [update_bulk_status](docs/sdks/eventattendees/README.md#update_bulk_status) - Update Attendees Status Bulk

### [EventDocuments](docs/sdks/eventdocuments/README.md)

* [add_document](docs/sdks/eventdocuments/README.md#add_document) - Add Document To Event
* [remove](docs/sdks/eventdocuments/README.md#remove) - Remove Document From Event
* [get_documents](docs/sdks/eventdocuments/README.md#get_documents) - Get Event Documents

### [EventLocation](docs/sdks/eventlocation/README.md)

* [get](docs/sdks/eventlocation/README.md#get) - Get Event Location
* [update](docs/sdks/eventlocation/README.md#update) - Update Event Location

### [Events](docs/sdks/events/README.md)

* [list](docs/sdks/events/README.md#list) - Get Event List
* [publish_with_notifications](docs/sdks/events/README.md#publish_with_notifications) - Publish Event With Notifications
* [create](docs/sdks/events/README.md#create) - Create Event
* [list_calendar](docs/sdks/events/README.md#list_calendar) - Get Calendar Events
* [get_social_feed](docs/sdks/events/README.md#get_social_feed) - Get Social Feed
* [filter_advanced](docs/sdks/events/README.md#filter_advanced) - Filter Events Advanced
* [list_by_space](docs/sdks/events/README.md#list_by_space) - Get Events By Space
* [delete](docs/sdks/events/README.md#delete) - Delete Event
* [patch_identification](docs/sdks/events/README.md#patch_identification) - Patch Event Identification
* [get_section_identification](docs/sdks/events/README.md#get_section_identification) - Get Section Identification
* [get_section_content](docs/sdks/events/README.md#get_section_content) - Get Section Content
* [patch_content](docs/sdks/events/README.md#patch_content) - Patch Event Content
* [get_settings](docs/sdks/events/README.md#get_settings) - Get Event Settings
* [patch_settings](docs/sdks/events/README.md#patch_settings) - Patch Event Settings
* [update_cover](docs/sdks/events/README.md#update_cover) - Update Cover
* [publish](docs/sdks/events/README.md#publish) - Publish Event
* [archive](docs/sdks/events/README.md#archive) - Archive Event
* [transfer](docs/sdks/events/README.md#transfer) - Transfer Event
* [publish_version](docs/sdks/events/README.md#publish_version) - Publish Event Version
* [list_versions](docs/sdks/events/README.md#list_versions) - List Event Versions
* [rollback_version](docs/sdks/events/README.md#rollback_version) - Rollback Event to Version
* [get_timezones](docs/sdks/events/README.md#get_timezones) - Get Timezone Info

### [EventTimeline](docs/sdks/eventtimeline/README.md)

* [get](docs/sdks/eventtimeline/README.md#get) - Get event timeline
* [get_published](docs/sdks/eventtimeline/README.md#get_published) - Get published event timeline
* [create_milestone](docs/sdks/eventtimeline/README.md#create_milestone) - Create and link milestone
* [link_milestone](docs/sdks/eventtimeline/README.md#link_milestone) - Link existing event
* [unlink](docs/sdks/eventtimeline/README.md#unlink) - Unlink milestone

### [EventTimezones](docs/sdks/eventtimezones/README.md)

* [validate](docs/sdks/eventtimezones/README.md#validate) - Validate Timezone

### [Features](docs/sdks/features/README.md)

* [get](docs/sdks/features/README.md#get) - Get Feature Flags

### [Health](docs/sdks/health/README.md)

* [check_automation](docs/sdks/health/README.md#check_automation) - Automation Health Check
* [check](docs/sdks/health/README.md#check) - Health Check

### [HealthNotifications](docs/sdks/healthnotifications/README.md)

* [check](docs/sdks/healthnotifications/README.md#check) - Notification Health Check

### [Integration](docs/sdks/integration/README.md)

* [handle_org_removed](docs/sdks/integration/README.md#handle_org_removed) - Webhook from Zitadel for organization removal

### [Integrations](docs/sdks/integrations/README.md)

* [handle_org_created](docs/sdks/integrations/README.md#handle_org_created) - Webhook from Zitadel for organization creation

### [IntegrationUser](docs/sdks/integrationuser/README.md)

* [handle_removed](docs/sdks/integrationuser/README.md#handle_removed) - Webhook from Zitadel for user removal

### [Metrics](docs/sdks/metrics/README.md)

* [get](docs/sdks/metrics/README.md#get) - Metrics

### [Organizations](docs/sdks/organizations/README.md)

* [list](docs/sdks/organizations/README.md#list) - List Organizations Endpoint
* [create](docs/sdks/organizations/README.md#create) - Create Organization Endpoint
* [get_current](docs/sdks/organizations/README.md#get_current) - Get Current Organization Endpoint
* [get_invites](docs/sdks/organizations/README.md#get_invites) - Get Organization Invites Endpoint
* [create_invite](docs/sdks/organizations/README.md#create_invite) - Create Invite Endpoint
* [delete_invite](docs/sdks/organizations/README.md#delete_invite) - Delete Invite Endpoint
* [get_by_id](docs/sdks/organizations/README.md#get_by_id) - Get Organization Endpoint
* [update](docs/sdks/organizations/README.md#update) - Update Organization Endpoint
* [archive](docs/sdks/organizations/README.md#archive) - Archive Organization Endpoint

### [Permissions](docs/sdks/permissions/README.md)

* [list](docs/sdks/permissions/README.md#list) - List Permissions Endpoint
* [get](docs/sdks/permissions/README.md#get) - Get Permission Endpoint

### [Place](docs/sdks/place/README.md)

* [publish](docs/sdks/place/README.md#publish) - Publish Place
* [archive](docs/sdks/place/README.md#archive) - Archive Place

### [Places](docs/sdks/places/README.md)

* [list](docs/sdks/places/README.md#list) - Get Place List
* [create](docs/sdks/places/README.md#create) - Create Place
* [get](docs/sdks/places/README.md#get) - Get Place By Id
* [update](docs/sdks/places/README.md#update) - Update Place
* [delete](docs/sdks/places/README.md#delete) - Delete Place

### [PublicEvents](docs/sdks/publicevents/README.md)

* [get_latest_version](docs/sdks/publicevents/README.md#get_latest_version) - Get Latest Event Version (Public Access)

### [PublicSpaces](docs/sdks/publicspaces/README.md)

* [get_latest_version](docs/sdks/publicspaces/README.md#get_latest_version) - Get Latest Published Version

### [Realtime](docs/sdks/realtime/README.md)

* [get_info](docs/sdks/realtime/README.md#get_info) - Realtime WebSocket protocol info
* [connect](docs/sdks/realtime/README.md#connect) - Establish realtime WebSocket connection (upgrade)

### [Roles](docs/sdks/roles/README.md)

* [delete](docs/sdks/roles/README.md#delete) - Delete Role Endpoint

### [Sentry](docs/sdks/sentry/README.md)

* [trigger_error](docs/sdks/sentry/README.md#trigger_error) - Trigger Sentry Error

### [Space](docs/sdks/space/README.md)

* [test_auth](docs/sdks/space/README.md#test_auth) - Test Auth
* [update](docs/sdks/space/README.md#update) - Update Space
* [publish](docs/sdks/space/README.md#publish) - Publish Space
* [archive](docs/sdks/space/README.md#archive) - Archive Space
* [update_member_role](docs/sdks/space/README.md#update_member_role) - Update Space Member Role
* [transfer](docs/sdks/space/README.md#transfer) - Transfer Space
* [bulk_update_parent](docs/sdks/space/README.md#bulk_update_parent) - Bulk Update Space Parent
* [get_latest_version](docs/sdks/space/README.md#get_latest_version) - Get latest published space version
* [get_user_roles](docs/sdks/space/README.md#get_user_roles) - Get User Space Roles
* [assign_user_to_role](docs/sdks/space/README.md#assign_user_to_role) - Assign User To Space Role

### [SpaceMemberRoles](docs/sdks/spacememberroles/README.md)

* [get_user_roles](docs/sdks/spacememberroles/README.md#get_user_roles) - Get User Space Roles
* [assign_user_to_role](docs/sdks/spacememberroles/README.md#assign_user_to_role) - Assign User To Space Role

### [SpaceContacts](docs/sdks/spacecontacts/README.md)

* [get_contacts_by_space](docs/sdks/spacecontacts/README.md#get_contacts_by_space) - Get Space Contacts
* [add](docs/sdks/spacecontacts/README.md#add) - Add Contact To Space
* [get_spaces_by_contact](docs/sdks/spacecontacts/README.md#get_spaces_by_contact) - Get Contact Spaces
* [get](docs/sdks/spacecontacts/README.md#get) - Get Space Contact
* [remove](docs/sdks/spacecontacts/README.md#remove) - Remove Contact From Space
* [add_bulk](docs/sdks/spacecontacts/README.md#add_bulk) - Bulk Add Contacts To Space
* [bulk_delete](docs/sdks/spacecontacts/README.md#bulk_delete) - Bulk Remove Contacts From Space
* [count](docs/sdks/spacecontacts/README.md#count) - Count Space Contacts

### [SpaceDocuments](docs/sdks/spacedocuments/README.md)

* [add](docs/sdks/spacedocuments/README.md#add) - Add Document To Space
* [remove](docs/sdks/spacedocuments/README.md#remove) - Remove Document From Space
* [get](docs/sdks/spacedocuments/README.md#get) - Get Space Documents

### [SpaceEvents](docs/sdks/spaceevents/README.md)

* [get](docs/sdks/spaceevents/README.md#get) - Get Space Events
* [add](docs/sdks/spaceevents/README.md#add) - Add Event To Space
* [get_event_spaces](docs/sdks/spaceevents/README.md#get_event_spaces) - Get Event Spaces
* [get_by_id](docs/sdks/spaceevents/README.md#get_by_id) - Get Space Event
* [remove_event](docs/sdks/spaceevents/README.md#remove_event) - Remove Event From Space
* [bulk_add](docs/sdks/spaceevents/README.md#bulk_add) - Bulk Add Events To Space
* [bulk_remove](docs/sdks/spaceevents/README.md#bulk_remove) - Bulk Remove Events From Space
* [count](docs/sdks/spaceevents/README.md#count) - Count Space Events

### [SpaceRoles](docs/sdks/spaceroles/README.md)

* [list_roles](docs/sdks/spaceroles/README.md#list_roles) - List Space Roles
* [create](docs/sdks/spaceroles/README.md#create) - Create Space Role
* [get](docs/sdks/spaceroles/README.md#get) - Get Space Role
* [update_role](docs/sdks/spaceroles/README.md#update_role) - Update Space Role
* [delete](docs/sdks/spaceroles/README.md#delete) - Delete Space Role
* [remove_permission](docs/sdks/spaceroles/README.md#remove_permission) - Remove Permission From Space Role
* [assign_permission](docs/sdks/spaceroles/README.md#assign_permission) - Assign Permission To Space Role

### [Spaces](docs/sdks/spaces/README.md)

* [list](docs/sdks/spaces/README.md#list) - Get Space List
* [create_space](docs/sdks/spaces/README.md#create_space) - Create Space
* [delete_by_id](docs/sdks/spaces/README.md#delete_by_id) - Delete Space
* [create_with_parent](docs/sdks/spaces/README.md#create_with_parent) - Create Space With Parent
* [publish_version](docs/sdks/spaces/README.md#publish_version) - Publish space
* [get_members](docs/sdks/spaces/README.md#get_members) - Get Space Members
* [add_member](docs/sdks/spaces/README.md#add_member) - Add Space Member
* [get_joinable_by_user](docs/sdks/spaces/README.md#get_joinable_by_user) - Get Joinable Spaces By User
* [join](docs/sdks/spaces/README.md#join) - Join Space
* [detach_parent](docs/sdks/spaces/README.md#detach_parent) - Detach Space From Parent
* [update_parent](docs/sdks/spaces/README.md#update_parent) - Update Space Parent
* [get_hierarchy](docs/sdks/spaces/README.md#get_hierarchy) - Get Space Hierarchy
* [unpublish](docs/sdks/spaces/README.md#unpublish) - Unpublish space
* [list_versions](docs/sdks/spaces/README.md#list_versions) - List space versions
* [get_version](docs/sdks/spaces/README.md#get_version) - Get specific space version
* [compare_versions](docs/sdks/spaces/README.md#compare_versions) - Compare space versions
* [rollback](docs/sdks/spaces/README.md#rollback) - Rollback space to version
* [remove_user_from_role](docs/sdks/spaces/README.md#remove_user_from_role) - Remove User From Space Role
* [get_by_id](docs/sdks/spaces/README.md#get_by_id) - Get Space By Id
* [remove_member](docs/sdks/spaces/README.md#remove_member) - Remove Space Member
* [list_children](docs/sdks/spaces/README.md#list_children) - Get Space Children
* [get_parent](docs/sdks/spaces/README.md#get_parent) - Get Space Parent

### [User](docs/sdks/user/README.md)

* [get_assistant](docs/sdks/user/README.md#get_assistant) - Get Assistant
* [create_assistant](docs/sdks/user/README.md#create_assistant) - Create Assistant
* [list](docs/sdks/user/README.md#list) - Get User List
* [update_profile](docs/sdks/user/README.md#update_profile) - Update Profile
* [get_profile](docs/sdks/user/README.md#get_profile) - Get User Profile By Id
* [upload_avatar](docs/sdks/user/README.md#upload_avatar) - Upload Avatar

### [Users](docs/sdks/users/README.md)

* [search](docs/sdks/users/README.md#search) - Search Users
* [get_current_profile](docs/sdks/users/README.md#get_current_profile) - Get Current User Profile
* [get_avatar](docs/sdks/users/README.md#get_avatar) - Get Avatar
* [delete_avatar](docs/sdks/users/README.md#delete_avatar) - Delete Avatar
* [get_avatar_by_id](docs/sdks/users/README.md#get_avatar_by_id) - Get User Avatar

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept file objects as part of a request body or multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> For endpoints that handle file uploads bytes arrays can also be used. However, using streams is recommended for large files.
>

```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.user.upload_avatar(file={
        "file_name": "example.file",
        "content": open("example.file", "rb"),
    })

    # Handle response
    print(res)

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries. If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API. However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a `RetryConfig` object to the call:
```python
from linebundle_sdk import Linebundle, models
from linebundle_sdk.utils import BackoffStrategy, RetryConfig


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.user.get_assistant(,
        RetryConfig("backoff", BackoffStrategy(1, 50, 1.1, 100), False))

    # Handle response
    print(res)

```

If you'd like to override the default retry strategy for all operations that support retries, you can use the `retry_config` optional parameter when initializing the SDK:
```python
from linebundle_sdk import Linebundle, models
from linebundle_sdk.utils import BackoffStrategy, RetryConfig


with Linebundle(
    retry_config=RetryConfig("backoff", BackoffStrategy(1, 50, 1.1, 100), False),
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.user.get_assistant()

    # Handle response
    print(res)

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`LinebundleError`](./src/linebundle_sdk/errors/linebundleerror.py) is the base class for all HTTP error responses. It has the following properties:

| Property           | Type             | Description                                                                             |
| ------------------ | ---------------- | --------------------------------------------------------------------------------------- |
| `err.message`      | `str`            | Error message                                                                           |
| `err.status_code`  | `int`            | HTTP response status code eg `404`                                                      |
| `err.headers`      | `httpx.Headers`  | HTTP response headers                                                                   |
| `err.body`         | `str`            | HTTP body. Can be empty string if no body is returned.                                  |
| `err.raw_response` | `httpx.Response` | Raw HTTP response                                                                       |
| `err.data`         |                  | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```python
from linebundle_sdk import Linebundle, errors


with Linebundle() as linebundle:
    res = None
    try:

        res = linebundle.user.list(limit=10)

        # Handle response
        print(res)


    except errors.LinebundleError as e:
        # The base class for HTTP error responses
        print(e.message)
        print(e.status_code)
        print(e.body)
        print(e.headers)
        print(e.raw_response)

        # Depending on the method different errors may be thrown
        if isinstance(e, errors.HTTPValidationError):
            print(e.data.detail)  # Optional[List[models.ValidationError]]
```

### Error Classes
**Primary errors:**
* [`LinebundleError`](./src/linebundle_sdk/errors/linebundleerror.py): The base class for HTTP error responses.
  * [`HTTPValidationError`](./src/linebundle_sdk/errors/httpvalidationerror.py): Validation Error. Status code `422`. *

<details><summary>Less common errors (5)</summary>

<br />

**Network errors:**
* [`httpx.RequestError`](https://www.python-httpx.org/exceptions/#httpx.RequestError): Base class for request errors.
    * [`httpx.ConnectError`](https://www.python-httpx.org/exceptions/#httpx.ConnectError): HTTP client was unable to make a request to a server.
    * [`httpx.TimeoutException`](https://www.python-httpx.org/exceptions/#httpx.TimeoutException): HTTP request timed out.


**Inherit from [`LinebundleError`](./src/linebundle_sdk/errors/linebundleerror.py)**:
* [`ResponseValidationError`](./src/linebundle_sdk/errors/responsevalidationerror.py): Type mismatch between the response data and the expected Pydantic model. Provides access to the Pydantic validation error via the `cause` attribute.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `server_url: str` optional parameter when initializing the SDK client instance. For example:
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    server_url="https://api.linebundle.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.user.get_assistant()

    # Handle response
    print(res)

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Python SDK makes API calls using the [httpx](https://www.python-httpx.org/) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with your own HTTP client instance.
Depending on whether you are using the sync or async version of the SDK, you can pass an instance of `HttpClient` or `AsyncHttpClient` respectively, which are Protocol's ensuring that the client has the necessary methods to make API calls.
This allows you to wrap the client with your own custom logic, such as adding custom headers, logging, or error handling, or you can just pass an instance of `httpx.Client` or `httpx.AsyncClient` directly.

For example, you could specify a header for every request that this sdk makes as follows:
```python
from linebundle_sdk import Linebundle
import httpx

http_client = httpx.Client(headers={"x-custom-header": "someValue"})
s = Linebundle(client=http_client)
```

or you could wrap the client with your own custom logic:
```python
from linebundle_sdk import Linebundle
from linebundle_sdk.httpclient import AsyncHttpClient
import httpx

class CustomClient(AsyncHttpClient):
    client: AsyncHttpClient

    def __init__(self, client: AsyncHttpClient):
        self.client = client

    async def send(
        self,
        request: httpx.Request,
        *,
        stream: bool = False,
        auth: Union[
            httpx._types.AuthTypes, httpx._client.UseClientDefault, None
        ] = httpx.USE_CLIENT_DEFAULT,
        follow_redirects: Union[
            bool, httpx._client.UseClientDefault
        ] = httpx.USE_CLIENT_DEFAULT,
    ) -> httpx.Response:
        request.headers["Client-Level-Header"] = "added by client"

        return await self.client.send(
            request, stream=stream, auth=auth, follow_redirects=follow_redirects
        )

    def build_request(
        self,
        method: str,
        url: httpx._types.URLTypes,
        *,
        content: Optional[httpx._types.RequestContent] = None,
        data: Optional[httpx._types.RequestData] = None,
        files: Optional[httpx._types.RequestFiles] = None,
        json: Optional[Any] = None,
        params: Optional[httpx._types.QueryParamTypes] = None,
        headers: Optional[httpx._types.HeaderTypes] = None,
        cookies: Optional[httpx._types.CookieTypes] = None,
        timeout: Union[
            httpx._types.TimeoutTypes, httpx._client.UseClientDefault
        ] = httpx.USE_CLIENT_DEFAULT,
        extensions: Optional[httpx._types.RequestExtensions] = None,
    ) -> httpx.Request:
        return self.client.build_request(
            method,
            url,
            content=content,
            data=data,
            files=files,
            json=json,
            params=params,
            headers=headers,
            cookies=cookies,
            timeout=timeout,
            extensions=extensions,
        )

s = Linebundle(async_client=CustomClient(httpx.AsyncClient()))
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Resource Management [resource-management] -->
## Resource Management

The `Linebundle` class implements the context manager protocol and registers a finalizer function to close the underlying sync and async HTTPX clients it uses under the hood. This will close HTTP connections, release memory and free up other resources held by the SDK. In short-lived Python programs and notebooks that make a few SDK method calls, resource management may not be a concern. However, in longer-lived programs, it is beneficial to create a single SDK instance via a [context manager][context-manager] and reuse it across the application.

[context-manager]: https://docs.python.org/3/reference/datamodel.html#context-managers

```python
from linebundle_sdk import Linebundle, models
def main():

    with Linebundle(
        security=models.Security(
            oidc="<YOUR_API_KEY_HERE>",
        ),
    ) as linebundle:
        # Rest of application here...


# Or when using async:
async def amain():

    async with Linebundle(
        security=models.Security(
            oidc="<YOUR_API_KEY_HERE>",
        ),
    ) as linebundle:
        # Rest of application here...
```
<!-- End Resource Management [resource-management] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass your own logger class directly into your SDK.
```python
from linebundle_sdk import Linebundle
import logging

logging.basicConfig(level=logging.DEBUG)
s = Linebundle(debug_logger=logging.getLogger("linebundle_sdk"))
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

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=linebundle-sdk&utm_campaign=python)
