# Events

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/events` | List events |
| `create` | POST | `/api/v1/events` | Create an event |
| `managerPermissions` | GET | `/api/v1/events/manager-permissions` | List all assignable event manager permissions |
| `delete` | DELETE | `/api/v1/events/{id}` | Delete an event |
| `get` | GET | `/api/v1/events/{id}` | Get an event |
| `update` | PUT | `/api/v1/events/{id}` | Update an event (draft only) |
| `archive` | POST | `/api/v1/events/{id}/archive` | Archive an event |
| `listAttendees` | GET | `/api/v1/events/{id}/attendees` | List event attendees |
| `addAttendee` | POST | `/api/v1/events/{id}/attendees` | Add an attendee to an event |
| `removeAttendee` | DELETE | `/api/v1/events/{id}/attendees/{contact_id}` | Remove an attendee from an event |
| `updateAttendeeStatus` | PATCH | `/api/v1/events/{id}/attendees/{contact_id}` | Update attendee status |
| `discard` | POST | `/api/v1/events/{id}/discard` | Discard draft, keep published version |
| `getDraft` | GET | `/api/v1/events/{id}/draft` | Get draft version of an event |
| `startEdit` | POST | `/api/v1/events/{id}/edit` | Start editing (creates draft clone) |
| `listManagers` | GET | `/api/v1/events/{id}/managers` | List managers for an event |
| `addManager` | POST | `/api/v1/events/{id}/managers` | Add a manager to an event |
| `removeManager` | DELETE | `/api/v1/events/{id}/managers/{user_id}` | Remove a manager from an event |
| `getManager` | GET | `/api/v1/events/{id}/managers/{user_id}` | Get a single event manager |
| `updateManager` | PUT | `/api/v1/events/{id}/managers/{user_id}` | Update an event manager's permissions |
| `listMilestones` | GET | `/api/v1/events/{id}/milestones` | List milestones for an event |
| `addMilestone` | POST | `/api/v1/events/{id}/milestones` | Add a milestone event to a base event |
| `removeMilestone` | DELETE | `/api/v1/events/{id}/milestones/{milestone_event_id}` | Remove a milestone from an event |
| `updateMilestone` | PUT | `/api/v1/events/{id}/milestones/{milestone_event_id}` | Update milestone sequence |
| `publish` | POST | `/api/v1/events/{id}/publish` | Publish an event |
| `listSpaces` | GET | `/api/v1/events/{id}/spaces` | List spaces this event belongs to |
| `addSpace` | POST | `/api/v1/events/{id}/spaces` | Add event to a space |
| `removeSpace` | DELETE | `/api/v1/events/{id}/spaces/{space_id}` | Remove event from a space |

---

## `list`

List events

**GET** `/api/v1/events`

**Signature:** `lb.events.list({ query?: \{ page, size, search, sort_by, sort_dir \} })`

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

Create an event

**POST** `/api/v1/events`

**Signature:** `lb.events.create({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `address` | body | string |  | Venue address |
| `description` | body | string |  | Event description |
| `end_dt` | body | string (date-time) |  | End datetime (UTC) |
| `keywords` | body | ['array', 'null'] |  | Search keywords |
| `latitude` | body | number |  | Venue latitude |
| `longitude` | body | number |  | Venue longitude |
| `metadata` | body | object |  | Flexible metadata (theme, cover, etc.) |
| `parent_event_id` | body | integer |  | Parent event ID |
| `start_dt` | body | string (date-time) |  | Start datetime (UTC) |
| `timezone` | body | string |  | IANA timezone |
| `title` | body | string | ✓ | Event title |
| `visibility` | body | integer |  | Visibility: 10=private, 20=members-only, 30=tenant, 40=public |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `address` | string | Venue address |
| `created_at` | string (date-time) | Created timestamp |
| `created_dt` | string (date-time) | Business creation date |
| `creator_id` | string | Creator profile ID |
| `description` | string | Event description |
| `end_dt` | string (date-time) | End datetime (UTC) |
| `id` | integer | Event ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `is_locked` | boolean | Locked from editing |
| `keywords` | ['array', 'null'] | Search keywords |
| `latitude` | number | Venue latitude |
| `longitude` | number | Venue longitude |
| `metadata` | object | Flexible JSONB metadata (theme, cover, etc.) |
| `org_id` | string | Organization ID |
| `parent_event_id` | integer | Parent event ID (milestones) |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `start_dt` | string (date-time) | Start datetime (UTC) |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `timezone` | string | IANA timezone |
| `title` | string | Event title |
| `updated_at` | string (date-time) | Updated timestamp |
| `url_shortcut` | string | Vanity URL slug |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=tenant, 40=public |

---

## `managerPermissions`

List all assignable event manager permissions

**GET** `/api/v1/events/manager-permissions`

**Signature:** `lb.events.managerPermissions()`

*No parameters.*


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `permissions` | ['array', 'null'] | All assignable event manager permissions |

---

## `delete`

Delete an event

**DELETE** `/api/v1/events/{id}`

**Signature:** `lb.events.delete({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |

---

## `get`

Get an event

**GET** `/api/v1/events/{id}`

**Signature:** `lb.events.get({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `address` | string | Venue address |
| `created_at` | string (date-time) | Created timestamp |
| `created_dt` | string (date-time) | Business creation date |
| `creator_id` | string | Creator profile ID |
| `description` | string | Event description |
| `end_dt` | string (date-time) | End datetime (UTC) |
| `id` | integer | Event ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `is_locked` | boolean | Locked from editing |
| `keywords` | ['array', 'null'] | Search keywords |
| `latitude` | number | Venue latitude |
| `longitude` | number | Venue longitude |
| `metadata` | object | Flexible JSONB metadata (theme, cover, etc.) |
| `org_id` | string | Organization ID |
| `parent_event_id` | integer | Parent event ID (milestones) |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `start_dt` | string (date-time) | Start datetime (UTC) |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `timezone` | string | IANA timezone |
| `title` | string | Event title |
| `updated_at` | string (date-time) | Updated timestamp |
| `url_shortcut` | string | Vanity URL slug |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=tenant, 40=public |

---

## `update`

Update an event (draft only)

**PUT** `/api/v1/events/{id}`

**Signature:** `lb.events.update({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `address` | body | string |  | Venue address |
| `description` | body | string |  | Event description |
| `end_dt` | body | string (date-time) |  | End datetime (UTC) |
| `keywords` | body | ['array', 'null'] |  | Search keywords |
| `latitude` | body | number |  | Venue latitude |
| `longitude` | body | number |  | Venue longitude |
| `metadata` | body | object |  | Flexible metadata |
| `start_dt` | body | string (date-time) |  | Start datetime (UTC) |
| `timezone` | body | string |  | IANA timezone |
| `title` | body | string | ✓ | Event title |
| `visibility` | body | integer |  | Visibility level |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `address` | string | Venue address |
| `created_at` | string (date-time) | Created timestamp |
| `created_dt` | string (date-time) | Business creation date |
| `creator_id` | string | Creator profile ID |
| `description` | string | Event description |
| `end_dt` | string (date-time) | End datetime (UTC) |
| `id` | integer | Event ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `is_locked` | boolean | Locked from editing |
| `keywords` | ['array', 'null'] | Search keywords |
| `latitude` | number | Venue latitude |
| `longitude` | number | Venue longitude |
| `metadata` | object | Flexible JSONB metadata (theme, cover, etc.) |
| `org_id` | string | Organization ID |
| `parent_event_id` | integer | Parent event ID (milestones) |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `start_dt` | string (date-time) | Start datetime (UTC) |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `timezone` | string | IANA timezone |
| `title` | string | Event title |
| `updated_at` | string (date-time) | Updated timestamp |
| `url_shortcut` | string | Vanity URL slug |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=tenant, 40=public |

---

## `archive`

Archive an event

**POST** `/api/v1/events/{id}/archive`

**Signature:** `lb.events.archive({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |

---

## `listAttendees`

List event attendees

**GET** `/api/v1/events/{id}/attendees`

**Signature:** `lb.events.listAttendees({ path: \{ id \}, query?: \{ page, size \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
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

## `addAttendee`

Add an attendee to an event

**POST** `/api/v1/events/{id}/attendees`

**Signature:** `lb.events.addAttendee({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `contact_id` | body | string | ✓ | Contact UUID |
| `notes` | body | string |  | Optional notes |
| `status` | body | `"invited"` | `"confirmed"` | `"declined"` | `"tentative"` | `"checked_in"` |  | Initial status |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `checked_in_at` | string (date-time) | Check-in time |
| `contact_id` | string | Contact UUID |
| `created_at` | string (date-time) | Created timestamp |
| `event_id` | integer | Event ID |
| `id` | integer | Attendee record ID |
| `invited_at` | string (date-time) | When invited |
| `is_checked_in` | boolean | Whether checked in |
| `notes` | string | Optional notes |
| `org_id` | string | Organization ID |
| `responded_at` | string (date-time) | When responded |
| `status` | `"invited"` | `"confirmed"` | `"declined"` | `"tentative"` | `"checked_in"` | Attendance status |
| `updated_at` | string (date-time) | Updated timestamp |

---

## `removeAttendee`

Remove an attendee from an event

**DELETE** `/api/v1/events/{id}/attendees/{contact_id}`

**Signature:** `lb.events.removeAttendee({ path: \{ id, contact_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `contact_id` | path | string | ✓ | Contact UUID |

---

## `updateAttendeeStatus`

Update attendee status

**PATCH** `/api/v1/events/{id}/attendees/{contact_id}`

**Signature:** `lb.events.updateAttendeeStatus({ path: \{ id, contact_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `contact_id` | path | string | ✓ | Contact UUID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `status` | body | `"invited"` | `"confirmed"` | `"declined"` | `"tentative"` | `"checked_in"` | ✓ | New status |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `checked_in_at` | string (date-time) | Check-in time |
| `contact_id` | string | Contact UUID |
| `created_at` | string (date-time) | Created timestamp |
| `event_id` | integer | Event ID |
| `id` | integer | Attendee record ID |
| `invited_at` | string (date-time) | When invited |
| `is_checked_in` | boolean | Whether checked in |
| `notes` | string | Optional notes |
| `org_id` | string | Organization ID |
| `responded_at` | string (date-time) | When responded |
| `status` | `"invited"` | `"confirmed"` | `"declined"` | `"tentative"` | `"checked_in"` | Attendance status |
| `updated_at` | string (date-time) | Updated timestamp |

---

## `discard`

Discard draft, keep published version

**POST** `/api/v1/events/{id}/discard`

**Signature:** `lb.events.discard({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |

---

## `getDraft`

Get draft version of an event

**GET** `/api/v1/events/{id}/draft`

**Signature:** `lb.events.getDraft({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `address` | string | Venue address |
| `created_at` | string (date-time) | Created timestamp |
| `created_dt` | string (date-time) | Business creation date |
| `creator_id` | string | Creator profile ID |
| `description` | string | Event description |
| `end_dt` | string (date-time) | End datetime (UTC) |
| `id` | integer | Event ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `is_locked` | boolean | Locked from editing |
| `keywords` | ['array', 'null'] | Search keywords |
| `latitude` | number | Venue latitude |
| `longitude` | number | Venue longitude |
| `metadata` | object | Flexible JSONB metadata (theme, cover, etc.) |
| `org_id` | string | Organization ID |
| `parent_event_id` | integer | Parent event ID (milestones) |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `start_dt` | string (date-time) | Start datetime (UTC) |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `timezone` | string | IANA timezone |
| `title` | string | Event title |
| `updated_at` | string (date-time) | Updated timestamp |
| `url_shortcut` | string | Vanity URL slug |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=tenant, 40=public |

---

## `startEdit`

Start editing (creates draft clone)

**POST** `/api/v1/events/{id}/edit`

**Signature:** `lb.events.startEdit({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `address` | string | Venue address |
| `created_at` | string (date-time) | Created timestamp |
| `created_dt` | string (date-time) | Business creation date |
| `creator_id` | string | Creator profile ID |
| `description` | string | Event description |
| `end_dt` | string (date-time) | End datetime (UTC) |
| `id` | integer | Event ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `is_locked` | boolean | Locked from editing |
| `keywords` | ['array', 'null'] | Search keywords |
| `latitude` | number | Venue latitude |
| `longitude` | number | Venue longitude |
| `metadata` | object | Flexible JSONB metadata (theme, cover, etc.) |
| `org_id` | string | Organization ID |
| `parent_event_id` | integer | Parent event ID (milestones) |
| `published_at` | string (date-time) | When last published |
| `published_id` | integer | For draft rows: ID of the published row this was cloned from |
| `start_dt` | string (date-time) | Start datetime (UTC) |
| `status` | `"draft"` | `"published"` | `"archived"` | Publish status |
| `timezone` | string | IANA timezone |
| `title` | string | Event title |
| `updated_at` | string (date-time) | Updated timestamp |
| `url_shortcut` | string | Vanity URL slug |
| `version` | integer | Version counter, incremented on each publish |
| `visibility` | integer | Visibility: 10=private, 20=members-only, 30=tenant, 40=public |

---

## `listManagers`

List managers for an event

**GET** `/api/v1/events/{id}/managers`

**Signature:** `lb.events.listManagers({ path: \{ id \}, query?: \{ page, size \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
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

Add a manager to an event

**POST** `/api/v1/events/{id}/managers`

**Signature:** `lb.events.addManager({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `permissions` | body | ['array', 'null'] | ✓ | Permissions to grant |
| `user_id` | body | string | ✓ | Profile ID of the manager |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `event_id` | integer | Event ID |
| `id` | integer | Record ID |
| `org_id` | string | Organization ID |
| `permissions` | ['array', 'null'] | Assigned event manager permissions |
| `updated_at` | string (date-time) | Updated timestamp |
| `user_id` | string | Profile ID of the manager |

---

## `removeManager`

Remove a manager from an event

**DELETE** `/api/v1/events/{id}/managers/{user_id}`

**Signature:** `lb.events.removeManager({ path: \{ id, user_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `user_id` | path | string | ✓ | Profile ID |

---

## `getManager`

Get a single event manager

**GET** `/api/v1/events/{id}/managers/{user_id}`

**Signature:** `lb.events.getManager({ path: \{ id, user_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `user_id` | path | string | ✓ | Profile ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `event_id` | integer | Event ID |
| `id` | integer | Record ID |
| `org_id` | string | Organization ID |
| `permissions` | ['array', 'null'] | Assigned event manager permissions |
| `updated_at` | string (date-time) | Updated timestamp |
| `user_id` | string | Profile ID of the manager |

---

## `updateManager`

Update an event manager's permissions

**PUT** `/api/v1/events/{id}/managers/{user_id}`

**Signature:** `lb.events.updateManager({ path: \{ id, user_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `user_id` | path | string | ✓ | Profile ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `permissions` | body | ['array', 'null'] | ✓ | New set of permissions |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `event_id` | integer | Event ID |
| `id` | integer | Record ID |
| `org_id` | string | Organization ID |
| `permissions` | ['array', 'null'] | Assigned event manager permissions |
| `updated_at` | string (date-time) | Updated timestamp |
| `user_id` | string | Profile ID of the manager |

---

## `listMilestones`

List milestones for an event

**GET** `/api/v1/events/{id}/milestones`

**Signature:** `lb.events.listMilestones({ path: \{ id \}, query?: \{ page, size \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Base Event ID |
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

## `addMilestone`

Add a milestone event to a base event

**POST** `/api/v1/events/{id}/milestones`

**Signature:** `lb.events.addMilestone({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Base Event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `milestone_event_id` | body | integer | ✓ | Event ID to use as milestone |
| `sequence` | body | integer | ✓ | Display order |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `base_event_id` | integer | Base event ID |
| `created_at` | string (date-time) | Created timestamp |
| `id` | integer | Record ID |
| `milestone_event_id` | integer | Milestone event ID |
| `sequence` | integer | Display order |
| `updated_at` | string (date-time) | Updated timestamp |

---

## `removeMilestone`

Remove a milestone from an event

**DELETE** `/api/v1/events/{id}/milestones/{milestone_event_id}`

**Signature:** `lb.events.removeMilestone({ path: \{ id, milestone_event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Base Event ID |
| `milestone_event_id` | path | integer | ✓ | Milestone Event ID |

---

## `updateMilestone`

Update milestone sequence

**PUT** `/api/v1/events/{id}/milestones/{milestone_event_id}`

**Signature:** `lb.events.updateMilestone({ path: \{ id, milestone_event_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Base Event ID |
| `milestone_event_id` | path | integer | ✓ | Milestone Event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `sequence` | body | integer | ✓ | New display order |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `base_event_id` | integer | Base event ID |
| `created_at` | string (date-time) | Created timestamp |
| `id` | integer | Record ID |
| `milestone_event_id` | integer | Milestone event ID |
| `sequence` | integer | Display order |
| `updated_at` | string (date-time) | Updated timestamp |

---

## `publish`

Publish an event

**POST** `/api/v1/events/{id}/publish`

**Signature:** `lb.events.publish({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |

---

## `listSpaces`

List spaces this event belongs to

**GET** `/api/v1/events/{id}/spaces`

**Signature:** `lb.events.listSpaces({ path: \{ id \}, query?: \{ page, size \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
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

## `addSpace`

Add event to a space

**POST** `/api/v1/events/{id}/spaces`

**Signature:** `lb.events.addSpace({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `space_id` | body | integer | ✓ | Space ID to add |


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

## `removeSpace`

Remove event from a space

**DELETE** `/api/v1/events/{id}/spaces/{space_id}`

**Signature:** `lb.events.removeSpace({ path: \{ id, space_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Event ID |
| `space_id` | path | integer | ✓ | Space ID |

---
