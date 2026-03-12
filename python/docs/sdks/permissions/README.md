# Permissions

## Overview

### Available Operations

* [list_permissions_endpoint_api_v1_api_v1_permissions_get](#list_permissions_endpoint_api_v1_api_v1_permissions_get) - List Permissions Endpoint
* [get_permission_endpoint_api_v1_api_v1_permissions_permission_code_get](#get_permission_endpoint_api_v1_api_v1_permissions_permission_code_get) - Get Permission Endpoint

## list_permissions_endpoint_api_v1_api_v1_permissions_get

List all available permissions in the system.

### Example Usage

<!-- UsageSnippet language="python" operationID="list_permissions_endpoint_api_v1_api_v1_permissions_get" method="get" path="/api/v1/api/v1/permissions" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.permissions.list_permissions_endpoint_api_v1_api_v1_permissions_get()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.PermissionResponse]](../../models/.md)**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## get_permission_endpoint_api_v1_api_v1_permissions_permission_code_get

Get a specific permission by code.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_permission_endpoint_api_v1_api_v1_permissions__permission_code__get" method="get" path="/api/v1/api/v1/permissions/{permission_code}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.permissions.get_permission_endpoint_api_v1_api_v1_permissions_permission_code_get(permission_code="<value>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `permission_code`                                                   | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.PermissionResponse](../../models/permissionresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |