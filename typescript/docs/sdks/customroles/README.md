# CustomRoles

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/roles` | List Roles Endpoint |
| `create` | POST | `/api/v1/roles` | Create Role Endpoint |
| `get` | GET | `/api/v1/roles/{role_id}` | Get Role Endpoint |
| `update` | PUT | `/api/v1/roles/{role_id}` | Update Role Endpoint |
| `addPermission` | POST | `/api/v1/roles/{role_id}/permissions` | Add Permission Endpoint |
| `setPermissions` | PUT | `/api/v1/roles/{role_id}/permissions` | Set Permissions Endpoint |
| `removePermission` | DELETE | `/api/v1/roles/{role_id}/permissions/{permission_code}` | Remove Permission Endpoint |
| `getMyPermissions` | GET | `/api/v1/roles/me/permissions` | Get My Permissions Endpoint |
| `assignToUser` | POST | `/api/v1/roles/users/{user_id}/roles` | Assign Role To User Endpoint |
| `removeUserRole` | DELETE | `/api/v1/roles/users/{user_id}/roles/{role_id}` | Remove Role From User Endpoint |

---

## `list`

List Roles Endpoint

**GET** `/api/v1/roles`

**Signature:** `lb.customRoles.list({ query?: \{ org_id, limit \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `org_id` | query | string | null |  | Organization ID (uses current org if not provided) |
| `limit` | query | integer |  | Limit results |


**Returns:**

**Response:** `Array<object>`

---

## `create`

Create Role Endpoint

**POST** `/api/v1/roles`

**Signature:** `lb.customRoles.create({ query?: \{ org_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `org_id` | query | string | null |  | Organization ID (uses current org if not provided) |
| `name` | body | string | ✓ | Role name |
| `description` | body | string | null |  | Role description |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) | Role ID |
| `org_id` | string (uuid) | Organization ID |
| `name` | string | Role name |
| `description` | string | null | Role description |
| `permissions` | Array<object> | List of permissions |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |

---

## `get`

Get Role Endpoint

**GET** `/api/v1/roles/{role_id}`

**Signature:** `lb.customRoles.get({ path: \{ role_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `role_id` | path | string | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) | Role ID |
| `org_id` | string (uuid) | Organization ID |
| `name` | string | Role name |
| `description` | string | null | Role description |
| `permissions` | Array<object> | List of permissions |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |

---

## `update`

Update Role Endpoint

**PUT** `/api/v1/roles/{role_id}`

**Signature:** `lb.customRoles.update({ path: \{ role_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `role_id` | path | string | ✓ |  |
| `name` | body | string | null |  | Role name |
| `description` | body | string | null |  | Role description |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) | Role ID |
| `org_id` | string (uuid) | Organization ID |
| `name` | string | Role name |
| `description` | string | null | Role description |
| `permissions` | Array<object> | List of permissions |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |

---

## `addPermission`

Add Permission Endpoint

**POST** `/api/v1/roles/{role_id}/permissions`

**Signature:** `lb.customRoles.addPermission({ path: \{ role_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `role_id` | path | string | ✓ |  |
| `permission_code` | body | string | ✓ | Permission code (e.g., 'events:create') |


**Returns:**

**Response:** Successful Response

---

## `setPermissions`

Set Permissions Endpoint

**PUT** `/api/v1/roles/{role_id}/permissions`

**Signature:** `lb.customRoles.setPermissions({ path: \{ role_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `role_id` | path | string | ✓ |  |
| `permission_codes` | body | Array<string> | ✓ | List of permission codes |


**Returns:**

**Response:** Successful Response

---

## `removePermission`

Remove Permission Endpoint

**DELETE** `/api/v1/roles/{role_id}/permissions/{permission_code}`

**Signature:** `lb.customRoles.removePermission({ path: \{ role_id, permission_code \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `role_id` | path | string | ✓ |  |
| `permission_code` | path | string | ✓ |  |

---

## `getMyPermissions`

Get My Permissions Endpoint

**GET** `/api/v1/roles/me/permissions`

**Signature:** `lb.customRoles.getMyPermissions()`

*No parameters.*


**Returns:**

**Response:** `Array<object>`

---

## `assignToUser`

Assign Role To User Endpoint

**POST** `/api/v1/roles/users/{user_id}/roles`

**Signature:** `lb.customRoles.assignToUser({ path: \{ user_id \}, query?: \{ role_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `user_id` | path | string | ✓ |  |
| `role_id` | query | string | ✓ |  |


**Returns:**

**Response:** Successful Response

---

## `removeUserRole`

Remove Role From User Endpoint

**DELETE** `/api/v1/roles/users/{user_id}/roles/{role_id}`

**Signature:** `lb.customRoles.removeUserRole({ path: \{ user_id, role_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `user_id` | path | string | ✓ |  |
| `role_id` | path | string | ✓ |  |

---
