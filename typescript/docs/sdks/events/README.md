# Events

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/event` | Get Event List |
| `create` | POST | `/api/v1/event` | Create Event |
| `listCalendar` | GET | `/api/v1/event/calendar` | Get Calendar Events |
| `getSocialFeed` | GET | `/api/v1/event/social/feed` | Get Social Feed |
| `filterAdvanced` | POST | `/api/v1/event/filter` | Filter Events Advanced |
| `listBySpace` | GET | `/api/v1/event/space/{space_id}` | Get Events By Space |
| `delete` | DELETE | `/api/v1/event/{event_id}` | Delete Event |
| `patchIdentification` | PATCH | `/api/v1/event/{event_id}/identification` | Patch Event Identification |
| `getSectionIdentification` | GET | `/api/v1/event/{event_id}/section/identification` | Get Section Identification |
| `getSectionContent` | GET | `/api/v1/event/{event_id}/section/content` | Get Section Content |
| `patchContent` | PATCH | `/api/v1/event/{event_id}/content` | Patch Event Content |
| `patchSettings` | PATCH | `/api/v1/event/{event_id}/settings` | Patch Event Settings |
| `getSettings` | GET | `/api/v1/event/{event_id}/settings` | Get Event Settings |
| `updateCover` | PATCH | `/api/v1/event/{event_id}/cover` | Update Cover |
| `publish` | PATCH | `/api/v1/event/{event_id}/publish` | Publish Event |
| `publishWithNotifications` | POST | `/api/v1/event/{event_id}/publish-with-notifications` | Publish Event With Notifications |
| `archive` | PATCH | `/api/v1/event/{event_id}/archive` | Archive Event |
| `transfer` | POST | `/api/v1/event/{event_id}/transfer` | Transfer Event |
| `publishVersion` | POST | `/api/v1/event/{event_id}/versions/publish` | Publish Event Version |
| `listVersions` | GET | `/api/v1/event/{event_id}/versions` | List Event Versions |
| `rollbackVersion` | POST | `/api/v1/event/{event_id}/versions/rollback` | Rollback Event to Version |
| `getTimezones` | GET | `/api/v1/event/timezones/` | Get Timezone Info |

---

## `list`

Get Event List

**GET** `/api/v1/event`

**Signature:** `lb.events.list({ query?: \{ limit, offset, sort_by, sort_order, search, start_dt, end_dt, visibility, creator_ids, is_deleted, is_locked, space_ids, document_ids, has_documents, has_spaces, title, description, keywords, is_recurring, repeat_presets, repeat_days, filters \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `limit` | query | integer |  | Items per page |
| `offset` | query | integer |  | Offset for pagination |
| `sort_by` | query | string |  | Field to sort by |
| `sort_order` | query | string |  | Sort order |
| `search` | query | string | null |  | Global text search |
| `start_dt` | query | string (date-time) | null |  | Start date for filtering |
| `end_dt` | query | string (date-time) | null |  | End date for filtering |
| `visibility` | query | Array<integer> | null |  | Filter by visibility levels |
| `creator_ids` | query | Array<string> | null |  | Filter by creator IDs |
| `is_deleted` | query | boolean | null |  | Filter by deletion status |
| `is_locked` | query | boolean | null |  | Filter by lock status |
| `space_ids` | query | Array<integer> | null |  | Filter by space IDs |
| `document_ids` | query | Array<string (uuid)> | null |  | Filter by document IDs |
| `has_documents` | query | boolean | null |  | Filter events with/without documents |
| `has_spaces` | query | boolean | null |  | Filter events with/without spaces |
| `title` | query | string | null |  | Filter by title |
| `description` | query | string | null |  | Filter by description |
| `keywords` | query | Array<string> | null |  | Filter by keywords |
| `is_recurring` | query | boolean | null |  | Filter recurring events |
| `repeat_presets` | query | Array<string> | null |  | Filter by repeat presets |
| `repeat_days` | query | Array<integer> | null |  | Filter by repeat days |
| `filters` | query | string | null |  | JSON filter object for complex queries |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `items` | Array<object> |  |
| `meta` | object |  |

---

## `create`

Create Event

**POST** `/api/v1/event`

**Signature:** `lb.events.create({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `request` | body | string | ✓ | JSON string of CreateEventRequest |
| `file` | body | string (binary) | null |  | Optional cover image file |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer |  |
| `title` | string |  |
| `description` | string | null |  |
| `is_deleted` | boolean |  |
| `is_locked` | boolean |  |
| `creator_id` | string (uuid) |  |
| `org_id` | string (uuid) | null | Owning organization UUID or null for personal events |
| `created_dt` | string |  |
| `start_dt` | string |  |
| `end_dt` | string |  |
| `timezone` | string |  |
| `visibility` | integer | null |  |
| `keywords` | Array<string> | null |  |
| `url_shortcut` | string | null |  |
| `own_map_url` | string |  |
| `subcontrib_speakers_can_submit` | boolean |  |
| `repeat_days` | Array<integer> | null |  |
| `repeat_presets` | string | null |  |
| `timeline_preset` | string | null |  |
| `attendee_count` | integer | Number of attendees for this event |
| `latitude` | number | null | Latitude coordinate of the event location |
| `longitude` | number | null | Longitude coordinate of the event location |
| `address` | string | null | Physical address of the event location |
| `event_metadata` | object | null | JSON metadata like vibrant colors |
| `dependencies` | Array<any> |  |
| `documents` | Array<string> |  |
| `created_at` | string |  |
| `updated_at` | string |  |
| `base_events` | Array<object> | List of base events that this event is a milestone of. Empty if this is not a milestone. |

---

## `listCalendar`

Get Calendar Events

**GET** `/api/v1/event/calendar`

**Signature:** `lb.events.listCalendar({ query?: \{ start_date, end_date, sort_by, sort_order, search, visibility, creator_ids, is_deleted, is_locked, space_ids, document_ids, has_documents, has_spaces, title, description, keywords, is_recurring, repeat_presets, repeat_days, filters \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `start_date` | query | string (date-time) | ✓ | Start date for calendar range |
| `end_date` | query | string (date-time) | ✓ | End date for calendar range |
| `sort_by` | query | string |  | Field to sort by |
| `sort_order` | query | string |  | Sort order |
| `search` | query | string | null |  | Global text search |
| `visibility` | query | Array<integer> | null |  | Filter by visibility levels |
| `creator_ids` | query | Array<string> | null |  | Filter by creator IDs |
| `is_deleted` | query | boolean | null |  | Filter by deletion status |
| `is_locked` | query | boolean | null |  | Filter by lock status |
| `space_ids` | query | Array<integer> | null |  | Filter by space IDs |
| `document_ids` | query | Array<string (uuid)> | null |  | Filter by document IDs |
| `has_documents` | query | boolean | null |  | Filter events with/without documents |
| `has_spaces` | query | boolean | null |  | Filter events with/without spaces |
| `title` | query | string | null |  | Filter by title |
| `description` | query | string | null |  | Filter by description |
| `keywords` | query | Array<string> | null |  | Filter by keywords |
| `is_recurring` | query | boolean | null |  | Filter recurring events |
| `repeat_presets` | query | Array<string> | null |  | Filter by repeat presets |
| `repeat_days` | query | Array<integer> | null |  | Filter by repeat days |
| `filters` | query | string | null |  | JSON filter object for complex queries |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `items` | Array<object> |  |
| `meta` | object |  |

---

## `getSocialFeed`

Get Social Feed

**GET** `/api/v1/event/social/feed`

**Signature:** `lb.events.getSocialFeed({ query?: \{ cursor, limit, current_time \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `cursor` | query | string | null |  | Cursor for pagination |
| `limit` | query | integer |  | Items per page |
| `current_time` | query | string (date-time) | null |  | User's current time for ranking (defaults to server time if not provided) |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `items` | Array<object> |  |
| `meta` | object |  |

---

## `filterAdvanced`

Filter Events Advanced

**POST** `/api/v1/event/filter`

**Signature:** `lb.events.filterAdvanced({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `filters` | body | object | null |  | Advanced filters |
| `sort` | body | object | null |  | Sort options |
| `pagination` | body | object | null |  | Pagination options |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `items` | Array<object> |  |
| `meta` | object |  |

---

## `listBySpace`

Get Events By Space

**GET** `/api/v1/event/space/{space_id}`

**Signature:** `lb.events.listBySpace({ path: \{ space_id \}, query?: \{ limit, offset, sort_by, sort_order, search, start_dt, end_dt \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `limit` | query | integer |  | Limit |
| `offset` | query | integer |  | Offset |
| `sort_by` | query | string |  | Sort by field |
| `sort_order` | query | string |  | Sort order (asc or desc) |
| `search` | query | string |  | Search query |
| `start_dt` | query | string (date-time) | null |  | Start date for filtering |
| `end_dt` | query | string (date-time) | null |  | End date for filtering |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `items` | Array<object> |  |
| `meta` | object |  |

---

## `delete`

Delete Event

**DELETE** `/api/v1/event/{event_id}`

**Signature:** `lb.events.delete({ path: \{ event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |


**Returns:**

**Response:** Successful Response

---

## `patchIdentification`

Patch Event Identification

**PATCH** `/api/v1/event/{event_id}/identification`

**Signature:** `lb.events.patchIdentification({ path: \{ event_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `title` | body | string | ✓ | Top-level event title |
| `status` | body | string | null |  | Event status (e.g. pending, active, cancelled) |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Event ID |
| `title` | string | Top-level event title |
| `status` | string | null | Event status |

---

## `getSectionIdentification`

Get Section Identification

**GET** `/api/v1/event/{event_id}/section/identification`

**Signature:** `lb.events.getSectionIdentification({ path: \{ event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Event ID |
| `title` | string | Top-level event title |
| `status` | string | null | Event status |

---

## `getSectionContent`

Get Section Content

**GET** `/api/v1/event/{event_id}/section/content`

**Signature:** `lb.events.getSectionContent({ path: \{ event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Event ID |
| `title` | string | Top-level event title |
| `status` | string | null | Event status |
| `description` | string | null | Description |
| `event_metadata` | object | null | Metadata |

---

## `patchContent`

Patch Event Content

**PATCH** `/api/v1/event/{event_id}/content`

**Signature:** `lb.events.patchContent({ path: \{ event_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `description` | body | string | null |  |  |
| `event_metadata` | body | object | null |  | Metadata including themes |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Event ID |
| `title` | string | Top-level event title |
| `status` | string | null | Event status |
| `description` | string | null | Description |
| `event_metadata` | object | null | Metadata |

---

## `patchSettings`

Patch Event Settings

**PATCH** `/api/v1/event/{event_id}/settings`

**Signature:** `lb.events.patchSettings({ path: \{ event_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `visibility` | body | integer | null |  |  |
| `keywords` | body | Array<string> | null |  |  |
| `is_locked` | body | boolean | null |  |  |
| `subcontrib_speakers_can_submit` | body | boolean | null |  |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Event ID |
| `title` | string | Top-level event title |
| `status` | string | null | Event status |
| `visibility` | integer | null | Visibility |
| `keywords` | Array<string> | null | Keywords |
| `is_locked` | boolean | Is Locked |
| `subcontrib_speakers_can_submit` | boolean | Speaker submission allowed |

---

## `getSettings`

Get Event Settings

**GET** `/api/v1/event/{event_id}/settings`

**Signature:** `lb.events.getSettings({ path: \{ event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Event ID |
| `title` | string | Top-level event title |
| `status` | string | null | Event status |
| `visibility` | integer | null | Visibility |
| `keywords` | Array<string> | null | Keywords |
| `is_locked` | boolean | Is Locked |
| `subcontrib_speakers_can_submit` | boolean | Speaker submission allowed |

---

## `updateCover`

Update Cover

**PATCH** `/api/v1/event/{event_id}/cover`

**Signature:** `lb.events.updateCover({ path: \{ event_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `file` | body | string (binary) | ✓ |  |
| `theme` | body | string | null |  | JSON string of theme colors |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer |  |
| `title` | string |  |
| `description` | string | null |  |
| `is_deleted` | boolean |  |
| `is_locked` | boolean |  |
| `creator_id` | string (uuid) |  |
| `org_id` | string (uuid) | null | Owning organization UUID or null for personal events |
| `created_dt` | string |  |
| `start_dt` | string |  |
| `end_dt` | string |  |
| `timezone` | string |  |
| `visibility` | integer | null |  |
| `keywords` | Array<string> | null |  |
| `url_shortcut` | string | null |  |
| `own_map_url` | string |  |
| `subcontrib_speakers_can_submit` | boolean |  |
| `repeat_days` | Array<integer> | null |  |
| `repeat_presets` | string | null |  |
| `timeline_preset` | string | null |  |
| `attendee_count` | integer | Number of attendees for this event |
| `latitude` | number | null | Latitude coordinate of the event location |
| `longitude` | number | null | Longitude coordinate of the event location |
| `address` | string | null | Physical address of the event location |
| `event_metadata` | object | null | JSON metadata like vibrant colors |
| `dependencies` | Array<any> |  |
| `documents` | Array<string> |  |
| `created_at` | string |  |
| `updated_at` | string |  |
| `base_events` | Array<object> | List of base events that this event is a milestone of. Empty if this is not a milestone. |

---

## `publish`

Publish Event

**PATCH** `/api/v1/event/{event_id}/publish`

**Signature:** `lb.events.publish({ path: \{ event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |


**Returns:**

**Response:** Successful Response

---

## `publishWithNotifications`

Publish Event With Notifications

**POST** `/api/v1/event/{event_id}/publish-with-notifications`

**Signature:** `lb.events.publishWithNotifications({ path: \{ event_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `notify_attendees` | body | boolean |  | Whether to notify attendees about the publication |
| `notification_channels` | body | Array<string> | null |  | List of channels to use for notification (e.g., 'EMAIL', 'SMS', 'WHATSAPP') |


**Returns:**

**Response:** Successful Response

---

## `archive`

Archive Event

**PATCH** `/api/v1/event/{event_id}/archive`

**Signature:** `lb.events.archive({ path: \{ event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |


**Returns:**

**Response:** Successful Response

---

## `transfer`

Transfer Event

**POST** `/api/v1/event/{event_id}/transfer`

**Signature:** `lb.events.transfer({ path: \{ event_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `target_org_id` | body | string (uuid) | ✓ | UUID of the target organization to transfer this event to |


**Returns:**

**Response:** `object`

---

## `publishVersion`

Publish Event Version

**POST** `/api/v1/event/{event_id}/versions/publish`

**Signature:** `lb.events.publishVersion({ path: \{ event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |


**Returns:**

**Response:** Successful Response

---

## `listVersions`

List Event Versions

**GET** `/api/v1/event/{event_id}/versions`

**Signature:** `lb.events.listVersions({ path: \{ event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |


**Returns:**

**Response:** Successful Response

---

## `rollbackVersion`

Rollback Event to Version

**POST** `/api/v1/event/{event_id}/versions/rollback`

**Signature:** `lb.events.rollbackVersion({ path: \{ event_id \}, query?: \{ transaction_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `transaction_id` | query | integer | ✓ | Transaction ID to rollback to |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer |  |
| `title` | string |  |
| `description` | string | null |  |
| `is_deleted` | boolean |  |
| `is_locked` | boolean |  |
| `creator_id` | string (uuid) |  |
| `org_id` | string (uuid) | null | Owning organization UUID or null for personal events |
| `created_dt` | string |  |
| `start_dt` | string |  |
| `end_dt` | string |  |
| `timezone` | string |  |
| `visibility` | integer | null |  |
| `keywords` | Array<string> | null |  |
| `url_shortcut` | string | null |  |
| `own_map_url` | string |  |
| `subcontrib_speakers_can_submit` | boolean |  |
| `repeat_days` | Array<integer> | null |  |
| `repeat_presets` | string | null |  |
| `timeline_preset` | string | null |  |
| `attendee_count` | integer | Number of attendees for this event |
| `latitude` | number | null | Latitude coordinate of the event location |
| `longitude` | number | null | Longitude coordinate of the event location |
| `address` | string | null | Physical address of the event location |
| `event_metadata` | object | null | JSON metadata like vibrant colors |
| `dependencies` | Array<any> |  |
| `documents` | Array<string> |  |
| `created_at` | string |  |
| `updated_at` | string |  |
| `base_events` | Array<object> | List of base events that this event is a milestone of. Empty if this is not a milestone. |

---

## `getTimezones`

Get Timezone Info

**GET** `/api/v1/event/timezones/`

**Signature:** `lb.events.getTimezones()`

*No parameters.*


**Returns:**

**Response:** `object`

---
