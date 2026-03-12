# Health

## Overview

### Available Operations

* [automation_health_check_api_v1_automation_health_get](#automation_health_check_api_v1_automation_health_get) - Automation Health Check

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

    res = sdk.health.automation_health_check_api_v1_automation_health_get()

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