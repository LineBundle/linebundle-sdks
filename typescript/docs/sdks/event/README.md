# Event

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `get` | GET | `/api/v1/event/{event_id}` | Get Event By Id |
| `update` | PUT | `/api/v1/event/{event_id}` | Update Event |
| `getSectionSettings` | GET | `/api/v1/event/{event_id}/section/settings` | Get Section Settings |
| `unpublishVersion` | POST | `/api/v1/event/{event_id}/versions/unpublish` | Unpublish Event (Mark as Draft) |
| `compareVersions` | GET | `/api/v1/event/{event_id}/versions/compare` | Compare Event Versions |
| `getLatestVersion` | GET | `/api/v1/event/{event_id}/versions/latest` | Get Latest Event Version |
| `getVersion` | GET | `/api/v1/event/{event_id}/versions/{transaction_id}` | Get Event Version |

---

## `get`

Get Event By Id

**GET** `/api/v1/event/{event_id}`

**Signature:** `lb.event.get({ path: \{ event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |


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

## `update`

Update Event

**PUT** `/api/v1/event/{event_id}`

**Signature:** `lb.event.update({ path: \{ event_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `title` | body | string | ✓ | Title |
| `description` | body | string | null |  | Description |
| `start_dt` | body | string | ✓ | Start date |
| `start_tm` | body | string | ✓ | Start time |
| `end_dt` | body | string | ✓ | End date |
| `end_tm` | body | string | ✓ | End time |
| `timezone` | body | string | ✓ | Timezone (must be a valid IANA timezone, e.g., 'UTC', 'America/New_York', 'Europe/London') |
| `visibility` | body | integer | null |  | Visibility (optional - defaults to PRIVATE if no spaces, inherits from spaces if spaces provided) |
| `keywords` | body | Array<string> | null |  | Keywords |
| `space_ids` | body | Array<integer> | null |  | Space IDs |
| `document_ids` | body | Array<string (uuid)> | null |  | Document IDs (UUIDs from document service) |
| `repeat_days` | body | Array<integer> | null |  | Repeat Days |
| `repeat_presets` | body | string | null |  | Repeat Presets |
| `timeline_preset` | body | string | null |  | Timeline Preset |
| `latitude` | body | number | null |  | Latitude coordinate (-90 to 90) |
| `longitude` | body | number | null |  | Longitude coordinate (-180 to 180) |
| `address` | body | string | null |  | Physical address |
| `event_metadata` | body | object | null |  | Event Metadata (JSON) |


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

## `getSectionSettings`

Get Section Settings

**GET** `/api/v1/event/{event_id}/section/settings`

**Signature:** `lb.event.getSectionSettings({ path: \{ event_id \} })`

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

## `unpublishVersion`

Unpublish Event (Mark as Draft)

**POST** `/api/v1/event/{event_id}/versions/unpublish`

**Signature:** `lb.event.unpublishVersion({ path: \{ event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |

---

## `compareVersions`

Compare Event Versions

**GET** `/api/v1/event/{event_id}/versions/compare`

**Signature:** `lb.event.compareVersions({ path: \{ event_id \}, query?: \{ transaction_id_a, transaction_id_b \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `transaction_id_a` | query | integer | ✓ | First transaction ID to compare |
| `transaction_id_b` | query | integer | ✓ | Second transaction ID to compare |


**Returns:**

**Response:** Successful Response

---

## `getLatestVersion`

Get Latest Event Version

**GET** `/api/v1/event/{event_id}/versions/latest`

**Signature:** `lb.event.getLatestVersion({ path: \{ event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer |  |
| `event_id` | integer |  |
| `transaction_id` | integer |  |
| `status` | string |  |
| `title` | string |  |
| `description` | string | null |  |
| `start_dt` | string (date-time) |  |
| `end_dt` | string (date-time) |  |
| `timezone` | string | Timezone (IANA timezone format, e.g., 'UTC', 'America/New_York', 'Europe/London') |
| `visibility` | integer | null |  |
| `keywords` | Array<string> |  |
| `latitude` | number | null |  |
| `longitude` | number | null |  |
| `address` | string | null |  |
| `event_metadata` | object | null |  |
| `published_at` | string (date-time) |  |
| `published_by` | string (uuid) |  |
| `spaces` | Array<object> |  |
| `documents` | Array<string> |  |
| `timeline` | Array<object> |  |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |

---

## `getVersion`

Get Event Version

**GET** `/api/v1/event/{event_id}/versions/{transaction_id}`

**Signature:** `lb.event.getVersion({ path: \{ event_id, transaction_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `transaction_id` | path | integer | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer |  |
| `event_id` | integer |  |
| `transaction_id` | integer |  |
| `status` | string |  |
| `title` | string |  |
| `description` | string | null |  |
| `start_dt` | string (date-time) |  |
| `end_dt` | string (date-time) |  |
| `timezone` | string | Timezone (IANA timezone format, e.g., 'UTC', 'America/New_York', 'Europe/London') |
| `visibility` | integer | null |  |
| `keywords` | Array<string> |  |
| `latitude` | number | null |  |
| `longitude` | number | null |  |
| `address` | string | null |  |
| `event_metadata` | object | null |  |
| `published_at` | string (date-time) |  |
| `published_by` | string (uuid) |  |
| `spaces` | Array<object> |  |
| `documents` | Array<string> |  |
| `timeline` | Array<object> |  |
| `created_at` | string (date-time) |  |
| `updated_at` | string (date-time) |  |

---
