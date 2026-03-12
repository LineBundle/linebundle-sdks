# PaginatedSpaceListResponseDTO

Paginated response for space list to support infinite scrolling


## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | List[[models.GetSpaceListResponseDTO](../models/getspacelistresponsedto.md)] | :heavy_check_mark:                                                           | List of spaces                                                               |
| `has_next`                                                                   | *bool*                                                                       | :heavy_check_mark:                                                           | Whether there are more items available                                       |
| `has_prev`                                                                   | *bool*                                                                       | :heavy_check_mark:                                                           | Whether there are previous items available                                   |
| `total_count`                                                                | *int*                                                                        | :heavy_check_mark:                                                           | Total number of spaces matching the query                                    |
| `next_cursor`                                                                | *OptionalNullable[int]*                                                      | :heavy_minus_sign:                                                           | Cursor for next page (space ID)                                              |
| `prev_cursor`                                                                | *OptionalNullable[int]*                                                      | :heavy_minus_sign:                                                           | Cursor for previous page (space ID)                                          |