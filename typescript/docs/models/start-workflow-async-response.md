# StartWorkflowAsyncResponse

## Example Usage

```typescript
import { StartWorkflowAsyncResponse } from "openapi/models";

let value: StartWorkflowAsyncResponse = {
  executionId: "5ed1aa7c-c4e8-4021-9006-95687b404079",
  taskId: "<id>",
  status: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `executionId`            | *string*                 | :heavy_check_mark:       | Workflow execution ID    |
| `taskId`                 | *string*                 | :heavy_check_mark:       | Celery task ID           |
| `status`                 | *string*                 | :heavy_check_mark:       | Initial status (pending) |
| `message`                | *string*                 | :heavy_minus_sign:       | Status message           |