# AutomationRules

## Overview

### Available Operations

* [getAllMetadataApiV1AutomationMetadataGet](#getallmetadataapiv1automationmetadataget) - Get all metadata
* [getTriggersApiV1AutomationMetadataTriggersGet](#gettriggersapiv1automationmetadatatriggersget) - Get trigger metadata
* [getConditionsApiV1AutomationMetadataConditionsGet](#getconditionsapiv1automationmetadataconditionsget) - Get condition metadata
* [getActionsApiV1AutomationMetadataActionsGet](#getactionsapiv1automationmetadataactionsget) - Get action metadata
* [getTaskMetadataApiV1AutomationMetadataTasksTaskTypeGet](#gettaskmetadataapiv1automationmetadatataskstasktypeget) - Get task metadata
* [getAllTasksApiV1AutomationMetadataTasksGet](#getalltasksapiv1automationmetadatatasksget) - Get all task metadata
* [triggerScheduledAutomationApiV1AutomationApiV1AutomationCronTriggerScheduledPost](#triggerscheduledautomationapiv1automationapiv1automationcrontriggerscheduledpost) - Trigger Scheduled Automation
* [cronHealthCheckApiV1AutomationApiV1AutomationCronHealthGet](#cronhealthcheckapiv1automationapiv1automationcronhealthget) - Cron Health Check
* [listRulesApiV1AutomationRulesGet](#listrulesapiv1automationrulesget) - List Rules
* [createRuleApiV1AutomationRulesPost](#createruleapiv1automationrulespost) - Create Rule
* [getRuleApiV1AutomationRulesRuleIdGet](#getruleapiv1automationrulesruleidget) - Get Rule
* [updateRuleApiV1AutomationRulesRuleIdPut](#updateruleapiv1automationrulesruleidput) - Update Rule
* [deleteRuleApiV1AutomationRulesRuleIdDelete](#deleteruleapiv1automationrulesruleiddelete) - Delete Rule
* [patchRuleApiV1AutomationRulesRuleIdPatch](#patchruleapiv1automationrulesruleidpatch) - Patch Rule
* [executeRuleApiV1AutomationRulesRuleIdExecutePost](#executeruleapiv1automationrulesruleidexecutepost) - Execute Rule
* [getRuleExecutionsApiV1AutomationRulesRuleIdExecutionsGet](#getruleexecutionsapiv1automationrulesruleidexecutionsget) - Get Rule Executions
* [automationHealthCheckApiV1AutomationHealthGet](#automationhealthcheckapiv1automationhealthget) - Automation Health Check

## getAllMetadataApiV1AutomationMetadataGet

Get combined metadata for triggers, conditions, and actions in a single request

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_all_metadata_api_v1_automation_metadata_get" method="get" path="/api/v1/automation/metadata" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.automationRules.getAllMetadataApiV1AutomationMetadataGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { automationRulesGetAllMetadataApiV1AutomationMetadataGet } from "openapi/funcs/automation-rules-get-all-metadata-api-v1-automation-metadata-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await automationRulesGetAllMetadataApiV1AutomationMetadataGet(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("automationRulesGetAllMetadataApiV1AutomationMetadataGet failed:", res.error);
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

**Promise\<[models.CombinedMetadataResponse](../../models/combined-metadata-response.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## getTriggersApiV1AutomationMetadataTriggersGet

Get metadata for all available trigger types

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_triggers_api_v1_automation_metadata_triggers_get" method="get" path="/api/v1/automation/metadata/triggers" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.automationRules.getTriggersApiV1AutomationMetadataTriggersGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { automationRulesGetTriggersApiV1AutomationMetadataTriggersGet } from "openapi/funcs/automation-rules-get-triggers-api-v1-automation-metadata-triggers-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await automationRulesGetTriggersApiV1AutomationMetadataTriggersGet(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("automationRulesGetTriggersApiV1AutomationMetadataTriggersGet failed:", res.error);
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

**Promise\<[models.TaskMetadata[]](../../models/.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## getConditionsApiV1AutomationMetadataConditionsGet

Get metadata for all available condition types

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_conditions_api_v1_automation_metadata_conditions_get" method="get" path="/api/v1/automation/metadata/conditions" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.automationRules.getConditionsApiV1AutomationMetadataConditionsGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { automationRulesGetConditionsApiV1AutomationMetadataConditionsGet } from "openapi/funcs/automation-rules-get-conditions-api-v1-automation-metadata-conditions-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await automationRulesGetConditionsApiV1AutomationMetadataConditionsGet(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("automationRulesGetConditionsApiV1AutomationMetadataConditionsGet failed:", res.error);
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

**Promise\<[models.TaskMetadata[]](../../models/.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## getActionsApiV1AutomationMetadataActionsGet

Get metadata for all available action types

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_actions_api_v1_automation_metadata_actions_get" method="get" path="/api/v1/automation/metadata/actions" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.automationRules.getActionsApiV1AutomationMetadataActionsGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { automationRulesGetActionsApiV1AutomationMetadataActionsGet } from "openapi/funcs/automation-rules-get-actions-api-v1-automation-metadata-actions-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await automationRulesGetActionsApiV1AutomationMetadataActionsGet(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("automationRulesGetActionsApiV1AutomationMetadataActionsGet failed:", res.error);
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

**Promise\<[models.TaskMetadata[]](../../models/.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## getTaskMetadataApiV1AutomationMetadataTasksTaskTypeGet

Get metadata for a specific task type

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_task_metadata_api_v1_automation_metadata_tasks__task_type__get" method="get" path="/api/v1/automation/metadata/tasks/{task_type}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.automationRules.getTaskMetadataApiV1AutomationMetadataTasksTaskTypeGet({
    taskType: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { automationRulesGetTaskMetadataApiV1AutomationMetadataTasksTaskTypeGet } from "openapi/funcs/automation-rules-get-task-metadata-api-v1-automation-metadata-tasks-task-type-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await automationRulesGetTaskMetadataApiV1AutomationMetadataTasksTaskTypeGet(sdk, {
    taskType: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("automationRulesGetTaskMetadataApiV1AutomationMetadataTasksTaskTypeGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                       | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                       | [operations.GetTaskMetadataApiV1AutomationMetadataTasksTaskTypeGetRequest](../../models/operations/get-task-metadata-api-v1-automation-metadata-tasks-task-type-get-request.md) | :heavy_check_mark:                                                                                                                                                              | The request object to use for the request.                                                                                                                                      |
| `options`                                                                                                                                                                       | RequestOptions                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                           |
| `options.fetchOptions`                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                         | :heavy_minus_sign:                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.  |
| `options.retries`                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                |

### Response

**Promise\<[models.TaskMetadata](../../models/task-metadata.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getAllTasksApiV1AutomationMetadataTasksGet

Get metadata for all registered tasks, optionally filtered by category or tags

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_all_tasks_api_v1_automation_metadata_tasks_get" method="get" path="/api/v1/automation/metadata/tasks" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.automationRules.getAllTasksApiV1AutomationMetadataTasksGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { automationRulesGetAllTasksApiV1AutomationMetadataTasksGet } from "openapi/funcs/automation-rules-get-all-tasks-api-v1-automation-metadata-tasks-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await automationRulesGetAllTasksApiV1AutomationMetadataTasksGet(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("automationRulesGetAllTasksApiV1AutomationMetadataTasksGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAllTasksApiV1AutomationMetadataTasksGetRequest](../../models/operations/get-all-tasks-api-v1-automation-metadata-tasks-get-request.md)                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TaskMetadata[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

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
  const result = await sdk.automationRules.triggerScheduledAutomationApiV1AutomationApiV1AutomationCronTriggerScheduledPost({
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
  const result = await sdk.automationRules.cronHealthCheckApiV1AutomationApiV1AutomationCronHealthGet();

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

## listRulesApiV1AutomationRulesGet

List automation rules.

RLS automatically filters:
- Personal mode: only user's own rules
- Organization mode: all org rules

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_rules_api_v1_automation_rules_get" method="get" path="/api/v1/automation/rules" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.automationRules.listRulesApiV1AutomationRulesGet({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { automationRulesListRulesApiV1AutomationRulesGet } from "openapi/funcs/automation-rules-list-rules-api-v1-automation-rules-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await automationRulesListRulesApiV1AutomationRulesGet(sdk, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("automationRulesListRulesApiV1AutomationRulesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListRulesApiV1AutomationRulesGetRequest](../../models/operations/list-rules-api-v1-automation-rules-get-request.md)                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RuleListResponse](../../models/rule-list-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## createRuleApiV1AutomationRulesPost

Create new automation rule.

Supports dual-scope:
- Personal mode: org_id=None, creator_id=current_user.id
- Organization mode: org_id=tenant_ctx.org_id, creator_id=current_user.id

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_rule_api_v1_automation_rules_post" method="post" path="/api/v1/automation/rules" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.automationRules.createRuleApiV1AutomationRulesPost({
    name: "<value>",
    scope: "<value>",
    conditions: {
      "key": "<value>",
      "key1": "<value>",
    },
    actions: [
      {
        "key": "<value>",
        "key1": "<value>",
      },
      {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    ],
    schedule: {
      "key": "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { automationRulesCreateRuleApiV1AutomationRulesPost } from "openapi/funcs/automation-rules-create-rule-api-v1-automation-rules-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await automationRulesCreateRuleApiV1AutomationRulesPost(sdk, {
    name: "<value>",
    scope: "<value>",
    conditions: {
      "key": "<value>",
      "key1": "<value>",
    },
    actions: [
      {
        "key": "<value>",
        "key1": "<value>",
      },
      {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    ],
    schedule: {
      "key": "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("automationRulesCreateRuleApiV1AutomationRulesPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateRuleRequest](../../models/create-rule-request.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RuleResponse](../../models/rule-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getRuleApiV1AutomationRulesRuleIdGet

Get automation rule by ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_rule_api_v1_automation_rules__rule_id__get" method="get" path="/api/v1/automation/rules/{rule_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.automationRules.getRuleApiV1AutomationRulesRuleIdGet({
    ruleId: "08ecc2bf-1d18-4bfd-a583-e9c6ec629fd1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { automationRulesGetRuleApiV1AutomationRulesRuleIdGet } from "openapi/funcs/automation-rules-get-rule-api-v1-automation-rules-rule-id-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await automationRulesGetRuleApiV1AutomationRulesRuleIdGet(sdk, {
    ruleId: "08ecc2bf-1d18-4bfd-a583-e9c6ec629fd1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("automationRulesGetRuleApiV1AutomationRulesRuleIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRuleApiV1AutomationRulesRuleIdGetRequest](../../models/operations/get-rule-api-v1-automation-rules-rule-id-get-request.md)                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RuleResponse](../../models/rule-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## updateRuleApiV1AutomationRulesRuleIdPut

Update automation rule.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_rule_api_v1_automation_rules__rule_id__put" method="put" path="/api/v1/automation/rules/{rule_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.automationRules.updateRuleApiV1AutomationRulesRuleIdPut({
    ruleId: "79bdc341-0fc3-4725-9daa-2c3ae016dd77",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { automationRulesUpdateRuleApiV1AutomationRulesRuleIdPut } from "openapi/funcs/automation-rules-update-rule-api-v1-automation-rules-rule-id-put.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await automationRulesUpdateRuleApiV1AutomationRulesRuleIdPut(sdk, {
    ruleId: "79bdc341-0fc3-4725-9daa-2c3ae016dd77",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("automationRulesUpdateRuleApiV1AutomationRulesRuleIdPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateRuleApiV1AutomationRulesRuleIdPutRequest](../../models/operations/update-rule-api-v1-automation-rules-rule-id-put-request.md)                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RuleResponse](../../models/rule-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## deleteRuleApiV1AutomationRulesRuleIdDelete

Delete automation rule.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_rule_api_v1_automation_rules__rule_id__delete" method="delete" path="/api/v1/automation/rules/{rule_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await sdk.automationRules.deleteRuleApiV1AutomationRulesRuleIdDelete({
    ruleId: "d93a66c1-6cf8-4f32-815d-baf93da98ce5",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { automationRulesDeleteRuleApiV1AutomationRulesRuleIdDelete } from "openapi/funcs/automation-rules-delete-rule-api-v1-automation-rules-rule-id-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await automationRulesDeleteRuleApiV1AutomationRulesRuleIdDelete(sdk, {
    ruleId: "d93a66c1-6cf8-4f32-815d-baf93da98ce5",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("automationRulesDeleteRuleApiV1AutomationRulesRuleIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteRuleApiV1AutomationRulesRuleIdDeleteRequest](../../models/operations/delete-rule-api-v1-automation-rules-rule-id-delete-request.md)                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## patchRuleApiV1AutomationRulesRuleIdPatch

Partially update automation rule (PATCH).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_rule_api_v1_automation_rules__rule_id__patch" method="patch" path="/api/v1/automation/rules/{rule_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.automationRules.patchRuleApiV1AutomationRulesRuleIdPatch({
    ruleId: "1eb44939-daad-4838-94b8-0ba4fb3d7d27",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { automationRulesPatchRuleApiV1AutomationRulesRuleIdPatch } from "openapi/funcs/automation-rules-patch-rule-api-v1-automation-rules-rule-id-patch.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await automationRulesPatchRuleApiV1AutomationRulesRuleIdPatch(sdk, {
    ruleId: "1eb44939-daad-4838-94b8-0ba4fb3d7d27",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("automationRulesPatchRuleApiV1AutomationRulesRuleIdPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchRuleApiV1AutomationRulesRuleIdPatchRequest](../../models/operations/patch-rule-api-v1-automation-rules-rule-id-patch-request.md)                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RuleResponse](../../models/rule-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## executeRuleApiV1AutomationRulesRuleIdExecutePost

Manually execute automation rule.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="execute_rule_api_v1_automation_rules__rule_id__execute_post" method="post" path="/api/v1/automation/rules/{rule_id}/execute" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.automationRules.executeRuleApiV1AutomationRulesRuleIdExecutePost({
    ruleId: "6bcd8d0f-beda-434d-b3c6-8d7b9ee1edf7",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { automationRulesExecuteRuleApiV1AutomationRulesRuleIdExecutePost } from "openapi/funcs/automation-rules-execute-rule-api-v1-automation-rules-rule-id-execute-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await automationRulesExecuteRuleApiV1AutomationRulesRuleIdExecutePost(sdk, {
    ruleId: "6bcd8d0f-beda-434d-b3c6-8d7b9ee1edf7",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("automationRulesExecuteRuleApiV1AutomationRulesRuleIdExecutePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ExecuteRuleApiV1AutomationRulesRuleIdExecutePostRequest](../../models/operations/execute-rule-api-v1-automation-rules-rule-id-execute-post-request.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ExecuteRuleResponse](../../models/execute-rule-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getRuleExecutionsApiV1AutomationRulesRuleIdExecutionsGet

Get execution history for a specific automation rule.

Returns list of past executions with their status, results, and errors.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_rule_executions_api_v1_automation_rules__rule_id__executions_get" method="get" path="/api/v1/automation/rules/{rule_id}/executions" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.automationRules.getRuleExecutionsApiV1AutomationRulesRuleIdExecutionsGet({
    ruleId: "96a289c0-cb9c-497b-8004-78ac7ac1ed11",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { automationRulesGetRuleExecutionsApiV1AutomationRulesRuleIdExecutionsGet } from "openapi/funcs/automation-rules-get-rule-executions-api-v1-automation-rules-rule-id-executions-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await automationRulesGetRuleExecutionsApiV1AutomationRulesRuleIdExecutionsGet(sdk, {
    ruleId: "96a289c0-cb9c-497b-8004-78ac7ac1ed11",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("automationRulesGetRuleExecutionsApiV1AutomationRulesRuleIdExecutionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                           | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                           | [operations.GetRuleExecutionsApiV1AutomationRulesRuleIdExecutionsGetRequest](../../models/operations/get-rule-executions-api-v1-automation-rules-rule-id-executions-get-request.md) | :heavy_check_mark:                                                                                                                                                                  | The request object to use for the request.                                                                                                                                          |
| `options`                                                                                                                                                                           | RequestOptions                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                               |
| `options.fetchOptions`                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                             | :heavy_minus_sign:                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.      |
| `options.retries`                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                    |

### Response

**Promise\<[models.ExecutionResponse[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## automationHealthCheckApiV1AutomationHealthGet

Health check for automation system.

Checks:
- API availability
- Prefect server connection
- Task registry
- Celery Beat (indirectly via task registry)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="automation_health_check_api_v1_automation_health_get" method="get" path="/api/v1/automation/health" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.automationRules.automationHealthCheckApiV1AutomationHealthGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { automationRulesAutomationHealthCheckApiV1AutomationHealthGet } from "openapi/funcs/automation-rules-automation-health-check-api-v1-automation-health-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await automationRulesAutomationHealthCheckApiV1AutomationHealthGet(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("automationRulesAutomationHealthCheckApiV1AutomationHealthGet failed:", res.error);
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