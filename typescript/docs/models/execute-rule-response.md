# ExecuteRuleResponse

Response from rule execution.

## Example Usage

```typescript
import { ExecuteRuleResponse } from "@linebundle-sdk/ts/models";

let value: ExecuteRuleResponse = {
  executionId: "f6d07191-5f3c-42df-bf3a-b6d3bed2c255",
  status: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `executionId`           | *string*                | :heavy_check_mark:      | N/A                     |
| `status`                | *string*                | :heavy_check_mark:      | N/A                     |
| `conditionsMet`         | *boolean*               | :heavy_minus_sign:      | N/A                     |
| `conditionResults`      | Record<string, *any*>[] | :heavy_minus_sign:      | N/A                     |
| `actionResults`         | Record<string, *any*>[] | :heavy_minus_sign:      | N/A                     |
| `error`                 | *string*                | :heavy_minus_sign:      | N/A                     |
| `cached`                | *boolean*               | :heavy_minus_sign:      | N/A                     |