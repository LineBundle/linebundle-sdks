# Contacts

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/contacts` | List contacts |
| `create` | POST | `/api/v1/contacts` | Create a contact |
| `search` | GET | `/api/v1/contacts/search` | Search contacts |
| `delete` | DELETE | `/api/v1/contacts/{id}` | Delete a contact |
| `get` | GET | `/api/v1/contacts/{id}` | Get a contact |
| `update` | PUT | `/api/v1/contacts/{id}` | Update a contact |
| `toggleFavorite` | PATCH | `/api/v1/contacts/{id}/favorite` | Toggle contact favorite |

---

## `list`

List contacts

**GET** `/api/v1/contacts`

**Signature:** `lb.contacts.list({ query?: \{ page, size, search, sort_by, sort_dir, is_favorite \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `page` | query | integer |  | Page number (1-based) |
| `size` | query | integer |  | Items per page |
| `search` | query | string |  | Search term for name/email/company |
| `sort_by` | query | string |  | Field to sort by |
| `sort_dir` | query | `"asc"` | `"desc"` |  | Sort direction |
| `is_favorite` | query | `"true"` | `"false"` | `""` |  | Filter by favorite status |


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

Create a contact

**POST** `/api/v1/contacts`

**Signature:** `lb.contacts.create({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `address_line1` | body | string |  | Address line 1 |
| `address_line2` | body | string |  | Address line 2 |
| `avatar_url` | body | string |  | Avatar URL |
| `city` | body | string |  | City |
| `company` | body | string |  | Company |
| `country` | body | string |  | Country |
| `email` | body | string |  | Email |
| `first_name` | body | string |  | First name |
| `is_favorite` | body | boolean | ✓ | Favorite flag |
| `job_title` | body | string |  | Job title |
| `last_name` | body | string |  | Last name |
| `linked_user_id` | body | string |  | Linked user ID |
| `middle_name` | body | string |  | Middle name |
| `nickname` | body | string |  | Nickname |
| `notes` | body | string |  | Notes |
| `phone_primary` | body | string |  | Primary phone |
| `phone_secondary` | body | string |  | Secondary phone |
| `phone_work` | body | string |  | Work phone |
| `postal_code` | body | string |  | Postal code |
| `state_province` | body | string |  | State/Province |
| `tags` | body | ['array', 'null'] |  | Tags |
| `website` | body | string |  | Website URL |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `address_line1` | ['string', 'null'] | Address line 1 |
| `address_line2` | ['string', 'null'] | Address line 2 |
| `avatar_url` | ['string', 'null'] | Avatar URL |
| `city` | ['string', 'null'] | City |
| `company` | ['string', 'null'] | Company |
| `country` | ['string', 'null'] | Country |
| `created_at` | string (date-time) | Created timestamp |
| `email` | ['string', 'null'] | Email address |
| `first_name` | ['string', 'null'] | First name |
| `id` | string | Contact ID |
| `is_favorite` | boolean | Marked as favorite |
| `job_title` | ['string', 'null'] | Job title |
| `last_name` | ['string', 'null'] | Last name |
| `linked_user_id` | string | Linked system user ID |
| `middle_name` | ['string', 'null'] | Middle name |
| `nickname` | ['string', 'null'] | Nickname |
| `notes` | ['string', 'null'] | Notes |
| `org_id` | string | Organization ID (null = personal) |
| `owner_id` | string | Owner user ID |
| `phone_primary` | ['string', 'null'] | Primary phone |
| `phone_secondary` | ['string', 'null'] | Secondary phone |
| `phone_work` | ['string', 'null'] | Work phone |
| `postal_code` | ['string', 'null'] | Postal code |
| `state_province` | ['string', 'null'] | State/Province |
| `tags` | ['array', 'null'] | Tags |
| `updated_at` | string (date-time) | Updated timestamp |
| `website` | ['string', 'null'] | Website URL |

---

## `search`

Search contacts

**GET** `/api/v1/contacts/search`

**Signature:** `lb.contacts.search({ query?: \{ query, limit \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `query` | query | string |  | Search query |
| `limit` | query | integer |  | Max results |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `items` | ['array', 'null'] | Search results |
| `query` | string | Search query used |
| `total` | integer | Total matching results |

---

## `delete`

Delete a contact

**DELETE** `/api/v1/contacts/{id}`

**Signature:** `lb.contacts.delete({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | string | ✓ | Contact ID |

---

## `get`

Get a contact

**GET** `/api/v1/contacts/{id}`

**Signature:** `lb.contacts.get({ path: \{ id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | string | ✓ | Contact ID |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `address_line1` | ['string', 'null'] | Address line 1 |
| `address_line2` | ['string', 'null'] | Address line 2 |
| `avatar_url` | ['string', 'null'] | Avatar URL |
| `city` | ['string', 'null'] | City |
| `company` | ['string', 'null'] | Company |
| `country` | ['string', 'null'] | Country |
| `created_at` | string (date-time) | Created timestamp |
| `email` | ['string', 'null'] | Email address |
| `first_name` | ['string', 'null'] | First name |
| `id` | string | Contact ID |
| `is_favorite` | boolean | Marked as favorite |
| `job_title` | ['string', 'null'] | Job title |
| `last_name` | ['string', 'null'] | Last name |
| `linked_user_id` | string | Linked system user ID |
| `middle_name` | ['string', 'null'] | Middle name |
| `nickname` | ['string', 'null'] | Nickname |
| `notes` | ['string', 'null'] | Notes |
| `org_id` | string | Organization ID (null = personal) |
| `owner_id` | string | Owner user ID |
| `phone_primary` | ['string', 'null'] | Primary phone |
| `phone_secondary` | ['string', 'null'] | Secondary phone |
| `phone_work` | ['string', 'null'] | Work phone |
| `postal_code` | ['string', 'null'] | Postal code |
| `state_province` | ['string', 'null'] | State/Province |
| `tags` | ['array', 'null'] | Tags |
| `updated_at` | string (date-time) | Updated timestamp |
| `website` | ['string', 'null'] | Website URL |

---

## `update`

Update a contact

**PUT** `/api/v1/contacts/{id}`

**Signature:** `lb.contacts.update({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | string | ✓ | Contact ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `address_line1` | body | string |  | Address line 1 |
| `address_line2` | body | string |  | Address line 2 |
| `avatar_url` | body | string |  | Avatar URL |
| `city` | body | string |  | City |
| `company` | body | string |  | Company |
| `country` | body | string |  | Country |
| `email` | body | string |  | Email |
| `first_name` | body | string |  | First name |
| `is_favorite` | body | boolean | ✓ | Favorite flag |
| `job_title` | body | string |  | Job title |
| `last_name` | body | string |  | Last name |
| `linked_user_id` | body | string |  | Linked user ID |
| `middle_name` | body | string |  | Middle name |
| `nickname` | body | string |  | Nickname |
| `notes` | body | string |  | Notes |
| `phone_primary` | body | string |  | Primary phone |
| `phone_secondary` | body | string |  | Secondary phone |
| `phone_work` | body | string |  | Work phone |
| `postal_code` | body | string |  | Postal code |
| `state_province` | body | string |  | State/Province |
| `tags` | body | ['array', 'null'] |  | Tags |
| `website` | body | string |  | Website URL |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `address_line1` | ['string', 'null'] | Address line 1 |
| `address_line2` | ['string', 'null'] | Address line 2 |
| `avatar_url` | ['string', 'null'] | Avatar URL |
| `city` | ['string', 'null'] | City |
| `company` | ['string', 'null'] | Company |
| `country` | ['string', 'null'] | Country |
| `created_at` | string (date-time) | Created timestamp |
| `email` | ['string', 'null'] | Email address |
| `first_name` | ['string', 'null'] | First name |
| `id` | string | Contact ID |
| `is_favorite` | boolean | Marked as favorite |
| `job_title` | ['string', 'null'] | Job title |
| `last_name` | ['string', 'null'] | Last name |
| `linked_user_id` | string | Linked system user ID |
| `middle_name` | ['string', 'null'] | Middle name |
| `nickname` | ['string', 'null'] | Nickname |
| `notes` | ['string', 'null'] | Notes |
| `org_id` | string | Organization ID (null = personal) |
| `owner_id` | string | Owner user ID |
| `phone_primary` | ['string', 'null'] | Primary phone |
| `phone_secondary` | ['string', 'null'] | Secondary phone |
| `phone_work` | ['string', 'null'] | Work phone |
| `postal_code` | ['string', 'null'] | Postal code |
| `state_province` | ['string', 'null'] | State/Province |
| `tags` | ['array', 'null'] | Tags |
| `updated_at` | string (date-time) | Updated timestamp |
| `website` | ['string', 'null'] | Website URL |

---

## `toggleFavorite`

Toggle contact favorite

**PATCH** `/api/v1/contacts/{id}/favorite`

**Signature:** `lb.contacts.toggleFavorite({ path: \{ id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `id` | path | string | ✓ | Contact ID |
| `$schema` | body | string (uri) |  | A URL to the JSON Schema for this object. |
| `is_favorite` | body | boolean | ✓ | Favorite flag |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `$schema` | string (uri) | A URL to the JSON Schema for this object. |
| `address_line1` | ['string', 'null'] | Address line 1 |
| `address_line2` | ['string', 'null'] | Address line 2 |
| `avatar_url` | ['string', 'null'] | Avatar URL |
| `city` | ['string', 'null'] | City |
| `company` | ['string', 'null'] | Company |
| `country` | ['string', 'null'] | Country |
| `created_at` | string (date-time) | Created timestamp |
| `email` | ['string', 'null'] | Email address |
| `first_name` | ['string', 'null'] | First name |
| `id` | string | Contact ID |
| `is_favorite` | boolean | Marked as favorite |
| `job_title` | ['string', 'null'] | Job title |
| `last_name` | ['string', 'null'] | Last name |
| `linked_user_id` | string | Linked system user ID |
| `middle_name` | ['string', 'null'] | Middle name |
| `nickname` | ['string', 'null'] | Nickname |
| `notes` | ['string', 'null'] | Notes |
| `org_id` | string | Organization ID (null = personal) |
| `owner_id` | string | Owner user ID |
| `phone_primary` | ['string', 'null'] | Primary phone |
| `phone_secondary` | ['string', 'null'] | Secondary phone |
| `phone_work` | ['string', 'null'] | Work phone |
| `postal_code` | ['string', 'null'] | Postal code |
| `state_province` | ['string', 'null'] | State/Province |
| `tags` | ['array', 'null'] | Tags |
| `updated_at` | string (date-time) | Updated timestamp |
| `website` | ['string', 'null'] | Website URL |

---
