# SpaceMemberRoles

## Overview

### Available Operations

* [get_user_roles](#get_user_roles) - Get User Space Roles
* [assign_user_to_role](#assign_user_to_role) - Assign User To Space Role

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

    res = linebundle.space_member_roles.get_user_roles(space_id=960716, user_id="f30afe95-41fa-4a51-93b6-79ab1718f195")

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

    res = linebundle.space_member_roles.assign_user_to_role(space_id=462735, user_id="a6ddf73b-a020-4fa8-a6a8-b25734353b72", space_role_id="e42784a5-701f-4c53-81be-a09ec6960e13")

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