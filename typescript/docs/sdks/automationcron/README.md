# AutomationCron

## Overview

### Available Operations

* [triggerScheduledAutomationApiV1AutomationApiV1AutomationCronTriggerScheduledPost](#triggerscheduledautomationapiv1automationapiv1automationcrontriggerscheduledpost) - Trigger Scheduled Automation
* [cronHealthCheckApiV1AutomationApiV1AutomationCronHealthGet](#cronhealthcheckapiv1automationapiv1automationcronhealthget) - Cron Health Check

## triggerScheduledAutomationApiV1AutomationApiV1AutomationCronTriggerScheduledPost

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

<!-- UsageSnippet language="typescript" operationID="trigger_scheduled_automation_api_v1_automation_api_v1_automation_cron_trigger_scheduled_post" method="post" path="/api/v1/automation/api/v1/automation/cron/trigger-scheduled" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.automationCron.triggerScheduledAutomationApiV1AutomationApiV1AutomationCronTriggerScheduledPost({
    xAutomationKey: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import {
  automationRulesTriggerScheduledAutomationApiV1AutomationApiV1AutomationCronTriggerScheduledPost,
} from "openapi/funcs/automation-rules-trigger-scheduled-automation-api-v1-automation-api-v1-automation-cron-trigger-scheduled-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await automationRulesTriggerScheduledAutomationApiV1AutomationApiV1AutomationCronTriggerScheduledPost(sdk, {
    xAutomationKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("automationRulesTriggerScheduledAutomationApiV1AutomationApiV1AutomationCronTriggerScheduledPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                             | [operations.TriggerScheduledAutomationApiV1AutomationApiV1AutomationCronTriggerScheduledPostRequest](../../models/operations/trigger-scheduled-automation-api-v1-automation-api-v1-automation-cron-trigger-scheduled-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                                    | The request object to use for the request.                                                                                                                                                                                            |
| `options`                                                                                                                                                                                                                             | RequestOptions                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                    | Used to set various options for making HTTP requests.                                                                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                                                                | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                    | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                        |
| `options.retries`                                                                                                                                                                                                                     | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                    | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                      |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## cronHealthCheckApiV1AutomationApiV1AutomationCronHealthGet

Health check endpoint for external cron services.

Some cron services (like cron-job.org) verify the endpoint is reachable
before enabling the job. This endpoint confirms the automation cron
endpoint is accessible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="cron_health_check_api_v1_automation_api_v1_automation_cron_health_get" method="get" path="/api/v1/automation/api/v1/automation/cron/health" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.automationCron.cronHealthCheckApiV1AutomationApiV1AutomationCronHealthGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { automationRulesCronHealthCheckApiV1AutomationApiV1AutomationCronHealthGet } from "openapi/funcs/automation-rules-cron-health-check-api-v1-automation-api-v1-automation-cron-health-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await automationRulesCronHealthCheckApiV1AutomationApiV1AutomationCronHealthGet(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("automationRulesCronHealthCheckApiV1AutomationApiV1AutomationCronHealthGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |