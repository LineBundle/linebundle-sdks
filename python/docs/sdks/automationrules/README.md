# AutomationRules

## Overview

### Available Operations

* [get_metadata](#get_metadata) - Get all metadata
* [get_conditions](#get_conditions) - Get condition metadata
* [list](#list) - List Rules
* [create](#create) - Create Rule
* [get](#get) - Get Rule
* [update](#update) - Update Rule
* [delete](#delete) - Delete Rule
* [patch](#patch) - Patch Rule
* [execute](#execute) - Execute Rule
* [get_executions](#get_executions) - Get Rule Executions

## get_metadata

Get combined metadata for triggers, conditions, and actions in a single request

### Example Usage

<!-- UsageSnippet language="python" operationID="get_all_metadata_api_v1_automation_metadata_get" method="get" path="/api/v1/automation/metadata" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.automation_rules.get_metadata()

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_conditions

Get metadata for all available condition types

### Example Usage

<!-- UsageSnippet language="python" operationID="get_conditions_api_v1_automation_metadata_conditions_get" method="get" path="/api/v1/automation/metadata/conditions" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.automation_rules.get_conditions()

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

## list

List automation rules.

RLS automatically filters:
- Personal mode: only user's own rules
- Organization mode: all org rules

### Example Usage

<!-- UsageSnippet language="python" operationID="list_rules_api_v1_automation_rules_get" method="get" path="/api/v1/automation/rules" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.automation_rules.list(enabled_only=True)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## create

Create new automation rule.

Supports dual-scope:
- Personal mode: org_id=None, creator_id=current_user.id
- Organization mode: org_id=tenant_ctx.org_id, creator_id=current_user.id

### Example Usage

<!-- UsageSnippet language="python" operationID="create_rule_api_v1_automation_rules_post" method="post" path="/api/v1/automation/rules" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.automation_rules.create(name="<value>", scope="<value>", conditions={
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get

Get automation rule by ID.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_rule_api_v1_automation_rules__rule_id__get" method="get" path="/api/v1/automation/rules/{rule_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.automation_rules.get(rule_id="08ecc2bf-1d18-4bfd-a583-e9c6ec629fd1")

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## update

Update automation rule.

### Example Usage

<!-- UsageSnippet language="python" operationID="update_rule_api_v1_automation_rules__rule_id__put" method="put" path="/api/v1/automation/rules/{rule_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.automation_rules.update(rule_id="79bdc341-0fc3-4725-9daa-2c3ae016dd77")

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## delete

Delete automation rule.

### Example Usage

<!-- UsageSnippet language="python" operationID="delete_rule_api_v1_automation_rules__rule_id__delete" method="delete" path="/api/v1/automation/rules/{rule_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    linebundle.automation_rules.delete(rule_id="d93a66c1-6cf8-4f32-815d-baf93da98ce5")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `rule_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## patch

Partially update automation rule (PATCH).

### Example Usage

<!-- UsageSnippet language="python" operationID="patch_rule_api_v1_automation_rules__rule_id__patch" method="patch" path="/api/v1/automation/rules/{rule_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.automation_rules.patch(rule_id="1eb44939-daad-4838-94b8-0ba4fb3d7d27")

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## execute

Manually execute automation rule.

### Example Usage

<!-- UsageSnippet language="python" operationID="execute_rule_api_v1_automation_rules__rule_id__execute_post" method="post" path="/api/v1/automation/rules/{rule_id}/execute" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.automation_rules.execute(rule_id="6bcd8d0f-beda-434d-b3c6-8d7b9ee1edf7", trigger_type="MANUAL")

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_executions

Get execution history for a specific automation rule.

Returns list of past executions with their status, results, and errors.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_rule_executions_api_v1_automation_rules__rule_id__executions_get" method="get" path="/api/v1/automation/rules/{rule_id}/executions" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.automation_rules.get_executions(rule_id="96a289c0-cb9c-497b-8004-78ac7ac1ed11", limit=50)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |