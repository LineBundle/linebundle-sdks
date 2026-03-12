# AuditLogs

## Overview

### Available Operations

* [listPermissionAuditLogsApiV1AuditLogsPermissionsGet](#listpermissionauditlogsapiv1auditlogspermissionsget) - List Permission Audit Logs
* [getPermissionAuditStatsApiV1AuditLogsPermissionsStatsGet](#getpermissionauditstatsapiv1auditlogspermissionsstatsget) - Get Permission Audit Stats

## listPermissionAuditLogsApiV1AuditLogsPermissionsGet

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
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.auditLogs.listPermissionAuditLogsApiV1AuditLogsPermissionsGet({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { auditLogsListPermissionAuditLogsApiV1AuditLogsPermissionsGet } from "openapi/funcs/audit-logs-list-permission-audit-logs-api-v1-audit-logs-permissions-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await auditLogsListPermissionAuditLogsApiV1AuditLogsPermissionsGet(sdk, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditLogsListPermissionAuditLogsApiV1AuditLogsPermissionsGet failed:", res.error);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getPermissionAuditStatsApiV1AuditLogsPermissionsStatsGet

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
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.auditLogs.getPermissionAuditStatsApiV1AuditLogsPermissionsStatsGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { auditLogsGetPermissionAuditStatsApiV1AuditLogsPermissionsStatsGet } from "openapi/funcs/audit-logs-get-permission-audit-stats-api-v1-audit-logs-permissions-stats-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await auditLogsGetPermissionAuditStatsApiV1AuditLogsPermissionsStatsGet(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("auditLogsGetPermissionAuditStatsApiV1AuditLogsPermissionsStatsGet failed:", res.error);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |