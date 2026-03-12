# CreateGroupRoomRequest


## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `name`                                                        | *str*                                                         | :heavy_check_mark:                                            | Group chat name                                               |
| `description`                                                 | *OptionalNullable[str]*                                       | :heavy_minus_sign:                                            | Group chat description                                        |
| `visibility`                                                  | *Optional[int]*                                               | :heavy_minus_sign:                                            | Visibility level (10=public, 20=private, 30=org, 40=personal) |