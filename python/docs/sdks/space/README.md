# Space

## Overview

### Available Operations

* [test_auth](#test_auth) - Test Auth
* [update](#update) - Update Space
* [publish](#publish) - Publish Space
* [archive](#archive) - Archive Space
* [update_member_role](#update_member_role) - Update Space Member Role
* [transfer](#transfer) - Transfer Space
* [bulk_update_parent](#bulk_update_parent) - Bulk Update Space Parent
* [get_latest_version](#get_latest_version) - Get latest published space version
* [get_user_roles](#get_user_roles) - Get User Space Roles
* [assign_user_to_role](#assign_user_to_role) - Assign User To Space Role

## test_auth

Test endpoint to verify authentication

### Example Usage

<!-- UsageSnippet language="python" operationID="test_auth_api_v1_space_test_auth_get" method="get" path="/api/v1/space/test-auth" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.space.test_auth()

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

## update

Update Space

### Example Usage

<!-- UsageSnippet language="python" operationID="update_space_api_v1_space__space_id__put" method="put" path="/api/v1/space/{space_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.space.update(space_id=840637, title="<value>", description="monumental atop yuck aboard lone", timezone="America/Argentina/Ushuaia", visibility=403702)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## publish

Publish Space

### Example Usage

<!-- UsageSnippet language="python" operationID="publish_space_api_v1_space__space_id__publish_patch" method="patch" path="/api/v1/space/{space_id}/publish" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.space.publish(space_id=949598)

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

## archive

Archive Space

### Example Usage

<!-- UsageSnippet language="python" operationID="archive_space_api_v1_space__space_id__archive_patch" method="patch" path="/api/v1/space/{space_id}/archive" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.space.archive(space_id=666185)

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

## update_member_role

Update a space member's role

### Example Usage

<!-- UsageSnippet language="python" operationID="update_space_member_role_api_v1_space__space_id__members__user_id__patch" method="patch" path="/api/v1/space/{space_id}/members/{user_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.space.update_member_role(space_id=949597, user_id="<id>", role="space_viewer")

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## transfer

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
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.space.transfer(space_id=533447, target_org_id="6dfc9394-957c-47b7-b6ec-5dcb5a5702dd")

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## bulk_update_parent

Bulk update parent relationship for multiple spaces

### Example Usage

<!-- UsageSnippet language="python" operationID="bulk_update_space_parent_api_v1_space_bulk_parent_patch" method="patch" path="/api/v1/space/bulk-parent" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.space.bulk_update_parent(space_ids=[
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_latest_version

Retrieve the most recent published version of a space

### Example Usage

<!-- UsageSnippet language="python" operationID="get_latest_space_version_api_v1_space__space_id__versions_latest_get" method="get" path="/api/v1/space/{space_id}/versions/latest" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.space.get_latest_version(space_id=149990)

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

## get_user_roles

Get all space roles for a user in a specific space.

Requires space read permissions.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_user_space_roles_api_v1_space_spaces__space_id__members__user_id__roles_get" method="get" path="/api/v1/space/spaces/{space_id}/members/{user_id}/roles" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.space.get_user_roles(space_id=960716, user_id="f30afe95-41fa-4a51-93b6-79ab1718f195")

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## assign_user_to_role

Assign a user to a space role.

Requires space member management permissions.

### Example Usage

<!-- UsageSnippet language="python" operationID="assign_user_to_space_role_api_v1_space_spaces__space_id__members__user_id__roles_post" method="post" path="/api/v1/space/spaces/{space_id}/members/{user_id}/roles" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.space.assign_user_to_role(space_id=462735, user_id="a6ddf73b-a020-4fa8-a6a8-b25734353b72", space_role_id="e42784a5-701f-4c53-81be-a09ec6960e13")

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |