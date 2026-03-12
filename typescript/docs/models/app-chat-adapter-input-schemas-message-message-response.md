# AppChatAdapterInputSchemasMessageMessageResponse

## Example Usage

```typescript
import { AppChatAdapterInputSchemasMessageMessageResponse } from "openapi/models";

let value: AppChatAdapterInputSchemasMessageMessageResponse = {
  id: "9d8f784e-0651-4fdc-8af3-1c7ecb8d446f",
  roomId: "74106201-e4c8-4065-954c-46a48def6259",
  senderId: "a7852412-c8b7-4a7e-800a-d2fcefa871dc",
  messageType: "<value>",
  content: "<value>",
  metadata: {
    "key": "<value>",
    "key1": "<value>",
  },
  createdAt: new Date("2026-12-03T22:22:26.189Z"),
  updatedAt: new Date("2026-01-04T10:09:32.674Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `roomId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `senderId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sender`                                                                                      | [models.SenderProfile](../models/sender-profile.md)                                           | :heavy_minus_sign:                                                                            | Sender profile information                                                                    |
| `messageType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `content`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |