# SendMessageApiV1AiSessionsSessionIdMessagesPostRequest

## Example Usage

```typescript
import { SendMessageApiV1AiSessionsSessionIdMessagesPostRequest } from "@linebundle-sdk/ts/models/operations";

let value: SendMessageApiV1AiSessionsSessionIdMessagesPostRequest = {
  sessionId: "e68dc60a-5aa7-49bd-9692-91655192e228",
  body: {
    message: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `sessionId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |
| `body`                                                                                                                                        | [models.AppAiAgentAdapterInputApiV1SchemasSendMessageRequest](../../models/app-ai-agent-adapter-input-api-v1-schemas-send-message-request.md) | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |