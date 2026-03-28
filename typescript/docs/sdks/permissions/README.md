# Permissions

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/permissions` | List all available permission codes |

---

## `list`

List all available permission codes

**GET** `/api/v1/permissions`

**Signature:** `lb.permissions.list()`

*No parameters.*


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | All available permission codes |
| `total` | integer | Total count |

---
