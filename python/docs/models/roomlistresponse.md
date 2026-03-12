# RoomListResponse


## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `rooms`                                                | List[[models.RoomResponse](../models/roomresponse.md)] | :heavy_check_mark:                                     | N/A                                                    |
| `next_cursor`                                          | *OptionalNullable[str]*                                | :heavy_minus_sign:                                     | Cursor for next page of results                        |
| `has_more`                                             | *Optional[bool]*                                       | :heavy_minus_sign:                                     | Whether there are more results available               |