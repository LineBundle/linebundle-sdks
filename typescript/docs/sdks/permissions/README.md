# Permissions

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/permissions` | List Permissions Endpoint |
| `get` | GET | `/api/v1/permissions/{permission_code}` | Get Permission Endpoint |

---

## `list`

List Permissions Endpoint

**GET** `/api/v1/permissions`

**Signature:** `lb.permissions.list()`

*No parameters.*


**Returns:**

**Response:** `Array<object>`

---

## `get`

Get Permission Endpoint

**GET** `/api/v1/permissions/{permission_code}`

**Signature:** `lb.permissions.get({ path: \{ permission_code \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `permission_code` | path | string | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `code` | string | Permission code (e.g., 'events:create') |
| `description` | string | null | Human-readable description |

---
