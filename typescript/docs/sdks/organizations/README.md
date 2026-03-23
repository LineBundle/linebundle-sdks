# Organizations

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `create` | POST | `/api/v1/organizations` | Create Organization |
| `list` | GET | `/api/v1/organizations` | List Organizations |
| `getCurrent` | GET | `/api/v1/organizations/me` | Get Current Organization |
| `getInvites` | GET | `/api/v1/organizations/{org_id}/invites` | Get Organization Invites Endpoint |
| `createInvite` | POST | `/api/v1/organizations/{org_id}/invites` | Create Invite |
| `deleteInvite` | DELETE | `/api/v1/organizations/{org_id}/invites/{invite_id}` | Delete Invite |
| `getById` | GET | `/api/v1/organizations/{org_id}` | Get Organization By Id |
| `update` | PUT | `/api/v1/organizations/{org_id}` | Update Organization |
| `archive` | DELETE | `/api/v1/organizations/{org_id}` | Archive Organization Endpoint |

---

## `create`

Create Organization

**POST** `/api/v1/organizations`

**Signature:** `lb.organizations.create({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `name` | body | string | ✓ | Organization display name |
| `plan` | body | string |  |  |
| `allow_public_visibility` | body | boolean |  | Controls whether users can create PUBLIC visibility resources |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) |  |
| `name` | string |  |
| `zitadel_org_id` | string |  |
| `plan` | string |  |
| `allow_public_visibility` | boolean |  |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |

---

## `list`

List Organizations

**GET** `/api/v1/organizations`

**Signature:** `lb.organizations.list({ query?: \{ limit, offset \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `limit` | query | integer |  |  |
| `offset` | query | integer |  |  |


**Returns:**

**Response:** `Array<object>`

---

## `getCurrent`

Get Current Organization

**GET** `/api/v1/organizations/me`

**Signature:** `lb.organizations.getCurrent()`

*No parameters.*


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) |  |
| `name` | string |  |
| `zitadel_org_id` | string |  |
| `plan` | string |  |
| `allow_public_visibility` | boolean |  |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |

---

## `getInvites`

Get Organization Invites Endpoint

**GET** `/api/v1/organizations/{org_id}/invites`

**Signature:** `lb.organizations.getInvites({ path: \{ org_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `org_id` | path | string | ✓ |  |


**Returns:**

**Response:** `Array<object>`

---

## `createInvite`

Create Invite

**POST** `/api/v1/organizations/{org_id}/invites`

**Signature:** `lb.organizations.createInvite({ path: \{ org_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `org_id` | path | string | ✓ |  |
| `email` | body | string (email) | ✓ |  |
| `role` | body | string |  |  |
| `expires_in_days` | body | integer |  |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Invitation ID |
| `org_id` | string | Organization ID |
| `email` | string | Invitee email address |
| `role` | string | Role to assign on acceptance |
| `status` | string | Invitation status |
| `inviter_id` | string | ID of user who sent invite |
| `expires_at` | string (date-time) | null | When invitation expires |
| `created_at` | string (date-time) | null | When invitation was created |

---

## `deleteInvite`

Delete Invite

**DELETE** `/api/v1/organizations/{org_id}/invites/{invite_id}`

**Signature:** `lb.organizations.deleteInvite({ path: \{ org_id, invite_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `org_id` | path | string | ✓ |  |
| `invite_id` | path | string | ✓ |  |

---

## `getById`

Get Organization By Id

**GET** `/api/v1/organizations/{org_id}`

**Signature:** `lb.organizations.getById({ path: \{ org_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `org_id` | path | string | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) |  |
| `name` | string |  |
| `zitadel_org_id` | string |  |
| `plan` | string |  |
| `allow_public_visibility` | boolean |  |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |

---

## `update`

Update Organization

**PUT** `/api/v1/organizations/{org_id}`

**Signature:** `lb.organizations.update({ path: \{ org_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `org_id` | path | string | ✓ |  |
| `name` | body | string | null |  | Organization display name |
| `plan` | body | string | null |  |  |
| `allow_public_visibility` | body | boolean | null |  | Controls whether users can create PUBLIC visibility resources |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) |  |
| `name` | string |  |
| `zitadel_org_id` | string |  |
| `plan` | string |  |
| `allow_public_visibility` | boolean |  |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |

---

## `archive`

Archive Organization Endpoint

**DELETE** `/api/v1/organizations/{org_id}`

**Signature:** `lb.organizations.archive({ path: \{ org_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `org_id` | path | string | ✓ |  |

---
