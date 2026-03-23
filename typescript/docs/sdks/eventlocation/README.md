# EventLocation

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `get` | GET | `/api/v1/events/{event_id}/location` | Get Event Location |
| `update` | PUT | `/api/v1/events/{event_id}/location` | Update Event Location |

---

## `get`

Get Event Location

**GET** `/api/v1/events/{event_id}/location`

**Signature:** `lb.eventLocation.get({ path: \{ event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `latitude` | number | null |  |
| `longitude` | number | null |  |
| `address` | string | null |  |

---

## `update`

Update Event Location

**PUT** `/api/v1/events/{event_id}/location`

**Signature:** `lb.eventLocation.update({ path: \{ event_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `latitude` | body | number | null |  | Latitude coordinate |
| `longitude` | body | number | null |  | Longitude coordinate |
| `address` | body | string | null |  | Physical address |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `latitude` | number | null |  |
| `longitude` | number | null |  |
| `address` | string | null |  |

---
