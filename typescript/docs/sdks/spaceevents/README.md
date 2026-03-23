# SpaceEvents

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `get` | GET | `/api/v1/spaces/{space_id}/events` | Get Space Events |
| `add` | POST | `/api/v1/spaces/{space_id}/events` | Add Event To Space |
| `getEventSpaces` | GET | `/api/v1/events/{event_id}/spaces` | Get Event Spaces |
| `getById` | GET | `/api/v1/space-events/{space_event_id}` | Get Space Event |
| `removeEvent` | DELETE | `/api/v1/space-events/{space_event_id}` | Remove Event From Space |
| `bulkAdd` | POST | `/api/v1/spaces/{space_id}/events/bulk` | Bulk Add Events To Space |
| `bulkRemove` | DELETE | `/api/v1/spaces/{space_id}/events/bulk` | Bulk Remove Events From Space |
| `count` | GET | `/api/v1/spaces/{space_id}/events/count` | Count Space Events |

---

## `get`

Get Space Events

**GET** `/api/v1/spaces/{space_id}/events`

**Signature:** `lb.spaceEvents.get({ path: \{ space_id \}, query?: \{ limit, offset \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `limit` | query | integer |  |  |
| `offset` | query | integer |  |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `events` | Array<object> | List of space events |
| `total` | integer | Total number of events |

---

## `add`

Add Event To Space

**POST** `/api/v1/spaces/{space_id}/events`

**Signature:** `lb.spaceEvents.add({ path: \{ space_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `event_id` | body | integer | ✓ | Event ID to add to space |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Space event relationship ID |
| `space_id` | integer | Space ID |
| `event_id` | integer | Event ID |
| `created_at` | string | Creation timestamp |
| `updated_at` | string | Last update timestamp |
| `event` | object | null | Event information |
| `space` | object | null | Space information |

---

## `getEventSpaces`

Get Event Spaces

**GET** `/api/v1/events/{event_id}/spaces`

**Signature:** `lb.spaceEvents.getEventSpaces({ path: \{ event_id \}, query?: \{ limit, offset \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `limit` | query | integer |  |  |
| `offset` | query | integer |  |  |


**Returns:**

**Response:** `Array<object>`

---

## `getById`

Get Space Event

**GET** `/api/v1/space-events/{space_event_id}`

**Signature:** `lb.spaceEvents.getById({ path: \{ space_event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_event_id` | path | integer | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Space event relationship ID |
| `space_id` | integer | Space ID |
| `event_id` | integer | Event ID |
| `created_at` | string | Creation timestamp |
| `updated_at` | string | Last update timestamp |
| `event` | object | null | Event information |
| `space` | object | null | Space information |

---

## `removeEvent`

Remove Event From Space

**DELETE** `/api/v1/space-events/{space_event_id}`

**Signature:** `lb.spaceEvents.removeEvent({ path: \{ space_event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_event_id` | path | integer | ✓ |  |


**Returns:**

**Response:** `object`

---

## `bulkAdd`

Bulk Add Events To Space

**POST** `/api/v1/spaces/{space_id}/events/bulk`

**Signature:** `lb.spaceEvents.bulkAdd({ path: \{ space_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |


**Returns:**

**Response:** `Array<object>`

---

## `bulkRemove`

Bulk Remove Events From Space

**DELETE** `/api/v1/spaces/{space_id}/events/bulk`

**Signature:** `lb.spaceEvents.bulkRemove({ path: \{ space_id \}, query?: \{ event_ids \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `event_ids` | query | Array<integer> | ✓ |  |


**Returns:**

**Response:** `object`

---

## `count`

Count Space Events

**GET** `/api/v1/spaces/{space_id}/events/count`

**Signature:** `lb.spaceEvents.count({ path: \{ space_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |


**Returns:**

**Response:** `object`

---
