# AiAgent

## Overview

### Available Operations

* [list_sessions_api_v1_ai_sessions_get](#list_sessions_api_v1_ai_sessions_get) - List AI agent sessions
* [create_session_api_v1_ai_sessions_post](#create_session_api_v1_ai_sessions_post) - Create a new AI agent session
* [send_message_api_v1_ai_sessions_session_id_messages_post](#send_message_api_v1_ai_sessions_session_id_messages_post) - Send a message to an AI agent session
* [get_session_api_v1_ai_sessions_session_id_get](#get_session_api_v1_ai_sessions_session_id_get) - Get AI agent session details
* [delete_session_api_v1_ai_sessions_session_id_delete](#delete_session_api_v1_ai_sessions_session_id_delete) - Delete AI agent session
* [get_session_costs_api_v1_ai_sessions_session_id_costs_get](#get_session_costs_api_v1_ai_sessions_session_id_costs_get) - Get session cost breakdown
* [get_org_costs_api_v1_ai_costs_get](#get_org_costs_api_v1_ai_costs_get) - Get organization-wide cost summary
* [list_workflow_executions_api_v1_ai_workflows_get](#list_workflow_executions_api_v1_ai_workflows_get) - List workflow executions
* [start_workflow_api_v1_ai_workflows_post](#start_workflow_api_v1_ai_workflows_post) - Start a multi-agent workflow
* [start_workflow_async_api_v1_ai_workflows_async_post](#start_workflow_async_api_v1_ai_workflows_async_post) - Start a multi-agent workflow (async)
* [get_workflow_execution_api_v1_ai_workflows_execution_id_get](#get_workflow_execution_api_v1_ai_workflows_execution_id_get) - Get workflow execution details
* [cancel_workflow_api_v1_ai_workflows_execution_id_cancel_post](#cancel_workflow_api_v1_ai_workflows_execution_id_cancel_post) - Cancel a running workflow

## list_sessions_api_v1_ai_sessions_get

Retrieve a list of AI agent sessions for the current user. Supports filtering by agent type and status.

### Example Usage

<!-- UsageSnippet language="python" operationID="list_sessions_api_v1_ai_sessions_get" method="get" path="/api/v1/ai/sessions" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.ai_agent.list_sessions_api_v1_ai_sessions_get(limit=50, offset=0)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                               | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `agent_type`                                                            | [OptionalNullable[models.AgentType]](../../models/agenttype.md)         | :heavy_minus_sign:                                                      | Filter by agent type                                                    |
| `status`                                                                | [OptionalNullable[models.SessionStatus]](../../models/sessionstatus.md) | :heavy_minus_sign:                                                      | Filter by session status                                                |
| `limit`                                                                 | *Optional[int]*                                                         | :heavy_minus_sign:                                                      | Number of sessions to return                                            |
| `offset`                                                                | *Optional[int]*                                                         | :heavy_minus_sign:                                                      | Offset for pagination                                                   |
| `retries`                                                               | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)        | :heavy_minus_sign:                                                      | Configuration to override the default retry behavior of the client.     |

### Response

**[models.SessionListResponse](../../models/sessionlistresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## create_session_api_v1_ai_sessions_post

Create a new conversation session with an AI agent. The session persists across multiple messages and maintains context.

### Example Usage

<!-- UsageSnippet language="python" operationID="create_session_api_v1_ai_sessions_post" method="post" path="/api/v1/ai/sessions" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.ai_agent.create_session_api_v1_ai_sessions_post(model="gpt-4o", temperature=0.7)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `agent_type`                                                        | [Optional[models.AgentType]](../../models/agenttype.md)             | :heavy_minus_sign:                                                  | Enum representing different types of AI agents.                     |
| `title`                                                             | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Human-readable session title (auto-generated if not provided)       |
| `model`                                                             | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | OpenAI model to use (e.g., gpt-4o, gpt-4o-mini)                     |
| `temperature`                                                       | *Optional[float]*                                                   | :heavy_minus_sign:                                                  | LLM temperature for response randomness (0.0-2.0)                   |
| `system_prompt`                                                     | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Custom system prompt to override default agent behavior             |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.CreateSessionResponse](../../models/createsessionresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## send_message_api_v1_ai_sessions_session_id_messages_post

Send a user message to an existing AI agent session and receive a response. The conversation context is maintained across messages.

### Example Usage

<!-- UsageSnippet language="python" operationID="send_message_api_v1_ai_sessions__session_id__messages_post" method="post" path="/api/v1/ai/sessions/{session_id}/messages" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.ai_agent.send_message_api_v1_ai_sessions_session_id_messages_post(session_id="a8d4d4c6-8dbc-416c-abac-477d360030ec", message="<value>", stream=False)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `session_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `message`                                                           | *str*                                                               | :heavy_check_mark:                                                  | User message to send to the AI agent                                |
| `stream`                                                            | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | Enable streaming response (WebSocket required)                      |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SendMessageResponse](../../models/sendmessageresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_session_api_v1_ai_sessions_session_id_get

Retrieve detailed information about a specific AI agent session.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_session_api_v1_ai_sessions__session_id__get" method="get" path="/api/v1/ai/sessions/{session_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.ai_agent.get_session_api_v1_ai_sessions_session_id_get(session_id="07ec16ae-7ca8-49a4-83cf-0ce935dc81b6")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `session_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.CreateSessionResponse](../../models/createsessionresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## delete_session_api_v1_ai_sessions_session_id_delete

Mark an AI agent session as deleted. The session and its conversation history will be soft-deleted.

### Example Usage

<!-- UsageSnippet language="python" operationID="delete_session_api_v1_ai_sessions__session_id__delete" method="delete" path="/api/v1/ai/sessions/{session_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    sdk.ai_agent.delete_session_api_v1_ai_sessions_session_id_delete(session_id="6ec45756-f75f-418a-bc3a-38d6decadfbd")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `session_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_session_costs_api_v1_ai_sessions_session_id_costs_get

Retrieve token usage and cost information for a specific AI agent session.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_session_costs_api_v1_ai_sessions__session_id__costs_get" method="get" path="/api/v1/ai/sessions/{session_id}/costs" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.ai_agent.get_session_costs_api_v1_ai_sessions_session_id_costs_get(session_id="1e744756-a240-455a-8a47-f64c2afcdf37")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `session_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SessionCostBreakdown](../../models/sessioncostbreakdown.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_org_costs_api_v1_ai_costs_get

Retrieve aggregated cost and token usage across all AI agent sessions for the current organization. Requires organization context (not available in personal mode).

### Example Usage

<!-- UsageSnippet language="python" operationID="get_org_costs_api_v1_ai_costs_get" method="get" path="/api/v1/ai/costs" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.ai_agent.get_org_costs_api_v1_ai_costs_get()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `start_date`                                                        | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Start date filter (ISO format)                                      |
| `end_date`                                                          | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | End date filter (ISO format)                                        |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.OrgCostDetailResponse](../../models/orgcostdetailresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## list_workflow_executions_api_v1_ai_workflows_get

Retrieve a list of workflow executions for the current user. Supports filtering by workflow type and status.

### Example Usage

<!-- UsageSnippet language="python" operationID="list_workflow_executions_api_v1_ai_workflows_get" method="get" path="/api/v1/ai/workflows" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.ai_agent.list_workflow_executions_api_v1_ai_workflows_get(limit=50, offset=0)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                 | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `workflow_type`                                                           | [OptionalNullable[models.WorkflowType]](../../models/workflowtype.md)     | :heavy_minus_sign:                                                        | Filter by workflow type                                                   |
| `status`                                                                  | [OptionalNullable[models.WorkflowStatus]](../../models/workflowstatus.md) | :heavy_minus_sign:                                                        | Filter by execution status                                                |
| `limit`                                                                   | *Optional[int]*                                                           | :heavy_minus_sign:                                                        | Number of executions to return                                            |
| `offset`                                                                  | *Optional[int]*                                                           | :heavy_minus_sign:                                                        | Offset for pagination                                                     |
| `retries`                                                                 | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)          | :heavy_minus_sign:                                                        | Configuration to override the default retry behavior of the client.       |

### Response

**[models.WorkflowExecutionListResponse](../../models/workflowexecutionlistresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## start_workflow_api_v1_ai_workflows_post

Execute a multi-agent workflow with specified parameters. Returns immediately with execution status; poll for completion.

### Example Usage

<!-- UsageSnippet language="python" operationID="start_workflow_api_v1_ai_workflows_post" method="post" path="/api/v1/ai/workflows" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.ai_agent.start_workflow_api_v1_ai_workflows_post(workflow_type="parallel", input_data={

    })

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `workflow_type`                                                                        | [models.WorkflowType](../../models/workflowtype.md)                                    | :heavy_check_mark:                                                                     | Enum representing different workflow types.                                            |
| `input_data`                                                                           | Dict[str, *Any*]                                                                       | :heavy_check_mark:                                                                     | Input parameters for the workflow                                                      |
| `workflow_name`                                                                        | *OptionalNullable[str]*                                                                | :heavy_minus_sign:                                                                     | Human-readable workflow name (auto-generated if not provided)                          |
| `session_id`                                                                           | *OptionalNullable[str]*                                                                | :heavy_minus_sign:                                                                     | Optional session ID to associate with this workflow                                    |
| `agent_types`                                                                          | List[[models.AgentType](../../models/agenttype.md)]                                    | :heavy_minus_sign:                                                                     | Optional list of agent types to use in the workflow (required for some workflow types) |
| `retries`                                                                              | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                       | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |

### Response

**[models.WorkflowExecutionResponse](../../models/workflowexecutionresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## start_workflow_async_api_v1_ai_workflows_async_post

Queue a multi-agent workflow for asynchronous execution. Returns immediately with execution_id and task_id. Poll GET /workflows/{execution_id} for status updates.

### Example Usage

<!-- UsageSnippet language="python" operationID="start_workflow_async_api_v1_ai_workflows_async_post" method="post" path="/api/v1/ai/workflows/async" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.ai_agent.start_workflow_async_api_v1_ai_workflows_async_post(workflow_type="evaluator_optimizer", input_data={
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
    })

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `workflow_type`                                                                        | [models.WorkflowType](../../models/workflowtype.md)                                    | :heavy_check_mark:                                                                     | Enum representing different workflow types.                                            |
| `input_data`                                                                           | Dict[str, *Any*]                                                                       | :heavy_check_mark:                                                                     | Input parameters for the workflow                                                      |
| `workflow_name`                                                                        | *OptionalNullable[str]*                                                                | :heavy_minus_sign:                                                                     | Human-readable workflow name (auto-generated if not provided)                          |
| `session_id`                                                                           | *OptionalNullable[str]*                                                                | :heavy_minus_sign:                                                                     | Optional session ID to associate with this workflow                                    |
| `agent_types`                                                                          | List[[models.AgentType](../../models/agenttype.md)]                                    | :heavy_minus_sign:                                                                     | Optional list of agent types to use in the workflow (required for some workflow types) |
| `retries`                                                                              | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                       | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |

### Response

**[models.StartWorkflowAsyncResponse](../../models/startworkflowasyncresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_workflow_execution_api_v1_ai_workflows_execution_id_get

Retrieve detailed information about a workflow execution, including status and results.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_workflow_execution_api_v1_ai_workflows__execution_id__get" method="get" path="/api/v1/ai/workflows/{execution_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.ai_agent.get_workflow_execution_api_v1_ai_workflows_execution_id_get(execution_id="50787faa-7630-428b-a7a4-e6e876013056")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `execution_id`                                                      | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.WorkflowExecutionResponse](../../models/workflowexecutionresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## cancel_workflow_api_v1_ai_workflows_execution_id_cancel_post

Cancel a pending or running workflow execution. Cannot cancel completed, failed, or already cancelled workflows.

### Example Usage

<!-- UsageSnippet language="python" operationID="cancel_workflow_api_v1_ai_workflows__execution_id__cancel_post" method="post" path="/api/v1/ai/workflows/{execution_id}/cancel" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.ai_agent.cancel_workflow_api_v1_ai_workflows_execution_id_cancel_post(execution_id="5e1133b4-be08-44e4-839b-96d868dfa133")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `execution_id`                                                      | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.WorkflowExecutionResponse](../../models/workflowexecutionresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |