# SpaceRoles

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `create` | POST | `/api/v1/space/spaces/{space_id}/roles/` | Create Space Role |
| `listRoles` | GET | `/api/v1/space/spaces/{space_id}/roles/` | List Space Roles |
| `get` | GET | `/api/v1/space/spaces/{space_id}/roles/{role_id}` | Get Space Role |
| `updateRole` | PUT | `/api/v1/space/spaces/{space_id}/roles/{role_id}` | Update Space Role |
| `delete` | DELETE | `/api/v1/space/spaces/{space_id}/roles/{role_id}` | Delete Space Role |
| `assignPermission` | POST | `/api/v1/space/spaces/{space_id}/roles/{role_id}/permissions` | Assign Permission To Space Role |
| `removePermission` | DELETE | `/api/v1/space/spaces/{space_id}/roles/{role_id}/permissions/{permission_id}` | Remove Permission From Space Role |

---

## `create`

Create Space Role

**POST** `/api/v1/space/spaces/{space_id}/roles/`

**Signature:** `lb.spaceRoles.create({ path: \{ space_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `name` | body | string | ✓ |  |
| `description` | body | string | null |  |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) |  |
| `space_id` | integer |  |
| `name` | string |  |
| `description` | string | null |  |
| `org_id` | string (uuid) |  |
| `permissions` | Array<any> |  |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |

---

## `listRoles`

List Space Roles

**GET** `/api/v1/space/spaces/{space_id}/roles/`

**Signature:** `lb.spaceRoles.listRoles({ path: \{ space_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |


**Returns:**

**Response:** `Array<object>`

---

## `get`

Get Space Role

**GET** `/api/v1/space/spaces/{space_id}/roles/{role_id}`

**Signature:** `lb.spaceRoles.get({ path: \{ space_id, role_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `role_id` | path | string (uuid) | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) |  |
| `space_id` | integer |  |
| `name` | string |  |
| `description` | string | null |  |
| `org_id` | string (uuid) |  |
| `permissions` | Array<any> |  |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |

---

## `updateRole`

Update Space Role

**PUT** `/api/v1/space/spaces/{space_id}/roles/{role_id}`

**Signature:** `lb.spaceRoles.updateRole({ path: \{ space_id, role_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `role_id` | path | string (uuid) | ✓ |  |
| `name` | body | string | null |  |  |
| `description` | body | string | null |  |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) |  |
| `space_id` | integer |  |
| `name` | string |  |
| `description` | string | null |  |
| `org_id` | string (uuid) |  |
| `permissions` | Array<any> |  |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |

---

## `delete`

Delete Space Role

**DELETE** `/api/v1/space/spaces/{space_id}/roles/{role_id}`

**Signature:** `lb.spaceRoles.delete({ path: \{ space_id, role_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `role_id` | path | string (uuid) | ✓ |  |

---

## `assignPermission`

Assign Permission To Space Role

**POST** `/api/v1/space/spaces/{space_id}/roles/{role_id}/permissions`

**Signature:** `lb.spaceRoles.assignPermission({ path: \{ space_id, role_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `role_id` | path | string (uuid) | ✓ |  |
| `permission_id` | body | string (uuid) | ✓ |  |


**Returns:**

**Response:** Successful Response

---

## `removePermission`

Remove Permission From Space Role

**DELETE** `/api/v1/space/spaces/{space_id}/roles/{role_id}/permissions/{permission_id}`

**Signature:** `lb.spaceRoles.removePermission({ path: \{ space_id, role_id, permission_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `role_id` | path | string (uuid) | ✓ |  |
| `permission_id` | path | string (uuid) | ✓ |  |

---
