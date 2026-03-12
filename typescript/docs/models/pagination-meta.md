# PaginationMeta

## Example Usage

```typescript
import { PaginationMeta } from "openapi/models";

let value: PaginationMeta = {
  limit: 143888,
  offset: 501763,
  hasNext: true,
  hasPrev: false,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `total`                  | *number*                 | :heavy_minus_sign:       | Total number of items    |
| `limit`                  | *number*                 | :heavy_check_mark:       | Items per page           |
| `offset`                 | *number*                 | :heavy_check_mark:       | Offset of the first item |
| `hasNext`                | *boolean*                | :heavy_check_mark:       | Is there a next page     |
| `hasPrev`                | *boolean*                | :heavy_check_mark:       | Is there a previous page |
| `nextCursor`             | *string*                 | :heavy_minus_sign:       | Cursor for next page     |