# WorkflowExecutionResponse

## Example Usage

```typescript
import { WorkflowExecutionResponse } from "openapi/models";

let value: WorkflowExecutionResponse = {
  id: "25253e52-e2b1-4c4d-9dad-dedb8cfc0ba2",
  orgId: "477e968a-bc27-46e4-a6e4-02854fc04c99",
  creatorId: "8c21e6b8-6b6c-4fd9-93c2-96ced1054c85",
  sessionId: "730a67a8-1f91-4097-aa5e-2ecc1710a259",
  workflowType: "evaluator_optimizer",
  workflowName: "<value>",
  inputData: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  outputData: {
    "key": "<value>",
    "key1": "<value>",
  },
  status: "cancelled",
  errorMessage: "<value>",
  agentsInvolved: [],
  executionTimeMs: 41706,
  startedAt: new Date("2024-11-09T01:04:20.037Z"),
  completedAt: new Date("2026-11-16T00:38:55.643Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Execution ID                                                                                  |
| `orgId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Organization ID (null for personal)                                                           |
| `creatorId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | User who started the workflow                                                                 |
| `sessionId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Associated session ID                                                                         |
| `workflowType`                                                                                | [models.WorkflowType](../models/workflow-type.md)                                             | :heavy_check_mark:                                                                            | Enum representing different workflow types.                                                   |
| `workflowName`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | Workflow name                                                                                 |
| `inputData`                                                                                   | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | Input parameters                                                                              |
| `outputData`                                                                                  | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | Output results                                                                                |
| `status`                                                                                      | [models.WorkflowStatus](../models/workflow-status.md)                                         | :heavy_check_mark:                                                                            | Enum representing workflow execution status.                                                  |
| `errorMessage`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | Error message if failed                                                                       |
| `agentsInvolved`                                                                              | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Agents used in workflow                                                                       |
| `executionTimeMs`                                                                             | *number*                                                                                      | :heavy_check_mark:                                                                            | Execution time in milliseconds                                                                |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Start timestamp                                                                               |
| `completedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Completion timestamp                                                                          |