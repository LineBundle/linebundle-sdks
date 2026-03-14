# AiWorkflows

## Overview

### Available Operations

* [getExecutionDetails](#getexecutiondetails) - Get workflow execution details

## getExecutionDetails

Retrieve detailed information about a workflow execution, including status and results.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_workflow_execution_api_v1_ai_workflows__execution_id__get" method="get" path="/api/v1/ai/workflows/{execution_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.aiWorkflows.getExecutionDetails({
    executionId: "50787faa-7630-428b-a7a4-e6e876013056",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { aiWorkflowsGetExecutionDetails } from "@linebundle-sdk/ts/funcs/ai-workflows-get-execution-details.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await aiWorkflowsGetExecutionDetails(linebundle, {
    executionId: "50787faa-7630-428b-a7a4-e6e876013056",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("aiWorkflowsGetExecutionDetails failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetWorkflowExecutionApiV1AiWorkflowsExecutionIdGetRequest](../../models/operations/get-workflow-execution-api-v1-ai-workflows-execution-id-get-request.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.WorkflowExecutionResponse](../../models/workflow-execution-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |