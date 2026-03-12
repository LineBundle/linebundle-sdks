# openapi

Developer-friendly & type-safe Python SDK specifically catered to leverage *openapi* API.

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=openapi&utm_campaign=python)
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
* [openapi](#openapi)
  * [Realtime WebSocket](#realtime-websocket)
  * [SDK Installation](#sdk-installation)
  * [IDE Support](#ide-support)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
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
uvx --from openapi python
```

It's also possible to write a standalone Python script without needing to set up a whole project like so:

```python
#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "openapi",
# ]
# ///

from openapi import SDK

sdk = SDK(
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
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.handle_org_created_api_v1_integration_org_created_post()

    # Handle response
    print(res)
```

</br>

The same SDK client can also be used to make asynchronous requests by importing asyncio.

```python
# Asynchronous Example
import asyncio
from openapi import SDK, models

async def main():

    async with SDK(
        "https://api.example.com",
        security=models.Security(
            oidc="<YOUR_API_KEY_HERE>",
        ),
    ) as sdk:

        res = await sdk.handle_org_created_api_v1_integration_org_created_post_async()

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
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.handle_org_created_api_v1_integration_org_created_post()

    # Handle response
    print(res)

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
) as sdk:

    res = sdk.user.get_user_list_api_v1_user_get(security=models.GetUserListAPIV1UserGetSecurity(
        permission_dependency="<YOUR_BEARER_TOKEN_HERE>",
    ), limit=10)

    # Handle response
    print(res)

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [SDK](docs/sdks/sdk/README.md)

* [handle_org_created_api_v1_integration_org_created_post](docs/sdks/sdk/README.md#handle_org_created_api_v1_integration_org_created_post) - Webhook from Zitadel for organization creation
* [handle_org_removed_api_v1_integration_org_removed_post](docs/sdks/sdk/README.md#handle_org_removed_api_v1_integration_org_removed_post) - Webhook from Zitadel for organization removal
* [handle_user_removed_api_v1_integration_user_removed_post](docs/sdks/sdk/README.md#handle_user_removed_api_v1_integration_user_removed_post) - Webhook from Zitadel for user removal
* [get_latest_published_version_api_v1_public_space_space_id_versions_latest_get](docs/sdks/sdk/README.md#get_latest_published_version_api_v1_public_space_space_id_versions_latest_get) - Get Latest Published Version
* [health_check_health_get](docs/sdks/sdk/README.md#health_check_health_get) - Health Check
* [trigger_sentry_error_sentry_debug_get](docs/sdks/sdk/README.md#trigger_sentry_error_sentry_debug_get) - Trigger Sentry Error
* [notification_health_check_health_notifications_get](docs/sdks/sdk/README.md#notification_health_check_health_notifications_get) - Notification Health Check
* [metrics_metrics_get](docs/sdks/sdk/README.md#metrics_metrics_get) - Metrics
* [get_feature_flags_config_features_get](docs/sdks/sdk/README.md#get_feature_flags_config_features_get) - Get Feature Flags

### [AiAgent](docs/sdks/aiagent/README.md)

* [list_sessions_api_v1_ai_sessions_get](docs/sdks/aiagent/README.md#list_sessions_api_v1_ai_sessions_get) - List AI agent sessions
* [create_session_api_v1_ai_sessions_post](docs/sdks/aiagent/README.md#create_session_api_v1_ai_sessions_post) - Create a new AI agent session
* [send_message_api_v1_ai_sessions_session_id_messages_post](docs/sdks/aiagent/README.md#send_message_api_v1_ai_sessions_session_id_messages_post) - Send a message to an AI agent session
* [get_session_api_v1_ai_sessions_session_id_get](docs/sdks/aiagent/README.md#get_session_api_v1_ai_sessions_session_id_get) - Get AI agent session details
* [delete_session_api_v1_ai_sessions_session_id_delete](docs/sdks/aiagent/README.md#delete_session_api_v1_ai_sessions_session_id_delete) - Delete AI agent session
* [get_session_costs_api_v1_ai_sessions_session_id_costs_get](docs/sdks/aiagent/README.md#get_session_costs_api_v1_ai_sessions_session_id_costs_get) - Get session cost breakdown
* [get_org_costs_api_v1_ai_costs_get](docs/sdks/aiagent/README.md#get_org_costs_api_v1_ai_costs_get) - Get organization-wide cost summary
* [list_workflow_executions_api_v1_ai_workflows_get](docs/sdks/aiagent/README.md#list_workflow_executions_api_v1_ai_workflows_get) - List workflow executions
* [start_workflow_api_v1_ai_workflows_post](docs/sdks/aiagent/README.md#start_workflow_api_v1_ai_workflows_post) - Start a multi-agent workflow
* [start_workflow_async_api_v1_ai_workflows_async_post](docs/sdks/aiagent/README.md#start_workflow_async_api_v1_ai_workflows_async_post) - Start a multi-agent workflow (async)
* [get_workflow_execution_api_v1_ai_workflows_execution_id_get](docs/sdks/aiagent/README.md#get_workflow_execution_api_v1_ai_workflows_execution_id_get) - Get workflow execution details
* [cancel_workflow_api_v1_ai_workflows_execution_id_cancel_post](docs/sdks/aiagent/README.md#cancel_workflow_api_v1_ai_workflows_execution_id_cancel_post) - Cancel a running workflow

### [Analytic](docs/sdks/analytic/README.md)

* [get_analytic_totals_api_v1_analytic_counts_get](docs/sdks/analytic/README.md#get_analytic_totals_api_v1_analytic_counts_get) - Get Analytic Totals
* [get_dashboard_analytics_api_v1_analytic_dashboard_get](docs/sdks/analytic/README.md#get_dashboard_analytics_api_v1_analytic_dashboard_get) - Get Dashboard Analytics

### [AuditLogs](docs/sdks/auditlogs/README.md)

* [list_permission_audit_logs_api_v1_audit_logs_permissions_get](docs/sdks/auditlogs/README.md#list_permission_audit_logs_api_v1_audit_logs_permissions_get) - List Permission Audit Logs
* [get_permission_audit_stats_api_v1_audit_logs_permissions_stats_get](docs/sdks/auditlogs/README.md#get_permission_audit_stats_api_v1_audit_logs_permissions_stats_get) - Get Permission Audit Stats

### [AuthContext](docs/sdks/authcontext/README.md)

* [get_auth_context_api_v1_auth_context_get](docs/sdks/authcontext/README.md#get_auth_context_api_v1_auth_context_get) - Get Auth Context

### [AutomationCron](docs/sdks/automationcron/README.md)

* [trigger_scheduled_automation_api_v1_automation_api_v1_automation_cron_trigger_scheduled_post](docs/sdks/automationcron/README.md#trigger_scheduled_automation_api_v1_automation_api_v1_automation_cron_trigger_scheduled_post) - Trigger Scheduled Automation
* [cron_health_check_api_v1_automation_api_v1_automation_cron_health_get](docs/sdks/automationcron/README.md#cron_health_check_api_v1_automation_api_v1_automation_cron_health_get) - Cron Health Check

### [AutomationMetadata](docs/sdks/automationmetadata/README.md)

* [get_all_metadata_api_v1_automation_metadata_get](docs/sdks/automationmetadata/README.md#get_all_metadata_api_v1_automation_metadata_get) - Get all metadata
* [get_triggers_api_v1_automation_metadata_triggers_get](docs/sdks/automationmetadata/README.md#get_triggers_api_v1_automation_metadata_triggers_get) - Get trigger metadata
* [get_conditions_api_v1_automation_metadata_conditions_get](docs/sdks/automationmetadata/README.md#get_conditions_api_v1_automation_metadata_conditions_get) - Get condition metadata
* [get_actions_api_v1_automation_metadata_actions_get](docs/sdks/automationmetadata/README.md#get_actions_api_v1_automation_metadata_actions_get) - Get action metadata
* [get_task_metadata_api_v1_automation_metadata_tasks_task_type_get](docs/sdks/automationmetadata/README.md#get_task_metadata_api_v1_automation_metadata_tasks_task_type_get) - Get task metadata
* [get_all_tasks_api_v1_automation_metadata_tasks_get](docs/sdks/automationmetadata/README.md#get_all_tasks_api_v1_automation_metadata_tasks_get) - Get all task metadata

### [AutomationRules](docs/sdks/automationrules/README.md)

* [get_all_metadata_api_v1_automation_metadata_get](docs/sdks/automationrules/README.md#get_all_metadata_api_v1_automation_metadata_get) - Get all metadata
* [get_triggers_api_v1_automation_metadata_triggers_get](docs/sdks/automationrules/README.md#get_triggers_api_v1_automation_metadata_triggers_get) - Get trigger metadata
* [get_conditions_api_v1_automation_metadata_conditions_get](docs/sdks/automationrules/README.md#get_conditions_api_v1_automation_metadata_conditions_get) - Get condition metadata
* [get_actions_api_v1_automation_metadata_actions_get](docs/sdks/automationrules/README.md#get_actions_api_v1_automation_metadata_actions_get) - Get action metadata
* [get_task_metadata_api_v1_automation_metadata_tasks_task_type_get](docs/sdks/automationrules/README.md#get_task_metadata_api_v1_automation_metadata_tasks_task_type_get) - Get task metadata
* [get_all_tasks_api_v1_automation_metadata_tasks_get](docs/sdks/automationrules/README.md#get_all_tasks_api_v1_automation_metadata_tasks_get) - Get all task metadata
* [trigger_scheduled_automation_api_v1_automation_api_v1_automation_cron_trigger_scheduled_post](docs/sdks/automationrules/README.md#trigger_scheduled_automation_api_v1_automation_api_v1_automation_cron_trigger_scheduled_post) - Trigger Scheduled Automation
* [cron_health_check_api_v1_automation_api_v1_automation_cron_health_get](docs/sdks/automationrules/README.md#cron_health_check_api_v1_automation_api_v1_automation_cron_health_get) - Cron Health Check
* [list_rules_api_v1_automation_rules_get](docs/sdks/automationrules/README.md#list_rules_api_v1_automation_rules_get) - List Rules
* [create_rule_api_v1_automation_rules_post](docs/sdks/automationrules/README.md#create_rule_api_v1_automation_rules_post) - Create Rule
* [get_rule_api_v1_automation_rules_rule_id_get](docs/sdks/automationrules/README.md#get_rule_api_v1_automation_rules_rule_id_get) - Get Rule
* [update_rule_api_v1_automation_rules_rule_id_put](docs/sdks/automationrules/README.md#update_rule_api_v1_automation_rules_rule_id_put) - Update Rule
* [delete_rule_api_v1_automation_rules_rule_id_delete](docs/sdks/automationrules/README.md#delete_rule_api_v1_automation_rules_rule_id_delete) - Delete Rule
* [patch_rule_api_v1_automation_rules_rule_id_patch](docs/sdks/automationrules/README.md#patch_rule_api_v1_automation_rules_rule_id_patch) - Patch Rule
* [execute_rule_api_v1_automation_rules_rule_id_execute_post](docs/sdks/automationrules/README.md#execute_rule_api_v1_automation_rules_rule_id_execute_post) - Execute Rule
* [get_rule_executions_api_v1_automation_rules_rule_id_executions_get](docs/sdks/automationrules/README.md#get_rule_executions_api_v1_automation_rules_rule_id_executions_get) - Get Rule Executions
* [automation_health_check_api_v1_automation_health_get](docs/sdks/automationrules/README.md#automation_health_check_api_v1_automation_health_get) - Automation Health Check

### [Booking](docs/sdks/booking/README.md)

* [get_bookings_api_v1_booking_get](docs/sdks/booking/README.md#get_bookings_api_v1_booking_get) - Get Bookings
* [create_booking_api_v1_booking_post](docs/sdks/booking/README.md#create_booking_api_v1_booking_post) - Create Booking
* [get_booking_by_id_api_v1_booking_booking_id_get](docs/sdks/booking/README.md#get_booking_by_id_api_v1_booking_booking_id_get) - Get Booking By Id
* [update_booking_api_v1_booking_booking_id_put](docs/sdks/booking/README.md#update_booking_api_v1_booking_booking_id_put) - Update Booking
* [delete_booking_api_v1_booking_booking_id_delete](docs/sdks/booking/README.md#delete_booking_api_v1_booking_booking_id_delete) - Delete Booking
* [check_availability_api_v1_booking_check_availability_post](docs/sdks/booking/README.md#check_availability_api_v1_booking_check_availability_post) - Check Availability
* [get_place_schedule_api_v1_booking_places_place_id_schedule_get](docs/sdks/booking/README.md#get_place_schedule_api_v1_booking_places_place_id_schedule_get) - Get Place Schedule

### [ChatMessages](docs/sdks/chatmessages/README.md)

* [list_messages_api_v1_chat_room_id_messages_get](docs/sdks/chatmessages/README.md#list_messages_api_v1_chat_room_id_messages_get) - List Messages
* [send_message_api_v1_chat_room_id_messages_post](docs/sdks/chatmessages/README.md#send_message_api_v1_chat_room_id_messages_post) - Send Message
* [delete_message_api_v1_chat_messages_message_id_delete](docs/sdks/chatmessages/README.md#delete_message_api_v1_chat_messages_message_id_delete) - Delete Message
* [get_message_count_api_v1_chat_room_id_messages_count_get](docs/sdks/chatmessages/README.md#get_message_count_api_v1_chat_room_id_messages_count_get) - Get Message Count
* [mark_messages_as_read_api_v1_chat_room_id_read_patch](docs/sdks/chatmessages/README.md#mark_messages_as_read_api_v1_chat_room_id_read_patch) - Mark Messages As Read
* [get_unread_count_api_v1_chat_room_id_unread_count_get](docs/sdks/chatmessages/README.md#get_unread_count_api_v1_chat_room_id_unread_count_get) - Get Unread Count

### [ChatRooms](docs/sdks/chatrooms/README.md)

* [create_direct_room_api_v1_chat_rooms_direct_post](docs/sdks/chatrooms/README.md#create_direct_room_api_v1_chat_rooms_direct_post) - Create Direct Room
* [create_group_room_api_v1_chat_rooms_group_post](docs/sdks/chatrooms/README.md#create_group_room_api_v1_chat_rooms_group_post) - Create Group Room
* [list_user_rooms_api_v1_chat_rooms_get](docs/sdks/chatrooms/README.md#list_user_rooms_api_v1_chat_rooms_get) - List User Rooms
* [get_room_by_id_api_v1_chat_rooms_room_id_get](docs/sdks/chatrooms/README.md#get_room_by_id_api_v1_chat_rooms_room_id_get) - Get Room By Id
* [update_room_api_v1_chat_rooms_room_id_patch](docs/sdks/chatrooms/README.md#update_room_api_v1_chat_rooms_room_id_patch) - Update Room
* [list_room_members_api_v1_chat_rooms_room_id_members_get](docs/sdks/chatrooms/README.md#list_room_members_api_v1_chat_rooms_room_id_members_get) - List Room Members
* [add_member_to_room_api_v1_chat_rooms_room_id_members_post](docs/sdks/chatrooms/README.md#add_member_to_room_api_v1_chat_rooms_room_id_members_post) - Add Member To Room
* [remove_member_from_room_api_v1_chat_rooms_room_id_members_user_id_delete](docs/sdks/chatrooms/README.md#remove_member_from_room_api_v1_chat_rooms_room_id_members_user_id_delete) - Remove Member From Room

### [Contacts](docs/sdks/contacts/README.md)

* [list_contacts_api_v1_contacts_get](docs/sdks/contacts/README.md#list_contacts_api_v1_contacts_get) - List Contacts
* [create_contact_api_v1_contacts_post](docs/sdks/contacts/README.md#create_contact_api_v1_contacts_post) - Create Contact
* [search_contacts_api_v1_contacts_search_get](docs/sdks/contacts/README.md#search_contacts_api_v1_contacts_search_get) - Search Contacts
* [get_contact_api_v1_contacts_contact_id_get](docs/sdks/contacts/README.md#get_contact_api_v1_contacts_contact_id_get) - Get Contact
* [update_contact_api_v1_contacts_contact_id_put](docs/sdks/contacts/README.md#update_contact_api_v1_contacts_contact_id_put) - Update Contact
* [delete_contact_api_v1_contacts_contact_id_delete](docs/sdks/contacts/README.md#delete_contact_api_v1_contacts_contact_id_delete) - Delete Contact
* [toggle_favorite_api_v1_contacts_contact_id_favorite_patch](docs/sdks/contacts/README.md#toggle_favorite_api_v1_contacts_contact_id_favorite_patch) - Toggle Favorite

### [CustomRoles](docs/sdks/customroles/README.md)

* [list_roles_endpoint_api_v1_api_v1_roles_get](docs/sdks/customroles/README.md#list_roles_endpoint_api_v1_api_v1_roles_get) - List Roles Endpoint
* [create_role_endpoint_api_v1_api_v1_roles_post](docs/sdks/customroles/README.md#create_role_endpoint_api_v1_api_v1_roles_post) - Create Role Endpoint
* [get_role_endpoint_api_v1_api_v1_roles_role_id_get](docs/sdks/customroles/README.md#get_role_endpoint_api_v1_api_v1_roles_role_id_get) - Get Role Endpoint
* [update_role_endpoint_api_v1_api_v1_roles_role_id_put](docs/sdks/customroles/README.md#update_role_endpoint_api_v1_api_v1_roles_role_id_put) - Update Role Endpoint
* [delete_role_endpoint_api_v1_api_v1_roles_role_id_delete](docs/sdks/customroles/README.md#delete_role_endpoint_api_v1_api_v1_roles_role_id_delete) - Delete Role Endpoint
* [set_permissions_endpoint_api_v1_api_v1_roles_role_id_permissions_put](docs/sdks/customroles/README.md#set_permissions_endpoint_api_v1_api_v1_roles_role_id_permissions_put) - Set Permissions Endpoint
* [add_permission_endpoint_api_v1_api_v1_roles_role_id_permissions_post](docs/sdks/customroles/README.md#add_permission_endpoint_api_v1_api_v1_roles_role_id_permissions_post) - Add Permission Endpoint
* [remove_permission_endpoint_api_v1_api_v1_roles_role_id_permissions_permission_code_delete](docs/sdks/customroles/README.md#remove_permission_endpoint_api_v1_api_v1_roles_role_id_permissions_permission_code_delete) - Remove Permission Endpoint
* [get_my_permissions_endpoint_api_v1_api_v1_roles_me_permissions_get](docs/sdks/customroles/README.md#get_my_permissions_endpoint_api_v1_api_v1_roles_me_permissions_get) - Get My Permissions Endpoint
* [assign_role_to_user_endpoint_api_v1_api_v1_roles_users_user_id_roles_post](docs/sdks/customroles/README.md#assign_role_to_user_endpoint_api_v1_api_v1_roles_users_user_id_roles_post) - Assign Role To User Endpoint
* [remove_role_from_user_endpoint_api_v1_api_v1_roles_users_user_id_roles_role_id_delete](docs/sdks/customroles/README.md#remove_role_from_user_endpoint_api_v1_api_v1_roles_users_user_id_roles_role_id_delete) - Remove Role From User Endpoint

### [Event](docs/sdks/event/README.md)

* [get_event_list_api_v1_event_get](docs/sdks/event/README.md#get_event_list_api_v1_event_get) - Get Event List
* [create_event_api_v1_event_post](docs/sdks/event/README.md#create_event_api_v1_event_post) - Create Event
* [get_calendar_events_api_v1_event_calendar_get](docs/sdks/event/README.md#get_calendar_events_api_v1_event_calendar_get) - Get Calendar Events
* [get_social_feed_api_v1_event_social_feed_get](docs/sdks/event/README.md#get_social_feed_api_v1_event_social_feed_get) - Get Social Feed
* [filter_events_advanced_api_v1_event_filter_post](docs/sdks/event/README.md#filter_events_advanced_api_v1_event_filter_post) - Filter Events Advanced
* [get_events_by_space_api_v1_event_space_space_id_get](docs/sdks/event/README.md#get_events_by_space_api_v1_event_space_space_id_get) - Get Events By Space
* [get_event_by_id_api_v1_event_event_id_get](docs/sdks/event/README.md#get_event_by_id_api_v1_event_event_id_get) - Get Event By Id
* [update_event_api_v1_event_event_id_put](docs/sdks/event/README.md#update_event_api_v1_event_event_id_put) - Update Event
* [delete_event_api_v1_event_event_id_delete](docs/sdks/event/README.md#delete_event_api_v1_event_event_id_delete) - Delete Event
* [patch_event_identification_api_v1_event_event_id_identification_patch](docs/sdks/event/README.md#patch_event_identification_api_v1_event_event_id_identification_patch) - Patch Event Identification
* [get_section_identification_api_v1_event_event_id_section_identification_get](docs/sdks/event/README.md#get_section_identification_api_v1_event_event_id_section_identification_get) - Get Section Identification
* [get_section_content_api_v1_event_event_id_section_content_get](docs/sdks/event/README.md#get_section_content_api_v1_event_event_id_section_content_get) - Get Section Content
* [get_section_settings_api_v1_event_event_id_section_settings_get](docs/sdks/event/README.md#get_section_settings_api_v1_event_event_id_section_settings_get) - Get Section Settings
* [patch_event_content_api_v1_event_event_id_content_patch](docs/sdks/event/README.md#patch_event_content_api_v1_event_event_id_content_patch) - Patch Event Content
* [get_event_settings_api_v1_event_event_id_settings_get](docs/sdks/event/README.md#get_event_settings_api_v1_event_event_id_settings_get) - Get Event Settings
* [patch_event_settings_api_v1_event_event_id_settings_patch](docs/sdks/event/README.md#patch_event_settings_api_v1_event_event_id_settings_patch) - Patch Event Settings
* [update_cover_api_v1_event_event_id_cover_patch](docs/sdks/event/README.md#update_cover_api_v1_event_event_id_cover_patch) - Update Cover
* [publish_event_api_v1_event_event_id_publish_patch](docs/sdks/event/README.md#publish_event_api_v1_event_event_id_publish_patch) - Publish Event
* [publish_event_with_notifications_api_v1_event_event_id_publish_with_notifications_post](docs/sdks/event/README.md#publish_event_with_notifications_api_v1_event_event_id_publish_with_notifications_post) - Publish Event With Notifications
* [archive_event_api_v1_event_event_id_archive_patch](docs/sdks/event/README.md#archive_event_api_v1_event_event_id_archive_patch) - Archive Event
* [transfer_event_api_v1_event_event_id_transfer_post](docs/sdks/event/README.md#transfer_event_api_v1_event_event_id_transfer_post) - Transfer Event
* [publish_event_version_api_v1_event_event_id_versions_publish_post](docs/sdks/event/README.md#publish_event_version_api_v1_event_event_id_versions_publish_post) - Publish Event Version
* [unpublish_event_version_api_v1_event_event_id_versions_unpublish_post](docs/sdks/event/README.md#unpublish_event_version_api_v1_event_event_id_versions_unpublish_post) - Unpublish Event (Mark as Draft)
* [list_event_versions_api_v1_event_event_id_versions_get](docs/sdks/event/README.md#list_event_versions_api_v1_event_event_id_versions_get) - List Event Versions
* [rollback_event_version_api_v1_event_event_id_versions_rollback_post](docs/sdks/event/README.md#rollback_event_version_api_v1_event_event_id_versions_rollback_post) - Rollback Event to Version
* [compare_event_versions_api_v1_event_event_id_versions_compare_get](docs/sdks/event/README.md#compare_event_versions_api_v1_event_event_id_versions_compare_get) - Compare Event Versions
* [get_latest_event_version_api_v1_event_event_id_versions_latest_get](docs/sdks/event/README.md#get_latest_event_version_api_v1_event_event_id_versions_latest_get) - Get Latest Event Version
* [get_event_version_api_v1_event_event_id_versions_transaction_id_get](docs/sdks/event/README.md#get_event_version_api_v1_event_event_id_versions_transaction_id_get) - Get Event Version
* [get_timezone_info_api_v1_event_timezones_get](docs/sdks/event/README.md#get_timezone_info_api_v1_event_timezones_get) - Get Timezone Info
* [validate_timezone_api_v1_event_timezones_validate_get](docs/sdks/event/README.md#validate_timezone_api_v1_event_timezones_validate_get) - Validate Timezone

### [EventAttendees](docs/sdks/eventattendees/README.md)

* [get_event_attendees_api_v1_events_event_id_attendees_get](docs/sdks/eventattendees/README.md#get_event_attendees_api_v1_events_event_id_attendees_get) - Get Event Attendees
* [add_event_attendee_api_v1_events_event_id_attendees_post](docs/sdks/eventattendees/README.md#add_event_attendee_api_v1_events_event_id_attendees_post) - Add Event Attendee
* [add_event_attendees_bulk_api_v1_events_event_id_attendees_bulk_post](docs/sdks/eventattendees/README.md#add_event_attendees_bulk_api_v1_events_event_id_attendees_bulk_post) - Add Event Attendees Bulk
* [remove_event_attendees_bulk_api_v1_events_event_id_attendees_bulk_delete](docs/sdks/eventattendees/README.md#remove_event_attendees_bulk_api_v1_events_event_id_attendees_bulk_delete) - Remove Event Attendees Bulk
* [update_event_attendee_api_v1_events_event_id_attendees_attendee_id_put](docs/sdks/eventattendees/README.md#update_event_attendee_api_v1_events_event_id_attendees_attendee_id_put) - Update Event Attendee
* [remove_event_attendee_api_v1_events_event_id_attendees_attendee_id_delete](docs/sdks/eventattendees/README.md#remove_event_attendee_api_v1_events_event_id_attendees_attendee_id_delete) - Remove Event Attendee
* [check_in_attendee_api_v1_events_event_id_attendees_attendee_id_check_in_post](docs/sdks/eventattendees/README.md#check_in_attendee_api_v1_events_event_id_attendees_attendee_id_check_in_post) - Check In Attendee
* [update_attendees_status_bulk_api_v1_events_event_id_attendees_bulk_status_patch](docs/sdks/eventattendees/README.md#update_attendees_status_bulk_api_v1_events_event_id_attendees_bulk_status_patch) - Update Attendees Status Bulk

### [EventDocuments](docs/sdks/eventdocuments/README.md)

* [add_document_to_event_api_v1_events_event_id_documents_document_id_post](docs/sdks/eventdocuments/README.md#add_document_to_event_api_v1_events_event_id_documents_document_id_post) - Add Document To Event
* [remove_document_from_event_api_v1_events_event_id_documents_document_id_delete](docs/sdks/eventdocuments/README.md#remove_document_from_event_api_v1_events_event_id_documents_document_id_delete) - Remove Document From Event
* [get_event_documents_api_v1_events_event_id_documents_get](docs/sdks/eventdocuments/README.md#get_event_documents_api_v1_events_event_id_documents_get) - Get Event Documents

### [EventLocation](docs/sdks/eventlocation/README.md)

* [get_event_location_api_v1_events_event_id_location_get](docs/sdks/eventlocation/README.md#get_event_location_api_v1_events_event_id_location_get) - Get Event Location
* [update_event_location_api_v1_events_event_id_location_put](docs/sdks/eventlocation/README.md#update_event_location_api_v1_events_event_id_location_put) - Update Event Location

### [EventTimeline](docs/sdks/eventtimeline/README.md)

* [get_timeline_api_v1_event_event_id_timeline_get](docs/sdks/eventtimeline/README.md#get_timeline_api_v1_event_event_id_timeline_get) - Get event timeline
* [get_published_timeline_api_v1_event_event_id_timeline_published_get](docs/sdks/eventtimeline/README.md#get_published_timeline_api_v1_event_event_id_timeline_published_get) - Get published event timeline
* [create_milestone_api_v1_event_event_id_timeline_milestones_post](docs/sdks/eventtimeline/README.md#create_milestone_api_v1_event_event_id_timeline_milestones_post) - Create and link milestone
* [link_milestone_api_v1_event_event_id_timeline_link_post](docs/sdks/eventtimeline/README.md#link_milestone_api_v1_event_event_id_timeline_link_post) - Link existing event
* [unlink_milestone_api_v1_event_event_id_timeline_milestone_event_id_delete](docs/sdks/eventtimeline/README.md#unlink_milestone_api_v1_event_event_id_timeline_milestone_event_id_delete) - Unlink milestone

### [Health](docs/sdks/health/README.md)

* [automation_health_check_api_v1_automation_health_get](docs/sdks/health/README.md#automation_health_check_api_v1_automation_health_get) - Automation Health Check

### [Organizations](docs/sdks/organizations/README.md)

* [list_organizations_endpoint_api_v1_organizations_get](docs/sdks/organizations/README.md#list_organizations_endpoint_api_v1_organizations_get) - List Organizations Endpoint
* [create_organization_endpoint_api_v1_organizations_post](docs/sdks/organizations/README.md#create_organization_endpoint_api_v1_organizations_post) - Create Organization Endpoint
* [get_current_organization_endpoint_api_v1_organizations_me_get](docs/sdks/organizations/README.md#get_current_organization_endpoint_api_v1_organizations_me_get) - Get Current Organization Endpoint
* [get_organization_invites_endpoint_api_v1_organizations_org_id_invites_get](docs/sdks/organizations/README.md#get_organization_invites_endpoint_api_v1_organizations_org_id_invites_get) - Get Organization Invites Endpoint
* [create_invite_endpoint_api_v1_organizations_org_id_invites_post](docs/sdks/organizations/README.md#create_invite_endpoint_api_v1_organizations_org_id_invites_post) - Create Invite Endpoint
* [delete_invite_endpoint_api_v1_organizations_org_id_invites_invite_id_delete](docs/sdks/organizations/README.md#delete_invite_endpoint_api_v1_organizations_org_id_invites_invite_id_delete) - Delete Invite Endpoint
* [get_organization_endpoint_api_v1_organizations_org_id_get](docs/sdks/organizations/README.md#get_organization_endpoint_api_v1_organizations_org_id_get) - Get Organization Endpoint
* [update_organization_endpoint_api_v1_organizations_org_id_put](docs/sdks/organizations/README.md#update_organization_endpoint_api_v1_organizations_org_id_put) - Update Organization Endpoint
* [archive_organization_endpoint_api_v1_organizations_org_id_delete](docs/sdks/organizations/README.md#archive_organization_endpoint_api_v1_organizations_org_id_delete) - Archive Organization Endpoint

### [Permissions](docs/sdks/permissions/README.md)

* [list_permissions_endpoint_api_v1_api_v1_permissions_get](docs/sdks/permissions/README.md#list_permissions_endpoint_api_v1_api_v1_permissions_get) - List Permissions Endpoint
* [get_permission_endpoint_api_v1_api_v1_permissions_permission_code_get](docs/sdks/permissions/README.md#get_permission_endpoint_api_v1_api_v1_permissions_permission_code_get) - Get Permission Endpoint

### [Place](docs/sdks/place/README.md)

* [get_place_list_api_v1_place_get](docs/sdks/place/README.md#get_place_list_api_v1_place_get) - Get Place List
* [create_place_api_v1_place_post](docs/sdks/place/README.md#create_place_api_v1_place_post) - Create Place
* [get_place_by_id_api_v1_place_place_id_get](docs/sdks/place/README.md#get_place_by_id_api_v1_place_place_id_get) - Get Place By Id
* [update_place_api_v1_place_place_id_put](docs/sdks/place/README.md#update_place_api_v1_place_place_id_put) - Update Place
* [delete_place_api_v1_place_place_id_delete](docs/sdks/place/README.md#delete_place_api_v1_place_place_id_delete) - Delete Place
* [publish_place_api_v1_place_place_id_publish_patch](docs/sdks/place/README.md#publish_place_api_v1_place_place_id_publish_patch) - Publish Place
* [archive_place_api_v1_place_place_id_archive_patch](docs/sdks/place/README.md#archive_place_api_v1_place_place_id_archive_patch) - Archive Place

### [PublicEvents](docs/sdks/publicevents/README.md)

* [get_latest_public_event_version_api_v1_public_event_event_id_versions_latest_get](docs/sdks/publicevents/README.md#get_latest_public_event_version_api_v1_public_event_event_id_versions_latest_get) - Get Latest Event Version (Public Access)

### [Realtime](docs/sdks/realtime/README.md)

* [realtime_info_realtime_info_get](docs/sdks/realtime/README.md#realtime_info_realtime_info_get) - Realtime WebSocket protocol info
* [get_ws](docs/sdks/realtime/README.md#get_ws) - Establish realtime WebSocket connection (upgrade)

### [Space](docs/sdks/space/README.md)

* [test_auth_api_v1_space_test_auth_get](docs/sdks/space/README.md#test_auth_api_v1_space_test_auth_get) - Test Auth
* [get_space_list_api_v1_space_get](docs/sdks/space/README.md#get_space_list_api_v1_space_get) - Get Space List
* [create_space_api_v1_space_post](docs/sdks/space/README.md#create_space_api_v1_space_post) - Create Space
* [get_space_by_id_api_v1_space_space_id_get](docs/sdks/space/README.md#get_space_by_id_api_v1_space_space_id_get) - Get Space By Id
* [update_space_api_v1_space_space_id_put](docs/sdks/space/README.md#update_space_api_v1_space_space_id_put) - Update Space
* [delete_space_api_v1_space_space_id_delete](docs/sdks/space/README.md#delete_space_api_v1_space_space_id_delete) - Delete Space
* [create_space_with_parent_api_v1_space_with_parent_post](docs/sdks/space/README.md#create_space_with_parent_api_v1_space_with_parent_post) - Create Space With Parent
* [publish_space_api_v1_space_space_id_publish_post](docs/sdks/space/README.md#publish_space_api_v1_space_space_id_publish_post) - Publish space
* [publish_space_api_v1_space_space_id_publish_patch](docs/sdks/space/README.md#publish_space_api_v1_space_space_id_publish_patch) - Publish Space
* [archive_space_api_v1_space_space_id_archive_patch](docs/sdks/space/README.md#archive_space_api_v1_space_space_id_archive_patch) - Archive Space
* [get_space_members_api_v1_space_space_id_members_get](docs/sdks/space/README.md#get_space_members_api_v1_space_space_id_members_get) - Get Space Members
* [add_space_member_api_v1_space_space_id_members_post](docs/sdks/space/README.md#add_space_member_api_v1_space_space_id_members_post) - Add Space Member
* [remove_space_member_api_v1_space_space_id_members_user_id_delete](docs/sdks/space/README.md#remove_space_member_api_v1_space_space_id_members_user_id_delete) - Remove Space Member
* [update_space_member_role_api_v1_space_space_id_members_user_id_patch](docs/sdks/space/README.md#update_space_member_role_api_v1_space_space_id_members_user_id_patch) - Update Space Member Role
* [get_joinable_spaces_by_user_api_v1_space_by_user_user_id_joinable_get](docs/sdks/space/README.md#get_joinable_spaces_by_user_api_v1_space_by_user_user_id_joinable_get) - Get Joinable Spaces By User
* [join_space_api_v1_space_space_id_join_post](docs/sdks/space/README.md#join_space_api_v1_space_space_id_join_post) - Join Space
* [transfer_space_api_v1_space_space_id_transfer_post](docs/sdks/space/README.md#transfer_space_api_v1_space_space_id_transfer_post) - Transfer Space
* [get_space_children_api_v1_space_space_id_children_get](docs/sdks/space/README.md#get_space_children_api_v1_space_space_id_children_get) - Get Space Children
* [get_space_parent_api_v1_space_space_id_parent_get](docs/sdks/space/README.md#get_space_parent_api_v1_space_space_id_parent_get) - Get Space Parent
* [detach_space_from_parent_api_v1_space_space_id_parent_delete](docs/sdks/space/README.md#detach_space_from_parent_api_v1_space_space_id_parent_delete) - Detach Space From Parent
* [update_space_parent_api_v1_space_space_id_parent_patch](docs/sdks/space/README.md#update_space_parent_api_v1_space_space_id_parent_patch) - Update Space Parent
* [get_space_hierarchy_api_v1_space_space_id_hierarchy_get](docs/sdks/space/README.md#get_space_hierarchy_api_v1_space_space_id_hierarchy_get) - Get Space Hierarchy
* [bulk_update_space_parent_api_v1_space_bulk_parent_patch](docs/sdks/space/README.md#bulk_update_space_parent_api_v1_space_bulk_parent_patch) - Bulk Update Space Parent
* [unpublish_space_api_v1_space_space_id_unpublish_post](docs/sdks/space/README.md#unpublish_space_api_v1_space_space_id_unpublish_post) - Unpublish space
* [list_space_versions_api_v1_space_space_id_versions_get](docs/sdks/space/README.md#list_space_versions_api_v1_space_space_id_versions_get) - List space versions
* [get_latest_space_version_api_v1_space_space_id_versions_latest_get](docs/sdks/space/README.md#get_latest_space_version_api_v1_space_space_id_versions_latest_get) - Get latest published space version
* [get_space_version_api_v1_space_space_id_versions_version_number_get](docs/sdks/space/README.md#get_space_version_api_v1_space_space_id_versions_version_number_get) - Get specific space version
* [compare_space_versions_api_v1_space_space_id_versions_compare_get](docs/sdks/space/README.md#compare_space_versions_api_v1_space_space_id_versions_compare_get) - Compare space versions
* [rollback_space_api_v1_space_space_id_rollback_post](docs/sdks/space/README.md#rollback_space_api_v1_space_space_id_rollback_post) - Rollback space to version
* [list_space_roles_api_v1_space_spaces_space_id_roles_get](docs/sdks/space/README.md#list_space_roles_api_v1_space_spaces_space_id_roles_get) - List Space Roles
* [create_space_role_api_v1_space_spaces_space_id_roles_post](docs/sdks/space/README.md#create_space_role_api_v1_space_spaces_space_id_roles_post) - Create Space Role
* [get_space_role_api_v1_space_spaces_space_id_roles_role_id_get](docs/sdks/space/README.md#get_space_role_api_v1_space_spaces_space_id_roles_role_id_get) - Get Space Role
* [update_space_role_api_v1_space_spaces_space_id_roles_role_id_put](docs/sdks/space/README.md#update_space_role_api_v1_space_spaces_space_id_roles_role_id_put) - Update Space Role
* [delete_space_role_api_v1_space_spaces_space_id_roles_role_id_delete](docs/sdks/space/README.md#delete_space_role_api_v1_space_spaces_space_id_roles_role_id_delete) - Delete Space Role
* [assign_permission_to_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_post](docs/sdks/space/README.md#assign_permission_to_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_post) - Assign Permission To Space Role
* [remove_permission_from_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_permission_id_delete](docs/sdks/space/README.md#remove_permission_from_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_permission_id_delete) - Remove Permission From Space Role
* [get_user_space_roles_api_v1_space_spaces_space_id_members_user_id_roles_get](docs/sdks/space/README.md#get_user_space_roles_api_v1_space_spaces_space_id_members_user_id_roles_get) - Get User Space Roles
* [assign_user_to_space_role_api_v1_space_spaces_space_id_members_user_id_roles_post](docs/sdks/space/README.md#assign_user_to_space_role_api_v1_space_spaces_space_id_members_user_id_roles_post) - Assign User To Space Role
* [remove_user_from_space_role_api_v1_space_spaces_space_id_members_user_id_roles_space_role_id_delete](docs/sdks/space/README.md#remove_user_from_space_role_api_v1_space_spaces_space_id_members_user_id_roles_space_role_id_delete) - Remove User From Space Role

### [SpaceContacts](docs/sdks/spacecontacts/README.md)

* [get_space_contacts_api_v1_spaces_space_id_contacts_get](docs/sdks/spacecontacts/README.md#get_space_contacts_api_v1_spaces_space_id_contacts_get) - Get Space Contacts
* [add_contact_to_space_api_v1_spaces_space_id_contacts_post](docs/sdks/spacecontacts/README.md#add_contact_to_space_api_v1_spaces_space_id_contacts_post) - Add Contact To Space
* [get_contact_spaces_api_v1_contacts_contact_id_spaces_get](docs/sdks/spacecontacts/README.md#get_contact_spaces_api_v1_contacts_contact_id_spaces_get) - Get Contact Spaces
* [get_space_contact_api_v1_space_contacts_space_contact_id_get](docs/sdks/spacecontacts/README.md#get_space_contact_api_v1_space_contacts_space_contact_id_get) - Get Space Contact
* [remove_contact_from_space_api_v1_space_contacts_space_contact_id_delete](docs/sdks/spacecontacts/README.md#remove_contact_from_space_api_v1_space_contacts_space_contact_id_delete) - Remove Contact From Space
* [bulk_add_contacts_to_space_api_v1_spaces_space_id_contacts_bulk_post](docs/sdks/spacecontacts/README.md#bulk_add_contacts_to_space_api_v1_spaces_space_id_contacts_bulk_post) - Bulk Add Contacts To Space
* [bulk_remove_contacts_from_space_api_v1_spaces_space_id_contacts_bulk_delete](docs/sdks/spacecontacts/README.md#bulk_remove_contacts_from_space_api_v1_spaces_space_id_contacts_bulk_delete) - Bulk Remove Contacts From Space
* [count_space_contacts_api_v1_spaces_space_id_contacts_count_get](docs/sdks/spacecontacts/README.md#count_space_contacts_api_v1_spaces_space_id_contacts_count_get) - Count Space Contacts

### [SpaceDocuments](docs/sdks/spacedocuments/README.md)

* [add_document_to_space_api_v1_spaces_space_id_documents_document_id_post](docs/sdks/spacedocuments/README.md#add_document_to_space_api_v1_spaces_space_id_documents_document_id_post) - Add Document To Space
* [remove_document_from_space_api_v1_spaces_space_id_documents_document_id_delete](docs/sdks/spacedocuments/README.md#remove_document_from_space_api_v1_spaces_space_id_documents_document_id_delete) - Remove Document From Space
* [get_space_documents_api_v1_spaces_space_id_documents_get](docs/sdks/spacedocuments/README.md#get_space_documents_api_v1_spaces_space_id_documents_get) - Get Space Documents

### [SpaceEvents](docs/sdks/spaceevents/README.md)

* [get_space_events_api_v1_spaces_space_id_events_get](docs/sdks/spaceevents/README.md#get_space_events_api_v1_spaces_space_id_events_get) - Get Space Events
* [add_event_to_space_api_v1_spaces_space_id_events_post](docs/sdks/spaceevents/README.md#add_event_to_space_api_v1_spaces_space_id_events_post) - Add Event To Space
* [get_event_spaces_api_v1_events_event_id_spaces_get](docs/sdks/spaceevents/README.md#get_event_spaces_api_v1_events_event_id_spaces_get) - Get Event Spaces
* [get_space_event_api_v1_space_events_space_event_id_get](docs/sdks/spaceevents/README.md#get_space_event_api_v1_space_events_space_event_id_get) - Get Space Event
* [remove_event_from_space_api_v1_space_events_space_event_id_delete](docs/sdks/spaceevents/README.md#remove_event_from_space_api_v1_space_events_space_event_id_delete) - Remove Event From Space
* [bulk_add_events_to_space_api_v1_spaces_space_id_events_bulk_post](docs/sdks/spaceevents/README.md#bulk_add_events_to_space_api_v1_spaces_space_id_events_bulk_post) - Bulk Add Events To Space
* [bulk_remove_events_from_space_api_v1_spaces_space_id_events_bulk_delete](docs/sdks/spaceevents/README.md#bulk_remove_events_from_space_api_v1_spaces_space_id_events_bulk_delete) - Bulk Remove Events From Space
* [count_space_events_api_v1_spaces_space_id_events_count_get](docs/sdks/spaceevents/README.md#count_space_events_api_v1_spaces_space_id_events_count_get) - Count Space Events

### [SpaceMemberRoles](docs/sdks/spacememberroles/README.md)

* [get_user_space_roles_api_v1_space_spaces_space_id_members_user_id_roles_get](docs/sdks/spacememberroles/README.md#get_user_space_roles_api_v1_space_spaces_space_id_members_user_id_roles_get) - Get User Space Roles
* [assign_user_to_space_role_api_v1_space_spaces_space_id_members_user_id_roles_post](docs/sdks/spacememberroles/README.md#assign_user_to_space_role_api_v1_space_spaces_space_id_members_user_id_roles_post) - Assign User To Space Role
* [remove_user_from_space_role_api_v1_space_spaces_space_id_members_user_id_roles_space_role_id_delete](docs/sdks/spacememberroles/README.md#remove_user_from_space_role_api_v1_space_spaces_space_id_members_user_id_roles_space_role_id_delete) - Remove User From Space Role

### [SpaceRoles](docs/sdks/spaceroles/README.md)

* [list_space_roles_api_v1_space_spaces_space_id_roles_get](docs/sdks/spaceroles/README.md#list_space_roles_api_v1_space_spaces_space_id_roles_get) - List Space Roles
* [create_space_role_api_v1_space_spaces_space_id_roles_post](docs/sdks/spaceroles/README.md#create_space_role_api_v1_space_spaces_space_id_roles_post) - Create Space Role
* [get_space_role_api_v1_space_spaces_space_id_roles_role_id_get](docs/sdks/spaceroles/README.md#get_space_role_api_v1_space_spaces_space_id_roles_role_id_get) - Get Space Role
* [update_space_role_api_v1_space_spaces_space_id_roles_role_id_put](docs/sdks/spaceroles/README.md#update_space_role_api_v1_space_spaces_space_id_roles_role_id_put) - Update Space Role
* [delete_space_role_api_v1_space_spaces_space_id_roles_role_id_delete](docs/sdks/spaceroles/README.md#delete_space_role_api_v1_space_spaces_space_id_roles_role_id_delete) - Delete Space Role
* [assign_permission_to_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_post](docs/sdks/spaceroles/README.md#assign_permission_to_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_post) - Assign Permission To Space Role
* [remove_permission_from_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_permission_id_delete](docs/sdks/spaceroles/README.md#remove_permission_from_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_permission_id_delete) - Remove Permission From Space Role

### [Timezones](docs/sdks/timezones/README.md)

* [get_timezone_info_api_v1_event_timezones_get](docs/sdks/timezones/README.md#get_timezone_info_api_v1_event_timezones_get) - Get Timezone Info
* [validate_timezone_api_v1_event_timezones_validate_get](docs/sdks/timezones/README.md#validate_timezone_api_v1_event_timezones_validate_get) - Validate Timezone

### [User](docs/sdks/user/README.md)

* [get_assistant_api_v1_user_assistant_get](docs/sdks/user/README.md#get_assistant_api_v1_user_assistant_get) - Get Assistant
* [create_assistant_api_v1_user_assistant_post](docs/sdks/user/README.md#create_assistant_api_v1_user_assistant_post) - Create Assistant
* [get_user_list_api_v1_user_get](docs/sdks/user/README.md#get_user_list_api_v1_user_get) - Get User List
* [search_users_api_v1_user_search_get](docs/sdks/user/README.md#search_users_api_v1_user_search_get) - Search Users
* [get_current_user_profile_api_v1_user_me_get](docs/sdks/user/README.md#get_current_user_profile_api_v1_user_me_get) - Get Current User Profile
* [update_profile_api_v1_user_me_put](docs/sdks/user/README.md#update_profile_api_v1_user_me_put) - Update Profile
* [get_user_profile_by_id_api_v1_user_user_id_get](docs/sdks/user/README.md#get_user_profile_by_id_api_v1_user_user_id_get) - Get User Profile By Id
* [get_avatar_api_v1_user_me_avatar_get](docs/sdks/user/README.md#get_avatar_api_v1_user_me_avatar_get) - Get Avatar
* [upload_avatar_api_v1_user_me_avatar_post](docs/sdks/user/README.md#upload_avatar_api_v1_user_me_avatar_post) - Upload Avatar
* [delete_avatar_api_v1_user_me_avatar_delete](docs/sdks/user/README.md#delete_avatar_api_v1_user_me_avatar_delete) - Delete Avatar
* [get_user_avatar_api_v1_user_avatar_user_id_get](docs/sdks/user/README.md#get_user_avatar_api_v1_user_avatar_user_id_get) - Get User Avatar

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
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.user.upload_avatar_api_v1_user_me_avatar_post(file={
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
from openapi import SDK, models
from openapi.utils import BackoffStrategy, RetryConfig


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.handle_org_created_api_v1_integration_org_created_post(,
        RetryConfig("backoff", BackoffStrategy(1, 50, 1.1, 100), False))

    # Handle response
    print(res)

```

If you'd like to override the default retry strategy for all operations that support retries, you can use the `retry_config` optional parameter when initializing the SDK:
```python
from openapi import SDK, models
from openapi.utils import BackoffStrategy, RetryConfig


with SDK(
    "https://api.example.com",
    retry_config=RetryConfig("backoff", BackoffStrategy(1, 50, 1.1, 100), False),
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.handle_org_created_api_v1_integration_org_created_post()

    # Handle response
    print(res)

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`SDKError`](./src/openapi/errors/sdkerror.py) is the base class for all HTTP error responses. It has the following properties:

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
from openapi import SDK, errors, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:
    res = None
    try:

        res = sdk.get_latest_published_version_api_v1_public_space_space_id_versions_latest_get(space_id=745559)

        # Handle response
        print(res)


    except errors.SDKError as e:
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
**Primary error:**
* [`SDKError`](./src/openapi/errors/sdkerror.py): The base class for HTTP error responses.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`httpx.RequestError`](https://www.python-httpx.org/exceptions/#httpx.RequestError): Base class for request errors.
    * [`httpx.ConnectError`](https://www.python-httpx.org/exceptions/#httpx.ConnectError): HTTP client was unable to make a request to a server.
    * [`httpx.TimeoutException`](https://www.python-httpx.org/exceptions/#httpx.TimeoutException): HTTP request timed out.


**Inherit from [`SDKError`](./src/openapi/errors/sdkerror.py)**:
* [`HTTPValidationError`](./src/openapi/errors/httpvalidationerror.py): Validation Error. Status code `422`. Applicable to 192 of 241 methods.*
* [`ResponseValidationError`](./src/openapi/errors/responsevalidationerror.py): Type mismatch between the response data and the expected Pydantic model. Provides access to the Pydantic validation error via the `cause` attribute.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Python SDK makes API calls using the [httpx](https://www.python-httpx.org/) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with your own HTTP client instance.
Depending on whether you are using the sync or async version of the SDK, you can pass an instance of `HttpClient` or `AsyncHttpClient` respectively, which are Protocol's ensuring that the client has the necessary methods to make API calls.
This allows you to wrap the client with your own custom logic, such as adding custom headers, logging, or error handling, or you can just pass an instance of `httpx.Client` or `httpx.AsyncClient` directly.

For example, you could specify a header for every request that this sdk makes as follows:
```python
from openapi import SDK
import httpx

http_client = httpx.Client(headers={"x-custom-header": "someValue"})
s = SDK(client=http_client)
```

or you could wrap the client with your own custom logic:
```python
from openapi import SDK
from openapi.httpclient import AsyncHttpClient
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

s = SDK(async_client=CustomClient(httpx.AsyncClient()))
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Resource Management [resource-management] -->
## Resource Management

The `SDK` class implements the context manager protocol and registers a finalizer function to close the underlying sync and async HTTPX clients it uses under the hood. This will close HTTP connections, release memory and free up other resources held by the SDK. In short-lived Python programs and notebooks that make a few SDK method calls, resource management may not be a concern. However, in longer-lived programs, it is beneficial to create a single SDK instance via a [context manager][context-manager] and reuse it across the application.

[context-manager]: https://docs.python.org/3/reference/datamodel.html#context-managers

```python
from openapi import SDK, models
def main():

    with SDK(
        "https://api.example.com",
        security=models.Security(
            oidc="<YOUR_API_KEY_HERE>",
        ),
    ) as sdk:
        # Rest of application here...


# Or when using async:
async def amain():

    async with SDK(
        "https://api.example.com",
        security=models.Security(
            oidc="<YOUR_API_KEY_HERE>",
        ),
    ) as sdk:
        # Rest of application here...
```
<!-- End Resource Management [resource-management] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass your own logger class directly into your SDK.
```python
from openapi import SDK
import logging

logging.basicConfig(level=logging.DEBUG)
s = SDK(server_url="https://example.com", debug_logger=logging.getLogger("openapi"))
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

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=openapi&utm_campaign=python)
