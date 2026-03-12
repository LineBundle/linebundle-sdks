# AutomationMetadata

## Overview

### Available Operations

* [get_all_metadata_api_v1_automation_metadata_get](#get_all_metadata_api_v1_automation_metadata_get) - Get all metadata
* [get_triggers_api_v1_automation_metadata_triggers_get](#get_triggers_api_v1_automation_metadata_triggers_get) - Get trigger metadata
* [get_conditions_api_v1_automation_metadata_conditions_get](#get_conditions_api_v1_automation_metadata_conditions_get) - Get condition metadata
* [get_actions_api_v1_automation_metadata_actions_get](#get_actions_api_v1_automation_metadata_actions_get) - Get action metadata
* [get_task_metadata_api_v1_automation_metadata_tasks_task_type_get](#get_task_metadata_api_v1_automation_metadata_tasks_task_type_get) - Get task metadata
* [get_all_tasks_api_v1_automation_metadata_tasks_get](#get_all_tasks_api_v1_automation_metadata_tasks_get) - Get all task metadata

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

    res = sdk.automation_metadata.get_all_metadata_api_v1_automation_metadata_get()

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

    res = sdk.automation_metadata.get_triggers_api_v1_automation_metadata_triggers_get()

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

    res = sdk.automation_metadata.get_conditions_api_v1_automation_metadata_conditions_get()

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

    res = sdk.automation_metadata.get_actions_api_v1_automation_metadata_actions_get()

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

    res = sdk.automation_metadata.get_task_metadata_api_v1_automation_metadata_tasks_task_type_get(task_type="<value>")

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

    res = sdk.automation_metadata.get_all_tasks_api_v1_automation_metadata_tasks_get()

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