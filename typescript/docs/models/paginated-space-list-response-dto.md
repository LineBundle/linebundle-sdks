# PaginatedSpaceListResponseDTO

Paginated response for space list to support infinite scrolling

## Example Usage

```typescript
import { PaginatedSpaceListResponseDTO } from "@linebundle-sdk/ts/models";

let value: PaginatedSpaceListResponseDTO = {
  items: [
    {
      id: 435082,
      title: "<value>",
      description: "until gadzooks selfishly after like openly never",
      createdAt: "1729458556037",
      updatedAt: "1735680262071",
      timezone: "Europe/Luxembourg",
    },
  ],
  hasNext: true,
  hasPrev: false,
  totalCount: 986118,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [models.GetSpaceListResponseDTO](../models/get-space-list-response-dto.md)[] | :heavy_check_mark:                                                           | List of spaces                                                               |
| `hasNext`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | Whether there are more items available                                       |
| `hasPrev`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | Whether there are previous items available                                   |
| `totalCount`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | Total number of spaces matching the query                                    |
| `nextCursor`                                                                 | *number*                                                                     | :heavy_minus_sign:                                                           | Cursor for next page (space ID)                                              |
| `prevCursor`                                                                 | *number*                                                                     | :heavy_minus_sign:                                                           | Cursor for previous page (space ID)                                          |