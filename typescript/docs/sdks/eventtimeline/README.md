# EventTimeline

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `get` | GET | `/api/v1/event/{event_id}/timeline` | Get event timeline |
| `getPublished` | GET | `/api/v1/event/{event_id}/timeline/published` | Get published event timeline |
| `createMilestone` | POST | `/api/v1/event/{event_id}/timeline/milestones` | Create and link milestone |
| `linkMilestone` | POST | `/api/v1/event/{event_id}/timeline/link` | Link existing event |
| `unlink` | DELETE | `/api/v1/event/{event_id}/timeline/{milestone_event_id}` | Unlink milestone |

---

## `get`

Get event timeline

**GET** `/api/v1/event/{event_id}/timeline`

**Signature:** `lb.eventTimeline.get({ path: \{ event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |


**Returns:**

**Response:** `Array<object>`

---

## `getPublished`

Get published event timeline

**GET** `/api/v1/event/{event_id}/timeline/published`

**Signature:** `lb.eventTimeline.getPublished({ path: \{ event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |


**Returns:**

**Response:** `Array<object>`

---

## `createMilestone`

Create and link milestone

**POST** `/api/v1/event/{event_id}/timeline/milestones`

**Signature:** `lb.eventTimeline.createMilestone({ path: \{ event_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `request` | body | string | ✓ | JSON string of CreateEventRequest |
| `file` | body | string (binary) | null |  | Optional cover image |


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

## `linkMilestone`

Link existing event

**POST** `/api/v1/event/{event_id}/timeline/link`

**Signature:** `lb.eventTimeline.linkMilestone({ path: \{ event_id \}, query?: \{ milestone_event_id, sequence \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `milestone_event_id` | query | integer | ✓ |  |
| `sequence` | query | integer |  |  |


**Returns:**

**Response:** Successful Response

---

## `unlink`

Unlink milestone

**DELETE** `/api/v1/event/{event_id}/timeline/{milestone_event_id}`

**Signature:** `lb.eventTimeline.unlink({ path: \{ event_id, milestone_event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `milestone_event_id` | path | integer | ✓ |  |


**Returns:**

**Response:** Successful Response

---
