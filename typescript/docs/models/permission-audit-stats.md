# PermissionAuditStats

Response schema for permission audit statistics.

## Example Usage

```typescript
import { PermissionAuditStats } from "@linebundle-sdk/ts/models";

let value: PermissionAuditStats = {
  totalChecks: 906999,
  grantedCount: 135160,
  deniedCount: 783527,
  uniqueUsers: 748740,
  uniquePermissions: 421702,
  mostCheckedPermissions: [],
  mostDeniedPermissions: [
    [
      236458,
    ],
    [],
  ],
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `totalChecks`                      | *number*                           | :heavy_check_mark:                 | N/A                                |
| `grantedCount`                     | *number*                           | :heavy_check_mark:                 | N/A                                |
| `deniedCount`                      | *number*                           | :heavy_check_mark:                 | N/A                                |
| `uniqueUsers`                      | *number*                           | :heavy_check_mark:                 | N/A                                |
| `uniquePermissions`                | *number*                           | :heavy_check_mark:                 | N/A                                |
| `mostCheckedPermissions`           | *models.MostCheckedPermission*[][] | :heavy_check_mark:                 | N/A                                |
| `mostDeniedPermissions`            | *models.MostDeniedPermission*[][]  | :heavy_check_mark:                 | N/A                                |