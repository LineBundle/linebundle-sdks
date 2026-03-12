# ListMessagesAPIV1ChatRoomIDMessagesGetRequest


## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `room_id`                                       | *str*                                           | :heavy_check_mark:                              | N/A                                             |
| `before_id`                                     | *OptionalNullable[str]*                         | :heavy_minus_sign:                              | Cursor for pagination - messages before this ID |
| `limit`                                         | *Optional[int]*                                 | :heavy_minus_sign:                              | Maximum number of messages to return            |