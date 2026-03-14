# AutomationMetadata

## Overview

### Available Operations

* [get_triggers](#get_triggers) - Get trigger metadata
* [get_actions](#get_actions) - Get action metadata
* [get_task](#get_task) - Get task metadata
* [get_tasks](#get_tasks) - Get all task metadata

## get_triggers

Get metadata for all available trigger types

### Example Usage

<!-- UsageSnippet language="python" operationID="get_triggers_api_v1_automation_metadata_triggers_get" method="get" path="/api/v1/automation/metadata/triggers" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.automation_metadata.get_triggers()

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_actions

Get metadata for all available action types

### Example Usage

<!-- UsageSnippet language="python" operationID="get_actions_api_v1_automation_metadata_actions_get" method="get" path="/api/v1/automation/metadata/actions" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.automation_metadata.get_actions()

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_task

Get metadata for a specific task type

### Example Usage

<!-- UsageSnippet language="python" operationID="get_task_metadata_api_v1_automation_metadata_tasks__task_type__get" method="get" path="/api/v1/automation/metadata/tasks/{task_type}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.automation_metadata.get_task(task_type="<value>")

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_tasks

Get metadata for all registered tasks, optionally filtered by category or tags

### Example Usage

<!-- UsageSnippet language="python" operationID="get_all_tasks_api_v1_automation_metadata_tasks_get" method="get" path="/api/v1/automation/metadata/tasks" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.automation_metadata.get_tasks()

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |