# AiWorkflows

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `getExecutionDetails` | GET | `/api/v1/ai/workflows/{execution_id}` | Get workflow execution details |

---

## `getExecutionDetails`

Get workflow execution details

**GET** `/api/v1/ai/workflows/{execution_id}`

**Signature:** `lb.aiWorkflows.getExecutionDetails({ path: \{ execution_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `execution_id` | path | string (uuid) | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) | Execution ID |
| `org_id` | string (uuid) | null | Organization ID (null for personal) |
| `creator_id` | string (uuid) | User who started the workflow |
| `session_id` | string (uuid) | null | Associated session ID |
| `workflow_type` | `"supervisor"` | `"parallel"` | `"sequential"` | `"evaluator_optimizer"` | Enum representing different workflow types. |
| `workflow_name` | string | Workflow name |
| `input_data` | object | Input parameters |
| `output_data` | object | null | Output results |
| `status` | `"pending"` | `"running"` | `"completed"` | `"failed"` | `"cancelled"` | Enum representing workflow execution status. |
| `error_message` | string | null | Error message if failed |
| `agents_involved` | Array<string> | null | Agents used in workflow |
| `execution_time_ms` | integer | null | Execution time in milliseconds |
| `started_at` | string (date-time) | Start timestamp |
| `completed_at` | string (date-time) | null | Completion timestamp |

---
