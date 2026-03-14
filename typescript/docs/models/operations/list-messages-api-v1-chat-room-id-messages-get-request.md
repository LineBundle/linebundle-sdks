# ListMessagesApiV1ChatRoomIdMessagesGetRequest

## Example Usage

```typescript
import { ListMessagesApiV1ChatRoomIdMessagesGetRequest } from "@linebundle-sdk/ts/models/operations";

let value: ListMessagesApiV1ChatRoomIdMessagesGetRequest = {
  roomId: "a0d082fa-0060-4450-8648-19cd02181783",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `roomId`                                        | *string*                                        | :heavy_check_mark:                              | N/A                                             |
| `beforeId`                                      | *string*                                        | :heavy_minus_sign:                              | Cursor for pagination - messages before this ID |
| `limit`                                         | *number*                                        | :heavy_minus_sign:                              | Maximum number of messages to return            |