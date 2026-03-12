# UpdateSpaceMemberRoleApiV1SpaceSpaceIdMembersUserIdPatchRequest

## Example Usage

```typescript
import { UpdateSpaceMemberRoleApiV1SpaceSpaceIdMembersUserIdPatchRequest } from "openapi/models/operations";

let value: UpdateSpaceMemberRoleApiV1SpaceSpaceIdMembersUserIdPatchRequest = {
  spaceId: 186642,
  userId: "<id>",
  body: {
    role: "space_viewer",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `spaceId`                                                                               | *number*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `userId`                                                                                | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `body`                                                                                  | [models.UpdateSpaceMemberRoleRequest](../../models/update-space-member-role-request.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |