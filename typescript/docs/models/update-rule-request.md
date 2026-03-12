# UpdateRuleRequest

Request to update automation rule.

## Example Usage

```typescript
import { UpdateRuleRequest } from "openapi/models";

let value: UpdateRuleRequest = {};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `name`                  | *string*                | :heavy_minus_sign:      | N/A                     |
| `description`           | *string*                | :heavy_minus_sign:      | N/A                     |
| `enabled`               | *boolean*               | :heavy_minus_sign:      | N/A                     |
| `priority`              | *number*                | :heavy_minus_sign:      | N/A                     |
| `conditions`            | Record<string, *any*>   | :heavy_minus_sign:      | N/A                     |
| `actions`               | Record<string, *any*>[] | :heavy_minus_sign:      | N/A                     |
| `schedule`              | Record<string, *any*>   | :heavy_minus_sign:      | N/A                     |
| `constraints`           | Record<string, *any*>   | :heavy_minus_sign:      | N/A                     |
| `metadata`              | Record<string, *any*>   | :heavy_minus_sign:      | N/A                     |