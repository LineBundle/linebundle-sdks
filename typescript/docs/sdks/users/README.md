# Users

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `search` | GET | `/api/v1/user/search` | Search Users |
| `getCurrentProfile` | GET | `/api/v1/user/me` | Get Current User Profile |
| `getAvatar` | GET | `/api/v1/user/me/avatar` | Get Avatar |
| `deleteAvatar` | DELETE | `/api/v1/user/me/avatar` | Delete Avatar |
| `getAvatarById` | GET | `/api/v1/user/avatar/{user_id}` | Get User Avatar |

---

## `search`

Search Users

**GET** `/api/v1/user/search`

**Signature:** `lb.users.search({ query?: \{ q, limit, prev, org_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `q` | query | string |  | Search query for username, first_name, last_name, or email. If empty, returns first users based on limit. |
| `limit` | query | integer |  | Limit for pagination |
| `prev` | query | integer |  | Previous ID for cursor-based pagination |
| `org_id` | query | string (uuid) |  | Optional organization ID to filter users within specific organization |


**Returns:**

**Response:** `Array<object>`

---

## `getCurrentProfile`

Get Current User Profile

**GET** `/api/v1/user/me`

**Signature:** `lb.users.getCurrentProfile()`

*No parameters.*


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

## `getAvatar`

Get Avatar

**GET** `/api/v1/user/me/avatar`

**Signature:** `lb.users.getAvatar()`

*No parameters.*


**Returns:**

**Response:** Successful Response

---

## `deleteAvatar`

Delete Avatar

**DELETE** `/api/v1/user/me/avatar`

**Signature:** `lb.users.deleteAvatar()`

*No parameters.*


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `message` | string | Success message |

---

## `getAvatarById`

Get User Avatar

**GET** `/api/v1/user/avatar/{user_id}`

**Signature:** `lb.users.getAvatarById({ path: \{ user_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `user_id` | path | string | ✓ |  |


**Returns:**

**Response:** Successful Response

---
