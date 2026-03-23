# Spaces

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/space/` | Get Space List |
| `createSpace` | POST | `/api/v1/space/` | Create Space |
| `getById` | GET | `/api/v1/space/{space_id}` | Get Space By Id |
| `deleteById` | DELETE | `/api/v1/space/{space_id}` | Delete Space |
| `createWithParent` | POST | `/api/v1/space/with-parent` | Create Space With Parent |
| `publishVersion` | POST | `/api/v1/space/{space_id}/publish` | Publish space |
| `getMembers` | GET | `/api/v1/space/{space_id}/members` | Get Space Members |
| `addMember` | POST | `/api/v1/space/{space_id}/members` | Add Space Member |
| `removeMember` | DELETE | `/api/v1/space/{space_id}/members/{user_id}` | Remove Space Member |
| `getJoinableByUser` | GET | `/api/v1/space/by-user/{user_id}/joinable` | Get Joinable Spaces By User |
| `join` | POST | `/api/v1/space/{space_id}/join` | Join Space |
| `listChildren` | GET | `/api/v1/space/{space_id}/children` | Get Space Children |
| `getParent` | GET | `/api/v1/space/{space_id}/parent` | Get Space Parent |
| `updateParent` | PATCH | `/api/v1/space/{space_id}/parent` | Update Space Parent |
| `detachParent` | DELETE | `/api/v1/space/{space_id}/parent` | Detach Space From Parent |
| `getHierarchy` | GET | `/api/v1/space/{space_id}/hierarchy` | Get Space Hierarchy |
| `unpublish` | POST | `/api/v1/space/{space_id}/unpublish` | Unpublish space |
| `listVersions` | GET | `/api/v1/space/{space_id}/versions` | List space versions |
| `getVersion` | GET | `/api/v1/space/{space_id}/versions/{version_number}` | Get specific space version |
| `compareVersions` | GET | `/api/v1/space/{space_id}/versions/compare` | Compare space versions |
| `rollback` | POST | `/api/v1/space/{space_id}/rollback` | Rollback space to version |
| `removeUserFromRole` | DELETE | `/api/v1/space/spaces/{space_id}/members/{user_id}/roles/{space_role_id}` | Remove User From Space Role |

---

## `list`

Get Space List

**GET** `/api/v1/space/`

**Signature:** `lb.spaces.list({ query?: \{ limit, offset, prev, search \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `limit` | query | integer |  | Limit |
| `offset` | query | integer |  | Offset |
| `prev` | query | integer |  | Prev ID |
| `search` | query | string |  | Search term for title/description |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `items` | Array<object> | List of spaces |
| `has_next` | boolean | Whether there are more items available |
| `has_prev` | boolean | Whether there are previous items available |
| `total_count` | integer | Total number of spaces matching the query |
| `next_cursor` | integer | null | Cursor for next page (space ID) |
| `prev_cursor` | integer | null | Cursor for previous page (space ID) |

---

## `createSpace`

Create Space

**POST** `/api/v1/space/`

**Signature:** `lb.spaces.createSpace({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
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

## `getById`

Get Space By Id

**GET** `/api/v1/space/{space_id}`

**Signature:** `lb.spaces.getById({ path: \{ space_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | ID |
| `title` | string | Title |
| `description` | string | Description |
| `created_at` | string | Created At |
| `updated_at` | string | Updated At |
| `timezone` | string | Timezone |
| `visibility` | integer | null | Visibility |
| `creator_id` | string | null | Creator ID |
| `org_id` | string | null | Organization ID |
| `parent_id` | integer | null |  |
| `children` | Array<integer> |  |
| `inheritance_settings` | object | null |  |
| `member_count` | integer | Number of members in the space |
| `event_count` | integer | Number of events in the space |
| `is_member` | boolean | Whether the current user is a member of this space |
| `user_role` | string | null | Current user's role in the space |

---

## `deleteById`

Delete Space

**DELETE** `/api/v1/space/{space_id}`

**Signature:** `lb.spaces.deleteById({ path: \{ space_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |


**Returns:**

**Response:** Successful Response

---

## `createWithParent`

Create Space With Parent

**POST** `/api/v1/space/with-parent`

**Signature:** `lb.spaces.createWithParent({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `title` | body | string | ✓ | Space title |
| `description` | body | string |  | Space description |
| `timezone` | body | string |  | Space timezone |
| `visibility` | body | integer |  | Space visibility level |
| `parent_id` | body | integer | null |  | Parent space ID for sub-spaces |
| `inheritance_settings` | body | object | null |  | Inheritance configuration for sub-spaces |


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

## `publishVersion`

Publish space

**POST** `/api/v1/space/{space_id}/publish`

**Signature:** `lb.spaces.publishVersion({ path: \{ space_id \} })`

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

## `getMembers`

Get Space Members

**GET** `/api/v1/space/{space_id}/members`

**Signature:** `lb.spaces.getMembers({ path: \{ space_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |


**Returns:**

**Response:** `Array<object>`

---

## `addMember`

Add Space Member

**POST** `/api/v1/space/{space_id}/members`

**Signature:** `lb.spaces.addMember({ path: \{ space_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `email` | body | string | ✓ | Email of the user to add |
| `role` | body | `"space_owner"` | `"space_admin"` | `"space_member"` | `"space_viewer"` |  | Space roles with hierarchical permissions |


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

## `removeMember`

Remove Space Member

**DELETE** `/api/v1/space/{space_id}/members/{user_id}`

**Signature:** `lb.spaces.removeMember({ path: \{ space_id, user_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `user_id` | path | string | ✓ |  |


**Returns:**

**Response:** Successful Response

---

## `getJoinableByUser`

Get Joinable Spaces By User

**GET** `/api/v1/space/by-user/{user_id}/joinable`

**Signature:** `lb.spaces.getJoinableByUser({ path: \{ user_id \}, query?: \{ limit, prev, sort_by, sort_order \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `user_id` | path | string | ✓ |  |
| `limit` | query | integer |  | Limit |
| `prev` | query | integer |  | Prev ID |
| `sort_by` | query | string |  | Sort by field |
| `sort_order` | query | string |  | Sort order |


**Returns:**

**Response:** `Array<object>`

---

## `join`

Join Space

**POST** `/api/v1/space/{space_id}/join`

**Signature:** `lb.spaces.join({ path: \{ space_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |


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

## `listChildren`

Get Space Children

**GET** `/api/v1/space/{space_id}/children`

**Signature:** `lb.spaces.listChildren({ path: \{ space_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |


**Returns:**

**Response:** `Array<object>`

---

## `getParent`

Get Space Parent

**GET** `/api/v1/space/{space_id}/parent`

**Signature:** `lb.spaces.getParent({ path: \{ space_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | ID |
| `title` | string | Title |
| `description` | string | Description |
| `created_at` | string | Created At |
| `updated_at` | string | Updated At |
| `timezone` | string | Timezone |
| `visibility` | integer | null | Visibility |
| `creator_id` | string | null | Creator ID |
| `org_id` | string | null | Organization ID |
| `parent_id` | integer | null |  |
| `children` | Array<integer> |  |
| `inheritance_settings` | object | null |  |
| `member_count` | integer | Number of members in the space |
| `event_count` | integer | Number of events in the space |
| `is_member` | boolean | Whether the current user is a member of this space |
| `user_role` | string | null | Current user's role in the space |

---

## `updateParent`

Update Space Parent

**PATCH** `/api/v1/space/{space_id}/parent`

**Signature:** `lb.spaces.updateParent({ path: \{ space_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `parent_id` | body | integer | null |  | New parent ID or null to remove parent |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer |  |
| `title` | string |  |
| `description` | string |  |
| `timezone` | string |  |
| `visibility` | integer | null |  |
| `creator_id` | string | null |  |
| `parent_id` | integer | null |  |
| `children` | Array<integer> |  |
| `inheritance_settings` | object | null |  |

---

## `detachParent`

Detach Space From Parent

**DELETE** `/api/v1/space/{space_id}/parent`

**Signature:** `lb.spaces.detachParent({ path: \{ space_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | ID |
| `title` | string | Title |
| `description` | string | Description |
| `created_at` | string | Created At |
| `updated_at` | string | Updated At |
| `timezone` | string | Timezone |
| `visibility` | integer | null | Visibility |
| `creator_id` | string | null | Creator ID |
| `org_id` | string | null | Organization ID |
| `parent_id` | integer | null |  |
| `children` | Array<integer> |  |
| `inheritance_settings` | object | null |  |
| `member_count` | integer | Number of members in the space |
| `event_count` | integer | Number of events in the space |
| `is_member` | boolean | Whether the current user is a member of this space |
| `user_role` | string | null | Current user's role in the space |

---

## `getHierarchy`

Get Space Hierarchy

**GET** `/api/v1/space/{space_id}/hierarchy`

**Signature:** `lb.spaces.getHierarchy({ path: \{ space_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer |  |
| `title` | string |  |
| `description` | string |  |
| `parent_id` | integer | null |  |
| `children` | Array<object> |  |
| `level` | integer |  |
| `is_inherited` | boolean |  |

---

## `unpublish`

Unpublish space

**POST** `/api/v1/space/{space_id}/unpublish`

**Signature:** `lb.spaces.unpublish({ path: \{ space_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |

---

## `listVersions`

List space versions

**GET** `/api/v1/space/{space_id}/versions`

**Signature:** `lb.spaces.listVersions({ path: \{ space_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `versions` | Array<object> |  |
| `total` | integer |  |

---

## `getVersion`

Get specific space version

**GET** `/api/v1/space/{space_id}/versions/{version_number}`

**Signature:** `lb.spaces.getVersion({ path: \{ space_id, version_number \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `version_number` | path | integer | ✓ |  |


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

## `compareVersions`

Compare space versions

**GET** `/api/v1/space/{space_id}/versions/compare`

**Signature:** `lb.spaces.compareVersions({ path: \{ space_id \}, query?: \{ version_a, version_b \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `version_a` | query | integer | ✓ | First version to compare |
| `version_b` | query | integer | ✓ | Second version to compare |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `space_id` | integer |  |
| `version_a` | integer |  |
| `version_b` | integer |  |
| `differences` | object | Dictionary of field changes and relationship changes |

---

## `rollback`

Rollback space to version

**POST** `/api/v1/space/{space_id}/rollback`

**Signature:** `lb.spaces.rollback({ path: \{ space_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `version_number` | body | integer | ✓ | Version number to rollback to |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | ID |
| `title` | string | Title |
| `description` | string | Description |
| `created_at` | string | Created At |
| `updated_at` | string | Updated At |
| `timezone` | string | Timezone |
| `visibility` | integer | null | Visibility |
| `creator_id` | string | null | Creator ID |
| `org_id` | string | null | Organization ID |
| `parent_id` | integer | null |  |
| `children` | Array<integer> |  |
| `inheritance_settings` | object | null |  |
| `member_count` | integer | Number of members in the space |
| `event_count` | integer | Number of events in the space |
| `is_member` | boolean | Whether the current user is a member of this space |
| `user_role` | string | null | Current user's role in the space |

---

## `removeUserFromRole`

Remove User From Space Role

**DELETE** `/api/v1/space/spaces/{space_id}/members/{user_id}/roles/{space_role_id}`

**Signature:** `lb.spaces.removeUserFromRole({ path: \{ space_id, user_id, space_role_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `user_id` | path | string (uuid) | ✓ |  |
| `space_role_id` | path | string (uuid) | ✓ |  |

---
