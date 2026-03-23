# EventDocuments

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `addDocument` | POST | `/api/v1/events/{event_id}/documents/{document_id}` | Add Document To Event |
| `remove` | DELETE | `/api/v1/events/{event_id}/documents/{document_id}` | Remove Document From Event |
| `getDocuments` | GET | `/api/v1/events/{event_id}/documents` | Get Event Documents |

---

## `addDocument`

Add Document To Event

**POST** `/api/v1/events/{event_id}/documents/{document_id}`

**Signature:** `lb.eventDocuments.addDocument({ path: \{ event_id, document_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `document_id` | path | string (uuid) | ✓ |  |


**Returns:**

**Response:** Successful Response

---

## `remove`

Remove Document From Event

**DELETE** `/api/v1/events/{event_id}/documents/{document_id}`

**Signature:** `lb.eventDocuments.remove({ path: \{ event_id, document_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |
| `document_id` | path | string (uuid) | ✓ |  |

---

## `getDocuments`

Get Event Documents

**GET** `/api/v1/events/{event_id}/documents`

**Signature:** `lb.eventDocuments.getDocuments({ path: \{ event_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `event_id` | path | integer | ✓ |  |


**Returns:**

**Response:** `Array<string (uuid)>`

---
