# CreateRoomRequest

## Example Usage

```typescript
import { CreateRoomRequest } from "@linebundle-sdk/ts/models";

let value: CreateRoomRequest = {
  title: "<value>",
  description: "and fundraising versus remarkable louse whereas meh",
  visibility: 429156,
  placeType: "room",
  locationDescription: "<value>",
  capacity: 845713,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `title`                                           | *string*                                          | :heavy_check_mark:                                | Place title                                       |
| `description`                                     | *string*                                          | :heavy_check_mark:                                | Place description                                 |
| `visibility`                                      | *number*                                          | :heavy_check_mark:                                | Visibility level                                  |
| `keywords`                                        | *string*[]                                        | :heavy_minus_sign:                                | Keywords                                          |
| `placeType`                                       | *"room"*                                          | :heavy_check_mark:                                | Place type                                        |
| `locationDescription`                             | *string*                                          | :heavy_check_mark:                                | Physical location (e.g., 'Building 4, 2nd Floor') |
| `capacity`                                        | *number*                                          | :heavy_check_mark:                                | Room capacity                                     |
| `amenities`                                       | *string*[]                                        | :heavy_minus_sign:                                | Available amenities                               |