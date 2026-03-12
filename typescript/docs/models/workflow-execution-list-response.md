# WorkflowExecutionListResponse

## Example Usage

```typescript
import { WorkflowExecutionListResponse } from "openapi/models";

let value: WorkflowExecutionListResponse = {
  executions: [],
  total: 782121,
  limit: 80154,
  offset: 543565,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `executions`                                                                   | [models.WorkflowExecutionResponse](../models/workflow-execution-response.md)[] | :heavy_check_mark:                                                             | List of executions                                                             |
| `total`                                                                        | *number*                                                                       | :heavy_check_mark:                                                             | Total number of executions                                                     |
| `limit`                                                                        | *number*                                                                       | :heavy_check_mark:                                                             | Page size                                                                      |
| `offset`                                                                       | *number*                                                                       | :heavy_check_mark:                                                             | Offset                                                                         |