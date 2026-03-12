# AutomationRules

## Overview

### Available Operations

* [get_all_metadata_api_v1_automation_metadata_get](#get_all_metadata_api_v1_automation_metadata_get) - Get all metadata
* [get_triggers_api_v1_automation_metadata_triggers_get](#get_triggers_api_v1_automation_metadata_triggers_get) - Get trigger metadata
* [get_conditions_api_v1_automation_metadata_conditions_get](#get_conditions_api_v1_automation_metadata_conditions_get) - Get condition metadata
* [get_actions_api_v1_automation_metadata_actions_get](#get_actions_api_v1_automation_metadata_actions_get) - Get action metadata
* [get_task_metadata_api_v1_automation_metadata_tasks_task_type_get](#get_task_metadata_api_v1_automation_metadata_tasks_task_type_get) - Get task metadata
* [get_all_tasks_api_v1_automation_metadata_tasks_get](#get_all_tasks_api_v1_automation_metadata_tasks_get) - Get all task metadata
* [trigger_scheduled_automation_api_v1_automation_api_v1_automation_cron_trigger_scheduled_post](#trigger_scheduled_automation_api_v1_automation_api_v1_automation_cron_trigger_scheduled_post) - Trigger Scheduled Automation
* [cron_health_check_api_v1_automation_api_v1_automation_cron_health_get](#cron_health_check_api_v1_automation_api_v1_automation_cron_health_get) - Cron Health Check
* [list_rules_api_v1_automation_rules_get](#list_rules_api_v1_automation_rules_get) - List Rules
* [create_rule_api_v1_automation_rules_post](#create_rule_api_v1_automation_rules_post) - Create Rule
* [get_rule_api_v1_automation_rules_rule_id_get](#get_rule_api_v1_automation_rules_rule_id_get) - Get Rule
* [update_rule_api_v1_automation_rules_rule_id_put](#update_rule_api_v1_automation_rules_rule_id_put) - Update Rule
* [delete_rule_api_v1_automation_rules_rule_id_delete](#delete_rule_api_v1_automation_rules_rule_id_delete) - Delete Rule
* [patch_rule_api_v1_automation_rules_rule_id_patch](#patch_rule_api_v1_automation_rules_rule_id_patch) - Patch Rule
* [execute_rule_api_v1_automation_rules_rule_id_execute_post](#execute_rule_api_v1_automation_rules_rule_id_execute_post) - Execute Rule
* [get_rule_executions_api_v1_automation_rules_rule_id_executions_get](#get_rule_executions_api_v1_automation_rules_rule_id_executions_get) - Get Rule Executions
* [automation_health_check_api_v1_automation_health_get](#automation_health_check_api_v1_automation_health_get) - Automation Health Check

## get_all_metadata_api_v1_automation_metadata_get

Get combined metadata for triggers, conditions, and actions in a single request

### Example Usage

<!-- UsageSnippet language="python" operationID="get_all_metadata_api_v1_automation_metadata_get" method="get" path="/api/v1/automation/metadata" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.automation_rules.get_all_metadata_api_v1_automation_metadata_get()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.CombinedMetadataResponse](../../models/combinedmetadataresponse.md)**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## get_triggers_api_v1_automation_metadata_triggers_get

Get metadata for all available trigger types

### Example Usage

<!-- UsageSnippet language="python" operationID="get_triggers_api_v1_automation_metadata_triggers_get" method="get" path="/api/v1/automation/metadata/triggers" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.automation_rules.get_triggers_api_v1_automation_metadata_triggers_get()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.TaskMetadata]](../../models/.md)**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## get_conditions_api_v1_automation_metadata_conditions_get

Get metadata for all available condition types

### Example Usage

<!-- UsageSnippet language="python" operationID="get_conditions_api_v1_automation_metadata_conditions_get" method="get" path="/api/v1/automation/metadata/conditions" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.automation_rules.get_conditions_api_v1_automation_metadata_conditions_get()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.TaskMetadata]](../../models/.md)**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## get_actions_api_v1_automation_metadata_actions_get

Get metadata for all available action types

### Example Usage

<!-- UsageSnippet language="python" operationID="get_actions_api_v1_automation_metadata_actions_get" method="get" path="/api/v1/automation/metadata/actions" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.automation_rules.get_actions_api_v1_automation_metadata_actions_get()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.TaskMetadata]](../../models/.md)**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## get_task_metadata_api_v1_automation_metadata_tasks_task_type_get

Get metadata for a specific task type

### Example Usage

<!-- UsageSnippet language="python" operationID="get_task_metadata_api_v1_automation_metadata_tasks__task_type__get" method="get" path="/api/v1/automation/metadata/tasks/{task_type}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.automation_rules.get_task_metadata_api_v1_automation_metadata_tasks_task_type_get(task_type="<value>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `task_type`                                                         | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.TaskMetadata](../../models/taskmetadata.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_all_tasks_api_v1_automation_metadata_tasks_get

Get metadata for all registered tasks, optionally filtered by category or tags

### Example Usage

<!-- UsageSnippet language="python" operationID="get_all_tasks_api_v1_automation_metadata_tasks_get" method="get" path="/api/v1/automation/metadata/tasks" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.automation_rules.get_all_tasks_api_v1_automation_metadata_tasks_get()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `category`                                                          | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Filter by category (trigger, condition, action)                     |
| `tags`                                                              | List[*str*]                                                         | :heavy_minus_sign:                                                  | Filter by tags                                                      |
| `search`                                                            | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Search by name or description                                       |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.TaskMetadata]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## trigger_scheduled_automation_api_v1_automation_api_v1_automation_cron_trigger_scheduled_post

Trigger execution of all scheduled automation rules.

This endpoint is designed to be called by external cron services like:
- cron-job.org (free tier)
- GitHub Actions (free for public repos)
- EasyCron
- Any service that can make HTTP POST requests on a schedule

**Security:**
- Requires API key in X-Automation-Key header
- Set AUTOMATION_API_KEY in Railway environment variables

**Setup:**
1. Add AUTOMATION_API_KEY to Railway env vars (e.g., generate with: openssl rand -hex 32)
2. Configure external cron to POST to this endpoint every 15 minutes
3. Include X-Automation-Key: <your-key> header

**Example cron-job.org setup:**
- URL: https://your-app.railway.app/api/v1/automation/cron/trigger-scheduled
- Method: POST
- Schedule: */15 * * * * (every 15 minutes)
- Custom Header: X-Automation-Key: your-secret-key-here

**Returns:**
- 200 OK: Automation triggered successfully
- 401 Unauthorized: Invalid or missing API key
- 500 Internal Server Error: Execution failed

### Example Usage

<!-- UsageSnippet language="python" operationID="trigger_scheduled_automation_api_v1_automation_api_v1_automation_cron_trigger_scheduled_post" method="post" path="/api/v1/automation/api/v1/automation/cron/trigger-scheduled" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.automation_rules.trigger_scheduled_automation_api_v1_automation_api_v1_automation_cron_trigger_scheduled_post(x_automation_key="<value>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `x_automation_key`                                                  | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## cron_health_check_api_v1_automation_api_v1_automation_cron_health_get

Health check endpoint for external cron services.

Some cron services (like cron-job.org) verify the endpoint is reachable
before enabling the job. This endpoint confirms the automation cron
endpoint is accessible.

### Example Usage

<!-- UsageSnippet language="python" operationID="cron_health_check_api_v1_automation_api_v1_automation_cron_health_get" method="get" path="/api/v1/automation/api/v1/automation/cron/health" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.automation_rules.cron_health_check_api_v1_automation_api_v1_automation_cron_health_get()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## list_rules_api_v1_automation_rules_get

List automation rules.

RLS automatically filters:
- Personal mode: only user's own rules
- Organization mode: all org rules

### Example Usage

<!-- UsageSnippet language="python" operationID="list_rules_api_v1_automation_rules_get" method="get" path="/api/v1/automation/rules" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.automation_rules.list_rules_api_v1_automation_rules_get(enabled_only=True)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `enabled_only`                                                      | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `scope`                                                             | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | N/A                                                                 |
| `scope_id`                                                          | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.RuleListResponse](../../models/rulelistresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## create_rule_api_v1_automation_rules_post

Create new automation rule.

Supports dual-scope:
- Personal mode: org_id=None, creator_id=current_user.id
- Organization mode: org_id=tenant_ctx.org_id, creator_id=current_user.id

### Example Usage

<!-- UsageSnippet language="python" operationID="create_rule_api_v1_automation_rules_post" method="post" path="/api/v1/automation/rules" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.automation_rules.create_rule_api_v1_automation_rules_post(name="<value>", scope="<value>", conditions={
        "key": "<value>",
        "key1": "<value>",
    }, actions=[
        {
            "key": "<value>",
            "key1": "<value>",
        },
        {
            "key": "<value>",
            "key1": "<value>",
            "key2": "<value>",
        },
    ], schedule={
        "key": "<value>",
    }, enabled=True, priority=0)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `name`                                                              | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `scope`                                                             | *str*                                                               | :heavy_check_mark:                                                  | EVENT, TIMELINE, SPACE, ORGANIZATION                                |
| `conditions`                                                        | Dict[str, *Any*]                                                    | :heavy_check_mark:                                                  | Condition group structure                                           |
| `actions`                                                           | List[Dict[str, *Any*]]                                              | :heavy_check_mark:                                                  | List of actions                                                     |
| `schedule`                                                          | Dict[str, *Any*]                                                    | :heavy_check_mark:                                                  | Schedule configuration                                              |
| `description`                                                       | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | N/A                                                                 |
| `scope_id`                                                          | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | N/A                                                                 |
| `enabled`                                                           | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `priority`                                                          | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `constraints`                                                       | Dict[str, *Any*]                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `metadata`                                                          | Dict[str, *Any*]                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.RuleResponse](../../models/ruleresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_rule_api_v1_automation_rules_rule_id_get

Get automation rule by ID.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_rule_api_v1_automation_rules__rule_id__get" method="get" path="/api/v1/automation/rules/{rule_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.automation_rules.get_rule_api_v1_automation_rules_rule_id_get(rule_id="08ecc2bf-1d18-4bfd-a583-e9c6ec629fd1")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `rule_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.RuleResponse](../../models/ruleresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## update_rule_api_v1_automation_rules_rule_id_put

Update automation rule.

### Example Usage

<!-- UsageSnippet language="python" operationID="update_rule_api_v1_automation_rules__rule_id__put" method="put" path="/api/v1/automation/rules/{rule_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.automation_rules.update_rule_api_v1_automation_rules_rule_id_put(rule_id="79bdc341-0fc3-4725-9daa-2c3ae016dd77")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `rule_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `name`                                                              | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | N/A                                                                 |
| `description`                                                       | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | N/A                                                                 |
| `enabled`                                                           | *OptionalNullable[bool]*                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `priority`                                                          | *OptionalNullable[int]*                                             | :heavy_minus_sign:                                                  | N/A                                                                 |
| `conditions`                                                        | Dict[str, *Any*]                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `actions`                                                           | List[Dict[str, *Any*]]                                              | :heavy_minus_sign:                                                  | N/A                                                                 |
| `schedule`                                                          | Dict[str, *Any*]                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `constraints`                                                       | Dict[str, *Any*]                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `metadata`                                                          | Dict[str, *Any*]                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.RuleResponse](../../models/ruleresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## delete_rule_api_v1_automation_rules_rule_id_delete

Delete automation rule.

### Example Usage

<!-- UsageSnippet language="python" operationID="delete_rule_api_v1_automation_rules__rule_id__delete" method="delete" path="/api/v1/automation/rules/{rule_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    sdk.automation_rules.delete_rule_api_v1_automation_rules_rule_id_delete(rule_id="d93a66c1-6cf8-4f32-815d-baf93da98ce5")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `rule_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## patch_rule_api_v1_automation_rules_rule_id_patch

Partially update automation rule (PATCH).

### Example Usage

<!-- UsageSnippet language="python" operationID="patch_rule_api_v1_automation_rules__rule_id__patch" method="patch" path="/api/v1/automation/rules/{rule_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.automation_rules.patch_rule_api_v1_automation_rules_rule_id_patch(rule_id="1eb44939-daad-4838-94b8-0ba4fb3d7d27")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `rule_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `name`                                                              | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | N/A                                                                 |
| `description`                                                       | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | N/A                                                                 |
| `enabled`                                                           | *OptionalNullable[bool]*                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `priority`                                                          | *OptionalNullable[int]*                                             | :heavy_minus_sign:                                                  | N/A                                                                 |
| `conditions`                                                        | Dict[str, *Any*]                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `actions`                                                           | List[Dict[str, *Any*]]                                              | :heavy_minus_sign:                                                  | N/A                                                                 |
| `schedule`                                                          | Dict[str, *Any*]                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `constraints`                                                       | Dict[str, *Any*]                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `metadata`                                                          | Dict[str, *Any*]                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.RuleResponse](../../models/ruleresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## execute_rule_api_v1_automation_rules_rule_id_execute_post

Manually execute automation rule.

### Example Usage

<!-- UsageSnippet language="python" operationID="execute_rule_api_v1_automation_rules__rule_id__execute_post" method="post" path="/api/v1/automation/rules/{rule_id}/execute" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.automation_rules.execute_rule_api_v1_automation_rules_rule_id_execute_post(rule_id="6bcd8d0f-beda-434d-b3c6-8d7b9ee1edf7", trigger_type="MANUAL")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `rule_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `trigger_type`                                                      | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `trigger_context`                                                   | Dict[str, *Any*]                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.ExecuteRuleResponse](../../models/executeruleresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_rule_executions_api_v1_automation_rules_rule_id_executions_get

Get execution history for a specific automation rule.

Returns list of past executions with their status, results, and errors.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_rule_executions_api_v1_automation_rules__rule_id__executions_get" method="get" path="/api/v1/automation/rules/{rule_id}/executions" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.automation_rules.get_rule_executions_api_v1_automation_rules_rule_id_executions_get(rule_id="96a289c0-cb9c-497b-8004-78ac7ac1ed11", limit=50)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `rule_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.ExecutionResponse]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## automation_health_check_api_v1_automation_health_get

Health check for automation system.

Checks:
- API availability
- Prefect server connection
- Task registry
- Celery Beat (indirectly via task registry)

### Example Usage

<!-- UsageSnippet language="python" operationID="automation_health_check_api_v1_automation_health_get" method="get" path="/api/v1/automation/health" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.automation_rules.automation_health_check_api_v1_automation_health_get()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |