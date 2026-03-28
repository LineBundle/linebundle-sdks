# Organizations

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/organizations` | List user's organizations |
| `create` | POST | `/api/v1/organizations` | Create an organization |
| `archive` | DELETE | `/api/v1/organizations/{id}` | Archive (soft-delete) an organization |
| `get` | GET | `/api/v1/organizations/{id}` | Get an organization |
| `update` | PUT | `/api/v1/organizations/{id}` | Update an organization |
| `invites.list` | GET | `/api/v1/organizations/{id}/invites` | List pending invites |
| `invites.create` | POST | `/api/v1/organizations/{id}/invites` | Send an invite |
| `invites.delete` | DELETE | `/api/v1/organizations/{id}/invites/{inviteId}` | Revoke an invite |

---

## `list`

List user's organizations

**GET** `/api/v1/organizations`

**Signature:** `lb.organizations.list()`

*No parameters.*


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | Organizations the user belongs to |
| `total` | integer | Total count |

---

## `create`

Create an organization

**POST** `/api/v1/organizations`

**Signature:** `lb.organizations.create({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `name` | body | string | ✓ | Organization name |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `allow_public_visibility` | boolean | Allow public resource visibility |
| `created_at` | string (date-time) | Created timestamp |
| `deleted_at` | string (date-time) | Soft-deleted timestamp |
| `id` | string | Organization ID |
| `name` | string | Organization name |
| `plan` | string | Subscription plan |
| `updated_at` | string (date-time) | Updated timestamp |
| `zitadel_org_id` | string | Zitadel organization ID |

---

## `archive`

Archive (soft-delete) an organization

**DELETE** `/api/v1/organizations/{id}`

**Signature:** `lb.organizations.archive({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | string | ✓ | Organization ID |

---

## `get`

Get an organization

**GET** `/api/v1/organizations/{id}`

**Signature:** `lb.organizations.get({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | string | ✓ | Organization ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `allow_public_visibility` | boolean | Allow public resource visibility |
| `created_at` | string (date-time) | Created timestamp |
| `deleted_at` | string (date-time) | Soft-deleted timestamp |
| `id` | string | Organization ID |
| `name` | string | Organization name |
| `plan` | string | Subscription plan |
| `updated_at` | string (date-time) | Updated timestamp |
| `zitadel_org_id` | string | Zitadel organization ID |

---

## `update`

Update an organization

**PUT** `/api/v1/organizations/{id}`

**Signature:** `lb.organizations.update({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | string | ✓ | Organization ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `allow_public_visibility` | body | boolean | ✓ | Allow B2C public access to published resources |
| `name` | body | string | ✓ | Organization name |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `allow_public_visibility` | boolean | Allow public resource visibility |
| `created_at` | string (date-time) | Created timestamp |
| `deleted_at` | string (date-time) | Soft-deleted timestamp |
| `id` | string | Organization ID |
| `name` | string | Organization name |
| `plan` | string | Subscription plan |
| `updated_at` | string (date-time) | Updated timestamp |
| `zitadel_org_id` | string | Zitadel organization ID |

---

## `invites.list`

List pending invites

**GET** `/api/v1/organizations/{id}/invites`

**Signature:** `lb.organizations.invites.list({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | string | ✓ | Organization ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] |  |
| `total` | integer |  |

---

## `invites.create`

Send an invite

**POST** `/api/v1/organizations/{id}/invites`

**Signature:** `lb.organizations.invites.create({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | string | ✓ | Organization ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `email` | body | string | ✓ | Invitee email address |
| `role` | body | string | ✓ | Role to assign on acceptance |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `email` | string | Invitee email |
| `expires_at` | string (date-time) | Expiration timestamp |
| `id` | string | Invite ID |
| `inviter_id` | string | User who sent the invite |
| `org_id` | string | Organization ID |
| `role` | string | Role to assign on acceptance |
| `status` | string | Invite status: pending, accepted, expired |

---

## `invites.delete`

Revoke an invite

**DELETE** `/api/v1/organizations/{id}/invites/{inviteId}`

**Signature:** `lb.organizations.invites.delete({ path: \{ id, inviteId \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | string | ✓ | Organization ID |
| `inviteId` | path | string | ✓ | Invite ID |

---
