# Spaces

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/spaces` | List spaces |
| `create` | POST | `/api/v1/spaces` | Create a space |
| `managerPermissions` | GET | `/api/v1/spaces/manager-permissions` | List all assignable space manager permissions |
| `acceptManagerInvite` | POST | `/api/v1/spaces/managers/accept` | Accept a space manager invitation |
| `listPendingManagerInvites` | GET | `/api/v1/spaces/managers/pending` | List pending space manager invitations for the current user |
| `tree` | GET | `/api/v1/spaces/tree` | Get spaces as a hierarchical tree |
| `delete` | DELETE | `/api/v1/spaces/{id}` | Delete a space |
| `get` | GET | `/api/v1/spaces/{id}` | Get a space |
| `patch` | PATCH | `/api/v1/spaces/{id}` | Partially update a space (merge-patch) |
| `update` | PUT | `/api/v1/spaces/{id}` | Update a space |
| `listActivity` | GET | `/api/v1/spaces/{id}/activity` | List recent activity in a space |
| `listActivityLog` | GET | `/api/v1/spaces/{id}/activity-log` | List date-paginated activity logs in a space |
| `getAnalytics` | GET | `/api/v1/spaces/{id}/analytics` | Get analytics for a space |
| `listAnnouncements` | GET | `/api/v1/spaces/{id}/announcements` | List announcements in a space |
| `addAnnouncement` | POST | `/api/v1/spaces/{id}/announcements` | Link an announcement to a space |
| `removeAnnouncement` | DELETE | `/api/v1/spaces/{id}/announcements/{announcement_id}` | Remove an announcement from a space |
| `archive` | POST | `/api/v1/spaces/{id}/archive` | Archive a space |
| `listChildren` | GET | `/api/v1/spaces/{id}/children` | List child spaces (sub-spaces) of a space |
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
| `inviteManager` | POST | `/api/v1/spaces/{id}/managers/invite` | Invite a user to become a space manager by email |
| `removeManager` | DELETE | `/api/v1/spaces/{id}/managers/{user_id}` | Remove a manager from a space |
| `getManager` | GET | `/api/v1/spaces/{id}/managers/{user_id}` | Get a single space manager |
| `updateManager` | PUT | `/api/v1/spaces/{id}/managers/{user_id}` | Update a space manager's permissions |
| `listMembers` | GET | `/api/v1/spaces/{id}/members` | List space members |
| `addMember` | POST | `/api/v1/spaces/{id}/members` | Add a member to a space |
| `removeMember` | DELETE | `/api/v1/spaces/{id}/members/{user_id}` | Remove a member from a space |
| `listParents` | GET | `/api/v1/spaces/{id}/parents` | List parent spaces of a space |
| `addParent` | POST | `/api/v1/spaces/{id}/parents` | Add a parent to a space |
| `removeParent` | DELETE | `/api/v1/spaces/{id}/parents/{parent_id}` | Remove a parent from a space |
| `publish` | POST | `/api/v1/spaces/{id}/publish` | Publish a space |
| `getSettings` | GET | `/api/v1/spaces/{id}/settings` | Get settings for a space |
| `patchSettings` | PATCH | `/api/v1/spaces/{id}/settings` | Partially update settings for a space |

---

## `list`

List spaces

**GET** `/api/v1/spaces`

**Signature:** `lb.spaces.list({ query?: \{ page, size, search, sort_by, sort_dir, status, visibility \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `page` | query | integer |  | Page number (1-based) |
| `size` | query | integer |  | Items per page |
| `search` | query | string |  | Search term |
| `sort_by` | query | string |  | Field to sort by |
| `sort_dir` | query | `"asc"` | `"desc"` |  | Sort direction |
| `status` | query | `"published"` | `"draft"` |  | Filter by publish status. Omit to return both published and standalone drafts. |
| `visibility` | query | integer |  | Filter by visibility level: 10=private, 20=members-only, 30=organization, 40=public. Omit or pass 0 to return all visibl |


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
| `parent_ids` | body | ['array', 'null'] |  | Parent space IDs |
| `position` | body | integer |  | Order within parent |
| `timezone` | body | string |  | IANA timezone |
| `title` | body | string | ✓ | Space title |
| `visibility` | body | integer |  | Visibility: 10=private, 20=members-only, 30=organization, 40=public |


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
| `parent_ids` | ['array', 'null'] | Parent space IDs |
| `position` | integer | Order within parent |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `timezone` | string | IANA timezone |
| `title` | string | Space title |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=organization, 40=public |

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

## `acceptManagerInvite`

Accept a space manager invitation

**POST** `/api/v1/spaces/managers/accept`

**Signature:** `lb.spaces.acceptManagerInvite({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `token` | body | string | ✓ | Invite token from the email link |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `accepted_at` | string (date-time) | When the invite was accepted |
| `created_at` | string (date-time) | Created timestamp |
| `expires_at` | string (date-time) | When the pending invite expires (7 days from invite) |
| `id` | integer | Record ID |
| `invite_token` | string | Opaque token embedded in the invite email link |
| `invited_at` | string (date-time) | When the invite was (last) sent |
| `invited_by` | string | Profile ID of the user who sent the invite |
| `invited_email` | string | Email address the invite was sent to |
| `org_id` | string | Organization ID |
| `permissions` | ['array', 'null'] | Assigned space manager permissions |
| `role` | string | Pre-defined role bundle name (e.g. space_manager:full); NULL for custom permission combinations. |
| `space_id` | integer | Space ID |
| `status` | `"pending"` | `"active"` | `"revoked"` | Lifecycle status: pending, active, revoked |
| `updated_at` | string (date-time) | Updated timestamp |
| `user_id` | string | Profile ID of the manager |

---

## `listPendingManagerInvites`

List pending space manager invitations for the current user

**GET** `/api/v1/spaces/managers/pending`

**Signature:** `lb.spaces.listPendingManagerInvites()`

*No parameters.*


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | List of pending manager invitations |

---

## `tree`

Get spaces as a hierarchical tree

**GET** `/api/v1/spaces/tree`

**Signature:** `lb.spaces.tree()`

*No parameters.*


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | Spaces arranged as a multi-root hierarchy. Multi-parent spaces appear under each of their parents. |

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
| `parent_ids` | ['array', 'null'] | Parent space IDs |
| `position` | integer | Order within parent |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `timezone` | string | IANA timezone |
| `title` | string | Space title |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=organization, 40=public |

---

## `patch`

Partially update a space (merge-patch)

**PATCH** `/api/v1/spaces/{id}`

**Signature:** `lb.spaces.patch({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `description` | body | string |  | New description |
| `position` | body | integer |  | New order within parent |
| `timezone` | body | string |  | New IANA timezone |
| `title` | body | string |  | New title |
| `visibility` | body | integer |  | New visibility: 10=private, 20=members-only, 30=organization, 40=public |


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
| `parent_ids` | ['array', 'null'] | Parent space IDs |
| `position` | integer | Order within parent |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `timezone` | string | IANA timezone |
| `title` | string | Space title |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=organization, 40=public |

---

## `update`

Update a space

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
| `parent_ids` | ['array', 'null'] | Parent space IDs |
| `position` | integer | Order within parent |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `timezone` | string | IANA timezone |
| `title` | string | Space title |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=organization, 40=public |

---

## `listActivity`

List recent activity in a space

**GET** `/api/v1/spaces/{id}/activity`

**Signature:** `lb.spaces.listActivity({ path: \{ id \}, query?: \{ page, size \} })`

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

## `listActivityLog`

List date-paginated activity logs in a space

**GET** `/api/v1/spaces/{id}/activity-log`

**Signature:** `lb.spaces.listActivityLog({ path: \{ id \}, query?: \{ start_date, end_date, type, page, size \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `start_date` | query | string |  | Inclusive start date (YYYY-MM-DD) |
| `end_date` | query | string |  | Inclusive end date (YYYY-MM-DD) |
| `type` | query | `"all"` | `"contact"` | `"event"` | `"member"` | `"announcement"` | `"material"` |  | Activity type filter |
| `page` | query | integer |  | Page number (1-based) |
| `size` | query | integer |  | Items per page |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `contributors` | ['array', 'null'] | Top contributors in the selected date range |
| `end_date` | string | Inclusive end date |
| `items` | ['array', 'null'] | Activity rows |
| `page` | integer | Current page |
| `size` | integer | Page size |
| `start_date` | string | Inclusive start date |
| `summary` | object |  |
| `total` | integer | Total matching rows |

---

## `getAnalytics`

Get analytics for a space

**GET** `/api/v1/spaces/{id}/analytics`

**Signature:** `lb.spaces.getAnalytics({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `attendance_trend` | ['array', 'null'] | RSVP and attendance trend by event |
| `attention_needed` | ['array', 'null'] | Events needing organiser attention |
| `events_performance` | ['array', 'null'] | Linked event performance rows |
| `member_growth` | ['array', 'null'] | Cumulative member growth over recent weekly buckets |
| `summary` | object |  |
| `top_by_rsvp` | ['array', 'null'] | Top linked events by RSVP response count |

---

## `listAnnouncements`

List announcements in a space

**GET** `/api/v1/spaces/{id}/announcements`

**Signature:** `lb.spaces.listAnnouncements({ path: \{ id \}, query?: \{ page, size \} })`

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

## `addAnnouncement`

Link an announcement to a space

**POST** `/api/v1/spaces/{id}/announcements`

**Signature:** `lb.spaces.addAnnouncement({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `body` | body | string |  | Rich-text body |
| `send_email` | body | boolean |  | Send email notification to all space contacts |
| `send_whatsapp` | body | boolean |  | Send WhatsApp message to all space contacts with a WhatsApp number |
| `title` | body | string | ✓ | Announcement title |
| `whatsapp_sender_id` | body | string |  | WhatsApp Business phone number ID to send from (required when send_whatsapp is true) |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `announcement` | object |  |
| `announcement_id` | integer | Announcement ID |
| `created_at` | string (date-time) | Created timestamp |
| `id` | integer | Record ID |
| `org_id` | string | Organization ID |
| `space_id` | integer | Space ID |
| `updated_at` | string (date-time) | Updated timestamp |

---

## `removeAnnouncement`

Remove an announcement from a space

**DELETE** `/api/v1/spaces/{id}/announcements/{announcement_id}`

**Signature:** `lb.spaces.removeAnnouncement({ path: \{ id, announcement_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `announcement_id` | path | integer | ✓ | Announcement ID |

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

## `listChildren`

List child spaces (sub-spaces) of a space

**GET** `/api/v1/spaces/{id}/children`

**Signature:** `lb.spaces.listChildren({ path: \{ id \}, query?: \{ page, size \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Parent space ID |
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
| `parent_ids` | ['array', 'null'] | Parent space IDs |
| `position` | integer | Order within parent |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `timezone` | string | IANA timezone |
| `title` | string | Space title |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=organization, 40=public |

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
| `parent_ids` | ['array', 'null'] | Parent space IDs |
| `position` | integer | Order within parent |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `timezone` | string | IANA timezone |
| `title` | string | Space title |
| `updated_at` | string (date-time) | Updated timestamp |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=organization, 40=public |

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
| `channels` | body | ['array', 'null'] |  | Override delivery channels (email/push/sms); service defaults apply if omitted |
| `message` | body | string |  | Custom message; omit to use the service default |
| `notify` | body | boolean |  | Send a notification to affected parties (default: false) |
| `permissions` | body | ['array', 'null'] | ✓ | Permissions to grant. Ignored when role is set. |
| `priority` | body | string |  | Notification priority: normal (default) or high |
| `role` | body | string |  | Optional space manager role bundle (e.g. space_manager:full). When set, the role REPLACES the permissions list. |
| `user_id` | body | string | ✓ | Profile ID of the manager |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `accepted_at` | string (date-time) | When the invite was accepted |
| `created_at` | string (date-time) | Created timestamp |
| `expires_at` | string (date-time) | When the pending invite expires (7 days from invite) |
| `id` | integer | Record ID |
| `invite_token` | string | Opaque token embedded in the invite email link |
| `invited_at` | string (date-time) | When the invite was (last) sent |
| `invited_by` | string | Profile ID of the user who sent the invite |
| `invited_email` | string | Email address the invite was sent to |
| `org_id` | string | Organization ID |
| `permissions` | ['array', 'null'] | Assigned space manager permissions |
| `role` | string | Pre-defined role bundle name (e.g. space_manager:full); NULL for custom permission combinations. |
| `space_id` | integer | Space ID |
| `status` | `"pending"` | `"active"` | `"revoked"` | Lifecycle status: pending, active, revoked |
| `updated_at` | string (date-time) | Updated timestamp |
| `user_id` | string | Profile ID of the manager |

---

## `inviteManager`

Invite a user to become a space manager by email

**POST** `/api/v1/spaces/{id}/managers/invite`

**Signature:** `lb.spaces.inviteManager({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `email` | body | string | ✓ | Email address of the user to invite |
| `permissions` | body | ['array', 'null'] | ✓ | Permissions to grant upon acceptance. Ignored when role is set. |
| `role` | body | string |  | Optional space manager role bundle (e.g. space_manager:full). When set, the role REPLACES the permissions list. |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `accepted_at` | string (date-time) | When the invite was accepted |
| `created_at` | string (date-time) | Created timestamp |
| `expires_at` | string (date-time) | When the pending invite expires (7 days from invite) |
| `id` | integer | Record ID |
| `invite_token` | string | Opaque token embedded in the invite email link |
| `invited_at` | string (date-time) | When the invite was (last) sent |
| `invited_by` | string | Profile ID of the user who sent the invite |
| `invited_email` | string | Email address the invite was sent to |
| `org_id` | string | Organization ID |
| `permissions` | ['array', 'null'] | Assigned space manager permissions |
| `role` | string | Pre-defined role bundle name (e.g. space_manager:full); NULL for custom permission combinations. |
| `space_id` | integer | Space ID |
| `status` | `"pending"` | `"active"` | `"revoked"` | Lifecycle status: pending, active, revoked |
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
| `accepted_at` | string (date-time) | When the invite was accepted |
| `created_at` | string (date-time) | Created timestamp |
| `expires_at` | string (date-time) | When the pending invite expires (7 days from invite) |
| `id` | integer | Record ID |
| `invite_token` | string | Opaque token embedded in the invite email link |
| `invited_at` | string (date-time) | When the invite was (last) sent |
| `invited_by` | string | Profile ID of the user who sent the invite |
| `invited_email` | string | Email address the invite was sent to |
| `org_id` | string | Organization ID |
| `permissions` | ['array', 'null'] | Assigned space manager permissions |
| `role` | string | Pre-defined role bundle name (e.g. space_manager:full); NULL for custom permission combinations. |
| `space_id` | integer | Space ID |
| `status` | `"pending"` | `"active"` | `"revoked"` | Lifecycle status: pending, active, revoked |
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
| `accepted_at` | string (date-time) | When the invite was accepted |
| `created_at` | string (date-time) | Created timestamp |
| `expires_at` | string (date-time) | When the pending invite expires (7 days from invite) |
| `id` | integer | Record ID |
| `invite_token` | string | Opaque token embedded in the invite email link |
| `invited_at` | string (date-time) | When the invite was (last) sent |
| `invited_by` | string | Profile ID of the user who sent the invite |
| `invited_email` | string | Email address the invite was sent to |
| `org_id` | string | Organization ID |
| `permissions` | ['array', 'null'] | Assigned space manager permissions |
| `role` | string | Pre-defined role bundle name (e.g. space_manager:full); NULL for custom permission combinations. |
| `space_id` | integer | Space ID |
| `status` | `"pending"` | `"active"` | `"revoked"` | Lifecycle status: pending, active, revoked |
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

## `listParents`

List parent spaces of a space

**GET** `/api/v1/spaces/{id}/parents`

**Signature:** `lb.spaces.listParents({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | Parent spaces |

---

## `addParent`

Add a parent to a space

**POST** `/api/v1/spaces/{id}/parents`

**Signature:** `lb.spaces.addParent({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `parent_id` | body | integer | ✓ | Parent space ID to add |

---

## `removeParent`

Remove a parent from a space

**DELETE** `/api/v1/spaces/{id}/parents/{parent_id}`

**Signature:** `lb.spaces.removeParent({ path: \{ id, parent_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `parent_id` | path | integer | ✓ | Parent space ID to remove |

---

## `publish`

Publish a space

**POST** `/api/v1/spaces/{id}/publish`

**Signature:** `lb.spaces.publish({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `channels` | body | ['array', 'null'] |  | Override delivery channels (email/push/sms); service defaults apply if omitted |
| `message` | body | string |  | Custom message; omit to use the service default |
| `notify` | body | boolean |  | Send a notification to affected parties (default: false) |
| `priority` | body | string |  | Notification priority: normal (default) or high |

---

## `getSettings`

Get settings for a space

**GET** `/api/v1/spaces/{id}/settings`

**Signature:** `lb.spaces.getSettings({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `notify_on_announcement` | boolean | Email contacts when an announcement is posted |
| `notify_on_document` | boolean | Notify contacts when a document is uploaded |
| `notify_on_event` | boolean | Email contacts when a new event is added |
| `org_id` | string | Organization ID |
| `space_id` | integer | Space ID |
| `updated_at` | string (date-time) | Updated timestamp |

---

## `patchSettings`

Partially update settings for a space

**PATCH** `/api/v1/spaces/{id}/settings`

**Signature:** `lb.spaces.patchSettings({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Space ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `notify_on_announcement` | body | boolean |  | Override announcement email default |
| `notify_on_document` | body | boolean |  | Override document notify default |
| `notify_on_event` | body | boolean |  | Override event email default |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `notify_on_announcement` | boolean | Email contacts when an announcement is posted |
| `notify_on_document` | boolean | Notify contacts when a document is uploaded |
| `notify_on_event` | boolean | Email contacts when a new event is added |
| `org_id` | string | Organization ID |
| `space_id` | integer | Space ID |
| `updated_at` | string (date-time) | Updated timestamp |

---
