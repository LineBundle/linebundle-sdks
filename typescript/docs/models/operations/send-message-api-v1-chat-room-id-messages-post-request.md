# SendMessageApiV1ChatRoomIdMessagesPostRequest

## Example Usage

```typescript
import { SendMessageApiV1ChatRoomIdMessagesPostRequest } from "@linebundle-sdk/ts/models/operations";

let value: SendMessageApiV1ChatRoomIdMessagesPostRequest = {
  roomId: "15046bb4-bc7e-4bb3-9e60-2b39d3a751f6",
  body: {
    content: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `roomId`                                                                                                                                  | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `body`                                                                                                                                    | [models.AppChatAdapterInputSchemasMessageSendMessageRequest](../../models/app-chat-adapter-input-schemas-message-send-message-request.md) | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |