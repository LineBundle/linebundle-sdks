# AddMemberToRoomApiV1ChatRoomsRoomIdMembersPostRequest

## Example Usage

```typescript
import { AddMemberToRoomApiV1ChatRoomsRoomIdMembersPostRequest } from "openapi/models/operations";

let value: AddMemberToRoomApiV1ChatRoomsRoomIdMembersPostRequest = {
  roomId: "cd473d12-4851-430c-9ad9-acd841ba30b0",
  body: {
    userId: "15af8337-0d2c-4244-99a0-44e69279fb4e",
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `roomId`                                                      | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `body`                                                        | [models.AddMemberRequest](../../models/add-member-request.md) | :heavy_check_mark:                                            | N/A                                                           |