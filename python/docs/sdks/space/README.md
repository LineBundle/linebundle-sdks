# Space

## Overview

### Available Operations

* [test_auth_api_v1_space_test_auth_get](#test_auth_api_v1_space_test_auth_get) - Test Auth
* [get_space_list_api_v1_space_get](#get_space_list_api_v1_space_get) - Get Space List
* [create_space_api_v1_space_post](#create_space_api_v1_space_post) - Create Space
* [get_space_by_id_api_v1_space_space_id_get](#get_space_by_id_api_v1_space_space_id_get) - Get Space By Id
* [update_space_api_v1_space_space_id_put](#update_space_api_v1_space_space_id_put) - Update Space
* [delete_space_api_v1_space_space_id_delete](#delete_space_api_v1_space_space_id_delete) - Delete Space
* [create_space_with_parent_api_v1_space_with_parent_post](#create_space_with_parent_api_v1_space_with_parent_post) - Create Space With Parent
* [publish_space_api_v1_space_space_id_publish_post](#publish_space_api_v1_space_space_id_publish_post) - Publish space
* [publish_space_api_v1_space_space_id_publish_patch](#publish_space_api_v1_space_space_id_publish_patch) - Publish Space
* [archive_space_api_v1_space_space_id_archive_patch](#archive_space_api_v1_space_space_id_archive_patch) - Archive Space
* [get_space_members_api_v1_space_space_id_members_get](#get_space_members_api_v1_space_space_id_members_get) - Get Space Members
* [add_space_member_api_v1_space_space_id_members_post](#add_space_member_api_v1_space_space_id_members_post) - Add Space Member
* [remove_space_member_api_v1_space_space_id_members_user_id_delete](#remove_space_member_api_v1_space_space_id_members_user_id_delete) - Remove Space Member
* [update_space_member_role_api_v1_space_space_id_members_user_id_patch](#update_space_member_role_api_v1_space_space_id_members_user_id_patch) - Update Space Member Role
* [get_joinable_spaces_by_user_api_v1_space_by_user_user_id_joinable_get](#get_joinable_spaces_by_user_api_v1_space_by_user_user_id_joinable_get) - Get Joinable Spaces By User
* [join_space_api_v1_space_space_id_join_post](#join_space_api_v1_space_space_id_join_post) - Join Space
* [transfer_space_api_v1_space_space_id_transfer_post](#transfer_space_api_v1_space_space_id_transfer_post) - Transfer Space
* [get_space_children_api_v1_space_space_id_children_get](#get_space_children_api_v1_space_space_id_children_get) - Get Space Children
* [get_space_parent_api_v1_space_space_id_parent_get](#get_space_parent_api_v1_space_space_id_parent_get) - Get Space Parent
* [detach_space_from_parent_api_v1_space_space_id_parent_delete](#detach_space_from_parent_api_v1_space_space_id_parent_delete) - Detach Space From Parent
* [update_space_parent_api_v1_space_space_id_parent_patch](#update_space_parent_api_v1_space_space_id_parent_patch) - Update Space Parent
* [get_space_hierarchy_api_v1_space_space_id_hierarchy_get](#get_space_hierarchy_api_v1_space_space_id_hierarchy_get) - Get Space Hierarchy
* [bulk_update_space_parent_api_v1_space_bulk_parent_patch](#bulk_update_space_parent_api_v1_space_bulk_parent_patch) - Bulk Update Space Parent
* [unpublish_space_api_v1_space_space_id_unpublish_post](#unpublish_space_api_v1_space_space_id_unpublish_post) - Unpublish space
* [list_space_versions_api_v1_space_space_id_versions_get](#list_space_versions_api_v1_space_space_id_versions_get) - List space versions
* [get_latest_space_version_api_v1_space_space_id_versions_latest_get](#get_latest_space_version_api_v1_space_space_id_versions_latest_get) - Get latest published space version
* [get_space_version_api_v1_space_space_id_versions_version_number_get](#get_space_version_api_v1_space_space_id_versions_version_number_get) - Get specific space version
* [compare_space_versions_api_v1_space_space_id_versions_compare_get](#compare_space_versions_api_v1_space_space_id_versions_compare_get) - Compare space versions
* [rollback_space_api_v1_space_space_id_rollback_post](#rollback_space_api_v1_space_space_id_rollback_post) - Rollback space to version
* [list_space_roles_api_v1_space_spaces_space_id_roles_get](#list_space_roles_api_v1_space_spaces_space_id_roles_get) - List Space Roles
* [create_space_role_api_v1_space_spaces_space_id_roles_post](#create_space_role_api_v1_space_spaces_space_id_roles_post) - Create Space Role
* [get_space_role_api_v1_space_spaces_space_id_roles_role_id_get](#get_space_role_api_v1_space_spaces_space_id_roles_role_id_get) - Get Space Role
* [update_space_role_api_v1_space_spaces_space_id_roles_role_id_put](#update_space_role_api_v1_space_spaces_space_id_roles_role_id_put) - Update Space Role
* [delete_space_role_api_v1_space_spaces_space_id_roles_role_id_delete](#delete_space_role_api_v1_space_spaces_space_id_roles_role_id_delete) - Delete Space Role
* [assign_permission_to_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_post](#assign_permission_to_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_post) - Assign Permission To Space Role
* [remove_permission_from_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_permission_id_delete](#remove_permission_from_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_permission_id_delete) - Remove Permission From Space Role
* [get_user_space_roles_api_v1_space_spaces_space_id_members_user_id_roles_get](#get_user_space_roles_api_v1_space_spaces_space_id_members_user_id_roles_get) - Get User Space Roles
* [assign_user_to_space_role_api_v1_space_spaces_space_id_members_user_id_roles_post](#assign_user_to_space_role_api_v1_space_spaces_space_id_members_user_id_roles_post) - Assign User To Space Role
* [remove_user_from_space_role_api_v1_space_spaces_space_id_members_user_id_roles_space_role_id_delete](#remove_user_from_space_role_api_v1_space_spaces_space_id_members_user_id_roles_space_role_id_delete) - Remove User From Space Role

## test_auth_api_v1_space_test_auth_get

Test endpoint to verify authentication

### Example Usage

<!-- UsageSnippet language="python" operationID="test_auth_api_v1_space_test_auth_get" method="get" path="/api/v1/space/test-auth" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.test_auth_api_v1_space_test_auth_get()

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

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## get_space_list_api_v1_space_get

Get Space List

### Example Usage

<!-- UsageSnippet language="python" operationID="get_space_list_api_v1_space__get" method="get" path="/api/v1/space/" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.get_space_list_api_v1_space_get(limit=10, offset=0)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Limit                                                               |
| `offset`                                                            | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Offset                                                              |
| `prev`                                                              | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Prev ID                                                             |
| `search`                                                            | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | Search term for title/description                                   |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.PaginatedSpaceListResponseDTO](../../models/paginatedspacelistresponsedto.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## create_space_api_v1_space_post

Create Space

### Example Usage

<!-- UsageSnippet language="python" operationID="create_space_api_v1_space__post" method="post" path="/api/v1/space/" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.create_space_api_v1_space_post(title="<value>", description="kindheartedly secondary ethyl brr disappointment eek of towards elegantly", timezone="Europe/Busingen", visibility=302580)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `title`                                                             | *str*                                                               | :heavy_check_mark:                                                  | Title                                                               |
| `description`                                                       | *str*                                                               | :heavy_check_mark:                                                  | Description                                                         |
| `timezone`                                                          | *str*                                                               | :heavy_check_mark:                                                  | Timezone                                                            |
| `visibility`                                                        | *int*                                                               | :heavy_check_mark:                                                  | Visibility                                                          |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.CreateSpaceResponseDTO](../../models/createspaceresponsedto.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_space_by_id_api_v1_space_space_id_get

Get Space By Id

### Example Usage

<!-- UsageSnippet language="python" operationID="get_space_by_id_api_v1_space__space_id__get" method="get" path="/api/v1/space/{space_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.get_space_by_id_api_v1_space_space_id_get(space_id=605238)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.GetSpaceListResponseDTO](../../models/getspacelistresponsedto.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## update_space_api_v1_space_space_id_put

Update Space

### Example Usage

<!-- UsageSnippet language="python" operationID="update_space_api_v1_space__space_id__put" method="put" path="/api/v1/space/{space_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.update_space_api_v1_space_space_id_put(space_id=840637, title="<value>", description="monumental atop yuck aboard lone", timezone="America/Argentina/Ushuaia", visibility=403702)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `title`                                                             | *str*                                                               | :heavy_check_mark:                                                  | Title                                                               |
| `description`                                                       | *str*                                                               | :heavy_check_mark:                                                  | Description                                                         |
| `timezone`                                                          | *str*                                                               | :heavy_check_mark:                                                  | Timezone                                                            |
| `visibility`                                                        | *int*                                                               | :heavy_check_mark:                                                  | Visibility                                                          |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.UpdateSpaceResponseDTO](../../models/updatespaceresponsedto.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## delete_space_api_v1_space_space_id_delete

Delete Space

### Example Usage

<!-- UsageSnippet language="python" operationID="delete_space_api_v1_space__space_id__delete" method="delete" path="/api/v1/space/{space_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.delete_space_api_v1_space_space_id_delete(space_id=938678)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## create_space_with_parent_api_v1_space_with_parent_post

Create a space with parent relationship and inheritance settings

### Example Usage

<!-- UsageSnippet language="python" operationID="create_space_with_parent_api_v1_space_with_parent_post" method="post" path="/api/v1/space/with-parent" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.create_space_with_parent_api_v1_space_with_parent_post(title="<value>", description="", timezone="UTC", visibility=10)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `title`                                                             | *str*                                                               | :heavy_check_mark:                                                  | Space title                                                         |
| `description`                                                       | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | Space description                                                   |
| `timezone`                                                          | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | Space timezone                                                      |
| `visibility`                                                        | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Space visibility level                                              |
| `parent_id`                                                         | *OptionalNullable[int]*                                             | :heavy_minus_sign:                                                  | Parent space ID for sub-spaces                                      |
| `inheritance_settings`                                              | Dict[str, *Any*]                                                    | :heavy_minus_sign:                                                  | Inheritance configuration for sub-spaces                            |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.CreateSpaceResponseDTO](../../models/createspaceresponsedto.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## publish_space_api_v1_space_space_id_publish_post

Publish current space state as immutable version for community discovery

### Example Usage

<!-- UsageSnippet language="python" operationID="publish_space_api_v1_space__space_id__publish_post" method="post" path="/api/v1/space/{space_id}/publish" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.publish_space_api_v1_space_space_id_publish_post(space_id=334267)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SpaceVersionRead](../../models/spaceversionread.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## publish_space_api_v1_space_space_id_publish_patch

Publish Space

### Example Usage

<!-- UsageSnippet language="python" operationID="publish_space_api_v1_space__space_id__publish_patch" method="patch" path="/api/v1/space/{space_id}/publish" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.publish_space_api_v1_space_space_id_publish_patch(space_id=949598)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## archive_space_api_v1_space_space_id_archive_patch

Archive Space

### Example Usage

<!-- UsageSnippet language="python" operationID="archive_space_api_v1_space__space_id__archive_patch" method="patch" path="/api/v1/space/{space_id}/archive" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.archive_space_api_v1_space_space_id_archive_patch(space_id=666185)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_space_members_api_v1_space_space_id_members_get

Get all members of a space

### Example Usage

<!-- UsageSnippet language="python" operationID="get_space_members_api_v1_space__space_id__members_get" method="get" path="/api/v1/space/{space_id}/members" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.get_space_members_api_v1_space_space_id_members_get(space_id=614422)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.SpaceMemberResponse]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## add_space_member_api_v1_space_space_id_members_post

Add a member to a space

### Example Usage

<!-- UsageSnippet language="python" operationID="add_space_member_api_v1_space__space_id__members_post" method="post" path="/api/v1/space/{space_id}/members" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.add_space_member_api_v1_space_space_id_members_post(space_id=264528, email="Petra.Larson80@yahoo.com")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `email`                                                             | *str*                                                               | :heavy_check_mark:                                                  | Email of the user to add                                            |
| `role`                                                              | [Optional[models.SpaceRole]](../../models/spacerole.md)             | :heavy_minus_sign:                                                  | Space roles with hierarchical permissions                           |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SpaceMemberResponse](../../models/spacememberresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## remove_space_member_api_v1_space_space_id_members_user_id_delete

Remove a member from a space

### Example Usage

<!-- UsageSnippet language="python" operationID="remove_space_member_api_v1_space__space_id__members__user_id__delete" method="delete" path="/api/v1/space/{space_id}/members/{user_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.remove_space_member_api_v1_space_space_id_members_user_id_delete(space_id=367023, user_id="<id>")

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

**[Any](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## update_space_member_role_api_v1_space_space_id_members_user_id_patch

Update a space member's role

### Example Usage

<!-- UsageSnippet language="python" operationID="update_space_member_role_api_v1_space__space_id__members__user_id__patch" method="patch" path="/api/v1/space/{space_id}/members/{user_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.update_space_member_role_api_v1_space_space_id_members_user_id_patch(space_id=949597, user_id="<id>", role="space_viewer")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `user_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `role`                                                              | [models.SpaceRole](../../models/spacerole.md)                       | :heavy_check_mark:                                                  | Space roles with hierarchical permissions                           |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SpaceMemberResponse](../../models/spacememberresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_joinable_spaces_by_user_api_v1_space_by_user_user_id_joinable_get

Get spaces owned by a user that the current viewer can join.

This endpoint returns spaces where the target user is an owner and the current
viewer has permission to join based on visibility rules:
- PUBLIC: Always visible to all users
- TENANT: Visible only to users in the same organization
- MEMBERS_ONLY: Excluded from joinable list (requires approval)

Args:
    user_id: UUID string of the user whose spaces to retrieve
    limit: Maximum number of spaces to return (default: 10, max: 12)
    prev: Previous ID for cursor-based pagination
    sort_by: Field to sort by (default: "created_at")
    sort_order: Sort order - "asc" or "desc" (default: "desc")

Returns:
    List[GetSpaceListResponseDTO]: List of joinable spaces

Raises:
    HTTPException: 401 for unauthorized access, 500 for server errors

### Example Usage

<!-- UsageSnippet language="python" operationID="get_joinable_spaces_by_user_api_v1_space_by_user__user_id__joinable_get" method="get" path="/api/v1/space/by-user/{user_id}/joinable" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.get_joinable_spaces_by_user_api_v1_space_by_user_user_id_joinable_get(user_id="<id>", limit=10, sort_by="created_at", sort_order="desc")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `user_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Limit                                                               |
| `prev`                                                              | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Prev ID                                                             |
| `sort_by`                                                           | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | Sort by field                                                       |
| `sort_order`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | Sort order                                                          |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.GetSpaceListResponseDTO]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## join_space_api_v1_space_space_id_join_post

Self-join the current user to a space if permitted.

This endpoint allows the current user to join a space based on visibility rules:
- PUBLIC: Anyone can join
- TENANT: Only users in the same organization can join
- MEMBERS_ONLY: Requires approval (returns 403)

Args:
    space_id: ID of the space to join

Returns:
    SpaceMemberResponse: Membership information after successful join

Raises:
    HTTPException:
        - 404: Space not found
        - 403: Permission denied (wrong tenant or members-only space)
        - 409: Already a member
        - 500: Server error

### Example Usage

<!-- UsageSnippet language="python" operationID="join_space_api_v1_space__space_id__join_post" method="post" path="/api/v1/space/{space_id}/join" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.join_space_api_v1_space_space_id_join_post(space_id=648399)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SpaceMemberResponse](../../models/spacememberresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## transfer_space_api_v1_space_space_id_transfer_post

Transfer a personal space to an organization.

This endpoint allows the creator of a personal space to transfer ownership
to an organization they are a member of with owner or admin privileges.

Requirements:
- Space must be personal (org_id IS NULL)
- Caller must be the space creator
- Caller must be owner or admin of the target organization

Args:
    space_id: ID of the space to transfer
    request: Transfer request containing target_org_id

Returns:
    TransferSpaceResponse: Transfer status and metadata

Raises:
    HTTPException:
        - 400: Invalid request (already org-scoped, not creator, etc.)
        - 403: Permission denied (not org owner/admin)
        - 404: Space or organization not found
        - 500: Server error

### Example Usage

<!-- UsageSnippet language="python" operationID="transfer_space_api_v1_space__space_id__transfer_post" method="post" path="/api/v1/space/{space_id}/transfer" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.transfer_space_api_v1_space_space_id_transfer_post(space_id=533447, target_org_id="6dfc9394-957c-47b7-b6ec-5dcb5a5702dd")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `target_org_id`                                                     | *str*                                                               | :heavy_check_mark:                                                  | UUID of the target organization to transfer this space to           |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.TransferSpaceResponse](../../models/transferspaceresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_space_children_api_v1_space_space_id_children_get

Get all child spaces of a given space

### Example Usage

<!-- UsageSnippet language="python" operationID="get_space_children_api_v1_space__space_id__children_get" method="get" path="/api/v1/space/{space_id}/children" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.get_space_children_api_v1_space_space_id_children_get(space_id=688784)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.SubSpaceDisplayData]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_space_parent_api_v1_space_space_id_parent_get

Get the parent space of a given space

### Example Usage

<!-- UsageSnippet language="python" operationID="get_space_parent_api_v1_space__space_id__parent_get" method="get" path="/api/v1/space/{space_id}/parent" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.get_space_parent_api_v1_space_space_id_parent_get(space_id=82395)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.GetSpaceListResponseDTO](../../models/getspacelistresponsedto.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## detach_space_from_parent_api_v1_space_space_id_parent_delete

Detach a space from its parent, making it standalone

### Example Usage

<!-- UsageSnippet language="python" operationID="detach_space_from_parent_api_v1_space__space_id__parent_delete" method="delete" path="/api/v1/space/{space_id}/parent" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.detach_space_from_parent_api_v1_space_space_id_parent_delete(space_id=99694)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.GetSpaceListResponseDTO](../../models/getspacelistresponsedto.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## update_space_parent_api_v1_space_space_id_parent_patch

Update the parent relationship of a space

### Example Usage

<!-- UsageSnippet language="python" operationID="update_space_parent_api_v1_space__space_id__parent_patch" method="patch" path="/api/v1/space/{space_id}/parent" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.update_space_parent_api_v1_space_space_id_parent_patch(space_id=836081)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `parent_id`                                                         | *OptionalNullable[int]*                                             | :heavy_minus_sign:                                                  | New parent ID or null to remove parent                              |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SpaceWithRelationshipsResponse](../../models/spacewithrelationshipsresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_space_hierarchy_api_v1_space_space_id_hierarchy_get

Get the full hierarchy tree starting from a given space

### Example Usage

<!-- UsageSnippet language="python" operationID="get_space_hierarchy_api_v1_space__space_id__hierarchy_get" method="get" path="/api/v1/space/{space_id}/hierarchy" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.get_space_hierarchy_api_v1_space_space_id_hierarchy_get(space_id=636659)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SpaceHierarchyItem](../../models/spacehierarchyitem.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## bulk_update_space_parent_api_v1_space_bulk_parent_patch

Bulk update parent relationship for multiple spaces

### Example Usage

<!-- UsageSnippet language="python" operationID="bulk_update_space_parent_api_v1_space_bulk_parent_patch" method="patch" path="/api/v1/space/bulk-parent" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.bulk_update_space_parent_api_v1_space_bulk_parent_patch(space_ids=[
        855578,
        613689,
        531784,
    ])

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_ids`                                                         | List[*int*]                                                         | :heavy_check_mark:                                                  | List of space IDs to update                                         |
| `parent_id`                                                         | *OptionalNullable[int]*                                             | :heavy_minus_sign:                                                  | New parent ID or null to remove parent                              |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.SpaceWithRelationshipsResponse]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## unpublish_space_api_v1_space_space_id_unpublish_post

Mark space as draft (unpublished), preserving version history

### Example Usage

<!-- UsageSnippet language="python" operationID="unpublish_space_api_v1_space__space_id__unpublish_post" method="post" path="/api/v1/space/{space_id}/unpublish" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    sdk.space.unpublish_space_api_v1_space_space_id_unpublish_post(space_id=36090)

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## list_space_versions_api_v1_space_space_id_versions_get

Get all published versions of a space

### Example Usage

<!-- UsageSnippet language="python" operationID="list_space_versions_api_v1_space__space_id__versions_get" method="get" path="/api/v1/space/{space_id}/versions" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.list_space_versions_api_v1_space_space_id_versions_get(space_id=177956)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SpaceVersionListResponse](../../models/spaceversionlistresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_latest_space_version_api_v1_space_space_id_versions_latest_get

Retrieve the most recent published version of a space

### Example Usage

<!-- UsageSnippet language="python" operationID="get_latest_space_version_api_v1_space__space_id__versions_latest_get" method="get" path="/api/v1/space/{space_id}/versions/latest" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.get_latest_space_version_api_v1_space_space_id_versions_latest_get(space_id=149990)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SpaceVersionRead](../../models/spaceversionread.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_space_version_api_v1_space_space_id_versions_version_number_get

Retrieve a specific published version of a space

### Example Usage

<!-- UsageSnippet language="python" operationID="get_space_version_api_v1_space__space_id__versions__version_number__get" method="get" path="/api/v1/space/{space_id}/versions/{version_number}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.get_space_version_api_v1_space_space_id_versions_version_number_get(space_id=514370, version_number=712285)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `version_number`                                                    | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SpaceVersionRead](../../models/spaceversionread.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## compare_space_versions_api_v1_space_space_id_versions_compare_get

Compare two versions and see what changed

### Example Usage

<!-- UsageSnippet language="python" operationID="compare_space_versions_api_v1_space__space_id__versions_compare_get" method="get" path="/api/v1/space/{space_id}/versions/compare" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.compare_space_versions_api_v1_space_space_id_versions_compare_get(space_id=218446, version_a=97530, version_b=466127)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `version_a`                                                         | *int*                                                               | :heavy_check_mark:                                                  | First version to compare                                            |
| `version_b`                                                         | *int*                                                               | :heavy_check_mark:                                                  | Second version to compare                                           |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.VersionComparisonResponse](../../models/versioncomparisonresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## rollback_space_api_v1_space_space_id_rollback_post

Restore space to a specific published version

### Example Usage

<!-- UsageSnippet language="python" operationID="rollback_space_api_v1_space__space_id__rollback_post" method="post" path="/api/v1/space/{space_id}/rollback" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space.rollback_space_api_v1_space_space_id_rollback_post(space_id=146817, version_number=842271)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `version_number`                                                    | *int*                                                               | :heavy_check_mark:                                                  | Version number to rollback to                                       |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.GetSpaceListResponseDTO](../../models/getspacelistresponsedto.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

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

    res = sdk.space.list_space_roles_api_v1_space_spaces_space_id_roles_get(space_id=723392)

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

    res = sdk.space.create_space_role_api_v1_space_spaces_space_id_roles_post(space_id=14917, name="<value>")

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

    res = sdk.space.get_space_role_api_v1_space_spaces_space_id_roles_role_id_get(space_id=812713, role_id="75d3a981-642f-4ac9-8643-dd2d4cf0f3c1")

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

    res = sdk.space.update_space_role_api_v1_space_spaces_space_id_roles_role_id_put(space_id=771152, role_id="af40c759-21a2-41ec-9835-58bf03edd24d")

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

    sdk.space.delete_space_role_api_v1_space_spaces_space_id_roles_role_id_delete(space_id=603327, role_id="9f590db2-df4b-4631-9086-522755626b91")

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

    res = sdk.space.assign_permission_to_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_post(space_id=447317, role_id="cb79fecb-5593-4d09-a2fc-d78fe8a9ffc9", permission_id="34688f2f-8cd7-466e-afec-1c0558de48c7")

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

    sdk.space.remove_permission_from_space_role_api_v1_space_spaces_space_id_roles_role_id_permissions_permission_id_delete(space_id=285337, role_id="1c09981c-a99c-4295-bc98-bbe1f8b1d79c", permission_id="1ac9eed7-e946-491e-b666-52ce12192498")

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

    res = sdk.space.get_user_space_roles_api_v1_space_spaces_space_id_members_user_id_roles_get(space_id=960716, user_id="f30afe95-41fa-4a51-93b6-79ab1718f195")

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

    res = sdk.space.assign_user_to_space_role_api_v1_space_spaces_space_id_members_user_id_roles_post(space_id=462735, user_id="a6ddf73b-a020-4fa8-a6a8-b25734353b72", space_role_id="e42784a5-701f-4c53-81be-a09ec6960e13")

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

    sdk.space.remove_user_from_space_role_api_v1_space_spaces_space_id_members_user_id_roles_space_role_id_delete(space_id=93087, user_id="ff783c17-9a8c-49f9-a6ec-2d074a46f119", space_role_id="fb388886-8ef8-4efc-86a2-7b069003b7c6")

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