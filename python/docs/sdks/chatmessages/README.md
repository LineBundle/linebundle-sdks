# ChatMessages

## Overview

### Available Operations

* [list_messages_api_v1_chat_room_id_messages_get](#list_messages_api_v1_chat_room_id_messages_get) - List Messages
* [send_message_api_v1_chat_room_id_messages_post](#send_message_api_v1_chat_room_id_messages_post) - Send Message
* [delete_message_api_v1_chat_messages_message_id_delete](#delete_message_api_v1_chat_messages_message_id_delete) - Delete Message
* [get_message_count_api_v1_chat_room_id_messages_count_get](#get_message_count_api_v1_chat_room_id_messages_count_get) - Get Message Count
* [mark_messages_as_read_api_v1_chat_room_id_read_patch](#mark_messages_as_read_api_v1_chat_room_id_read_patch) - Mark Messages As Read
* [get_unread_count_api_v1_chat_room_id_unread_count_get](#get_unread_count_api_v1_chat_room_id_unread_count_get) - Get Unread Count

## list_messages_api_v1_chat_room_id_messages_get

List Messages

### Example Usage

<!-- UsageSnippet language="python" operationID="list_messages_api_v1_chat__room_id__messages__get" method="get" path="/api/v1/chat/{room_id}/messages/" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.chat_messages.list_messages_api_v1_chat_room_id_messages_get(room_id="2773f0dc-6191-47ed-a27a-49aff3a1ab99", limit=50)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `room_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `before_id`                                                         | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Cursor for pagination - messages before this ID                     |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Maximum number of messages to return                                |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.AppChatAdapterInputSchemasMessageMessageResponse]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## send_message_api_v1_chat_room_id_messages_post

Send Message

### Example Usage

<!-- UsageSnippet language="python" operationID="send_message_api_v1_chat__room_id__messages__post" method="post" path="/api/v1/chat/{room_id}/messages/" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.chat_messages.send_message_api_v1_chat_room_id_messages_post(room_id="f85470e3-0f24-416a-9013-8647e7ec4832", content="<value>", message_type="text")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `room_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `content`                                                           | *str*                                                               | :heavy_check_mark:                                                  | Message content text                                                |
| `message_type`                                                      | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | Message type (text, system)                                         |
| `metadata`                                                          | Dict[str, *Any*]                                                    | :heavy_minus_sign:                                                  | Additional metadata                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.AppChatAdapterInputSchemasMessageMessageResponse](../../models/appchatadapterinputschemasmessagemessageresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## delete_message_api_v1_chat_messages_message_id_delete

Delete Message

### Example Usage

<!-- UsageSnippet language="python" operationID="delete_message_api_v1_chat_messages__message_id__delete" method="delete" path="/api/v1/chat/messages/{message_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    sdk.chat_messages.delete_message_api_v1_chat_messages_message_id_delete(message_id="9692ae2c-4af5-45e5-9b83-986ead643c65")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `message_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_message_count_api_v1_chat_room_id_messages_count_get

Get Message Count

### Example Usage

<!-- UsageSnippet language="python" operationID="get_message_count_api_v1_chat__room_id__messages_count_get" method="get" path="/api/v1/chat/{room_id}/messages/count" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.chat_messages.get_message_count_api_v1_chat_room_id_messages_count_get(room_id="2f590a19-f2f8-4d99-af96-d6a575274d0c")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `room_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Dict[str, Any]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## mark_messages_as_read_api_v1_chat_room_id_read_patch

Mark Messages As Read

### Example Usage

<!-- UsageSnippet language="python" operationID="mark_messages_as_read_api_v1_chat__room_id__read_patch" method="patch" path="/api/v1/chat/{room_id}/read" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    sdk.chat_messages.mark_messages_as_read_api_v1_chat_room_id_read_patch(room_id="b9e8afae-f469-4371-8366-b4d017f6860b")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `room_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_unread_count_api_v1_chat_room_id_unread_count_get

Get Unread Count

### Example Usage

<!-- UsageSnippet language="python" operationID="get_unread_count_api_v1_chat__room_id__unread_count_get" method="get" path="/api/v1/chat/{room_id}/unread-count" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.chat_messages.get_unread_count_api_v1_chat_room_id_unread_count_get(room_id="09a622b3-5e49-4382-a4cb-5455f4b35a73")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `room_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Dict[str, Any]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |