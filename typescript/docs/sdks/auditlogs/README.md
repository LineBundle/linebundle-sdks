# AuditLogs

## Overview

### Available Operations

* [listPermissions](#listpermissions) - List Permission Audit Logs
* [getPermissionStats](#getpermissionstats) - Get Permission Audit Stats

## listPermissions

List permission audit logs with filtering and pagination.

Requires PERMISSION_READ permission.

**Security**: Non-admin users can only view logs for their own organization.
The org_id filter is automatically applied based on the user's permissions.

**Query Parameters**:
- user_id: Filter by specific user
- org_id: Filter by organization (auto-scoped for non-admins)
- permission_code: Filter by permission (e.g., "SPACE_MANAGE_MEMBERS")
- result: Filter by result ("granted" or "denied")
- start_date/end_date: Filter by date range
- skip/limit: Pagination controls

**Returns**: Paginated list of audit log entries with total count.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_permission_audit_logs_api_v1_audit_logs_permissions_get" method="get" path="/api/v1/audit-logs/permissions" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.auditLogs.listPermissions({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { auditLogsListPermissions } from "@linebundle-sdk/ts/funcs/audit-logs-list-permissions.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await auditLogsListPermissions(linebundle, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditLogsListPermissions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPermissionAuditLogsApiV1AuditLogsPermissionsGetRequest](../../models/operations/list-permission-audit-logs-api-v1-audit-logs-permissions-get-request.md)       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[{ [k: string]: any }](../../models/.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## getPermissionStats

Get aggregate statistics for permission audit logs.

Requires PERMISSION_READ permission.

**Security**: Non-admin users can only view stats for their own organization.

**Returns**:
- total_checks: Total number of permission checks
- granted_count: Number of granted permissions
- denied_count: Number of denied permissions
- unique_users: Number of unique users who triggered checks
- unique_permissions: Number of unique permissions checked
- most_checked_permissions: Top 10 most frequently checked permissions
- most_denied_permissions: Top 10 most frequently denied permissions

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_permission_audit_stats_api_v1_audit_logs_permissions_stats_get" method="get" path="/api/v1/audit-logs/permissions/stats" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.auditLogs.getPermissionStats();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { auditLogsGetPermissionStats } from "@linebundle-sdk/ts/funcs/audit-logs-get-permission-stats.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await auditLogsGetPermissionStats(linebundle);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditLogsGetPermissionStats failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                           | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                           | [operations.GetPermissionAuditStatsApiV1AuditLogsPermissionsStatsGetRequest](../../models/operations/get-permission-audit-stats-api-v1-audit-logs-permissions-stats-get-request.md) | :heavy_check_mark:                                                                                                                                                                  | The request object to use for the request.                                                                                                                                          |
| `options`                                                                                                                                                                           | RequestOptions                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                               |
| `options.fetchOptions`                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                             | :heavy_minus_sign:                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.      |
| `options.retries`                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                    |

### Response

**Promise\<[models.PermissionAuditStats](../../models/permission-audit-stats.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |