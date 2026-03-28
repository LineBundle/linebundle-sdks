# Roles

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/roles` | List custom roles for the org |
| `create` | POST | `/api/v1/roles` | Create a custom role |
| `delete` | DELETE | `/api/v1/roles/{name}` | Delete a custom role |
| `get` | GET | `/api/v1/roles/{name}` | Get a custom role |
| `update` | PUT | `/api/v1/roles/{name}` | Update a custom role's permissions |

---

## `list`

List custom roles for the org

**GET** `/api/v1/roles`

**Signature:** `lb.roles.list()`

*No parameters.*


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | Custom roles for this org |
| `total` | integer | Total count |

---

## `create`

Create a custom role

**POST** `/api/v1/roles`

**Signature:** `lb.roles.create({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `description` | body | string |  | Human-readable description |
| `name` | body | string | ✓ | Role name |
| `permissions` | body | ['array', 'null'] | ✓ | Permission codes to assign |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `description` | string | Human-readable description |
| `id` | string | Custom role ID |
| `name` | string | Role name (used as Zitadel role name) |
| `org_id` | string | Organization ID |
| `permissions` | ['array', 'null'] | List of permission codes assigned to this role |
| `updated_at` | string (date-time) | Updated timestamp |

---

## `delete`

Delete a custom role

**DELETE** `/api/v1/roles/{name}`

**Signature:** `lb.roles.delete({ path: \{ name \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `name` | path | string | ✓ | Role name |

---

## `get`

Get a custom role

**GET** `/api/v1/roles/{name}`

**Signature:** `lb.roles.get({ path: \{ name \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `name` | path | string | ✓ | Role name |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `description` | string | Human-readable description |
| `id` | string | Custom role ID |
| `name` | string | Role name (used as Zitadel role name) |
| `org_id` | string | Organization ID |
| `permissions` | ['array', 'null'] | List of permission codes assigned to this role |
| `updated_at` | string (date-time) | Updated timestamp |

---

## `update`

Update a custom role's permissions

**PUT** `/api/v1/roles/{name}`

**Signature:** `lb.roles.update({ path: \{ name \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `name` | path | string | ✓ | Role name |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `description` | body | string |  | Human-readable description |
| `permissions` | body | ['array', 'null'] | ✓ | Replacement permission codes |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `description` | string | Human-readable description |
| `id` | string | Custom role ID |
| `name` | string | Role name (used as Zitadel role name) |
| `org_id` | string | Organization ID |
| `permissions` | ['array', 'null'] | List of permission codes assigned to this role |
| `updated_at` | string (date-time) | Updated timestamp |

---
