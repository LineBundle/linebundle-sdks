# EventLocationFilter

Location-based filtering options for events.


## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `latitude`                                            | *OptionalNullable[float]*                             | :heavy_minus_sign:                                    | Center latitude for proximity search                  |
| `longitude`                                           | *OptionalNullable[float]*                             | :heavy_minus_sign:                                    | Center longitude for proximity search                 |
| `radius_km`                                           | *OptionalNullable[float]*                             | :heavy_minus_sign:                                    | Search radius in kilometers (max Earth circumference) |
| `has_location`                                        | *OptionalNullable[bool]*                              | :heavy_minus_sign:                                    | Filter events with/without location coordinates       |
| `address_contains`                                    | *OptionalNullable[str]*                               | :heavy_minus_sign:                                    | Filter by address text (case-insensitive contains)    |