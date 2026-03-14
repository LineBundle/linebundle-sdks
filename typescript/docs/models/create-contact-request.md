# CreateContactRequest

Request model for creating a new contact.

## Example Usage

```typescript
import { CreateContactRequest } from "@linebundle-sdk/ts/models";

let value: CreateContactRequest = {};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `orgId`                               | *string*                              | :heavy_minus_sign:                    | Organization ID                       |
| `firstName`                           | *string*                              | :heavy_minus_sign:                    | First name                            |
| `lastName`                            | *string*                              | :heavy_minus_sign:                    | Last name                             |
| `middleName`                          | *string*                              | :heavy_minus_sign:                    | Middle name                           |
| `nickname`                            | *string*                              | :heavy_minus_sign:                    | Nickname                              |
| `email`                               | *string*                              | :heavy_minus_sign:                    | Email address                         |
| `phonePrimary`                        | *string*                              | :heavy_minus_sign:                    | Primary phone number                  |
| `phoneSecondary`                      | *string*                              | :heavy_minus_sign:                    | Secondary phone number                |
| `phoneWork`                           | *string*                              | :heavy_minus_sign:                    | Work phone number                     |
| `addressLine1`                        | *string*                              | :heavy_minus_sign:                    | Address line 1                        |
| `addressLine2`                        | *string*                              | :heavy_minus_sign:                    | Address line 2                        |
| `city`                                | *string*                              | :heavy_minus_sign:                    | City                                  |
| `stateProvince`                       | *string*                              | :heavy_minus_sign:                    | State or province                     |
| `postalCode`                          | *string*                              | :heavy_minus_sign:                    | Postal code                           |
| `country`                             | *string*                              | :heavy_minus_sign:                    | Country                               |
| `company`                             | *string*                              | :heavy_minus_sign:                    | Company name                          |
| `jobTitle`                            | *string*                              | :heavy_minus_sign:                    | Job title                             |
| `website`                             | *string*                              | :heavy_minus_sign:                    | Website URL                           |
| `notes`                               | *string*                              | :heavy_minus_sign:                    | Additional notes                      |
| `avatarUrl`                           | *string*                              | :heavy_minus_sign:                    | Avatar URL                            |
| `linkedUserId`                        | *string*                              | :heavy_minus_sign:                    | Linked user ID                        |
| `isFavorite`                          | *boolean*                             | :heavy_minus_sign:                    | Whether contact is marked as favorite |
| `tags`                                | *string*[]                            | :heavy_minus_sign:                    | Tags for categorization               |