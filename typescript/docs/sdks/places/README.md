# Places

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/places` | List places |
| `create` | POST | `/api/v1/places` | Create a place |
| `delete` | DELETE | `/api/v1/places/{id}` | Delete a place |
| `get` | GET | `/api/v1/places/{id}` | Get a place |
| `update` | PUT | `/api/v1/places/{id}` | Update a place |
| `archive` | PATCH | `/api/v1/places/{id}/archive` | Archive a place |
| `publish` | PATCH | `/api/v1/places/{id}/publish` | Publish a place |

---

## `list`

List places

**GET** `/api/v1/places`

**Signature:** `lb.places.list({ query?: \{ page, size, search, sort_by, sort_dir, status, visibility \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `page` | query | integer |  | Page number (1-based) |
| `size` | query | integer |  | Items per page |
| `search` | query | string |  | Search term |
| `sort_by` | query | string |  | Field to sort by |
| `sort_dir` | query | `"asc"` | `"desc"` |  | Sort direction |
| `status` | query | `"published"` | `"draft"` |  | Filter by publish status. Omit to return both published and standalone drafts. |
| `visibility` | query | integer |  | Filter by visibility level: 10=private, 20=members-only, 30=organization, 40=public. Omit or pass 0 to return all visibl |


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

Create a place

**POST** `/api/v1/places`

**Signature:** `lb.places.create({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `amenities` | body | ['array', 'null'] |  | Available amenities |
| `capacity` | body | integer |  | Max capacity |
| `description` | body | string | ✓ | Description |
| `keywords` | body | ['array', 'null'] |  | Search keywords |
| `location_description` | body | string |  | Physical location |
| `place_type` | body | `"room"` | `"online_meeting"` | ✓ | Type |
| `title` | body | string | ✓ | Title |
| `visibility` | body | integer |  | Visibility level |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `amenities` | ['array', 'null'] | Available amenities |
| `capacity` | ['integer', 'null'] | Maximum capacity |
| `created_at` | string (date-time) | Created timestamp |
| `created_dt` | string (date-time) | Legacy created datetime |
| `creator_id` | string | Creator profile ID |
| `description` | string | Description |
| `id` | integer | Place ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `is_locked` | boolean | Locked flag |
| `keywords` | ['array', 'null'] | Search keywords |
| `location_description` | ['string', 'null'] | Physical location description |
| `org_id` | string | Organization ID |
| `place_type` | string | Type: room, online_meeting |
| `title` | string | Title |
| `updated_at` | string (date-time) | Updated timestamp |
| `visibility` | ['integer', 'null'] | Visibility level |

---

## `delete`

Delete a place

**DELETE** `/api/v1/places/{id}`

**Signature:** `lb.places.delete({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Place ID |

---

## `get`

Get a place

**GET** `/api/v1/places/{id}`

**Signature:** `lb.places.get({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Place ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `amenities` | ['array', 'null'] | Available amenities |
| `capacity` | ['integer', 'null'] | Maximum capacity |
| `created_at` | string (date-time) | Created timestamp |
| `created_dt` | string (date-time) | Legacy created datetime |
| `creator_id` | string | Creator profile ID |
| `description` | string | Description |
| `id` | integer | Place ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `is_locked` | boolean | Locked flag |
| `keywords` | ['array', 'null'] | Search keywords |
| `location_description` | ['string', 'null'] | Physical location description |
| `org_id` | string | Organization ID |
| `place_type` | string | Type: room, online_meeting |
| `title` | string | Title |
| `updated_at` | string (date-time) | Updated timestamp |
| `visibility` | ['integer', 'null'] | Visibility level |

---

## `update`

Update a place

**PUT** `/api/v1/places/{id}`

**Signature:** `lb.places.update({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Place ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `amenities` | body | ['array', 'null'] |  | Available amenities |
| `capacity` | body | integer |  | Max capacity |
| `description` | body | string | ✓ | Description |
| `keywords` | body | ['array', 'null'] |  | Search keywords |
| `location_description` | body | string |  | Physical location |
| `place_type` | body | `"room"` | `"online_meeting"` | ✓ | Type |
| `title` | body | string | ✓ | Title |
| `visibility` | body | integer |  | Visibility level |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `amenities` | ['array', 'null'] | Available amenities |
| `capacity` | ['integer', 'null'] | Maximum capacity |
| `created_at` | string (date-time) | Created timestamp |
| `created_dt` | string (date-time) | Legacy created datetime |
| `creator_id` | string | Creator profile ID |
| `description` | string | Description |
| `id` | integer | Place ID |
| `is_deleted` | boolean | Soft-deleted flag |
| `is_locked` | boolean | Locked flag |
| `keywords` | ['array', 'null'] | Search keywords |
| `location_description` | ['string', 'null'] | Physical location description |
| `org_id` | string | Organization ID |
| `place_type` | string | Type: room, online_meeting |
| `title` | string | Title |
| `updated_at` | string (date-time) | Updated timestamp |
| `visibility` | ['integer', 'null'] | Visibility level |

---

## `archive`

Archive a place

**PATCH** `/api/v1/places/{id}/archive`

**Signature:** `lb.places.archive({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Place ID |

---

## `publish`

Publish a place

**PATCH** `/api/v1/places/{id}/publish`

**Signature:** `lb.places.publish({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | integer | ✓ | Place ID |

---
