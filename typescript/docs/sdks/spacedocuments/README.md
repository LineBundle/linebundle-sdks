# SpaceDocuments

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `add` | POST | `/api/v1/spaces/{space_id}/documents/{document_id}` | Add Document To Space |
| `remove` | DELETE | `/api/v1/spaces/{space_id}/documents/{document_id}` | Remove Document From Space |
| `get` | GET | `/api/v1/spaces/{space_id}/documents` | Get Space Documents |

---

## `add`

Add Document To Space

**POST** `/api/v1/spaces/{space_id}/documents/{document_id}`

**Signature:** `lb.spaceDocuments.add({ path: \{ space_id, document_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `document_id` | path | string (uuid) | ✓ |  |


**Returns:**

**Response:** Successful Response

---

## `remove`

Remove Document From Space

**DELETE** `/api/v1/spaces/{space_id}/documents/{document_id}`

**Signature:** `lb.spaceDocuments.remove({ path: \{ space_id, document_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `document_id` | path | string (uuid) | ✓ |  |

---

## `get`

Get Space Documents

**GET** `/api/v1/spaces/{space_id}/documents`

**Signature:** `lb.spaceDocuments.get({ path: \{ space_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |


**Returns:**

**Response:** `Array<string (uuid)>`

---
