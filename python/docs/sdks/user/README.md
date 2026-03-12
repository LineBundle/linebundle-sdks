# User

## Overview

### Available Operations

* [get_assistant_api_v1_user_assistant_get](#get_assistant_api_v1_user_assistant_get) - Get Assistant
* [create_assistant_api_v1_user_assistant_post](#create_assistant_api_v1_user_assistant_post) - Create Assistant
* [get_user_list_api_v1_user_get](#get_user_list_api_v1_user_get) - Get User List
* [search_users_api_v1_user_search_get](#search_users_api_v1_user_search_get) - Search Users
* [get_current_user_profile_api_v1_user_me_get](#get_current_user_profile_api_v1_user_me_get) - Get Current User Profile
* [update_profile_api_v1_user_me_put](#update_profile_api_v1_user_me_put) - Update Profile
* [get_user_profile_by_id_api_v1_user_user_id_get](#get_user_profile_by_id_api_v1_user_user_id_get) - Get User Profile By Id
* [get_avatar_api_v1_user_me_avatar_get](#get_avatar_api_v1_user_me_avatar_get) - Get Avatar
* [upload_avatar_api_v1_user_me_avatar_post](#upload_avatar_api_v1_user_me_avatar_post) - Upload Avatar
* [delete_avatar_api_v1_user_me_avatar_delete](#delete_avatar_api_v1_user_me_avatar_delete) - Delete Avatar
* [get_user_avatar_api_v1_user_avatar_user_id_get](#get_user_avatar_api_v1_user_avatar_user_id_get) - Get User Avatar

## get_assistant_api_v1_user_assistant_get

Get the current user's AI assistant if it exists.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_assistant_api_v1_user_assistant_get" method="get" path="/api/v1/user/assistant" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.user.get_assistant_api_v1_user_assistant_get()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.AssistantResponse](../../models/assistantresponse.md)**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## create_assistant_api_v1_user_assistant_post

Create a personal AI assistant for the current user.

### Example Usage

<!-- UsageSnippet language="python" operationID="create_assistant_api_v1_user_assistant_post" method="post" path="/api/v1/user/assistant" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.user.create_assistant_api_v1_user_assistant_post()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.AssistantResponse](../../models/assistantresponse.md)**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## get_user_list_api_v1_user_get

Get User List

### Example Usage

<!-- UsageSnippet language="python" operationID="get_user_list_api_v1_user_get" method="get" path="/api/v1/user" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
) as sdk:

    res = sdk.user.get_user_list_api_v1_user_get(security=models.GetUserListAPIV1UserGetSecurity(
        permission_dependency="<YOUR_BEARER_TOKEN_HERE>",
    ), limit=10)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                 | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `security`                                                                                | [models.GetUserListAPIV1UserGetSecurity](../../models/getuserlistapiv1usergetsecurity.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `limit`                                                                                   | *Optional[int]*                                                                           | :heavy_minus_sign:                                                                        | Limit                                                                                     |
| `prev`                                                                                    | *Optional[int]*                                                                           | :heavy_minus_sign:                                                                        | Prev ID                                                                                   |
| `retries`                                                                                 | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                          | :heavy_minus_sign:                                                                        | Configuration to override the default retry behavior of the client.                       |

### Response

**[List[models.GetUserListResponseDTO]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## search_users_api_v1_user_search_get

Search Users

### Example Usage

<!-- UsageSnippet language="python" operationID="search_users_api_v1_user_search_get" method="get" path="/api/v1/user/search" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.user.search_users_api_v1_user_search_get(q="", limit=10)

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_current_user_profile_api_v1_user_me_get

Get current user's profile information.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_current_user_profile_api_v1_user_me_get" method="get" path="/api/v1/user/me" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.user.get_current_user_profile_api_v1_user_me_get()

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

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## update_profile_api_v1_user_me_put

Update current user's profile.

### Example Usage

<!-- UsageSnippet language="python" operationID="update_profile_api_v1_user_me_put" method="put" path="/api/v1/user/me" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.user.update_profile_api_v1_user_me_put()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `username`                                                          | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Username                                                            |
| `avatar_url`                                                        | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Avatar URL                                                          |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.UserProfileResponse](../../models/userprofileresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_user_profile_by_id_api_v1_user_user_id_get

Get public profile information for a specific user by ID.

This endpoint allows authenticated users to view public profile information
of any user in the system. Used for user discovery and profile viewing.

Args:
    user_id: UUID string of the user whose profile to retrieve

Returns:
    UserProfileResponse: Public profile information (excludes sensitive data like email)

Raises:
    HTTPException: 400 for invalid UUID format, 404 for user not found, 500 for server errors

### Example Usage

<!-- UsageSnippet language="python" operationID="get_user_profile_by_id_api_v1_user__user_id__get" method="get" path="/api/v1/user/{user_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.user.get_user_profile_by_id_api_v1_user_user_id_get(user_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `user_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.UserProfileResponse](../../models/userprofileresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_avatar_api_v1_user_me_avatar_get

Get current user's avatar image.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_avatar_api_v1_user_me_avatar_get" method="get" path="/api/v1/user/me/avatar" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    sdk.user.get_avatar_api_v1_user_me_avatar_get()

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## upload_avatar_api_v1_user_me_avatar_post

Upload avatar for current user.

### Example Usage

<!-- UsageSnippet language="python" operationID="upload_avatar_api_v1_user_me_avatar_post" method="post" path="/api/v1/user/me/avatar" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.user.upload_avatar_api_v1_user_me_avatar_post(file={
        "file_name": "example.file",
        "content": open("example.file", "rb"),
    })

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                     | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `file`                                                                                                        | [models.BodyUploadAvatarAPIV1UserMeAvatarPostFile](../../models/bodyuploadavatarapiv1usermeavatarpostfile.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `retries`                                                                                                     | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                              | :heavy_minus_sign:                                                                                            | Configuration to override the default retry behavior of the client.                                           |

### Response

**[models.AvatarUploadResponse](../../models/avataruploadresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## delete_avatar_api_v1_user_me_avatar_delete

Delete current user's avatar.

### Example Usage

<!-- UsageSnippet language="python" operationID="delete_avatar_api_v1_user_me_avatar_delete" method="delete" path="/api/v1/user/me/avatar" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.user.delete_avatar_api_v1_user_me_avatar_delete()

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

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## get_user_avatar_api_v1_user_avatar_user_id_get

Get user's avatar image (requires authentication).

### Example Usage

<!-- UsageSnippet language="python" operationID="get_user_avatar_api_v1_user_avatar__user_id__get" method="get" path="/api/v1/user/avatar/{user_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.user.get_user_avatar_api_v1_user_avatar_user_id_get(user_id="<id>")

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |