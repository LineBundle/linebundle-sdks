# EventFilterRequest

Complete filter request for POST endpoint.


## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `filters`                                                                              | [OptionalNullable[models.EventAdvancedFilters]](../models/eventadvancedfilters.md)     | :heavy_minus_sign:                                                                     | Advanced filters                                                                       |
| `sort`                                                                                 | [OptionalNullable[models.EventSortOptions]](../models/eventsortoptions.md)             | :heavy_minus_sign:                                                                     | Sort options                                                                           |
| `pagination`                                                                           | [OptionalNullable[models.EventPaginationOptions]](../models/eventpaginationoptions.md) | :heavy_minus_sign:                                                                     | Pagination options                                                                     |