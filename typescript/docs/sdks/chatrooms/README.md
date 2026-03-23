# ChatRooms

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `createDirect` | POST | `/api/v1/chat/rooms/direct` | Create Direct Room |
| `createGroup` | POST | `/api/v1/chat/rooms/group` | Create Group Room |
| `list` | GET | `/api/v1/chat/rooms/` | List User Rooms |
| `getById` | GET | `/api/v1/chat/rooms/{room_id}` | Get Room By Id |
| `update` | PATCH | `/api/v1/chat/rooms/{room_id}` | Update Room |
| `addMember` | POST | `/api/v1/chat/rooms/{room_id}/members` | Add Member To Room |
| `listMembers` | GET | `/api/v1/chat/rooms/{room_id}/members` | List Room Members |
| `removeMember` | DELETE | `/api/v1/chat/rooms/{room_id}/members/{user_id}` | Remove Member From Room |

---

## `createDirect`

Create Direct Room

**POST** `/api/v1/chat/rooms/direct`

**Signature:** `lb.chatRooms.createDirect({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `other_user_id` | body | string (uuid) | ✓ | User ID to create direct message with |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) |  |
| `org_id` | string (uuid) | null |  |
| `room_type` | `"direct"` | `"group"` | `"channel"` |  |
| `name` | string | null |  |
| `description` | string | null |  |
| `visibility` | integer |  |
| `metadata_` | object | Named schema for arbitrary key-value metadata on chat rooms and messages. |
| `creator_id` | string (uuid) |  |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |

---

## `createGroup`

Create Group Room

**POST** `/api/v1/chat/rooms/group`

**Signature:** `lb.chatRooms.createGroup({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `name` | body | string | ✓ | Group chat name |
| `description` | body | string | null |  | Group chat description |
| `visibility` | body | integer |  | Visibility level (10=public, 20=private, 30=org, 40=personal) |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) |  |
| `org_id` | string (uuid) | null |  |
| `room_type` | `"direct"` | `"group"` | `"channel"` |  |
| `name` | string | null |  |
| `description` | string | null |  |
| `visibility` | integer |  |
| `metadata_` | object | Named schema for arbitrary key-value metadata on chat rooms and messages. |
| `creator_id` | string (uuid) |  |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |

---

## `list`

List User Rooms

**GET** `/api/v1/chat/rooms/`

**Signature:** `lb.chatRooms.list({ query?: \{ skip, limit \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `skip` | query | integer |  | Number of rooms to skip |
| `limit` | query | integer |  | Maximum number of rooms to return |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `rooms` | Array<object> |  |
| `next_cursor` | string | null | Cursor for next page of results |
| `has_more` | boolean | Whether there are more results available |

---

## `getById`

Get Room By Id

**GET** `/api/v1/chat/rooms/{room_id}`

**Signature:** `lb.chatRooms.getById({ path: \{ room_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `room_id` | path | string (uuid) | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) |  |
| `org_id` | string (uuid) | null |  |
| `room_type` | `"direct"` | `"group"` | `"channel"` |  |
| `name` | string | null |  |
| `description` | string | null |  |
| `visibility` | integer |  |
| `metadata_` | object | Named schema for arbitrary key-value metadata on chat rooms and messages. |
| `creator_id` | string (uuid) |  |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |

---

## `update`

Update Room

**PATCH** `/api/v1/chat/rooms/{room_id}`

**Signature:** `lb.chatRooms.update({ path: \{ room_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `room_id` | path | string (uuid) | ✓ |  |
| `name` | body | string | null |  | Updated room name |
| `description` | body | string | null |  | Updated room description |
| `visibility` | body | integer | null |  | Updated visibility level |
| `metadata` | body | object | null |  | Updated metadata |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) |  |
| `org_id` | string (uuid) | null |  |
| `room_type` | `"direct"` | `"group"` | `"channel"` |  |
| `name` | string | null |  |
| `description` | string | null |  |
| `visibility` | integer |  |
| `metadata_` | object | Named schema for arbitrary key-value metadata on chat rooms and messages. |
| `creator_id` | string (uuid) |  |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |

---

## `addMember`

Add Member To Room

**POST** `/api/v1/chat/rooms/{room_id}/members`

**Signature:** `lb.chatRooms.addMember({ path: \{ room_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `room_id` | path | string (uuid) | ✓ |  |
| `user_id` | body | string (uuid) | ✓ | User ID to add to room |
| `role` | body | string |  | Member role (member, admin, owner) |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) |  |
| `room_id` | string (uuid) |  |
| `user_id` | string (uuid) |  |
| `role` | string |  |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |

---

## `listMembers`

List Room Members

**GET** `/api/v1/chat/rooms/{room_id}/members`

**Signature:** `lb.chatRooms.listMembers({ path: \{ room_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `room_id` | path | string (uuid) | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `members` | Array<object> | List of room members |
| `total` | integer | Total number of members |

---

## `removeMember`

Remove Member From Room

**DELETE** `/api/v1/chat/rooms/{room_id}/members/{user_id}`

**Signature:** `lb.chatRooms.removeMember({ path: \{ room_id, user_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `room_id` | path | string (uuid) | ✓ |  |
| `user_id` | path | string (uuid) | ✓ |  |

---
