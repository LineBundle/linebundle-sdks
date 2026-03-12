# ContactListResponse

Response model for a list of contacts.

## Example Usage

```typescript
import { ContactListResponse } from "openapi/models";

let value: ContactListResponse = {
  contacts: [],
  total: 941622,
  limit: 350288,
  offset: 364776,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `contacts`                                                | [models.ContactResponse](../models/contact-response.md)[] | :heavy_check_mark:                                        | List of contacts                                          |
| `total`                                                   | *number*                                                  | :heavy_check_mark:                                        | Total number of contacts                                  |
| `limit`                                                   | *number*                                                  | :heavy_check_mark:                                        | Page size limit                                           |
| `offset`                                                  | *number*                                                  | :heavy_check_mark:                                        | Page offset                                               |