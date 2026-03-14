# AuditLogs

## Overview

### Available Operations

* [list_permissions](#list_permissions) - List Permission Audit Logs
* [get_permission_stats](#get_permission_stats) - Get Permission Audit Stats

## list_permissions

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

<!-- UsageSnippet language="python" operationID="list_permission_audit_logs_api_v1_audit_logs_permissions_get" method="get" path="/api/v1/audit-logs/permissions" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.audit_logs.list_permissions(skip=0, limit=100)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `user_id`                                                            | *OptionalNullable[str]*                                              | :heavy_minus_sign:                                                   | Filter by user ID                                                    |
| `org_id`                                                             | *OptionalNullable[str]*                                              | :heavy_minus_sign:                                                   | Filter by organization ID                                            |
| `permission_code`                                                    | *OptionalNullable[str]*                                              | :heavy_minus_sign:                                                   | Filter by permission code                                            |
| `result`                                                             | *OptionalNullable[str]*                                              | :heavy_minus_sign:                                                   | Filter by result (granted/denied)                                    |
| `start_date`                                                         | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_minus_sign:                                                   | Filter by start date                                                 |
| `end_date`                                                           | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_minus_sign:                                                   | Filter by end date                                                   |
| `skip`                                                               | *Optional[int]*                                                      | :heavy_minus_sign:                                                   | Number of records to skip                                            |
| `limit`                                                              | *Optional[int]*                                                      | :heavy_minus_sign:                                                   | Number of records to return                                          |
| `retries`                                                            | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)     | :heavy_minus_sign:                                                   | Configuration to override the default retry behavior of the client.  |

### Response

**[Dict[str, Any]](../../models/.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_permission_stats

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

<!-- UsageSnippet language="python" operationID="get_permission_audit_stats_api_v1_audit_logs_permissions_stats_get" method="get" path="/api/v1/audit-logs/permissions/stats" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.audit_logs.get_permission_stats()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `org_id`                                                             | *OptionalNullable[str]*                                              | :heavy_minus_sign:                                                   | Filter by organization ID                                            |
| `start_date`                                                         | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_minus_sign:                                                   | Start date for statistics                                            |
| `end_date`                                                           | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_minus_sign:                                                   | End date for statistics                                              |
| `retries`                                                            | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)     | :heavy_minus_sign:                                                   | Configuration to override the default retry behavior of the client.  |

### Response

**[models.PermissionAuditStats](../../models/permissionauditstats.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |