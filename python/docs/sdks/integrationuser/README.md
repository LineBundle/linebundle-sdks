# IntegrationUser

## Overview

### Available Operations

* [handle_removed](#handle_removed) - Webhook from Zitadel for user removal

## handle_removed

Receives an authenticated JWT webhook payload from a Zitadel Action
when a user is removed.

### Example Usage

<!-- UsageSnippet language="python" operationID="handle_user_removed_api_v1_integration_user_removed_post" method="post" path="/api/v1/integration/user-removed" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.integration_user.handle_removed()

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