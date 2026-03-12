# ChatRooms

## Overview

### Available Operations

* [createDirectRoomApiV1ChatRoomsDirectPost](#createdirectroomapiv1chatroomsdirectpost) - Create Direct Room
* [createGroupRoomApiV1ChatRoomsGroupPost](#creategrouproomapiv1chatroomsgrouppost) - Create Group Room
* [listUserRoomsApiV1ChatRoomsGet](#listuserroomsapiv1chatroomsget) - List User Rooms
* [getRoomByIdApiV1ChatRoomsRoomIdGet](#getroombyidapiv1chatroomsroomidget) - Get Room By Id
* [updateRoomApiV1ChatRoomsRoomIdPatch](#updateroomapiv1chatroomsroomidpatch) - Update Room
* [listRoomMembersApiV1ChatRoomsRoomIdMembersGet](#listroommembersapiv1chatroomsroomidmembersget) - List Room Members
* [addMemberToRoomApiV1ChatRoomsRoomIdMembersPost](#addmembertoroomapiv1chatroomsroomidmemberspost) - Add Member To Room
* [removeMemberFromRoomApiV1ChatRoomsRoomIdMembersUserIdDelete](#removememberfromroomapiv1chatroomsroomidmembersuseriddelete) - Remove Member From Room

## createDirectRoomApiV1ChatRoomsDirectPost

Create Direct Room

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_direct_room_api_v1_chat_rooms_direct_post" method="post" path="/api/v1/chat/rooms/direct" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.chatRooms.createDirectRoomApiV1ChatRoomsDirectPost({
    otherUserId: "476232a8-5b15-416e-ae52-b831d1dd9623",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { chatRoomsCreateDirectRoomApiV1ChatRoomsDirectPost } from "openapi/funcs/chat-rooms-create-direct-room-api-v1-chat-rooms-direct-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await chatRoomsCreateDirectRoomApiV1ChatRoomsDirectPost(sdk, {
    otherUserId: "476232a8-5b15-416e-ae52-b831d1dd9623",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatRoomsCreateDirectRoomApiV1ChatRoomsDirectPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateDirectRoomRequest](../../models/create-direct-room-request.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RoomResponse](../../models/room-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## createGroupRoomApiV1ChatRoomsGroupPost

Create Group Room

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_group_room_api_v1_chat_rooms_group_post" method="post" path="/api/v1/chat/rooms/group" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.chatRooms.createGroupRoomApiV1ChatRoomsGroupPost({
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { chatRoomsCreateGroupRoomApiV1ChatRoomsGroupPost } from "openapi/funcs/chat-rooms-create-group-room-api-v1-chat-rooms-group-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await chatRoomsCreateGroupRoomApiV1ChatRoomsGroupPost(sdk, {
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatRoomsCreateGroupRoomApiV1ChatRoomsGroupPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateGroupRoomRequest](../../models/create-group-room-request.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RoomResponse](../../models/room-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## listUserRoomsApiV1ChatRoomsGet

List User Rooms

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_user_rooms_api_v1_chat_rooms__get" method="get" path="/api/v1/chat/rooms/" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.chatRooms.listUserRoomsApiV1ChatRoomsGet({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { chatRoomsListUserRoomsApiV1ChatRoomsGet } from "openapi/funcs/chat-rooms-list-user-rooms-api-v1-chat-rooms-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await chatRoomsListUserRoomsApiV1ChatRoomsGet(sdk, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatRoomsListUserRoomsApiV1ChatRoomsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListUserRoomsApiV1ChatRoomsGetRequest](../../models/operations/list-user-rooms-api-v1-chat-rooms-get-request.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RoomListResponse](../../models/room-list-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getRoomByIdApiV1ChatRoomsRoomIdGet

Get Room By Id

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_room_by_id_api_v1_chat_rooms__room_id__get" method="get" path="/api/v1/chat/rooms/{room_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.chatRooms.getRoomByIdApiV1ChatRoomsRoomIdGet({
    roomId: "ad8c71fe-b4a8-4ec7-a7dc-b702d41ab141",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { chatRoomsGetRoomByIdApiV1ChatRoomsRoomIdGet } from "openapi/funcs/chat-rooms-get-room-by-id-api-v1-chat-rooms-room-id-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await chatRoomsGetRoomByIdApiV1ChatRoomsRoomIdGet(sdk, {
    roomId: "ad8c71fe-b4a8-4ec7-a7dc-b702d41ab141",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatRoomsGetRoomByIdApiV1ChatRoomsRoomIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRoomByIdApiV1ChatRoomsRoomIdGetRequest](../../models/operations/get-room-by-id-api-v1-chat-rooms-room-id-get-request.md)                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RoomResponse](../../models/room-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## updateRoomApiV1ChatRoomsRoomIdPatch

Update Room

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_room_api_v1_chat_rooms__room_id__patch" method="patch" path="/api/v1/chat/rooms/{room_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.chatRooms.updateRoomApiV1ChatRoomsRoomIdPatch({
    roomId: "1b3fb3c3-92f9-4a63-999d-a20a466eed99",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { chatRoomsUpdateRoomApiV1ChatRoomsRoomIdPatch } from "openapi/funcs/chat-rooms-update-room-api-v1-chat-rooms-room-id-patch.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await chatRoomsUpdateRoomApiV1ChatRoomsRoomIdPatch(sdk, {
    roomId: "1b3fb3c3-92f9-4a63-999d-a20a466eed99",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatRoomsUpdateRoomApiV1ChatRoomsRoomIdPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateRoomApiV1ChatRoomsRoomIdPatchRequest](../../models/operations/update-room-api-v1-chat-rooms-room-id-patch-request.md)                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RoomResponse](../../models/room-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## listRoomMembersApiV1ChatRoomsRoomIdMembersGet

List Room Members

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_room_members_api_v1_chat_rooms__room_id__members_get" method="get" path="/api/v1/chat/rooms/{room_id}/members" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.chatRooms.listRoomMembersApiV1ChatRoomsRoomIdMembersGet({
    roomId: "6926012f-3dc0-4e0d-b35c-f21a3ad078d6",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { chatRoomsListRoomMembersApiV1ChatRoomsRoomIdMembersGet } from "openapi/funcs/chat-rooms-list-room-members-api-v1-chat-rooms-room-id-members-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await chatRoomsListRoomMembersApiV1ChatRoomsRoomIdMembersGet(sdk, {
    roomId: "6926012f-3dc0-4e0d-b35c-f21a3ad078d6",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatRoomsListRoomMembersApiV1ChatRoomsRoomIdMembersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListRoomMembersApiV1ChatRoomsRoomIdMembersGetRequest](../../models/operations/list-room-members-api-v1-chat-rooms-room-id-members-get-request.md)                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MembersListResponse](../../models/members-list-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## addMemberToRoomApiV1ChatRoomsRoomIdMembersPost

Add Member To Room

### Example Usage

<!-- UsageSnippet language="typescript" operationID="add_member_to_room_api_v1_chat_rooms__room_id__members_post" method="post" path="/api/v1/chat/rooms/{room_id}/members" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.chatRooms.addMemberToRoomApiV1ChatRoomsRoomIdMembersPost({
    roomId: "a8c3b244-2897-4ce9-8007-7ccc8aa374bb",
    body: {
      userId: "14f48096-50e2-4a14-ae8f-ce366dcc8d5b",
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
import { chatRoomsAddMemberToRoomApiV1ChatRoomsRoomIdMembersPost } from "openapi/funcs/chat-rooms-add-member-to-room-api-v1-chat-rooms-room-id-members-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await chatRoomsAddMemberToRoomApiV1ChatRoomsRoomIdMembersPost(sdk, {
    roomId: "a8c3b244-2897-4ce9-8007-7ccc8aa374bb",
    body: {
      userId: "14f48096-50e2-4a14-ae8f-ce366dcc8d5b",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("chatRoomsAddMemberToRoomApiV1ChatRoomsRoomIdMembersPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddMemberToRoomApiV1ChatRoomsRoomIdMembersPostRequest](../../models/operations/add-member-to-room-api-v1-chat-rooms-room-id-members-post-request.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MemberResponse](../../models/member-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## removeMemberFromRoomApiV1ChatRoomsRoomIdMembersUserIdDelete

Remove Member From Room

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_member_from_room_api_v1_chat_rooms__room_id__members__user_id__delete" method="delete" path="/api/v1/chat/rooms/{room_id}/members/{user_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await sdk.chatRooms.removeMemberFromRoomApiV1ChatRoomsRoomIdMembersUserIdDelete({
    roomId: "c98b5ec7-781a-452e-ab0b-5db40a5b8e12",
    userId: "246bb03f-d809-4124-bf1d-6127f8dfed4e",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { chatRoomsRemoveMemberFromRoomApiV1ChatRoomsRoomIdMembersUserIdDelete } from "openapi/funcs/chat-rooms-remove-member-from-room-api-v1-chat-rooms-room-id-members-user-id-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await chatRoomsRemoveMemberFromRoomApiV1ChatRoomsRoomIdMembersUserIdDelete(sdk, {
    roomId: "c98b5ec7-781a-452e-ab0b-5db40a5b8e12",
    userId: "246bb03f-d809-4124-bf1d-6127f8dfed4e",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("chatRoomsRemoveMemberFromRoomApiV1ChatRoomsRoomIdMembersUserIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.RemoveMemberFromRoomApiV1ChatRoomsRoomIdMembersUserIdDeleteRequest](../../models/operations/remove-member-from-room-api-v1-chat-rooms-room-id-members-user-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `options`                                                                                                                                                                                    | RequestOptions                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.               |
| `options.retries`                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                             |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |