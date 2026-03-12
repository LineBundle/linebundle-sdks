# StartWorkflowAsyncResponse


## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `execution_id`           | *str*                    | :heavy_check_mark:       | Workflow execution ID    |
| `task_id`                | *str*                    | :heavy_check_mark:       | Celery task ID           |
| `status`                 | *str*                    | :heavy_check_mark:       | Initial status (pending) |
| `message`                | *Optional[str]*          | :heavy_minus_sign:       | Status message           |