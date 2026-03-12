# StartWorkflowRequest

## Example Usage

```typescript
import { StartWorkflowRequest } from "openapi/models";

let value: StartWorkflowRequest = {
  workflowType: "evaluator_optimizer",
  inputData: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `workflowType`                                                                         | [models.WorkflowType](../models/workflow-type.md)                                      | :heavy_check_mark:                                                                     | Enum representing different workflow types.                                            |
| `workflowName`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | Human-readable workflow name (auto-generated if not provided)                          |
| `inputData`                                                                            | Record<string, *any*>                                                                  | :heavy_check_mark:                                                                     | Input parameters for the workflow                                                      |
| `sessionId`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | Optional session ID to associate with this workflow                                    |
| `agentTypes`                                                                           | [models.AgentType](../models/agent-type.md)[]                                          | :heavy_minus_sign:                                                                     | Optional list of agent types to use in the workflow (required for some workflow types) |