# GetPermissionAuditStatsApiV1AuditLogsPermissionsStatsGetRequest

## Example Usage

```typescript
import { GetPermissionAuditStatsApiV1AuditLogsPermissionsStatsGetRequest } from "@linebundle-sdk/ts/models/operations";

let value: GetPermissionAuditStatsApiV1AuditLogsPermissionsStatsGetRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `orgId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Filter by organization ID                                                                     |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Start date for statistics                                                                     |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | End date for statistics                                                                       |