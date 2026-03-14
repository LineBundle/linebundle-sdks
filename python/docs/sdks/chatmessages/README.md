# ChatMessages

## Overview

### Available Operations

* [list](#list) - List Messages
* [send](#send) - Send Message
* [delete](#delete) - Delete Message
* [get_count](#get_count) - Get Message Count
* [mark_read](#mark_read) - Mark Messages As Read
* [get_unread_count](#get_unread_count) - Get Unread Count

## list

List Messages

### Example Usage

<!-- UsageSnippet language="python" operationID="list_messages_api_v1_chat__room_id__messages__get" method="get" path="/api/v1/chat/{room_id}/messages/" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.chat_messages.list(room_id="2773f0dc-6191-47ed-a27a-49aff3a1ab99", limit=50)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## send

Send Message

### Example Usage

<!-- UsageSnippet language="python" operationID="send_message_api_v1_chat__room_id__messages__post" method="post" path="/api/v1/chat/{room_id}/messages/" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.chat_messages.send(room_id="f85470e3-0f24-416a-9013-8647e7ec4832", content="<value>", message_type="text")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `room_id`                                                                                                                                                                                                                                                                                                       | *str*                                                                                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                             |
| `content`                                                                                                                                                                                                                                                                                                       | *str*                                                                                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                              | Message content text                                                                                                                                                                                                                                                                                            |
| `message_type`                                                                                                                                                                                                                                                                                                  | *Optional[str]*                                                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                              | Message type (text, system)                                                                                                                                                                                                                                                                                     |
| `metadata`                                                                                                                                                                                                                                                                                                      | Dict[str, *Any*]                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                              | Named schema for arbitrary key-value metadata on chat rooms and messages.<br/><br/>Using ``RootModel`` instead of an inline ``dict[str, Any]`` ensures FastAPI/Pydantic<br/>emits a single named ``ChatMetadata`` component (``$ref``) in the OpenAPI spec,<br/>preventing Speakeasy from flagging duplicate anonymous schemas. |
| `retries`                                                                                                                                                                                                                                                                                                       | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                              | Configuration to override the default retry behavior of the client.                                                                                                                                                                                                                                             |

### Response

**[models.AppChatAdapterInputSchemasMessageMessageResponse](../../models/appchatadapterinputschemasmessagemessageresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## delete

Delete Message

### Example Usage

<!-- UsageSnippet language="python" operationID="delete_message_api_v1_chat_messages__message_id__delete" method="delete" path="/api/v1/chat/messages/{message_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    linebundle.chat_messages.delete(message_id="9692ae2c-4af5-45e5-9b83-986ead643c65")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `message_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_count

Get Message Count

### Example Usage

<!-- UsageSnippet language="python" operationID="get_message_count_api_v1_chat__room_id__messages_count_get" method="get" path="/api/v1/chat/{room_id}/messages/count" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.chat_messages.get_count(room_id="2f590a19-f2f8-4d99-af96-d6a575274d0c")

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## mark_read

Mark Messages As Read

### Example Usage

<!-- UsageSnippet language="python" operationID="mark_messages_as_read_api_v1_chat__room_id__read_patch" method="patch" path="/api/v1/chat/{room_id}/read" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    linebundle.chat_messages.mark_read(room_id="b9e8afae-f469-4371-8366-b4d017f6860b")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `room_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_unread_count

Get Unread Count

### Example Usage

<!-- UsageSnippet language="python" operationID="get_unread_count_api_v1_chat__room_id__unread_count_get" method="get" path="/api/v1/chat/{room_id}/unread-count" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.chat_messages.get_unread_count(room_id="09a622b3-5e49-4382-a4cb-5455f4b35a73")

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |