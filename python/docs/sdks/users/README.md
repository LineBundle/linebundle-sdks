# Users

## Overview

### Available Operations

* [search](#search) - Search Users
* [get_current_profile](#get_current_profile) - Get Current User Profile
* [get_avatar](#get_avatar) - Get Avatar
* [delete_avatar](#delete_avatar) - Delete Avatar
* [get_avatar_by_id](#get_avatar_by_id) - Get User Avatar

## search

Search Users

### Example Usage

<!-- UsageSnippet language="python" operationID="search_users_api_v1_user_search_get" method="get" path="/api/v1/user/search" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.users.search(q="", limit=10)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                 | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `q`                                                                                                       | *Optional[str]*                                                                                           | :heavy_minus_sign:                                                                                        | Search query for username, first_name, last_name, or email. If empty, returns first users based on limit. |
| `limit`                                                                                                   | *Optional[int]*                                                                                           | :heavy_minus_sign:                                                                                        | Limit for pagination                                                                                      |
| `prev`                                                                                                    | *Optional[int]*                                                                                           | :heavy_minus_sign:                                                                                        | Previous ID for cursor-based pagination                                                                   |
| `org_id`                                                                                                  | *Optional[str]*                                                                                           | :heavy_minus_sign:                                                                                        | Optional organization ID to filter users within specific organization                                     |
| `retries`                                                                                                 | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                          | :heavy_minus_sign:                                                                                        | Configuration to override the default retry behavior of the client.                                       |

### Response

**[List[models.UserSearchResponseDTO]](../../models/.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_current_profile

Get current user's profile information.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_current_user_profile_api_v1_user_me_get" method="get" path="/api/v1/user/me" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.users.get_current_profile()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.UserProfileResponse](../../models/userprofileresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_avatar

Get current user's avatar image.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_avatar_api_v1_user_me_avatar_get" method="get" path="/api/v1/user/me/avatar" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    linebundle.users.get_avatar()

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## delete_avatar

Delete current user's avatar.

### Example Usage

<!-- UsageSnippet language="python" operationID="delete_avatar_api_v1_user_me_avatar_delete" method="delete" path="/api/v1/user/me/avatar" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.users.delete_avatar()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.AppUserAdapterInputAPIV1ResponseMessageResponse](../../models/appuseradapterinputapiv1responsemessageresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_avatar_by_id

Get user's avatar image (requires authentication).

### Example Usage

<!-- UsageSnippet language="python" operationID="get_user_avatar_api_v1_user_avatar__user_id__get" method="get" path="/api/v1/user/avatar/{user_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.users.get_avatar_by_id(user_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `user_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |