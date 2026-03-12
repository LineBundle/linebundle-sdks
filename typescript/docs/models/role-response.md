# RoleResponse

## Example Usage

```typescript
import { RoleResponse } from "openapi/models";

let value: RoleResponse = {
  id: "75174e26-0899-455a-9f7e-8f477a6bcadd",
  orgId: "c12cf01b-5ad6-4839-97d9-4d95f7907860",
  name: "<value>",
  createdAt: new Date("2026-04-13T17:11:19.956Z"),
  updatedAt: new Date("2024-07-04T21:51:32.927Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Role ID                                                                                       |
| `orgId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Organization ID                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Role name                                                                                     |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Role description                                                                              |
| `permissions`                                                                                 | [models.PermissionResponse](../models/permission-response.md)[]                               | :heavy_minus_sign:                                                                            | List of permissions                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |