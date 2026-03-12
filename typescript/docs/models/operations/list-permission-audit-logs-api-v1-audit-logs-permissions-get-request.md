# ListPermissionAuditLogsApiV1AuditLogsPermissionsGetRequest

## Example Usage

```typescript
import { ListPermissionAuditLogsApiV1AuditLogsPermissionsGetRequest } from "openapi/models/operations";

let value: ListPermissionAuditLogsApiV1AuditLogsPermissionsGetRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Filter by user ID                                                                             |
| `orgId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Filter by organization ID                                                                     |
| `permissionCode`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | Filter by permission code                                                                     |
| `result`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Filter by result (granted/denied)                                                             |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Filter by start date                                                                          |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Filter by end date                                                                            |
| `skip`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | Number of records to skip                                                                     |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Number of records to return                                                                   |