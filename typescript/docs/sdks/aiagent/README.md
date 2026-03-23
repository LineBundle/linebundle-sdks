# AiAgent

## Available Methods

| Method | HTTP | Path | Description |
|--------|------|------|-------------|
| `listSessions` | GET | `/api/v1/ai/sessions` | List AI agent sessions |
| `getSession` | GET | `/api/v1/ai/sessions/{session_id}` | Get AI agent session details |
| `getSessionCosts` | GET | `/api/v1/ai/sessions/{session_id}/costs` | Get session cost breakdown |
| `startWorkflow` | POST | `/api/v1/ai/workflows` | Start a multi-agent workflow |
| `listWorkflows` | GET | `/api/v1/ai/workflows` | List workflow executions |
| `startWorkflowAsync` | POST | `/api/v1/ai/workflows/async` | Start a multi-agent workflow (async) |
| `cancelWorkflow` | POST | `/api/v1/ai/workflows/{execution_id}/cancel` | Cancel a running workflow |

---

## `listSessions`

List AI agent sessions

**GET** `/api/v1/ai/sessions`

**Signature:** `lb.aiAgent.listSessions({ query?: \{ agent_type, status, limit, offset \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `agent_type` | query | `"general"` | `"event_planner"` | `"content_writer"` | `"data_analyst"` | `"space_manager"` | `"moderator"` | null |  | Filter by agent type |
| `status` | query | `"active"` | `"archived"` | `"deleted"` | null |  | Filter by session status |
| `limit` | query | integer |  | Number of sessions to return |
| `offset` | query | integer |  | Offset for pagination |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `sessions` | Array<object> | List of sessions |
| `total` | integer | Total number of sessions |
| `limit` | integer | Page size |
| `offset` | integer | Offset |

---

## `getSession`

Get AI agent session details

**GET** `/api/v1/ai/sessions/{session_id}`

**Signature:** `lb.aiAgent.getSession({ path: \{ session_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `session_id` | path | string (uuid) | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string (uuid) | Session ID |
| `org_id` | string (uuid) | null | Organization ID (null for personal) |
| `creator_id` | string (uuid) | User who created the session |
| `title` | string | Session title |
| `thread_id` | string | LangGraph thread identifier |
| `agent_type` | `"general"` | `"event_planner"` | `"content_writer"` | `"data_analyst"` | `"space_manager"` | `"moderator"` | Enum representing different types of AI agents. |
| `model` | string | OpenAI model name |
| `temperature` | number | LLM temperature |
| `system_prompt` | string | null | Custom system prompt |
| `status` | `"active"` | `"archived"` | `"deleted"` | Enum representing AI agent session status. |
| `message_count` | integer | Number of messages in session |
| `created_at` | string (date-time) | Creation timestamp |
| `updated_at` | string (date-time) | Last update timestamp |
| `last_message_at` | string (date-time) | null | Last message timestamp |

---

## `getSessionCosts`

Get session cost breakdown

**GET** `/api/v1/ai/sessions/{session_id}/costs`

**Signature:** `lb.aiAgent.getSessionCosts({ path: \{ session_id \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `session_id` | path | string (uuid) | ✓ |  |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `total_cost_usd` | number | Total cost in USD for this session |
| `total_tokens` | integer | Total tokens used (input + output) |
| `total_input_tokens` | integer | Total input tokens |
| `total_output_tokens` | integer | Total output tokens |
| `message_count` | integer | Number of messages in session |
| `model` | string | Model used |
| `last_message_cost_usd` | number | null | Cost of last message |

---

## `startWorkflow`

Start a multi-agent workflow

**POST** `/api/v1/ai/workflows`

**Signature:** `lb.aiAgent.startWorkflow({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `workflow_type` | body | `"supervisor"` | `"parallel"` | `"sequential"` | `"evaluator_optimizer"` | ✓ | Enum representing different workflow types. |
| `workflow_name` | body | string | null |  | Human-readable workflow name (auto-generated if not provided) |
| `input_data` | body | object | ✓ | Input parameters for the workflow |
| `session_id` | body | string (uuid) | null |  | Optional session ID to associate with this workflow |
| `agent_types` | body | Array<`"general"` | `"event_planner"` | `"content_writer"` | `"data_analyst"` | `"space_manager"` | `"moderator"`> | null |  | Optional list of agent types to use in the workflow (required for some workflow types) |


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

## `listWorkflows`

List workflow executions

**GET** `/api/v1/ai/workflows`

**Signature:** `lb.aiAgent.listWorkflows({ query?: \{ workflow_type, status, limit, offset \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `workflow_type` | query | `"supervisor"` | `"parallel"` | `"sequential"` | `"evaluator_optimizer"` | null |  | Filter by workflow type |
| `status` | query | `"pending"` | `"running"` | `"completed"` | `"failed"` | `"cancelled"` | null |  | Filter by execution status |
| `limit` | query | integer |  | Number of executions to return |
| `offset` | query | integer |  | Offset for pagination |


**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `executions` | Array<object> | List of executions |
| `total` | integer | Total number of executions |
| `limit` | integer | Page size |
| `offset` | integer | Offset |

---

## `startWorkflowAsync`

Start a multi-agent workflow (async)

**POST** `/api/v1/ai/workflows/async`

**Signature:** `lb.aiAgent.startWorkflowAsync({ body: \{ ... \} })`

**Parameters:**

| Parameter | In | Type | Required | Description |
|-----------|-----|------|----------|-------------|
| `workflow_type` | body | `"supervisor"` | `"parallel"` | `"sequential"` | `"evaluator_optimizer"` | ✓ | Enum representing different workflow types. |
| `workflow_name` | body | string | null |  | Human-readable workflow name (auto-generated if not provided) |
| `input_data` | body | object | ✓ | Input parameters for the workflow |
| `session_id` | body | string (uuid) | null |  | Optional session ID to associate with this workflow |
| `agent_types` | body | Array<`"general"` | `"event_planner"` | `"content_writer"` | `"data_analyst"` | `"space_manager"` | `"moderator"`> | null |  | Optional list of agent types to use in the workflow (required for some workflow types) |

---

## `cancelWorkflow`

Cancel a running workflow

**POST** `/api/v1/ai/workflows/{execution_id}/cancel`

**Signature:** `lb.aiAgent.cancelWorkflow({ path: \{ execution_id \} })`

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
