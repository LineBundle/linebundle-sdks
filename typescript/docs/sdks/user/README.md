# User

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `getAssistant` | GET | `/api/v1/user/assistant` | Get Assistant |
| `createAssistant` | POST | `/api/v1/user/assistant` | Create Assistant |
| `list` | GET | `/api/v1/user` | Get User List |
| `updateProfile` | PUT | `/api/v1/user/me` | Update Profile |
| `getProfile` | GET | `/api/v1/user/{user_id}` | Get User Profile By Id |
| `uploadAvatar` | POST | `/api/v1/user/me/avatar` | Upload Avatar |

---

## `getAssistant`

Get Assistant

**GET** `/api/v1/user/assistant`

**Signature:** `lb.user.getAssistant()`

*No parameters.*


**Returns:**

**Response:** `object | null`

---

## `createAssistant`

Create Assistant

**POST** `/api/v1/user/assistant`

**Signature:** `lb.user.createAssistant()`

*No parameters.*


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Assistant ID |
| `username` | string | Assistant username |
| `is_ai_assistant` | boolean | Whether this is an AI assistant |
| `owner_id` | string | Owner user ID |
| `room_id` | string | null | Chat room ID for conversations with the assistant |

---

## `list`

Get User List

**GET** `/api/v1/user`

**Signature:** `lb.user.list({ query?: \{ limit, prev \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `limit` | query | integer |  | Limit |
| `prev` | query | integer |  | Prev ID |


**Returns:**

**Response:** `Array<object>`

---

## `updateProfile`

Update Profile

**PUT** `/api/v1/user/me`

**Signature:** `lb.user.updateProfile({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `username` | body | string | null |  | Username |
| `avatar_url` | body | string | null |  | Avatar URL |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | User ID |
| `email` | string | Email address |
| `external_auth_id` | string | null | External auth provider ID |
| `username` | string | null | Username |
| `avatar_url` | string | null | Avatar URL |
| `created_at` | string (date-time) | Account creation date |
| `updated_at` | string (date-time) | Last update date |

---

## `getProfile`

Get User Profile By Id

**GET** `/api/v1/user/{user_id}`

**Signature:** `lb.user.getProfile({ path: \{ user_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `user_id` | path | string | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | User ID |
| `email` | string | Email address |
| `external_auth_id` | string | null | External auth provider ID |
| `username` | string | null | Username |
| `avatar_url` | string | null | Avatar URL |
| `created_at` | string (date-time) | Account creation date |
| `updated_at` | string (date-time) | Last update date |

---

## `uploadAvatar`

Upload Avatar

**POST** `/api/v1/user/me/avatar`

**Signature:** `lb.user.uploadAvatar({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `file` | body | string (binary) | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `avatar_url` | string | Uploaded avatar URL |
| `message` | string | Success message |

---
