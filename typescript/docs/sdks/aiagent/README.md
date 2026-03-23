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