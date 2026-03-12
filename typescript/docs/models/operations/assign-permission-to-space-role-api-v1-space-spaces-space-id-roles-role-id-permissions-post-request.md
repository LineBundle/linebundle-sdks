# AssignPermissionToSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPostRequest

## Example Usage

```typescript
import {
  AssignPermissionToSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPostRequest,
} from "openapi/models/operations";

let value:
  AssignPermissionToSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPostRequest =
    {
      spaceId: 855,
      roleId: "e46db6bc-6856-4a97-911a-a5210cfa063a",
      body: {
        permissionId: "ed6da7d5-8f04-4e7a-baa5-5b28add0fbaa",
      },
    };
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `spaceId`                                                                        | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `roleId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `body`                                                                           | [models.SpaceRolePermissionAssign](../../models/space-role-permission-assign.md) | :heavy_check_mark:                                                               | N/A                                                                              |