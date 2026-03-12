# CustomRoles

## Overview

### Available Operations

* [list_roles_endpoint_api_v1_api_v1_roles_get](#list_roles_endpoint_api_v1_api_v1_roles_get) - List Roles Endpoint
* [create_role_endpoint_api_v1_api_v1_roles_post](#create_role_endpoint_api_v1_api_v1_roles_post) - Create Role Endpoint
* [get_role_endpoint_api_v1_api_v1_roles_role_id_get](#get_role_endpoint_api_v1_api_v1_roles_role_id_get) - Get Role Endpoint
* [update_role_endpoint_api_v1_api_v1_roles_role_id_put](#update_role_endpoint_api_v1_api_v1_roles_role_id_put) - Update Role Endpoint
* [delete_role_endpoint_api_v1_api_v1_roles_role_id_delete](#delete_role_endpoint_api_v1_api_v1_roles_role_id_delete) - Delete Role Endpoint
* [set_permissions_endpoint_api_v1_api_v1_roles_role_id_permissions_put](#set_permissions_endpoint_api_v1_api_v1_roles_role_id_permissions_put) - Set Permissions Endpoint
* [add_permission_endpoint_api_v1_api_v1_roles_role_id_permissions_post](#add_permission_endpoint_api_v1_api_v1_roles_role_id_permissions_post) - Add Permission Endpoint
* [remove_permission_endpoint_api_v1_api_v1_roles_role_id_permissions_permission_code_delete](#remove_permission_endpoint_api_v1_api_v1_roles_role_id_permissions_permission_code_delete) - Remove Permission Endpoint
* [get_my_permissions_endpoint_api_v1_api_v1_roles_me_permissions_get](#get_my_permissions_endpoint_api_v1_api_v1_roles_me_permissions_get) - Get My Permissions Endpoint
* [assign_role_to_user_endpoint_api_v1_api_v1_roles_users_user_id_roles_post](#assign_role_to_user_endpoint_api_v1_api_v1_roles_users_user_id_roles_post) - Assign Role To User Endpoint
* [remove_role_from_user_endpoint_api_v1_api_v1_roles_users_user_id_roles_role_id_delete](#remove_role_from_user_endpoint_api_v1_api_v1_roles_users_user_id_roles_role_id_delete) - Remove Role From User Endpoint

## list_roles_endpoint_api_v1_api_v1_roles_get

List all custom roles for an organization.

### Example Usage

<!-- UsageSnippet language="python" operationID="list_roles_endpoint_api_v1_api_v1_roles_get" method="get" path="/api/v1/api/v1/roles" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.custom_roles.list_roles_endpoint_api_v1_api_v1_roles_get(limit=50)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `org_id`                                                            | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Organization ID (uses current org if not provided)                  |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Limit results                                                       |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.RoleListResponse]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## create_role_endpoint_api_v1_api_v1_roles_post

Create a new custom role.

### Example Usage

<!-- UsageSnippet language="python" operationID="create_role_endpoint_api_v1_api_v1_roles_post" method="post" path="/api/v1/api/v1/roles" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.custom_roles.create_role_endpoint_api_v1_api_v1_roles_post(name="<value>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `name`                                                              | *str*                                                               | :heavy_check_mark:                                                  | Role name                                                           |
| `org_id`                                                            | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Organization ID (uses current org if not provided)                  |
| `description`                                                       | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Role description                                                    |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.RoleResponse](../../models/roleresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_role_endpoint_api_v1_api_v1_roles_role_id_get

Get a single custom role by ID.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_role_endpoint_api_v1_api_v1_roles__role_id__get" method="get" path="/api/v1/api/v1/roles/{role_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.custom_roles.get_role_endpoint_api_v1_api_v1_roles_role_id_get(role_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `role_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.RoleResponse](../../models/roleresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## update_role_endpoint_api_v1_api_v1_roles_role_id_put

Update an existing custom role.

### Example Usage

<!-- UsageSnippet language="python" operationID="update_role_endpoint_api_v1_api_v1_roles__role_id__put" method="put" path="/api/v1/api/v1/roles/{role_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.custom_roles.update_role_endpoint_api_v1_api_v1_roles_role_id_put(role_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `role_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `name`                                                              | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Role name                                                           |
| `description`                                                       | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Role description                                                    |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.RoleResponse](../../models/roleresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## delete_role_endpoint_api_v1_api_v1_roles_role_id_delete

Delete a custom role.

### Example Usage

<!-- UsageSnippet language="python" operationID="delete_role_endpoint_api_v1_api_v1_roles__role_id__delete" method="delete" path="/api/v1/api/v1/roles/{role_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    sdk.custom_roles.delete_role_endpoint_api_v1_api_v1_roles_role_id_delete(role_id="<id>")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `role_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## set_permissions_endpoint_api_v1_api_v1_roles_role_id_permissions_put

Set all permissions for a role (replaces existing).

### Example Usage

<!-- UsageSnippet language="python" operationID="set_permissions_endpoint_api_v1_api_v1_roles__role_id__permissions_put" method="put" path="/api/v1/api/v1/roles/{role_id}/permissions" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.custom_roles.set_permissions_endpoint_api_v1_api_v1_roles_role_id_permissions_put(role_id="<id>", permission_codes=[
        "<value 1>",
    ])

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `role_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `permission_codes`                                                  | List[*str*]                                                         | :heavy_check_mark:                                                  | List of permission codes                                            |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## add_permission_endpoint_api_v1_api_v1_roles_role_id_permissions_post

Add a permission to a role.

### Example Usage

<!-- UsageSnippet language="python" operationID="add_permission_endpoint_api_v1_api_v1_roles__role_id__permissions_post" method="post" path="/api/v1/api/v1/roles/{role_id}/permissions" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.custom_roles.add_permission_endpoint_api_v1_api_v1_roles_role_id_permissions_post(role_id="<id>", permission_code="<value>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `role_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `permission_code`                                                   | *str*                                                               | :heavy_check_mark:                                                  | Permission code (e.g., 'events:create')                             |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## remove_permission_endpoint_api_v1_api_v1_roles_role_id_permissions_permission_code_delete

Remove a permission from a role.

### Example Usage

<!-- UsageSnippet language="python" operationID="remove_permission_endpoint_api_v1_api_v1_roles__role_id__permissions__permission_code__delete" method="delete" path="/api/v1/api/v1/roles/{role_id}/permissions/{permission_code}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    sdk.custom_roles.remove_permission_endpoint_api_v1_api_v1_roles_role_id_permissions_permission_code_delete(role_id="<id>", permission_code="<value>")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `role_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `permission_code`                                                   | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_my_permissions_endpoint_api_v1_api_v1_roles_me_permissions_get

Get current user's effective permissions.

This returns the permissions from the JWT token claims, augmented with
any custom role permissions from the database.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_my_permissions_endpoint_api_v1_api_v1_roles_me_permissions_get" method="get" path="/api/v1/api/v1/roles/me/permissions" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.custom_roles.get_my_permissions_endpoint_api_v1_api_v1_roles_me_permissions_get()

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

## assign_role_to_user_endpoint_api_v1_api_v1_roles_users_user_id_roles_post

Assign a role to a user.

### Example Usage

<!-- UsageSnippet language="python" operationID="assign_role_to_user_endpoint_api_v1_api_v1_roles_users__user_id__roles_post" method="post" path="/api/v1/api/v1/roles/users/{user_id}/roles" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.custom_roles.assign_role_to_user_endpoint_api_v1_api_v1_roles_users_user_id_roles_post(user_id="<id>", role_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `user_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `role_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## remove_role_from_user_endpoint_api_v1_api_v1_roles_users_user_id_roles_role_id_delete

Remove a role from a user.

### Example Usage

<!-- UsageSnippet language="python" operationID="remove_role_from_user_endpoint_api_v1_api_v1_roles_users__user_id__roles__role_id__delete" method="delete" path="/api/v1/api/v1/roles/users/{user_id}/roles/{role_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    sdk.custom_roles.remove_role_from_user_endpoint_api_v1_api_v1_roles_users_user_id_roles_role_id_delete(user_id="<id>", role_id="<id>")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `user_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `role_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |