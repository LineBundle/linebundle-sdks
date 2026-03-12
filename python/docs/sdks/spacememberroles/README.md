# SpaceMemberRoles

## Overview

### Available Operations

* [get_user_space_roles_api_v1_space_spaces_space_id_members_user_id_roles_get](#get_user_space_roles_api_v1_space_spaces_space_id_members_user_id_roles_get) - Get User Space Roles
* [assign_user_to_space_role_api_v1_space_spaces_space_id_members_user_id_roles_post](#assign_user_to_space_role_api_v1_space_spaces_space_id_members_user_id_roles_post) - Assign User To Space Role
* [remove_user_from_space_role_api_v1_space_spaces_space_id_members_user_id_roles_space_role_id_delete](#remove_user_from_space_role_api_v1_space_spaces_space_id_members_user_id_roles_space_role_id_delete) - Remove User From Space Role

## get_user_space_roles_api_v1_space_spaces_space_id_members_user_id_roles_get

Get all space roles for a user in a specific space.

Requires space read permissions.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_user_space_roles_api_v1_space_spaces__space_id__members__user_id__roles_get" method="get" path="/api/v1/space/spaces/{space_id}/members/{user_id}/roles" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_member_roles.get_user_space_roles_api_v1_space_spaces_space_id_members_user_id_roles_get(space_id=960716, user_id="f30afe95-41fa-4a51-93b6-79ab1718f195")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `user_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[Dict[str, Any]]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## assign_user_to_space_role_api_v1_space_spaces_space_id_members_user_id_roles_post

Assign a user to a space role.

Requires space member management permissions.

### Example Usage

<!-- UsageSnippet language="python" operationID="assign_user_to_space_role_api_v1_space_spaces__space_id__members__user_id__roles_post" method="post" path="/api/v1/space/spaces/{space_id}/members/{user_id}/roles" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_member_roles.assign_user_to_space_role_api_v1_space_spaces_space_id_members_user_id_roles_post(space_id=462735, user_id="a6ddf73b-a020-4fa8-a6a8-b25734353b72", space_role_id="e42784a5-701f-4c53-81be-a09ec6960e13")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `user_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `space_role_id`                                                     | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## remove_user_from_space_role_api_v1_space_spaces_space_id_members_user_id_roles_space_role_id_delete

Remove a user from a space role.

Requires space member management permissions.

### Example Usage

<!-- UsageSnippet language="python" operationID="remove_user_from_space_role_api_v1_space_spaces__space_id__members__user_id__roles__space_role_id__delete" method="delete" path="/api/v1/space/spaces/{space_id}/members/{user_id}/roles/{space_role_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    sdk.space_member_roles.remove_user_from_space_role_api_v1_space_spaces_space_id_members_user_id_roles_space_role_id_delete(space_id=93087, user_id="ff783c17-9a8c-49f9-a6ec-2d074a46f119", space_role_id="fb388886-8ef8-4efc-86a2-7b069003b7c6")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `user_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `space_role_id`                                                     | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |