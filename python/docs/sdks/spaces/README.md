# Spaces

## Overview

### Available Operations

* [list](#list) - Get Space List
* [create_space](#create_space) - Create Space
* [delete_by_id](#delete_by_id) - Delete Space
* [create_with_parent](#create_with_parent) - Create Space With Parent
* [publish_version](#publish_version) - Publish space
* [get_members](#get_members) - Get Space Members
* [add_member](#add_member) - Add Space Member
* [get_joinable_by_user](#get_joinable_by_user) - Get Joinable Spaces By User
* [join](#join) - Join Space
* [detach_parent](#detach_parent) - Detach Space From Parent
* [update_parent](#update_parent) - Update Space Parent
* [get_hierarchy](#get_hierarchy) - Get Space Hierarchy
* [unpublish](#unpublish) - Unpublish space
* [list_versions](#list_versions) - List space versions
* [get_version](#get_version) - Get specific space version
* [compare_versions](#compare_versions) - Compare space versions
* [rollback](#rollback) - Rollback space to version
* [remove_user_from_role](#remove_user_from_role) - Remove User From Space Role
* [get_by_id](#get_by_id) - Get Space By Id
* [remove_member](#remove_member) - Remove Space Member
* [list_children](#list_children) - Get Space Children
* [get_parent](#get_parent) - Get Space Parent

## list

Get Space List

### Example Usage

<!-- UsageSnippet language="python" operationID="get_space_list_api_v1_space__get" method="get" path="/api/v1/space/" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.spaces.list(limit=10, offset=0)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## create_space

Create Space

### Example Usage

<!-- UsageSnippet language="python" operationID="create_space_api_v1_space__post" method="post" path="/api/v1/space/" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.spaces.create_space(title="<value>", description="kindheartedly secondary ethyl brr disappointment eek of towards elegantly", timezone="Europe/Busingen", visibility=302580)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## delete_by_id

Delete Space

### Example Usage

<!-- UsageSnippet language="python" operationID="delete_space_api_v1_space__space_id__delete" method="delete" path="/api/v1/space/{space_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.spaces.delete_by_id(space_id=938678)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## create_with_parent

Create a space with parent relationship and inheritance settings

### Example Usage

<!-- UsageSnippet language="python" operationID="create_space_with_parent_api_v1_space_with_parent_post" method="post" path="/api/v1/space/with-parent" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.spaces.create_with_parent(title="<value>", description="", timezone="UTC", visibility=10)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## publish_version

Publish current space state as immutable version for community discovery

### Example Usage

<!-- UsageSnippet language="python" operationID="publish_space_api_v1_space__space_id__publish_post" method="post" path="/api/v1/space/{space_id}/publish" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.spaces.publish_version(space_id=334267)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_members

Get all members of a space

### Example Usage

<!-- UsageSnippet language="python" operationID="get_space_members_api_v1_space__space_id__members_get" method="get" path="/api/v1/space/{space_id}/members" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.spaces.get_members(space_id=614422)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## add_member

Add a member to a space

### Example Usage

<!-- UsageSnippet language="python" operationID="add_space_member_api_v1_space__space_id__members_post" method="post" path="/api/v1/space/{space_id}/members" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.spaces.add_member(space_id=264528, email="Petra.Larson80@yahoo.com")

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_joinable_by_user

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
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.spaces.get_joinable_by_user(user_id="<id>", limit=10, sort_by="created_at", sort_order="desc")

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## join

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
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.spaces.join(space_id=648399)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## detach_parent

Detach a space from its parent, making it standalone

### Example Usage

<!-- UsageSnippet language="python" operationID="detach_space_from_parent_api_v1_space__space_id__parent_delete" method="delete" path="/api/v1/space/{space_id}/parent" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.spaces.detach_parent(space_id=99694)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## update_parent

Update the parent relationship of a space

### Example Usage

<!-- UsageSnippet language="python" operationID="update_space_parent_api_v1_space__space_id__parent_patch" method="patch" path="/api/v1/space/{space_id}/parent" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.spaces.update_parent(space_id=836081)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_hierarchy

Get the full hierarchy tree starting from a given space

### Example Usage

<!-- UsageSnippet language="python" operationID="get_space_hierarchy_api_v1_space__space_id__hierarchy_get" method="get" path="/api/v1/space/{space_id}/hierarchy" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.spaces.get_hierarchy(space_id=636659)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## unpublish

Mark space as draft (unpublished), preserving version history

### Example Usage

<!-- UsageSnippet language="python" operationID="unpublish_space_api_v1_space__space_id__unpublish_post" method="post" path="/api/v1/space/{space_id}/unpublish" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    linebundle.spaces.unpublish(space_id=36090)

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## list_versions

Get all published versions of a space

### Example Usage

<!-- UsageSnippet language="python" operationID="list_space_versions_api_v1_space__space_id__versions_get" method="get" path="/api/v1/space/{space_id}/versions" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.spaces.list_versions(space_id=177956)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_version

Retrieve a specific published version of a space

### Example Usage

<!-- UsageSnippet language="python" operationID="get_space_version_api_v1_space__space_id__versions__version_number__get" method="get" path="/api/v1/space/{space_id}/versions/{version_number}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.spaces.get_version(space_id=514370, version_number=712285)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## compare_versions

Compare two versions and see what changed

### Example Usage

<!-- UsageSnippet language="python" operationID="compare_space_versions_api_v1_space__space_id__versions_compare_get" method="get" path="/api/v1/space/{space_id}/versions/compare" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.spaces.compare_versions(space_id=218446, version_a=97530, version_b=466127)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## rollback

Restore space to a specific published version

### Example Usage

<!-- UsageSnippet language="python" operationID="rollback_space_api_v1_space__space_id__rollback_post" method="post" path="/api/v1/space/{space_id}/rollback" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.spaces.rollback(space_id=146817, version_number=842271)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## remove_user_from_role

Remove a user from a space role.

Requires space member management permissions.

### Example Usage

<!-- UsageSnippet language="python" operationID="remove_user_from_space_role_api_v1_space_spaces__space_id__members__user_id__roles__space_role_id__delete" method="delete" path="/api/v1/space/spaces/{space_id}/members/{user_id}/roles/{space_role_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    linebundle.spaces.remove_user_from_role(space_id=93087, user_id="ff783c17-9a8c-49f9-a6ec-2d074a46f119", space_role_id="fb388886-8ef8-4efc-86a2-7b069003b7c6")

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_by_id

Get Space By Id

### Example Usage

<!-- UsageSnippet language="python" operationID="get_space_by_id_api_v1_space__space_id__get" method="get" path="/api/v1/space/{space_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.spaces.get_by_id(space_id=605238)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## remove_member

Remove a member from a space

### Example Usage

<!-- UsageSnippet language="python" operationID="remove_space_member_api_v1_space__space_id__members__user_id__delete" method="delete" path="/api/v1/space/{space_id}/members/{user_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.spaces.remove_member(space_id=367023, user_id="<id>")

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## list_children

Get all child spaces of a given space

### Example Usage

<!-- UsageSnippet language="python" operationID="get_space_children_api_v1_space__space_id__children_get" method="get" path="/api/v1/space/{space_id}/children" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.spaces.list_children(space_id=688784)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_parent

Get the parent space of a given space

### Example Usage

<!-- UsageSnippet language="python" operationID="get_space_parent_api_v1_space__space_id__parent_get" method="get" path="/api/v1/space/{space_id}/parent" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.spaces.get_parent(space_id=82395)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |