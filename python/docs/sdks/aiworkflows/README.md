# AiWorkflows

## Overview

### Available Operations

* [get_execution_details](#get_execution_details) - Get workflow execution details

## get_execution_details

Retrieve detailed information about a workflow execution, including status and results.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_workflow_execution_api_v1_ai_workflows__execution_id__get" method="get" path="/api/v1/ai/workflows/{execution_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.ai_workflows.get_execution_details(execution_id="50787faa-7630-428b-a7a4-e6e876013056")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `execution_id`                                                      | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.WorkflowExecutionResponse](../../models/workflowexecutionresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |