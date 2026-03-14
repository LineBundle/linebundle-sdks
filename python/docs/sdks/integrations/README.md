# Integrations

## Overview

### Available Operations

* [handle_org_created](#handle_org_created) - Webhook from Zitadel for organization creation

## handle_org_created

Receives an authenticated JWT webhook payload from a Zitadel Action
when a new organization is created.

### Example Usage

<!-- UsageSnippet language="python" operationID="handle_org_created_api_v1_integration_org_created_post" method="post" path="/api/v1/integration/org-created" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.integrations.handle_org_created()

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