# Space

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `testAuth` | GET | `/api/v1/space/test-auth` | Test Auth |
| `update` | PUT | `/api/v1/space/{space_id}` | Update Space |
| `publish` | PATCH | `/api/v1/space/{space_id}/publish` | Publish Space |
| `archive` | PATCH | `/api/v1/space/{space_id}/archive` | Archive Space |
| `updateMemberRole` | PATCH | `/api/v1/space/{space_id}/members/{user_id}` | Update Space Member Role |
| `transfer` | POST | `/api/v1/space/{space_id}/transfer` | Transfer Space |
| `bulkUpdateParent` | PATCH | `/api/v1/space/bulk-parent` | Bulk Update Space Parent |
| `getLatestVersion` | GET | `/api/v1/space/{space_id}/versions/latest` | Get latest published space version |
| `assignUserToRole` | POST | `/api/v1/space/spaces/{space_id}/members/{user_id}/roles` | Assign User To Space Role |
| `getUserRoles` | GET | `/api/v1/space/spaces/{space_id}/members/{user_id}/roles` | Get User Space Roles |

---

## `testAuth`

Test Auth

**GET** `/api/v1/space/test-auth`

**Signature:** `lb.space.testAuth()`

*No parameters.*


**Returns:**

**Response:** Successful Response

---

## `update`

Update Space

**PUT** `/api/v1/space/{space_id}`

**Signature:** `lb.space.update({ path: \{ space_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `title` | body | string | ✓ | Title |
| `description` | body | string | ✓ | Description |
| `timezone` | body | string | ✓ | Timezone |
| `visibility` | body | integer | ✓ | Visibility |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | ID |
| `title` | string | Title |
| `description` | string | Description |
| `timezone` | string | Timezone |
| `visibility` | integer | null | Visibility |
| `creator_id` | string | null | Creator ID |

---

## `publish`

Publish Space

**PATCH** `/api/v1/space/{space_id}/publish`

**Signature:** `lb.space.publish({ path: \{ space_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |


**Returns:**

**Response:** Successful Response

---

## `archive`

Archive Space

**PATCH** `/api/v1/space/{space_id}/archive`

**Signature:** `lb.space.archive({ path: \{ space_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |


**Returns:**

**Response:** Successful Response

---

## `updateMemberRole`

Update Space Member Role

**PATCH** `/api/v1/space/{space_id}/members/{user_id}`

**Signature:** `lb.space.updateMemberRole({ path: \{ space_id, user_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `user_id` | path | string | ✓ |  |
| `role` | body | `"space_owner"` | `"space_admin"` | `"space_member"` | `"space_viewer"` | ✓ | Space roles with hierarchical permissions |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `user_id` | string | User ID |
| `email` | string | User's email |
| `name` | string | null | User's display name |
| `role` | `"space_owner"` | `"space_admin"` | `"space_member"` | `"space_viewer"` | Space roles with hierarchical permissions |
| `joined_at` | string | When the user joined the space |
| `avatar_url` | string | null | User's avatar URL |

---

## `transfer`

Transfer Space

**POST** `/api/v1/space/{space_id}/transfer`

**Signature:** `lb.space.transfer({ path: \{ space_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `target_org_id` | body | string (uuid) | ✓ | UUID of the target organization to transfer this space to |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Transfer status |
| `space_id` | integer | ID of the transferred space |
| `target_org_id` | string | UUID of the target organization |

---

## `bulkUpdateParent`

Bulk Update Space Parent

**PATCH** `/api/v1/space/bulk-parent`

**Signature:** `lb.space.bulkUpdateParent({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_ids` | body | Array<integer> | ✓ | List of space IDs to update |
| `parent_id` | body | integer | null |  | New parent ID or null to remove parent |


**Returns:**

**Response:** `Array<object>`

---

## `getLatestVersion`

Get latest published space version

**GET** `/api/v1/space/{space_id}/versions/latest`

**Signature:** `lb.space.getLatestVersion({ path: \{ space_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer |  |
| `space_id` | integer |  |
| `version_number` | integer |  |
| `status` | string |  |
| `title` | string |  |
| `description` | string | null |  |
| `timezone` | string |  |
| `visibility` | integer | null |  |
| `event_creation_mode` | integer |  |
| `suggestions_disabled` | boolean |  |
| `notify_managers` | boolean |  |
| `icon_metadata` | object | null |  |
| `logo_metadata` | object | null |  |
| `published_at` | string (date-time) |  |
| `published_by` | string (uuid) | null |  |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |
| `members` | Array<object> |  |
| `contacts` | Array<object> |  |
| `documents` | Array<string> |  |

---

## `assignUserToRole`

Assign User To Space Role

**POST** `/api/v1/space/spaces/{space_id}/members/{user_id}/roles`

**Signature:** `lb.space.assignUserToRole({ path: \{ space_id, user_id \}, query?: \{ space_role_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `user_id` | path | string (uuid) | ✓ |  |
| `space_role_id` | query | string (uuid) | ✓ |  |


**Returns:**

**Response:** Successful Response

---

## `getUserRoles`

Get User Space Roles

**GET** `/api/v1/space/spaces/{space_id}/members/{user_id}/roles`

**Signature:** `lb.space.getUserRoles({ path: \{ space_id, user_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `user_id` | path | string (uuid) | ✓ |  |


**Returns:**

**Response:** `Array<object>`

---
