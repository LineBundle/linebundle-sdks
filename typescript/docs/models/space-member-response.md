# SpaceMemberResponse

Response model for space member information

## Example Usage

```typescript
import { SpaceMemberResponse } from "openapi/models";

let value: SpaceMemberResponse = {
  userId: "<id>",
  email: "Frida53@hotmail.com",
  role: "space_member",
  joinedAt: "<value>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `userId`                                    | *string*                                    | :heavy_check_mark:                          | User ID                                     |
| `email`                                     | *string*                                    | :heavy_check_mark:                          | User's email                                |
| `name`                                      | *string*                                    | :heavy_minus_sign:                          | User's display name                         |
| `role`                                      | [models.SpaceRole](../models/space-role.md) | :heavy_check_mark:                          | Space roles with hierarchical permissions   |
| `joinedAt`                                  | *string*                                    | :heavy_check_mark:                          | When the user joined the space              |
| `avatarUrl`                                 | *string*                                    | :heavy_minus_sign:                          | User's avatar URL                           |