# AutomationMetadata

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `getTriggers` | GET | `/api/v1/automation/metadata/triggers` | Get trigger metadata |
| `getActions` | GET | `/api/v1/automation/metadata/actions` | Get action metadata |
| `getTask` | GET | `/api/v1/automation/metadata/tasks/{task_type}` | Get task metadata |
| `getTasks` | GET | `/api/v1/automation/metadata/tasks` | Get all task metadata |

---

## `getTriggers`

Get trigger metadata

**GET** `/api/v1/automation/metadata/triggers`

**Signature:** `lb.automationMetadata.getTriggers()`

*No parameters.*


**Returns:**

**Response:** `Array<object>`

---

## `getActions`

Get action metadata

**GET** `/api/v1/automation/metadata/actions`

**Signature:** `lb.automationMetadata.getActions()`

*No parameters.*


**Returns:**

**Response:** `Array<object>`

---

## `getTask`

Get task metadata

**GET** `/api/v1/automation/metadata/tasks/{task_type}`

**Signature:** `lb.automationMetadata.getTask({ path: \{ task_type \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `task_type` | path | string | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `task_type` | string | Unique task identifier (e.g., 'send_email_notification') |
| `category` | `"trigger"` | `"condition"` | `"action"` | Task category |
| `name` | string | Human-readable task name |
| `description` | string | Task description for users |
| `icon` | string | null | Icon identifier (lucide-react icon name) |
| `tags` | Array<string> | Tags for categorization |
| `config_schema` | object | JSON Schema defining task configuration structure |
| `ui_config` | object | null | UI-specific configuration (layout hints, grouping, etc.) |
| `examples` | Array<object> | Example configurations for this task |
| `requires_org_context` | boolean | Whether task requires organization context (not available in personal mode) |
| `requires_event_scope` | boolean | Whether task requires event scope |
| `version` | string | Task version |

---

## `getTasks`

Get all task metadata

**GET** `/api/v1/automation/metadata/tasks`

**Signature:** `lb.automationMetadata.getTasks({ query?: \{ category, tags, search \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `category` | query | string | null |  | Filter by category (trigger, condition, action) |
| `tags` | query | Array<string> | null |  | Filter by tags |
| `search` | query | string | null |  | Search by name or description |


**Returns:**

**Response:** `Array<object>`

---
