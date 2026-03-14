# User

## Overview

### Available Operations

* [get_assistant](#get_assistant) - Get Assistant
* [create_assistant](#create_assistant) - Create Assistant
* [list](#list) - Get User List
* [update_profile](#update_profile) - Update Profile
* [get_profile](#get_profile) - Get User Profile By Id
* [upload_avatar](#upload_avatar) - Upload Avatar

## get_assistant

Get the current user's AI assistant if it exists.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_assistant_api_v1_user_assistant_get" method="get" path="/api/v1/user/assistant" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.user.get_assistant()

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## create_assistant

Create a personal AI assistant for the current user.

### Example Usage

<!-- UsageSnippet language="python" operationID="create_assistant_api_v1_user_assistant_post" method="post" path="/api/v1/user/assistant" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.user.create_assistant()

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## list

Get User List

### Example Usage

<!-- UsageSnippet language="python" operationID="get_user_list_api_v1_user_get" method="get" path="/api/v1/user" -->
```python
from linebundle_sdk import Linebundle


with Linebundle() as linebundle:

    res = linebundle.user.list(limit=10)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Limit                                                               |
| `prev`                                                              | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Prev ID                                                             |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.GetUserListResponseDTO]](../../models/.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## update_profile

Update current user's profile.

### Example Usage

<!-- UsageSnippet language="python" operationID="update_profile_api_v1_user_me_put" method="put" path="/api/v1/user/me" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.user.update_profile()

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_profile

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
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.user.get_profile(user_id="<id>")

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## upload_avatar

Upload avatar for current user.

### Example Usage

<!-- UsageSnippet language="python" operationID="upload_avatar_api_v1_user_me_avatar_post" method="post" path="/api/v1/user/me/avatar" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.user.upload_avatar(file={
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |