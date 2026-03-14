# ExecutionResponse

Rule execution response.

## Example Usage

```typescript
import { ExecutionResponse } from "@linebundle-sdk/ts/models";

let value: ExecutionResponse = {
  id: "8722873f-1786-412d-aa40-a8681d2696c1",
  ruleId: "8477a2a2-9297-4a08-83d2-7f45069f7e7d",
  orgId: "c87fe0ae-74a8-4f32-8c0d-947b01d82b1c",
  creatorId: "<id>",
  executionKey: "<value>",
  triggerType: "<value>",
  triggerContext: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  status: "<value>",
  startedAt: new Date("2024-07-09T12:59:15.244Z"),
  completedAt: new Date("2026-01-20T01:47:10.801Z"),
  conditionResults: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  actionResults: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  errorMessage: "<value>",
  retryCount: 92394,
  createdAt: new Date("2026-03-11T14:41:13.620Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ruleId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `orgId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `creatorId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `executionKey`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `triggerType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `triggerContext`                                                                              | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `completedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `conditionResults`                                                                            | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `actionResults`                                                                               | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `errorMessage`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `retryCount`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |