# Analytic

## Overview

### Available Operations

* [get_analytic_totals_api_v1_analytic_counts_get](#get_analytic_totals_api_v1_analytic_counts_get) - Get Analytic Totals
* [get_dashboard_analytics_api_v1_analytic_dashboard_get](#get_dashboard_analytics_api_v1_analytic_dashboard_get) - Get Dashboard Analytics

## get_analytic_totals_api_v1_analytic_counts_get

Get Analytic Totals

### Example Usage

<!-- UsageSnippet language="python" operationID="get_analytic_totals_api_v1_analytic_counts_get" method="get" path="/api/v1/analytic/counts" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.analytic.get_analytic_totals_api_v1_analytic_counts_get()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.GetAnalyticTotalsDto](../../models/getanalytictotalsdto.md)**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## get_dashboard_analytics_api_v1_analytic_dashboard_get

Get Dashboard Analytics

### Example Usage

<!-- UsageSnippet language="python" operationID="get_dashboard_analytics_api_v1_analytic_dashboard_get" method="get" path="/api/v1/analytic/dashboard" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.analytic.get_dashboard_analytics_api_v1_analytic_dashboard_get()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.DashboardStoryResponse](../../models/dashboardstoryresponse.md)**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |