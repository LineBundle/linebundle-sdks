# SpaceRoles

## Overview

### Available Operations

* [list_space_roles_api_v1_space_spaces_space_id_roles_get](#list_space_roles_api_v1_space_spaces_space_id_roles_get) - List Space Roles
* [create_space_role_api_v1_space_spaces_space_id_roles_post](#create_space_role_api_v1_space_spaces_space_id_roles_post) - Create Space Role
* [get_space_role_api_v1_space_spaces_space_id_roles_role_id_get](#get_space_role_api_v1_space_spaces_space_id_roles_role_id_get) - Get Space Role
* [update_space_role_api_v1_space_spaces_space_id_roles_role_id_put](#update_space_role_api_v1_space_spaces_space_id_roles_role_id_put) - Update Space Role
* [delete_space_role_api_v1_space_spaces_space_id_roles_role_id_delete](#delete_space_role_api_v1_space_spaces_space_id_roles_role_id_delete) - Delete Space Role
* [assign_permission_to_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_post](#assign_permission_to_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_post) - Assign Permission To Space Role
* [remove_permission_from_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_permission_id_delete](#remove_permission_from_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_permission_id_delete) - Remove Permission From Space Role

## list_space_roles_api_v1_space_spaces_space_id_roles_get

List all roles for a space.

Requires space read permissions.

### Example Usage

<!-- UsageSnippet language="python" operationID="list_space_roles_api_v1_space_spaces__space_id__roles__get" method="get" path="/api/v1/space/spaces/{space_id}/roles/" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_roles.list_space_roles_api_v1_space_spaces_space_id_roles_get(space_id=723392)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.SpaceRoleRead]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## create_space_role_api_v1_space_spaces_space_id_roles_post

Create a new role for a space.

Requires space management permissions.

### Example Usage

<!-- UsageSnippet language="python" operationID="create_space_role_api_v1_space_spaces__space_id__roles__post" method="post" path="/api/v1/space/spaces/{space_id}/roles/" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_roles.create_space_role_api_v1_space_spaces_space_id_roles_post(space_id=14917, name="<value>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `name`                                                              | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `description`                                                       | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SpaceRoleRead](../../models/spaceroleread.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_space_role_api_v1_space_spaces_space_id_roles_role_id_get

Get a specific space role by ID.

Requires space read permissions.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_space_role_api_v1_space_spaces__space_id__roles__role_id__get" method="get" path="/api/v1/space/spaces/{space_id}/roles/{role_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_roles.get_space_role_api_v1_space_spaces_space_id_roles_role_id_get(space_id=812713, role_id="75d3a981-642f-4ac9-8643-dd2d4cf0f3c1")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `role_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SpaceRoleRead](../../models/spaceroleread.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## update_space_role_api_v1_space_spaces_space_id_roles_role_id_put

Update a space role.

Requires space management permissions.

### Example Usage

<!-- UsageSnippet language="python" operationID="update_space_role_api_v1_space_spaces__space_id__roles__role_id__put" method="put" path="/api/v1/space/spaces/{space_id}/roles/{role_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_roles.update_space_role_api_v1_space_spaces_space_id_roles_role_id_put(space_id=771152, role_id="af40c759-21a2-41ec-9835-58bf03edd24d")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `role_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `name`                                                              | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | N/A                                                                 |
| `description`                                                       | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SpaceRoleRead](../../models/spaceroleread.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## delete_space_role_api_v1_space_spaces_space_id_roles_role_id_delete

Delete a space role.

Requires space management permissions.

### Example Usage

<!-- UsageSnippet language="python" operationID="delete_space_role_api_v1_space_spaces__space_id__roles__role_id__delete" method="delete" path="/api/v1/space/spaces/{space_id}/roles/{role_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    sdk.space_roles.delete_space_role_api_v1_space_spaces_space_id_roles_role_id_delete(space_id=603327, role_id="9f590db2-df4b-4631-9086-522755626b91")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `role_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## assign_permission_to_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_post

Assign a permission to a space role.

Requires space management permissions.

### Example Usage

<!-- UsageSnippet language="python" operationID="assign_permission_to_space_role_api_v1_space_spaces__space_id__roles__role_id__permissions_post" method="post" path="/api/v1/space/spaces/{space_id}/roles/{role_id}/permissions" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_roles.assign_permission_to_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_post(space_id=447317, role_id="cb79fecb-5593-4d09-a2fc-d78fe8a9ffc9", permission_id="34688f2f-8cd7-466e-afec-1c0558de48c7")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `role_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `permission_id`                                                     | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## remove_permission_from_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_permission_id_delete

Remove a permission from a space role.

Requires space management permissions.

### Example Usage

<!-- UsageSnippet language="python" operationID="remove_permission_from_space_role_api_v1_space_spaces__space_id__roles__role_id__permissions__permission_id__delete" method="delete" path="/api/v1/space/spaces/{space_id}/roles/{role_id}/permissions/{permission_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    sdk.space_roles.remove_permission_from_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_permission_id_delete(space_id=285337, role_id="1c09981c-a99c-4295-bc98-bbe1f8b1d79c", permission_id="1ac9eed7-e946-491e-b666-52ce12192498")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `role_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `permission_id`                                                     | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |