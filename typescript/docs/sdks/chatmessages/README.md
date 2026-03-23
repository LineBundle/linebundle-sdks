# ChatMessages

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/chat/{room_id}/messages/` | List Messages |
| `delete` | DELETE | `/api/v1/chat/messages/{message_id}` | Delete Message |
| `getCount` | GET | `/api/v1/chat/{room_id}/messages/count` | Get Message Count |
| `markRead` | PATCH | `/api/v1/chat/{room_id}/read` | Mark Messages As Read |
| `getUnreadCount` | GET | `/api/v1/chat/{room_id}/unread-count` | Get Unread Count |

---

## `list`

List Messages

**GET** `/api/v1/chat/{room_id}/messages/`

**Signature:** `lb.chatMessages.list({ path: \{ room_id \}, query?: \{ before_id, limit \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `room_id` | path | string (uuid) | ✓ |  |
| `before_id` | query | string (uuid) | null |  | Cursor for pagination - messages before this ID |
| `limit` | query | integer |  | Maximum number of messages to return |


**Returns:**

**Response:** `Array<object>`

---

## `delete`

Delete Message

**DELETE** `/api/v1/chat/messages/{message_id}`

**Signature:** `lb.chatMessages.delete({ path: \{ message_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `message_id` | path | string (uuid) | ✓ |  |

---

## `getCount`

Get Message Count

**GET** `/api/v1/chat/{room_id}/messages/count`

**Signature:** `lb.chatMessages.getCount({ path: \{ room_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `room_id` | path | string (uuid) | ✓ |  |


**Returns:**

**Response:** `object`

---

## `markRead`

Mark Messages As Read

**PATCH** `/api/v1/chat/{room_id}/read`

**Signature:** `lb.chatMessages.markRead({ path: \{ room_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `room_id` | path | string (uuid) | ✓ |  |

---

## `getUnreadCount`

Get Unread Count

**GET** `/api/v1/chat/{room_id}/unread-count`

**Signature:** `lb.chatMessages.getUnreadCount({ path: \{ room_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `room_id` | path | string (uuid) | ✓ |  |


**Returns:**

**Response:** `object`

---
