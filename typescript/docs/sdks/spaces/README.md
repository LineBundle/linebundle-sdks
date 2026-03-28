# Spaces

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/spaces` | List spaces |
| `create` | POST | `/api/v1/spaces` | Create a space |
| `managerPermissions` | GET | `/api/v1/spaces/manager-permissions` | List all assignable space manager permissions |
| `delete` | DELETE | `/api/v1/spaces/{id}` | Delete a space |
| `get` | GET | `/api/v1/spaces/{id}` | Get a space |
| `update` | PUT | `/api/v1/spaces/{id}` | Update a space (draft only) |
| `archive` | POST | `/api/v1/spaces/{id}/archive` | Archive a space |
| `listContacts` | GET | `/api/v1/spaces/{id}/contacts` | List contacts in a space |
| `addContact` | POST | `/api/v1/spaces/{id}/contacts` | Add a contact to a space |
| `removeContact` | DELETE | `/api/v1/spaces/{id}/contacts/{contact_id}` | Remove a contact from a space |
| `discard` | POST | `/api/v1/spaces/{id}/discard` | Discard draft, keep published version |
| `getDraft` | GET | `/api/v1/spaces/{id}/draft` | Get draft version of a space |
| `startEdit` | POST | `/api/v1/spaces/{id}/edit` | Start editing (creates draft clone) |
| `listEvents` | GET | `/api/v1/spaces/{id}/events` | List events in a space |
| `addEvent` | POST | `/api/v1/spaces/{id}/events` | Add an event to a space |
| `removeEvent` | DELETE | `/api/v1/spaces/{id}/events/{event_id}` | Remove an event from a space |
| `listManagers` | GET | `/api/v1/spaces/{id}/managers` | List managers for a space |
| `addManager` | POST | `/api/v1/spaces/{id}/managers` | Add a manager to a space |
| `removeManager` | DELETE | `/api/v1/spaces/{id}/managers/{user_id}` | Remove a manager from a space |
| `getManager` | GET | `/api/v1/spaces/{id}/managers/{user_id}` | Get a single space manager |
| `updateManager` | PUT | `/api/v1/spaces/{id}/managers/{user_id}` | Update a space manager's permissions |
| `listMembers` | GET | `/api/v1/spaces/{id}/members` | List space members |
| `addMember` | POST | `/api/v1/spaces/{id}/members` | Add a member to a space |
| `removeMember` | DELETE | `/api/v1/spaces/{id}/members/{user_id}` | Remove a member from a space |
| `publish` | POST | `/api/v1/spaces/{id}/publish` | Publish a space |

---

## `list`

List spaces

**GET** `/api/v1/spaces`

**Signature:** `lb.spaces.list({ query?: \{ page, size, search, sort_by, sort_dir \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `page` | query | integer |  | Page number (1-based) |
| `size` | query | integer |  | Items per page |
| `search` | query | string |  | Search term |
| `sort_by` | query | string |  | Field to sort by |
| `sort_dir` | query | `"asc"` | `"desc"` |  | Sort direction |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | List of results |
| `page` | integer | Current page (1-based) |
| `size` | integer | Page size |
| `total` | integer | Total matching records |

---

## `create`

Create a space

**POST** `/api/v1/spaces`

**Signature:** `lb.spaces.create({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `description` | body | string |  | Space description |
| `parent_id` | body | integer |  | Parent space ID |
| `position` | body | integer |  | Order within parent |
| `timezone` | body | string |  | IANA timezone |
| `title` | body | string | ✓ | Space title |
| `visibility` | body | integer |  | Visibility: 10=public, 20=tenant, 40=members-only |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `creator_id` | string | Creator profile ID |
| `description` | string | Space description |
| `id` | integer | Space ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `org_id` | string | Organization ID (nil = personal space) |
| `parent_id` | integer | Parent space ID |
| `position` | integer | Order within parent |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `timezone` | string | IANA timezone |
| `title` | string | Space title |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=public, 20=tenant, 40=members-only |

---

## `managerPermissions`

List all assignable space manager permissions

**GET** `/api/v1/spaces/manager-permissions`

**Signature:** `lb.spaces.managerPermissions()`

*No parameters.*


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `permissions` | ['array', 'null'] | All assignable space manager permissions |

---

## `delete`

Delete a space

**DELETE** `/api/v1/spaces/{id}`

**Signature:** `lb.spaces.delete({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |

---

## `get`

Get a space

**GET** `/api/v1/spaces/{id}`

**Signature:** `lb.spaces.get({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `creator_id` | string | Creator profile ID |
| `description` | string | Space description |
| `id` | integer | Space ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `org_id` | string | Organization ID (nil = personal space) |
| `parent_id` | integer | Parent space ID |
| `position` | integer | Order within parent |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `timezone` | string | IANA timezone |
| `title` | string | Space title |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=public, 20=tenant, 40=members-only |

---

## `update`

Update a space (draft only)

**PUT** `/api/v1/spaces/{id}`

**Signature:** `lb.spaces.update({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `description` | body | string |  | Space description |
| `position` | body | integer |  | Order within parent |
| `timezone` | body | string |  | IANA timezone |
| `title` | body | string | ✓ | Space title |
| `visibility` | body | integer |  | Visibility level |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `creator_id` | string | Creator profile ID |
| `description` | string | Space description |
| `id` | integer | Space ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `org_id` | string | Organization ID (nil = personal space) |
| `parent_id` | integer | Parent space ID |
| `position` | integer | Order within parent |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `timezone` | string | IANA timezone |
| `title` | string | Space title |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=public, 20=tenant, 40=members-only |

---

## `archive`

Archive a space

**POST** `/api/v1/spaces/{id}/archive`

**Signature:** `lb.spaces.archive({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |

---

## `listContacts`

List contacts in a space

**GET** `/api/v1/spaces/{id}/contacts`

**Signature:** `lb.spaces.listContacts({ path: \{ id \}, query?: \{ page, size \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `page` | query | integer |  | Page number (1-based) |
| `size` | query | integer |  | Items per page |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | List of results |
| `page` | integer | Current page (1-based) |
| `size` | integer | Page size |
| `total` | integer | Total matching records |

---

## `addContact`

Add a contact to a space

**POST** `/api/v1/spaces/{id}/contacts`

**Signature:** `lb.spaces.addContact({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `contact_id` | body | string | ✓ | Contact UUID to add to this space |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `contact_id` | string | Contact UUID |
| `created_at` | string (date-time) | Created timestamp |
| `id` | integer | Record ID |
| `space_id` | integer | Space ID |
| `updated_at` | string (date-time) | Updated timestamp |

---

## `removeContact`

Remove a contact from a space

**DELETE** `/api/v1/spaces/{id}/contacts/{contact_id}`

**Signature:** `lb.spaces.removeContact({ path: \{ id, contact_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `contact_id` | path | string | ✓ | Contact UUID |

---

## `discard`

Discard draft, keep published version

**POST** `/api/v1/spaces/{id}/discard`

**Signature:** `lb.spaces.discard({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |

---

## `getDraft`

Get draft version of a space

**GET** `/api/v1/spaces/{id}/draft`

**Signature:** `lb.spaces.getDraft({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `creator_id` | string | Creator profile ID |
| `description` | string | Space description |
| `id` | integer | Space ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `org_id` | string | Organization ID (nil = personal space) |
| `parent_id` | integer | Parent space ID |
| `position` | integer | Order within parent |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `timezone` | string | IANA timezone |
| `title` | string | Space title |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=public, 20=tenant, 40=members-only |

---

## `startEdit`

Start editing (creates draft clone)

**POST** `/api/v1/spaces/{id}/edit`

**Signature:** `lb.spaces.startEdit({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `creator_id` | string | Creator profile ID |
| `description` | string | Space description |
| `id` | integer | Space ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `org_id` | string | Organization ID (nil = personal space) |
| `parent_id` | integer | Parent space ID |
| `position` | integer | Order within parent |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `timezone` | string | IANA timezone |
| `title` | string | Space title |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=public, 20=tenant, 40=members-only |

---

## `listEvents`

List events in a space

**GET** `/api/v1/spaces/{id}/events`

**Signature:** `lb.spaces.listEvents({ path: \{ id \}, query?: \{ page, size \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `page` | query | integer |  | Page number (1-based) |
| `size` | query | integer |  | Items per page |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | List of results |
| `page` | integer | Current page (1-based) |
| `size` | integer | Page size |
| `total` | integer | Total matching records |

---

## `addEvent`

Add an event to a space

**POST** `/api/v1/spaces/{id}/events`

**Signature:** `lb.spaces.addEvent({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `event_id` | body | integer | ✓ | Event ID to add to this space |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `event_id` | integer | Event ID |
| `id` | integer | Record ID |
| `org_id` | string | Organization ID |
| `space_id` | integer | Space ID |
| `updated_at` | string (date-time) | Updated timestamp |

---

## `removeEvent`

Remove an event from a space

**DELETE** `/api/v1/spaces/{id}/events/{event_id}`

**Signature:** `lb.spaces.removeEvent({ path: \{ id, event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `event_id` | path | integer | ✓ | Event ID |

---

## `listManagers`

List managers for a space

**GET** `/api/v1/spaces/{id}/managers`

**Signature:** `lb.spaces.listManagers({ path: \{ id \}, query?: \{ page, size \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `page` | query | integer |  | Page number (1-based) |
| `size` | query | integer |  | Items per page |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | List of results |
| `page` | integer | Current page (1-based) |
| `size` | integer | Page size |
| `total` | integer | Total matching records |

---

## `addManager`

Add a manager to a space

**POST** `/api/v1/spaces/{id}/managers`

**Signature:** `lb.spaces.addManager({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `permissions` | body | ['array', 'null'] | ✓ | Permissions to grant |
| `user_id` | body | string | ✓ | Profile ID of the manager |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `id` | integer | Record ID |
| `org_id` | string | Organization ID |
| `permissions` | ['array', 'null'] | Assigned space manager permissions |
| `space_id` | integer | Space ID |
| `updated_at` | string (date-time) | Updated timestamp |
| `user_id` | string | Profile ID of the manager |

---

## `removeManager`

Remove a manager from a space

**DELETE** `/api/v1/spaces/{id}/managers/{user_id}`

**Signature:** `lb.spaces.removeManager({ path: \{ id, user_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `user_id` | path | string | ✓ | Profile ID |

---

## `getManager`

Get a single space manager

**GET** `/api/v1/spaces/{id}/managers/{user_id}`

**Signature:** `lb.spaces.getManager({ path: \{ id, user_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `user_id` | path | string | ✓ | Profile ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `id` | integer | Record ID |
| `org_id` | string | Organization ID |
| `permissions` | ['array', 'null'] | Assigned space manager permissions |
| `space_id` | integer | Space ID |
| `updated_at` | string (date-time) | Updated timestamp |
| `user_id` | string | Profile ID of the manager |

---

## `updateManager`

Update a space manager's permissions

**PUT** `/api/v1/spaces/{id}/managers/{user_id}`

**Signature:** `lb.spaces.updateManager({ path: \{ id, user_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `user_id` | path | string | ✓ | Profile ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `permissions` | body | ['array', 'null'] | ✓ | New set of permissions |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `id` | integer | Record ID |
| `org_id` | string | Organization ID |
| `permissions` | ['array', 'null'] | Assigned space manager permissions |
| `space_id` | integer | Space ID |
| `updated_at` | string (date-time) | Updated timestamp |
| `user_id` | string | Profile ID of the manager |

---

## `listMembers`

List space members

**GET** `/api/v1/spaces/{id}/members`

**Signature:** `lb.spaces.listMembers({ path: \{ id \}, query?: \{ page, size \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `page` | query | integer |  | Page number (1-based) |
| `size` | query | integer |  | Items per page |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | List of results |
| `page` | integer | Current page (1-based) |
| `size` | integer | Page size |
| `total` | integer | Total matching records |

---

## `addMember`

Add a member to a space

**POST** `/api/v1/spaces/{id}/members`

**Signature:** `lb.spaces.addMember({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `role` | body | `"space_owner"` | `"space_admin"` | `"space_member"` | `"space_viewer"` | ✓ | Role |
| `user_id` | body | string | ✓ | Profile ID of the user to add |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Joined timestamp |
| `is_active` | boolean | Whether the membership is active |
| `org_id` | string | Organization ID |
| `role` | string | Role: space_owner, space_admin, space_member, space_viewer |
| `space_id` | integer | Space ID |
| `updated_at` | string (date-time) | Updated timestamp |
| `user_id` | string | Profile ID |

---

## `removeMember`

Remove a member from a space

**DELETE** `/api/v1/spaces/{id}/members/{user_id}`

**Signature:** `lb.spaces.removeMember({ path: \{ id, user_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `user_id` | path | string | ✓ | Profile ID |

---

## `publish`

Publish a space

**POST** `/api/v1/spaces/{id}/publish`

**Signature:** `lb.spaces.publish({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |

---
