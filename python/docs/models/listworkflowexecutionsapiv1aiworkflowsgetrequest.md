# ListWorkflowExecutionsAPIV1AiWorkflowsGetRequest


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `workflow_type`                                                        | [OptionalNullable[models.WorkflowType]](../models/workflowtype.md)     | :heavy_minus_sign:                                                     | Filter by workflow type                                                |
| `status`                                                               | [OptionalNullable[models.WorkflowStatus]](../models/workflowstatus.md) | :heavy_minus_sign:                                                     | Filter by execution status                                             |
| `limit`                                                                | *Optional[int]*                                                        | :heavy_minus_sign:                                                     | Number of executions to return                                         |
| `offset`                                                               | *Optional[int]*                                                        | :heavy_minus_sign:                                                     | Offset for pagination                                                  |