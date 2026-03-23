# Booking

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `create` | POST | `/api/v1/booking` | Create Booking |

---

## `create`

Create Booking

**POST** `/api/v1/booking`

**Signature:** `lb.booking.create({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `place_id` | body | integer | ✓ | Place ID to book |
| `title` | body | string | ✓ | Booking title |
| `description` | body | string | null |  | Booking description |
| `start_dt` | body | string (date-time) | ✓ | Start datetime |
| `end_dt` | body | string (date-time) | ✓ | End datetime |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Booking ID |
| `place_id` | integer | Place ID |
| `user_id` | string (uuid) | User ID |
| `title` | string | Booking title |
| `description` | string | null | Booking description |
| `start_dt` | string | Start datetime |
| `end_dt` | string | End datetime |
| `status` | string | Booking status |
| `created_at` | string | Created datetime |
| `updated_at` | string | Updated datetime |

---
