# ChatMessages

## Overview

### Available Operations

* [listMessagesApiV1ChatRoomIdMessagesGet](#listmessagesapiv1chatroomidmessagesget) - List Messages
* [sendMessageApiV1ChatRoomIdMessagesPost](#sendmessageapiv1chatroomidmessagespost) - Send Message
* [deleteMessageApiV1ChatMessagesMessageIdDelete](#deletemessageapiv1chatmessagesmessageiddelete) - Delete Message
* [getMessageCountApiV1ChatRoomIdMessagesCountGet](#getmessagecountapiv1chatroomidmessagescountget) - Get Message Count
* [markMessagesAsReadApiV1ChatRoomIdReadPatch](#markmessagesasreadapiv1chatroomidreadpatch) - Mark Messages As Read
* [getUnreadCountApiV1ChatRoomIdUnreadCountGet](#getunreadcountapiv1chatroomidunreadcountget) - Get Unread Count

## listMessagesApiV1ChatRoomIdMessagesGet

List Messages

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_messages_api_v1_chat__room_id__messages__get" method="get" path="/api/v1/chat/{room_id}/messages/" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.chatMessages.listMessagesApiV1ChatRoomIdMessagesGet({
    roomId: "2773f0dc-6191-47ed-a27a-49aff3a1ab99",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { chatMessagesListMessagesApiV1ChatRoomIdMessagesGet } from "openapi/funcs/chat-messages-list-messages-api-v1-chat-room-id-messages-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await chatMessagesListMessagesApiV1ChatRoomIdMessagesGet(sdk, {
    roomId: "2773f0dc-6191-47ed-a27a-49aff3a1ab99",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatMessagesListMessagesApiV1ChatRoomIdMessagesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListMessagesApiV1ChatRoomIdMessagesGetRequest](../../models/operations/list-messages-api-v1-chat-room-id-messages-get-request.md)                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AppChatAdapterInputSchemasMessageMessageResponse[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## sendMessageApiV1ChatRoomIdMessagesPost

Send Message

### Example Usage

<!-- UsageSnippet language="typescript" operationID="send_message_api_v1_chat__room_id__messages__post" method="post" path="/api/v1/chat/{room_id}/messages/" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.chatMessages.sendMessageApiV1ChatRoomIdMessagesPost({
    roomId: "f85470e3-0f24-416a-9013-8647e7ec4832",
    body: {
      content: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { chatMessagesSendMessageApiV1ChatRoomIdMessagesPost } from "openapi/funcs/chat-messages-send-message-api-v1-chat-room-id-messages-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await chatMessagesSendMessageApiV1ChatRoomIdMessagesPost(sdk, {
    roomId: "f85470e3-0f24-416a-9013-8647e7ec4832",
    body: {
      content: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatMessagesSendMessageApiV1ChatRoomIdMessagesPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SendMessageApiV1ChatRoomIdMessagesPostRequest](../../models/operations/send-message-api-v1-chat-room-id-messages-post-request.md)                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AppChatAdapterInputSchemasMessageMessageResponse](../../models/app-chat-adapter-input-schemas-message-message-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## deleteMessageApiV1ChatMessagesMessageIdDelete

Delete Message

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_message_api_v1_chat_messages__message_id__delete" method="delete" path="/api/v1/chat/messages/{message_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await sdk.chatMessages.deleteMessageApiV1ChatMessagesMessageIdDelete({
    messageId: "9692ae2c-4af5-45e5-9b83-986ead643c65",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { chatMessagesDeleteMessageApiV1ChatMessagesMessageIdDelete } from "openapi/funcs/chat-messages-delete-message-api-v1-chat-messages-message-id-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await chatMessagesDeleteMessageApiV1ChatMessagesMessageIdDelete(sdk, {
    messageId: "9692ae2c-4af5-45e5-9b83-986ead643c65",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("chatMessagesDeleteMessageApiV1ChatMessagesMessageIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteMessageApiV1ChatMessagesMessageIdDeleteRequest](../../models/operations/delete-message-api-v1-chat-messages-message-id-delete-request.md)                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getMessageCountApiV1ChatRoomIdMessagesCountGet

Get Message Count

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_message_count_api_v1_chat__room_id__messages_count_get" method="get" path="/api/v1/chat/{room_id}/messages/count" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.chatMessages.getMessageCountApiV1ChatRoomIdMessagesCountGet({
    roomId: "2f590a19-f2f8-4d99-af96-d6a575274d0c",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { chatMessagesGetMessageCountApiV1ChatRoomIdMessagesCountGet } from "openapi/funcs/chat-messages-get-message-count-api-v1-chat-room-id-messages-count-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await chatMessagesGetMessageCountApiV1ChatRoomIdMessagesCountGet(sdk, {
    roomId: "2f590a19-f2f8-4d99-af96-d6a575274d0c",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatMessagesGetMessageCountApiV1ChatRoomIdMessagesCountGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMessageCountApiV1ChatRoomIdMessagesCountGetRequest](../../models/operations/get-message-count-api-v1-chat-room-id-messages-count-get-request.md)                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[{ [k: string]: any }](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## markMessagesAsReadApiV1ChatRoomIdReadPatch

Mark Messages As Read

### Example Usage

<!-- UsageSnippet language="typescript" operationID="mark_messages_as_read_api_v1_chat__room_id__read_patch" method="patch" path="/api/v1/chat/{room_id}/read" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await sdk.chatMessages.markMessagesAsReadApiV1ChatRoomIdReadPatch({
    roomId: "b9e8afae-f469-4371-8366-b4d017f6860b",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { chatMessagesMarkMessagesAsReadApiV1ChatRoomIdReadPatch } from "openapi/funcs/chat-messages-mark-messages-as-read-api-v1-chat-room-id-read-patch.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await chatMessagesMarkMessagesAsReadApiV1ChatRoomIdReadPatch(sdk, {
    roomId: "b9e8afae-f469-4371-8366-b4d017f6860b",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("chatMessagesMarkMessagesAsReadApiV1ChatRoomIdReadPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.MarkMessagesAsReadApiV1ChatRoomIdReadPatchRequest](../../models/operations/mark-messages-as-read-api-v1-chat-room-id-read-patch-request.md)                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getUnreadCountApiV1ChatRoomIdUnreadCountGet

Get Unread Count

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_unread_count_api_v1_chat__room_id__unread_count_get" method="get" path="/api/v1/chat/{room_id}/unread-count" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.chatMessages.getUnreadCountApiV1ChatRoomIdUnreadCountGet({
    roomId: "09a622b3-5e49-4382-a4cb-5455f4b35a73",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { chatMessagesGetUnreadCountApiV1ChatRoomIdUnreadCountGet } from "openapi/funcs/chat-messages-get-unread-count-api-v1-chat-room-id-unread-count-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await chatMessagesGetUnreadCountApiV1ChatRoomIdUnreadCountGet(sdk, {
    roomId: "09a622b3-5e49-4382-a4cb-5455f4b35a73",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatMessagesGetUnreadCountApiV1ChatRoomIdUnreadCountGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUnreadCountApiV1ChatRoomIdUnreadCountGetRequest](../../models/operations/get-unread-count-api-v1-chat-room-id-unread-count-get-request.md)                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[{ [k: string]: any }](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |