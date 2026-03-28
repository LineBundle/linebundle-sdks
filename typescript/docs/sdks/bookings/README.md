# Bookings

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/bookings` | List bookings |
| `create` | POST | `/api/v1/bookings` | Create a booking |
| `check-availability` | POST | `/api/v1/bookings/check-availability` | Check place availability for a time slot |
| `place-schedule` | GET | `/api/v1/bookings/places/{place_id}/schedule` | Get all bookings for a place within a date range |
| `delete` | DELETE | `/api/v1/bookings/{id}` | Delete a booking |
| `get` | GET | `/api/v1/bookings/{id}` | Get a booking by ID |
| `update` | PUT | `/api/v1/bookings/{id}` | Update a booking |

---

## `list`

List bookings

**GET** `/api/v1/bookings`

**Signature:** `lb.bookings.list({ query?: \{ user_id, place_id, start_date, end_date, limit, offset \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `user_id` | query | string |  | Filter by user (profile UUID). Omit for all users. |
| `place_id` | query | integer |  | Filter by place ID. 0 = all places. |
| `start_date` | query | string |  | Filter: bookings starting on or after (RFC3339). Empty = no lower bound. |
| `end_date` | query | string |  | Filter: bookings starting on or before (RFC3339). Empty = no upper bound. |
| `limit` | query | integer |  | Max results |
| `offset` | query | integer |  | Results offset |


**Returns:**

**Response:** `['array', 'null']`

---

## `create`

Create a booking

**POST** `/api/v1/bookings`

**Signature:** `lb.bookings.create({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `description` | body | string |  | Optional description |
| `end_dt` | body | string | ✓ | End datetime (RFC3339) |
| `place_id` | body | integer | ✓ | Place ID to book |
| `start_dt` | body | string | ✓ | Start datetime (RFC3339) |
| `title` | body | string | ✓ | Booking title |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `description` | string | Optional description |
| `end_dt` | string (date-time) | Reservation end (UTC) |
| `id` | integer | Booking ID |
| `org_id` | string | Organization (tenant) ID |
| `place_id` | integer | Place being reserved |
| `start_dt` | string (date-time) | Reservation start (UTC) |
| `status` | string | Status: confirmed, cancelled |
| `title` | string | Booking title |
| `updated_at` | string (date-time) | Updated timestamp |
| `user_id` | string | Profile UUID of the booking owner |

---

## `check-availability`

Check place availability for a time slot

**POST** `/api/v1/bookings/check-availability`

**Signature:** `lb.bookings.check-availability({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `end_dt` | body | string | ✓ | End datetime (RFC3339) |
| `exclude_booking_id` | body | integer |  | Booking ID to exclude from conflict check (for updates) |
| `place_id` | body | integer | ✓ | Place to check |
| `start_dt` | body | string | ✓ | Start datetime (RFC3339) |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `available` | boolean | True if the place is free |
| `end_dt` | string (date-time) |  |
| `place_id` | integer |  |
| `start_dt` | string (date-time) |  |

---

## `place-schedule`

Get all bookings for a place within a date range

**GET** `/api/v1/bookings/places/{place_id}/schedule`

**Signature:** `lb.bookings.place-schedule({ path: \{ place_id \}, query?: \{ start_date, end_date \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `place_id` | path | integer | ✓ | Place ID |
| `start_date` | query | string |  | Range start (RFC3339) |
| `end_date` | query | string |  | Range end (RFC3339) |


**Returns:**

**Response:** `['array', 'null']`

---

## `delete`

Delete a booking

**DELETE** `/api/v1/bookings/{id}`

**Signature:** `lb.bookings.delete({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Booking ID |

---

## `get`

Get a booking by ID

**GET** `/api/v1/bookings/{id}`

**Signature:** `lb.bookings.get({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Booking ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `description` | string | Optional description |
| `end_dt` | string (date-time) | Reservation end (UTC) |
| `id` | integer | Booking ID |
| `org_id` | string | Organization (tenant) ID |
| `place_id` | integer | Place being reserved |
| `start_dt` | string (date-time) | Reservation start (UTC) |
| `status` | string | Status: confirmed, cancelled |
| `title` | string | Booking title |
| `updated_at` | string (date-time) | Updated timestamp |
| `user_id` | string | Profile UUID of the booking owner |

---

## `update`

Update a booking

**PUT** `/api/v1/bookings/{id}`

**Signature:** `lb.bookings.update({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Booking ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `description` | body | string |  | Description |
| `end_dt` | body | string | ✓ | End datetime (RFC3339) |
| `start_dt` | body | string | ✓ | Start datetime (RFC3339) |
| `status` | body | string | ✓ | Status |
| `title` | body | string | ✓ | Title |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `created_at` | string (date-time) | Created timestamp |
| `description` | string | Optional description |
| `end_dt` | string (date-time) | Reservation end (UTC) |
| `id` | integer | Booking ID |
| `org_id` | string | Organization (tenant) ID |
| `place_id` | integer | Place being reserved |
| `start_dt` | string (date-time) | Reservation start (UTC) |
| `status` | string | Status: confirmed, cancelled |
| `title` | string | Booking title |
| `updated_at` | string (date-time) | Updated timestamp |
| `user_id` | string | Profile UUID of the booking owner |

---
