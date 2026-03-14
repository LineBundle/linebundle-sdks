# AiAgents

## Overview

### Available Operations

* [get_org_costs](#get_org_costs) - Get organization-wide cost summary

## get_org_costs

Retrieve aggregated cost and token usage across all AI agent sessions for the current organization. Requires organization context (not available in personal mode).

### Example Usage

<!-- UsageSnippet language="python" operationID="get_org_costs_api_v1_ai_costs_get" method="get" path="/api/v1/ai/costs" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.ai_agents.get_org_costs()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `start_date`                                                        | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Start date filter (ISO format)                                      |
| `end_date`                                                          | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | End date filter (ISO format)                                        |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.OrgCostDetailResponse](../../models/orgcostdetailresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |