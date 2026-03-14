# AutomationCron

## Overview

### Available Operations

* [trigger_scheduled](#trigger_scheduled) - Trigger Scheduled Automation
* [health_check](#health_check) - Cron Health Check

## trigger_scheduled

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
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.automation_cron.trigger_scheduled(x_automation_key="<value>")

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## health_check

Health check endpoint for external cron services.

Some cron services (like cron-job.org) verify the endpoint is reachable
before enabling the job. This endpoint confirms the automation cron
endpoint is accessible.

### Example Usage

<!-- UsageSnippet language="python" operationID="cron_health_check_api_v1_automation_api_v1_automation_cron_health_get" method="get" path="/api/v1/automation/api/v1/automation/cron/health" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.automation_cron.health_check()

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |