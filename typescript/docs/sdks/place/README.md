# Place

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `publish` | PATCH | `/api/v1/place/{place_id}/publish` | Publish Place |
| `archive` | PATCH | `/api/v1/place/{place_id}/archive` | Archive Place |

---

## `publish`

Publish Place

**PATCH** `/api/v1/place/{place_id}/publish`

**Signature:** `lb.place.publish({ path: \{ place_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `place_id` | path | integer | ✓ |  |


**Returns:**

**Response:** Successful Response

---

## `archive`

Archive Place

**PATCH** `/api/v1/place/{place_id}/archive`

**Signature:** `lb.place.archive({ path: \{ place_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `place_id` | path | integer | ✓ |  |


**Returns:**

**Response:** Successful Response

---
