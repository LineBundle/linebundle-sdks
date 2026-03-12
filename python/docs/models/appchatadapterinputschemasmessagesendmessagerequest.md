# AppChatAdapterInputSchemasMessageSendMessageRequest


## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `content`                   | *str*                       | :heavy_check_mark:          | Message content text        |
| `message_type`              | *Optional[str]*             | :heavy_minus_sign:          | Message type (text, system) |
| `metadata`                  | Dict[str, *Any*]            | :heavy_minus_sign:          | Additional metadata         |