# SpaceContacts

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `getContactsBySpace` | GET | `/api/v1/spaces/{space_id}/contacts` | Get Space Contacts |
| `add` | POST | `/api/v1/spaces/{space_id}/contacts` | Add Contact To Space |
| `getSpacesByContact` | GET | `/api/v1/contacts/{contact_id}/spaces` | Get Contact Spaces |
| `get` | GET | `/api/v1/space-contacts/{space_contact_id}` | Get Space Contact |
| `remove` | DELETE | `/api/v1/space-contacts/{space_contact_id}` | Remove Contact From Space |
| `addBulk` | POST | `/api/v1/spaces/{space_id}/contacts/bulk` | Bulk Add Contacts To Space |
| `bulkDelete` | DELETE | `/api/v1/spaces/{space_id}/contacts/bulk` | Bulk Remove Contacts From Space |
| `count` | GET | `/api/v1/spaces/{space_id}/contacts/count` | Count Space Contacts |

---

## `getContactsBySpace`

Get Space Contacts

**GET** `/api/v1/spaces/{space_id}/contacts`

**Signature:** `lb.spaceContacts.getContactsBySpace({ path: \{ space_id \}, query?: \{ limit, offset \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `limit` | query | integer |  |  |
| `offset` | query | integer |  |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `contacts` | Array<object> | List of space contacts |
| `total` | integer | Total number of contacts |

---

## `add`

Add Contact To Space

**POST** `/api/v1/spaces/{space_id}/contacts`

**Signature:** `lb.spaceContacts.add({ path: \{ space_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |
| `contact_id` | body | string (uuid) | ✓ | Contact ID to add to space |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Space contact relationship ID |
| `space_id` | integer | Space ID |
| `contact_id` | string (uuid) | Contact ID |
| `created_at` | string | Creation timestamp |
| `updated_at` | string | Last update timestamp |
| `contact` | object | null | Contact information |

---

## `getSpacesByContact`

Get Contact Spaces

**GET** `/api/v1/contacts/{contact_id}/spaces`

**Signature:** `lb.spaceContacts.getSpacesByContact({ path: \{ contact_id \}, query?: \{ limit, offset \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `contact_id` | path | string (uuid) | ✓ |  |
| `limit` | query | integer |  |  |
| `offset` | query | integer |  |  |


**Returns:**

**Response:** `Array<object>`

---

## `get`

Get Space Contact

**GET** `/api/v1/space-contacts/{space_contact_id}`

**Signature:** `lb.spaceContacts.get({ path: \{ space_contact_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_contact_id` | path | integer | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | integer | Space contact relationship ID |
| `space_id` | integer | Space ID |
| `contact_id` | string (uuid) | Contact ID |
| `created_at` | string | Creation timestamp |
| `updated_at` | string | Last update timestamp |
| `contact` | object | null | Contact information |

---

## `remove`

Remove Contact From Space

**DELETE** `/api/v1/space-contacts/{space_contact_id}`

**Signature:** `lb.spaceContacts.remove({ path: \{ space_contact_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_contact_id` | path | integer | ✓ |  |


**Returns:**

**Response:** `object`

---

## `addBulk`

Bulk Add Contacts To Space

**POST** `/api/v1/spaces/{space_id}/contacts/bulk`

**Signature:** `lb.spaceContacts.addBulk({ path: \{ space_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |


**Returns:**

**Response:** `Array<object>`

---

## `bulkDelete`

Bulk Remove Contacts From Space

**DELETE** `/api/v1/spaces/{space_id}/contacts/bulk`

**Signature:** `lb.spaceContacts.bulkDelete({ path: \{ space_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |


**Returns:**

**Response:** `object`

---

## `count`

Count Space Contacts

**GET** `/api/v1/spaces/{space_id}/contacts/count`

**Signature:** `lb.spaceContacts.count({ path: \{ space_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `space_id` | path | integer | ✓ |  |


**Returns:**

**Response:** `object`

---
