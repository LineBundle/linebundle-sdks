# UpdateContactRequest

Request model for updating an existing contact.


## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `org_id`                              | *OptionalNullable[str]*               | :heavy_minus_sign:                    | Organization ID                       |
| `first_name`                          | *OptionalNullable[str]*               | :heavy_minus_sign:                    | First name                            |
| `last_name`                           | *OptionalNullable[str]*               | :heavy_minus_sign:                    | Last name                             |
| `middle_name`                         | *OptionalNullable[str]*               | :heavy_minus_sign:                    | Middle name                           |
| `nickname`                            | *OptionalNullable[str]*               | :heavy_minus_sign:                    | Nickname                              |
| `email`                               | *OptionalNullable[str]*               | :heavy_minus_sign:                    | Email address                         |
| `phone_primary`                       | *OptionalNullable[str]*               | :heavy_minus_sign:                    | Primary phone number                  |
| `phone_secondary`                     | *OptionalNullable[str]*               | :heavy_minus_sign:                    | Secondary phone number                |
| `phone_work`                          | *OptionalNullable[str]*               | :heavy_minus_sign:                    | Work phone number                     |
| `address_line1`                       | *OptionalNullable[str]*               | :heavy_minus_sign:                    | Address line 1                        |
| `address_line2`                       | *OptionalNullable[str]*               | :heavy_minus_sign:                    | Address line 2                        |
| `city`                                | *OptionalNullable[str]*               | :heavy_minus_sign:                    | City                                  |
| `state_province`                      | *OptionalNullable[str]*               | :heavy_minus_sign:                    | State or province                     |
| `postal_code`                         | *OptionalNullable[str]*               | :heavy_minus_sign:                    | Postal code                           |
| `country`                             | *OptionalNullable[str]*               | :heavy_minus_sign:                    | Country                               |
| `company`                             | *OptionalNullable[str]*               | :heavy_minus_sign:                    | Company name                          |
| `job_title`                           | *OptionalNullable[str]*               | :heavy_minus_sign:                    | Job title                             |
| `website`                             | *OptionalNullable[str]*               | :heavy_minus_sign:                    | Website URL                           |
| `notes`                               | *OptionalNullable[str]*               | :heavy_minus_sign:                    | Additional notes                      |
| `avatar_url`                          | *OptionalNullable[str]*               | :heavy_minus_sign:                    | Avatar URL                            |
| `linked_user_id`                      | *OptionalNullable[str]*               | :heavy_minus_sign:                    | Linked user ID                        |
| `is_favorite`                         | *OptionalNullable[bool]*              | :heavy_minus_sign:                    | Whether contact is marked as favorite |
| `tags`                                | List[*str*]                           | :heavy_minus_sign:                    | Tags for categorization               |