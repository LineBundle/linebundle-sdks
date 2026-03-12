# ContactSearchResponse

Response model for contact search results.

## Example Usage

```typescript
import { ContactSearchResponse } from "openapi/models";

let value: ContactSearchResponse = {
  contacts: [
    {
      id: "5bc26337-b25c-4c94-bfb5-8a4c982771ff",
      ownerId: "94330937-d6fb-4bf8-a999-90af37e349bc",
      isFavorite: true,
      createdAt: new Date("2026-08-29T18:14:56.059Z"),
      updatedAt: new Date("2024-04-18T03:13:26.948Z"),
    },
  ],
  query: "<value>",
  total: 434827,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `contacts`                                                | [models.ContactResponse](../models/contact-response.md)[] | :heavy_check_mark:                                        | Search results                                            |
| `query`                                                   | *string*                                                  | :heavy_check_mark:                                        | Search query                                              |
| `total`                                                   | *number*                                                  | :heavy_check_mark:                                        | Total number of results                                   |