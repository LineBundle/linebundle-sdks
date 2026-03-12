# CreateRoomRequest


## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `title`                                           | *str*                                             | :heavy_check_mark:                                | Place title                                       |
| `description`                                     | *str*                                             | :heavy_check_mark:                                | Place description                                 |
| `visibility`                                      | *int*                                             | :heavy_check_mark:                                | Visibility level                                  |
| `keywords`                                        | List[*str*]                                       | :heavy_minus_sign:                                | Keywords                                          |
| `place_type`                                      | *Literal["room"]*                                 | :heavy_check_mark:                                | Place type                                        |
| `location_description`                            | *str*                                             | :heavy_check_mark:                                | Physical location (e.g., 'Building 4, 2nd Floor') |
| `capacity`                                        | *int*                                             | :heavy_check_mark:                                | Room capacity                                     |
| `amenities`                                       | List[*str*]                                       | :heavy_minus_sign:                                | Available amenities                               |