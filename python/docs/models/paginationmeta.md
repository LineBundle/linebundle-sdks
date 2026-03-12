# PaginationMeta


## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `total`                  | *OptionalNullable[int]*  | :heavy_minus_sign:       | Total number of items    |
| `limit`                  | *int*                    | :heavy_check_mark:       | Items per page           |
| `offset`                 | *int*                    | :heavy_check_mark:       | Offset of the first item |
| `has_next`               | *bool*                   | :heavy_check_mark:       | Is there a next page     |
| `has_prev`               | *bool*                   | :heavy_check_mark:       | Is there a previous page |
| `next_cursor`            | *OptionalNullable[str]*  | :heavy_minus_sign:       | Cursor for next page     |