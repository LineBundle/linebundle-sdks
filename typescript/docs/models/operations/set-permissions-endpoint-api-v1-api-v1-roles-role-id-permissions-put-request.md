# SetPermissionsEndpointApiV1ApiV1RolesRoleIdPermissionsPutRequest

## Example Usage

```typescript
import { SetPermissionsEndpointApiV1ApiV1RolesRoleIdPermissionsPutRequest } from "openapi/models/operations";

let value: SetPermissionsEndpointApiV1ApiV1RolesRoleIdPermissionsPutRequest = {
  roleId: "<id>",
  body: {
    permissionCodes: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `roleId`                                                                | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `body`                                                                  | [models.SetPermissionsRequest](../../models/set-permissions-request.md) | :heavy_check_mark:                                                      | N/A                                                                     |