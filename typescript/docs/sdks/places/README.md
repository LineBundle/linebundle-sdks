# Places

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/place` | Get Place List |
| `create` | POST | `/api/v1/place` | Create Place |
| `get` | GET | `/api/v1/place/{place_id}` | Get Place By Id |
| `update` | PUT | `/api/v1/place/{place_id}` | Update Place |
| `delete` | DELETE | `/api/v1/place/{place_id}` | Delete Place |

---

## `list`

Get Place List

**GET** `/api/v1/place`

**Signature:** `lb.places.list({ query?: \{ limit, prev \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `limit` | query | integer |  | Limit |
| `prev` | query | integer |  | Prev ID |


**Returns:**

**Response:** `Array<object>`

---

## `create`

Create Place

**POST** `/api/v1/place`

**Signature:** `lb.places.create({ body: \{ ... \} })`

*No parameters.*


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Title |
| `description` | string | Description |
| `visibility` | integer | Visibility |
| `keywords` | Array<string> | Keywords |

---

## `get`

Get Place By Id

**GET** `/api/v1/place/{place_id}`

**Signature:** `lb.places.get({ path: \{ place_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `place_id` | path | integer | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | ID |
| `title` | string | Title |
| `description` | string | Description |
| `visibility` | integer | Visibility |
| `keywords` | Array<string> | Keywords |

---

## `update`

Update Place

**PUT** `/api/v1/place/{place_id}`

**Signature:** `lb.places.update({ path: \{ place_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `place_id` | path | integer | ✓ |  |
| `title` | body | string | ✓ | Place title |
| `description` | body | string | ✓ | Place description |
| `visibility` | body | integer | ✓ | Visibility level |
| `keywords` | body | Array<string> |  | Keywords |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | ID |
| `title` | string | Title |
| `description` | string | Description |
| `visibility` | integer | Visibility |
| `keywords` | Array<string> | Keywords |

---

## `delete`

Delete Place

**DELETE** `/api/v1/place/{place_id}`

**Signature:** `lb.places.delete({ path: \{ place_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `place_id` | path | integer | ✓ |  |


**Returns:**

**Response:** Successful Response

---
