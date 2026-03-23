# Bookings

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/booking` | Get Bookings |
| `getById` | GET | `/api/v1/booking/{booking_id}` | Get Booking By Id |
| `update` | PUT | `/api/v1/booking/{booking_id}` | Update Booking |
| `delete` | DELETE | `/api/v1/booking/{booking_id}` | Delete Booking |
| `checkAvailability` | POST | `/api/v1/booking/check-availability` | Check Availability |
| `getPlaceSchedule` | GET | `/api/v1/booking/places/{place_id}/schedule` | Get Place Schedule |

---

## `list`

Get Bookings

**GET** `/api/v1/booking`

**Signature:** `lb.bookings.list({ query?: \{ user_id, place_id, start_date, end_date, limit, offset \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `user_id` | query | string | null |  | Filter by user ID |
| `place_id` | query | integer | null |  | Filter by place ID |
| `start_date` | query | string (date-time) | null |  | Filter by start date |
| `end_date` | query | string (date-time) | null |  | Filter by end date |
| `limit` | query | integer |  | Number of bookings to return |
| `offset` | query | integer |  | Number of bookings to skip |


**Returns:**

**Response:** `Array<object>`

---

## `getById`

Get Booking By Id

**GET** `/api/v1/booking/{booking_id}`

**Signature:** `lb.bookings.getById({ path: \{ booking_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `booking_id` | path | integer | ✓ |  |


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

## `update`

Update Booking

**PUT** `/api/v1/booking/{booking_id}`

**Signature:** `lb.bookings.update({ path: \{ booking_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `booking_id` | path | integer | ✓ |  |
| `title` | body | string | ✓ | Booking title |
| `description` | body | string | null |  | Booking description |
| `start_dt` | body | string (date-time) | ✓ | Start datetime |
| `end_dt` | body | string (date-time) | ✓ | End datetime |
| `status` | body | string |  | Booking status |


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

## `delete`

Delete Booking

**DELETE** `/api/v1/booking/{booking_id}`

**Signature:** `lb.bookings.delete({ path: \{ booking_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `booking_id` | path | integer | ✓ |  |

---

## `checkAvailability`

Check Availability

**POST** `/api/v1/booking/check-availability`

**Signature:** `lb.bookings.checkAvailability({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `place_id` | body | integer | ✓ | Place ID to check |
| `start_dt` | body | string (date-time) | ✓ | Start datetime |
| `end_dt` | body | string (date-time) | ✓ | End datetime |
| `exclude_booking_id` | body | integer | null |  | Booking ID to exclude from conflict check |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `available` | boolean | Whether the place is available |
| `place_id` | integer | Place ID that was checked |
| `start_dt` | string (date-time) | Start datetime checked |
| `end_dt` | string (date-time) | End datetime checked |

---

## `getPlaceSchedule`

Get Place Schedule

**GET** `/api/v1/booking/places/{place_id}/schedule`

**Signature:** `lb.bookings.getPlaceSchedule({ path: \{ place_id \}, query?: \{ start_date, end_date \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `place_id` | path | integer | ✓ |  |
| `start_date` | query | string (date-time) | ✓ | Start date for schedule |
| `end_date` | query | string (date-time) | ✓ | End date for schedule |


**Returns:**

**Response:** `Array<object>`

---
