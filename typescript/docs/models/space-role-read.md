# SpaceRoleRead

Space role read model for API responses

## Example Usage

```typescript
import { SpaceRoleRead } from "@linebundle-sdk/ts/models";

let value: SpaceRoleRead = {
  id: "d84ed6da-fa12-4a1d-9563-84ddbc5ea257",
  spaceId: 626582,
  name: "<value>",
  orgId: "ab63c89c-e83f-423a-95de-3c8d2260dd7d",
  createdAt: new Date("2025-06-21T13:10:18.818Z"),
  updatedAt: new Date("2025-07-16T16:00:08.386Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `spaceId`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `orgId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `permissions`                                                                                 | *any*[]                                                                                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |