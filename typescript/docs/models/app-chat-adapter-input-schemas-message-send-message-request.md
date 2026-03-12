# AppChatAdapterInputSchemasMessageSendMessageRequest

## Example Usage

```typescript
import { AppChatAdapterInputSchemasMessageSendMessageRequest } from "openapi/models";

let value: AppChatAdapterInputSchemasMessageSendMessageRequest = {
  content: "<value>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `content`                   | *string*                    | :heavy_check_mark:          | Message content text        |
| `messageType`               | *string*                    | :heavy_minus_sign:          | Message type (text, system) |
| `metadata`                  | Record<string, *any*>       | :heavy_minus_sign:          | Additional metadata         |