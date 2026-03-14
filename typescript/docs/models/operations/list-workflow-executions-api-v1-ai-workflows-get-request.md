# ListWorkflowExecutionsApiV1AiWorkflowsGetRequest

## Example Usage

```typescript
import { ListWorkflowExecutionsApiV1AiWorkflowsGetRequest } from "@linebundle-sdk/ts/models/operations";

let value: ListWorkflowExecutionsApiV1AiWorkflowsGetRequest = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `workflowType`                                           | [models.WorkflowType](../../models/workflow-type.md)     | :heavy_minus_sign:                                       | Filter by workflow type                                  |
| `status`                                                 | [models.WorkflowStatus](../../models/workflow-status.md) | :heavy_minus_sign:                                       | Filter by execution status                               |
| `limit`                                                  | *number*                                                 | :heavy_minus_sign:                                       | Number of executions to return                           |
| `offset`                                                 | *number*                                                 | :heavy_minus_sign:                                       | Offset for pagination                                    |