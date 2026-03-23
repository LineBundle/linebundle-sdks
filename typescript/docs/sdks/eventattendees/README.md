# EventAttendees

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `get` | GET | `/api/v1/events/{event_id}/attendees` | Get Event Attendees |
| `add` | POST | `/api/v1/events/{event_id}/attendees` | Add Event Attendee |
| `addBulk` | POST | `/api/v1/events/{event_id}/attendees/bulk` | Add Event Attendees Bulk |
| `removeBulk` | DELETE | `/api/v1/events/{event_id}/attendees/bulk` | Remove Event Attendees Bulk |
| `update` | PUT | `/api/v1/events/{event_id}/attendees/{attendee_id}` | Update Event Attendee |
| `remove` | DELETE | `/api/v1/events/{event_id}/attendees/{attendee_id}` | Remove Event Attendee |
| `checkIn` | POST | `/api/v1/events/{event_id}/attendees/{attendee_id}/check-in` | Check In Attendee |
| `updateBulkStatus` | PATCH | `/api/v1/events/{event_id}/attendees/bulk/status` | Update Attendees Status Bulk |

---

## `get`

Get Event Attendees

**GET** `/api/v1/events/{event_id}/attendees`

**Signature:** `lb.eventAttendees.get({ path: \{ event_id \}, query?: \{ limit, offset, status, is_checked_in \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `limit` | query | integer |  | Items per page |
| `offset` | query | integer |  | Offset for pagination |
| `status` | query | `"invited"` | `"confirmed"` | `"declined"` | `"tentative"` | `"checked_in"` | null |  | Filter by attendance status |
| `is_checked_in` | query | boolean | null |  | Filter by check-in status |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `attendees` | Array<object> | List of attendees |
| `total` | integer | Total number of attendees |

---

## `add`

Add Event Attendee

**POST** `/api/v1/events/{event_id}/attendees`

**Signature:** `lb.eventAttendees.add({ path: \{ event_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `status` | body | `"invited"` | `"confirmed"` | `"declined"` | `"tentative"` | `"checked_in"` |  | Attendee status enumeration. |
| `notes` | body | string | null |  | Additional notes |
| `contact_id` | body | string (uuid) | ✓ | Contact ID to add as attendee |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | `"invited"` | `"confirmed"` | `"declined"` | `"tentative"` | `"checked_in"` | Attendee status enumeration. |
| `notes` | string | null | Additional notes |
| `id` | integer | Attendee relationship ID |
| `event_id` | integer | Event ID |
| `contact_id` | string (uuid) | Contact ID |
| `is_checked_in` | boolean | Whether attendee has checked in |
| `checked_in_at` | string (date-time) | null | Check-in timestamp |
| `invited_at` | string (date-time) | null | Invitation timestamp |
| `responded_at` | string (date-time) | null | Response timestamp |
| `created_at` | string (date-time) | Creation timestamp |
| `updated_at` | string (date-time) | Last update timestamp |
| `contact` | object | null | Contact information |

---

## `addBulk`

Add Event Attendees Bulk

**POST** `/api/v1/events/{event_id}/attendees/bulk`

**Signature:** `lb.eventAttendees.addBulk({ path: \{ event_id \}, query?: \{ status \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `status` | query | `"invited"` | `"confirmed"` | `"declined"` | `"tentative"` | `"checked_in"` |  |  |


**Returns:**

**Response:** `Array<object>`

---

## `removeBulk`

Remove Event Attendees Bulk

**DELETE** `/api/v1/events/{event_id}/attendees/bulk`

**Signature:** `lb.eventAttendees.removeBulk({ path: \{ event_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |


**Returns:**

**Response:** `object`

---

## `update`

Update Event Attendee

**PUT** `/api/v1/events/{event_id}/attendees/{attendee_id}`

**Signature:** `lb.eventAttendees.update({ path: \{ event_id, attendee_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `attendee_id` | path | integer | ✓ |  |
| `status` | body | `"invited"` | `"confirmed"` | `"declined"` | `"tentative"` | `"checked_in"` |  | Attendee status enumeration. |
| `notes` | body | string | null |  | Additional notes |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | `"invited"` | `"confirmed"` | `"declined"` | `"tentative"` | `"checked_in"` | Attendee status enumeration. |
| `notes` | string | null | Additional notes |
| `id` | integer | Attendee relationship ID |
| `event_id` | integer | Event ID |
| `contact_id` | string (uuid) | Contact ID |
| `is_checked_in` | boolean | Whether attendee has checked in |
| `checked_in_at` | string (date-time) | null | Check-in timestamp |
| `invited_at` | string (date-time) | null | Invitation timestamp |
| `responded_at` | string (date-time) | null | Response timestamp |
| `created_at` | string (date-time) | Creation timestamp |
| `updated_at` | string (date-time) | Last update timestamp |
| `contact` | object | null | Contact information |

---

## `remove`

Remove Event Attendee

**DELETE** `/api/v1/events/{event_id}/attendees/{attendee_id}`

**Signature:** `lb.eventAttendees.remove({ path: \{ event_id, attendee_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `attendee_id` | path | integer | ✓ |  |

---

## `checkIn`

Check In Attendee

**POST** `/api/v1/events/{event_id}/attendees/{attendee_id}/check-in`

**Signature:** `lb.eventAttendees.checkIn({ path: \{ event_id, attendee_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `attendee_id` | path | integer | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | `"invited"` | `"confirmed"` | `"declined"` | `"tentative"` | `"checked_in"` | Attendee status enumeration. |
| `notes` | string | null | Additional notes |
| `id` | integer | Attendee relationship ID |
| `event_id` | integer | Event ID |
| `contact_id` | string (uuid) | Contact ID |
| `is_checked_in` | boolean | Whether attendee has checked in |
| `checked_in_at` | string (date-time) | null | Check-in timestamp |
| `invited_at` | string (date-time) | null | Invitation timestamp |
| `responded_at` | string (date-time) | null | Response timestamp |
| `created_at` | string (date-time) | Creation timestamp |
| `updated_at` | string (date-time) | Last update timestamp |
| `contact` | object | null | Contact information |

---

## `updateBulkStatus`

Update Attendees Status Bulk

**PATCH** `/api/v1/events/{event_id}/attendees/bulk/status`

**Signature:** `lb.eventAttendees.updateBulkStatus({ path: \{ event_id \}, query?: \{ status \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `status` | query | `"invited"` | `"confirmed"` | `"declined"` | `"tentative"` | `"checked_in"` | ✓ |  |


**Returns:**

**Response:** `object`

---
