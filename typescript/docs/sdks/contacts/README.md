# Contacts

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `list` | GET | `/api/v1/contacts` | List Contacts |
| `create` | POST | `/api/v1/contacts` | Create Contact |
| `search` | GET | `/api/v1/contacts/search` | Search Contacts |
| `get` | GET | `/api/v1/contacts/{contact_id}` | Get Contact |
| `update` | PUT | `/api/v1/contacts/{contact_id}` | Update Contact |
| `delete` | DELETE | `/api/v1/contacts/{contact_id}` | Delete Contact |
| `toggleFavorite` | PATCH | `/api/v1/contacts/{contact_id}/favorite` | Toggle Favorite |

---

## `list`

List Contacts

**GET** `/api/v1/contacts`

**Signature:** `lb.contacts.list({ query?: \{ limit, offset, search, is_favorite, tags \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `limit` | query | integer |  | Maximum number of contacts to return |
| `offset` | query | integer |  | Number of contacts to skip |
| `search` | query | string | null |  | Search term for name/email |
| `is_favorite` | query | boolean | null |  | Filter by favorite status |
| `tags` | query | Array<string> | null |  | Filter by tags |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `contacts` | Array<object> | List of contacts |
| `total` | integer | Total number of contacts |
| `limit` | integer | Page size limit |
| `offset` | integer | Page offset |

---

## `create`

Create Contact

**POST** `/api/v1/contacts`

**Signature:** `lb.contacts.create({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `org_id` | body | string (uuid) | null |  | Organization ID |
| `first_name` | body | string | null |  | First name |
| `last_name` | body | string | null |  | Last name |
| `middle_name` | body | string | null |  | Middle name |
| `nickname` | body | string | null |  | Nickname |
| `email` | body | string (email) | null |  | Email address |
| `phone_primary` | body | string | null |  | Primary phone number |
| `phone_secondary` | body | string | null |  | Secondary phone number |
| `phone_work` | body | string | null |  | Work phone number |
| `address_line1` | body | string | null |  | Address line 1 |
| `address_line2` | body | string | null |  | Address line 2 |
| `city` | body | string | null |  | City |
| `state_province` | body | string | null |  | State or province |
| `postal_code` | body | string | null |  | Postal code |
| `country` | body | string | null |  | Country |
| `company` | body | string | null |  | Company name |
| `job_title` | body | string | null |  | Job title |
| `website` | body | string | null |  | Website URL |
| `notes` | body | string | null |  | Additional notes |
| `avatar_url` | body | string | null |  | Avatar URL |
| `linked_user_id` | body | string | null |  | Linked user ID |
| `is_favorite` | body | boolean |  | Whether contact is marked as favorite |
| `tags` | body | Array<string> | null |  | Tags for categorization |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) | Contact ID |
| `owner_id` | string (uuid) | Owner user ID |
| `org_id` | string (uuid) | null | Organization ID |
| `first_name` | string | null | First name |
| `last_name` | string | null | Last name |
| `middle_name` | string | null | Middle name |
| `nickname` | string | null | Nickname |
| `email` | string | null | Email address |
| `phone_primary` | string | null | Primary phone number |
| `phone_secondary` | string | null | Secondary phone number |
| `phone_work` | string | null | Work phone number |
| `address_line1` | string | null | Address line 1 |
| `address_line2` | string | null | Address line 2 |
| `city` | string | null | City |
| `state_province` | string | null | State or province |
| `postal_code` | string | null | Postal code |
| `country` | string | null | Country |
| `company` | string | null | Company name |
| `job_title` | string | null | Job title |
| `website` | string | null | Website URL |
| `notes` | string | null | Additional notes |
| `avatar_url` | string | null | Avatar URL |
| `linked_user_id` | string (uuid) | null | Linked user ID |
| `is_favorite` | boolean | Whether contact is marked as favorite |
| `tags` | Array<string> | null | Tags for categorization |
| `created_at` | string (date-time) | Creation timestamp |
| `updated_at` | string (date-time) | Last update timestamp |

---

## `search`

Search Contacts

**GET** `/api/v1/contacts/search`

**Signature:** `lb.contacts.search({ query?: \{ query, limit, offset \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `query` | query | string | ✓ | Search query |
| `limit` | query | integer |  | Maximum number of results to return |
| `offset` | query | integer |  | Number of results to skip |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `contacts` | Array<object> | Search results |
| `query` | string | Search query |
| `total` | integer | Total number of results |

---

## `get`

Get Contact

**GET** `/api/v1/contacts/{contact_id}`

**Signature:** `lb.contacts.get({ path: \{ contact_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `contact_id` | path | string (uuid) | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) | Contact ID |
| `owner_id` | string (uuid) | Owner user ID |
| `org_id` | string (uuid) | null | Organization ID |
| `first_name` | string | null | First name |
| `last_name` | string | null | Last name |
| `middle_name` | string | null | Middle name |
| `nickname` | string | null | Nickname |
| `email` | string | null | Email address |
| `phone_primary` | string | null | Primary phone number |
| `phone_secondary` | string | null | Secondary phone number |
| `phone_work` | string | null | Work phone number |
| `address_line1` | string | null | Address line 1 |
| `address_line2` | string | null | Address line 2 |
| `city` | string | null | City |
| `state_province` | string | null | State or province |
| `postal_code` | string | null | Postal code |
| `country` | string | null | Country |
| `company` | string | null | Company name |
| `job_title` | string | null | Job title |
| `website` | string | null | Website URL |
| `notes` | string | null | Additional notes |
| `avatar_url` | string | null | Avatar URL |
| `linked_user_id` | string (uuid) | null | Linked user ID |
| `is_favorite` | boolean | Whether contact is marked as favorite |
| `tags` | Array<string> | null | Tags for categorization |
| `created_at` | string (date-time) | Creation timestamp |
| `updated_at` | string (date-time) | Last update timestamp |

---

## `update`

Update Contact

**PUT** `/api/v1/contacts/{contact_id}`

**Signature:** `lb.contacts.update({ path: \{ contact_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `contact_id` | path | string (uuid) | ✓ |  |
| `org_id` | body | string (uuid) | null |  | Organization ID |
| `first_name` | body | string | null |  | First name |
| `last_name` | body | string | null |  | Last name |
| `middle_name` | body | string | null |  | Middle name |
| `nickname` | body | string | null |  | Nickname |
| `email` | body | string (email) | null |  | Email address |
| `phone_primary` | body | string | null |  | Primary phone number |
| `phone_secondary` | body | string | null |  | Secondary phone number |
| `phone_work` | body | string | null |  | Work phone number |
| `address_line1` | body | string | null |  | Address line 1 |
| `address_line2` | body | string | null |  | Address line 2 |
| `city` | body | string | null |  | City |
| `state_province` | body | string | null |  | State or province |
| `postal_code` | body | string | null |  | Postal code |
| `country` | body | string | null |  | Country |
| `company` | body | string | null |  | Company name |
| `job_title` | body | string | null |  | Job title |
| `website` | body | string | null |  | Website URL |
| `notes` | body | string | null |  | Additional notes |
| `avatar_url` | body | string | null |  | Avatar URL |
| `linked_user_id` | body | string | null |  | Linked user ID |
| `is_favorite` | body | boolean | null |  | Whether contact is marked as favorite |
| `tags` | body | Array<string> | null |  | Tags for categorization |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) | Contact ID |
| `owner_id` | string (uuid) | Owner user ID |
| `org_id` | string (uuid) | null | Organization ID |
| `first_name` | string | null | First name |
| `last_name` | string | null | Last name |
| `middle_name` | string | null | Middle name |
| `nickname` | string | null | Nickname |
| `email` | string | null | Email address |
| `phone_primary` | string | null | Primary phone number |
| `phone_secondary` | string | null | Secondary phone number |
| `phone_work` | string | null | Work phone number |
| `address_line1` | string | null | Address line 1 |
| `address_line2` | string | null | Address line 2 |
| `city` | string | null | City |
| `state_province` | string | null | State or province |
| `postal_code` | string | null | Postal code |
| `country` | string | null | Country |
| `company` | string | null | Company name |
| `job_title` | string | null | Job title |
| `website` | string | null | Website URL |
| `notes` | string | null | Additional notes |
| `avatar_url` | string | null | Avatar URL |
| `linked_user_id` | string (uuid) | null | Linked user ID |
| `is_favorite` | boolean | Whether contact is marked as favorite |
| `tags` | Array<string> | null | Tags for categorization |
| `created_at` | string (date-time) | Creation timestamp |
| `updated_at` | string (date-time) | Last update timestamp |

---

## `delete`

Delete Contact

**DELETE** `/api/v1/contacts/{contact_id}`

**Signature:** `lb.contacts.delete({ path: \{ contact_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `contact_id` | path | string (uuid) | ✓ |  |

---

## `toggleFavorite`

Toggle Favorite

**PATCH** `/api/v1/contacts/{contact_id}/favorite`

**Signature:** `lb.contacts.toggleFavorite({ path: \{ contact_id \}, body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `contact_id` | path | string (uuid) | ✓ |  |
| `is_favorite` | body | boolean | null |  | New favorite status |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) | Contact ID |
| `owner_id` | string (uuid) | Owner user ID |
| `org_id` | string (uuid) | null | Organization ID |
| `first_name` | string | null | First name |
| `last_name` | string | null | Last name |
| `middle_name` | string | null | Middle name |
| `nickname` | string | null | Nickname |
| `email` | string | null | Email address |
| `phone_primary` | string | null | Primary phone number |
| `phone_secondary` | string | null | Secondary phone number |
| `phone_work` | string | null | Work phone number |
| `address_line1` | string | null | Address line 1 |
| `address_line2` | string | null | Address line 2 |
| `city` | string | null | City |
| `state_province` | string | null | State or province |
| `postal_code` | string | null | Postal code |
| `country` | string | null | Country |
| `company` | string | null | Company name |
| `job_title` | string | null | Job title |
| `website` | string | null | Website URL |
| `notes` | string | null | Additional notes |
| `avatar_url` | string | null | Avatar URL |
| `linked_user_id` | string (uuid) | null | Linked user ID |
| `is_favorite` | boolean | Whether contact is marked as favorite |
| `tags` | Array<string> | null | Tags for categorization |
| `created_at` | string (date-time) | Creation timestamp |
| `updated_at` | string (date-time) | Last update timestamp |

---
