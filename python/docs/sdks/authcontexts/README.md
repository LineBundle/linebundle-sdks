# AuthContexts

## Overview

### Available Operations

* [get](#get) - Get Auth Context

## get

Get the current authenticated user's context.

Returns user profile information and a list of organizations they belong to.
For M2M tokens (service accounts), returns minimal info with is_service_account=True.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_auth_context_api_v1_auth_context_get" method="get" path="/api/v1/auth/context" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.auth_contexts.get()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.UserContextResponse](../../models/usercontextresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |