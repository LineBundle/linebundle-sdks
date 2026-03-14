# InviteRead

Schema representing an organization invitation.

## Example Usage

```typescript
import { InviteRead } from "@linebundle-sdk/ts/models";

let value: InviteRead = {
  id: "<id>",
  orgId: "<id>",
  email: "Rickie_Nienow@hotmail.com",
  inviterId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Invitation ID                                                                                 |
| `orgId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Organization ID                                                                               |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Invitee email address                                                                         |
| `role`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Role to assign on acceptance                                                                  |
| `status`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Invitation status                                                                             |
| `inviterId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of user who sent invite                                                                    |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When invitation expires                                                                       |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | When invitation was created                                                                   |