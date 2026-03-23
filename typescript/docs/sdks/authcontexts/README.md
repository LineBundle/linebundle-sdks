# AuthContexts

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `get` | GET | `/api/v1/auth/context` | Get Auth Context |

---

## `get`

Get Auth Context

**GET** `/api/v1/auth/context`

**Signature:** `lb.authContexts.get()`

*No parameters.*


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `user_id` | string | External User ID (Subject) |
| `email` | string | null |  |
| `username` | string | null |  |
| `is_service_account` | boolean | True if M2M token |
| `organizations` | Array<object> |  |

---
