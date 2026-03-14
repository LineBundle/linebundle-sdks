# CreateRoleEndpointApiV1RolesPostRequest

## Example Usage

```typescript
import { CreateRoleEndpointApiV1RolesPostRequest } from "@linebundle-sdk/ts/models/operations";

let value: CreateRoleEndpointApiV1RolesPostRequest = {
  body: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `orgId`                                                         | *string*                                                        | :heavy_minus_sign:                                              | Organization ID (uses current org if not provided)              |
| `body`                                                          | [models.CreateRoleRequest](../../models/create-role-request.md) | :heavy_check_mark:                                              | N/A                                                             |