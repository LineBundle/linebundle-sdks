# AppAiAgentAdapterInputApiV1SchemasSendMessageRequest

## Example Usage

```typescript
import { AppAiAgentAdapterInputApiV1SchemasSendMessageRequest } from "openapi/models";

let value: AppAiAgentAdapterInputApiV1SchemasSendMessageRequest = {
  message: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `message`                                      | *string*                                       | :heavy_check_mark:                             | User message to send to the AI agent           |
| `stream`                                       | *boolean*                                      | :heavy_minus_sign:                             | Enable streaming response (WebSocket required) |