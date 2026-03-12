# AssistantResponse


## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *str*                                             | :heavy_check_mark:                                | Assistant ID                                      |
| `username`                                        | *str*                                             | :heavy_check_mark:                                | Assistant username                                |
| `is_ai_assistant`                                 | *bool*                                            | :heavy_check_mark:                                | Whether this is an AI assistant                   |
| `owner_id`                                        | *str*                                             | :heavy_check_mark:                                | Owner user ID                                     |
| `room_id`                                         | *OptionalNullable[str]*                           | :heavy_minus_sign:                                | Chat room ID for conversations with the assistant |