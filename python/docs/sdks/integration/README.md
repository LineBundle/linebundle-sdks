# Integration

## Overview

### Available Operations

* [handle_org_removed](#handle_org_removed) - Webhook from Zitadel for organization removal

## handle_org_removed

Receives an authenticated JWT webhook payload from a Zitadel Action
when an organization is removed.

### Example Usage

<!-- UsageSnippet language="python" operationID="handle_org_removed_api_v1_integration_org_removed_post" method="post" path="/api/v1/integration/org-removed" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.integration.handle_org_removed()

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