# AuditLogs

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `listPermissions` | GET | `/api/v1/audit-logs/permissions` | List Permission Audit Logs |
| `getPermissionStats` | GET | `/api/v1/audit-logs/permissions/stats` | Get Permission Audit Stats |

---

## `listPermissions`

List Permission Audit Logs

**GET** `/api/v1/audit-logs/permissions`

**Signature:** `lb.auditLogs.listPermissions({ query?: \{ user_id, org_id, permission_code, result, start_date, end_date, skip, limit \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `user_id` | query | string (uuid) | null |  | Filter by user ID |
| `org_id` | query | string (uuid) | null |  | Filter by organization ID |
| `permission_code` | query | string | null |  | Filter by permission code |
| `result` | query | string | null |  | Filter by result (granted/denied) |
| `start_date` | query | string (date-time) | null |  | Filter by start date |
| `end_date` | query | string (date-time) | null |  | Filter by end date |
| `skip` | query | integer |  | Number of records to skip |
| `limit` | query | integer |  | Number of records to return |


**Returns:**

**Response:** `object`

---

## `getPermissionStats`

Get Permission Audit Stats

**GET** `/api/v1/audit-logs/permissions/stats`

**Signature:** `lb.auditLogs.getPermissionStats({ query?: \{ org_id, start_date, end_date \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `org_id` | query | string (uuid) | null |  | Filter by organization ID |
| `start_date` | query | string (date-time) | null |  | Start date for statistics |
| `end_date` | query | string (date-time) | null |  | End date for statistics |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `total_checks` | integer |  |
| `granted_count` | integer |  |
| `denied_count` | integer |  |
| `unique_users` | integer |  |
| `unique_permissions` | integer |  |
| `most_checked_permissions` | Array<Array<any>> |  |
| `most_denied_permissions` | Array<Array<any>> |  |

---
