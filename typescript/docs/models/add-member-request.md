# AddMemberRequest

## Example Usage

```typescript
import { AddMemberRequest } from "@linebundle-sdk/ts/models";

let value: AddMemberRequest = {
  userId: "5ca10b04-68fd-4404-a1ad-2eef91b5bc67",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `userId`                           | *string*                           | :heavy_check_mark:                 | User ID to add to room             |
| `role`                             | *string*                           | :heavy_minus_sign:                 | Member role (member, admin, owner) |