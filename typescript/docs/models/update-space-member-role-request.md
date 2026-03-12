# UpdateSpaceMemberRoleRequest

Request model for updating a space member's role

## Example Usage

```typescript
import { UpdateSpaceMemberRoleRequest } from "openapi/models";

let value: UpdateSpaceMemberRoleRequest = {
  role: "space_member",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `role`                                      | [models.SpaceRole](../models/space-role.md) | :heavy_check_mark:                          | Space roles with hierarchical permissions   |