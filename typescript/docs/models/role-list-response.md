# RoleListResponse

## Example Usage

```typescript
import { RoleListResponse } from "openapi/models";

let value: RoleListResponse = {
  id: "5ab7258a-6cb6-435e-a598-00d69494de27",
  orgId: "110cb0a9-7f10-459d-b457-965936ef4e43",
  name: "<value>",
  createdAt: new Date("2024-02-21T18:34:11.468Z"),
  updatedAt: new Date("2024-06-16T11:13:31.713Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Role ID                                                                                       |
| `orgId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Organization ID                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Role name                                                                                     |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Role description                                                                              |
| `permissionCount`                                                                             | *number*                                                                                      | :heavy_minus_sign:                                                                            | Number of permissions                                                                         |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |