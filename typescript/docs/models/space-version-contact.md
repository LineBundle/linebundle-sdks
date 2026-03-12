# SpaceVersionContact

## Example Usage

```typescript
import { SpaceVersionContact } from "openapi/models";

let value: SpaceVersionContact = {
  id: 612739,
  contactId: 529541,
  contact: {
    id: "8da3e0a5-9304-4ba3-814a-02391f85cd4a",
    ownerId: "bf2fe0b2-94f3-4c21-9788-15a25c9832e2",
    isFavorite: false,
    createdAt: new Date("2025-03-14T23:44:58.273Z"),
    updatedAt: new Date("2025-10-29T06:45:57.630Z"),
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `id`                                                    | *number*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `contactId`                                             | *number*                                                | :heavy_check_mark:                                      | N/A                                                     |
| `contact`                                               | [models.ContactResponse](../models/contact-response.md) | :heavy_check_mark:                                      | N/A                                                     |