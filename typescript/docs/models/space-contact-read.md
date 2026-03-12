# SpaceContactRead

Pydantic model for reading space contact data.

## Example Usage

```typescript
import { SpaceContactRead } from "openapi/models";

let value: SpaceContactRead = {
  id: 589344,
  spaceId: 900850,
  contactId: "e13d4dff-1a34-4443-b7eb-17ac83cb886f",
  createdAt: "1730373096795",
  updatedAt: "1735676917506",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *number*                                                   | :heavy_check_mark:                                         | Space contact relationship ID                              |
| `spaceId`                                                  | *number*                                                   | :heavy_check_mark:                                         | Space ID                                                   |
| `contactId`                                                | *string*                                                   | :heavy_check_mark:                                         | Contact ID                                                 |
| `createdAt`                                                | *string*                                                   | :heavy_check_mark:                                         | Creation timestamp                                         |
| `updatedAt`                                                | *string*                                                   | :heavy_check_mark:                                         | Last update timestamp                                      |
| `contact`                                                  | [models.SpaceContactInfo](../models/space-contact-info.md) | :heavy_minus_sign:                                         | Contact information                                        |