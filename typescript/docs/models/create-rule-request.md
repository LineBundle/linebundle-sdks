# CreateRuleRequest

Request to create automation rule.

## Example Usage

```typescript
import { CreateRuleRequest } from "openapi/models";

let value: CreateRuleRequest = {
  name: "<value>",
  scope: "<value>",
  conditions: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  actions: [
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    {
      "key": "<value>",
      "key1": "<value>",
    },
  ],
  schedule: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `name`                               | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `description`                        | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `scope`                              | *string*                             | :heavy_check_mark:                   | EVENT, TIMELINE, SPACE, ORGANIZATION |
| `scopeId`                            | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `enabled`                            | *boolean*                            | :heavy_minus_sign:                   | N/A                                  |
| `priority`                           | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `conditions`                         | Record<string, *any*>                | :heavy_check_mark:                   | Condition group structure            |
| `actions`                            | Record<string, *any*>[]              | :heavy_check_mark:                   | List of actions                      |
| `schedule`                           | Record<string, *any*>                | :heavy_check_mark:                   | Schedule configuration               |
| `constraints`                        | Record<string, *any*>                | :heavy_minus_sign:                   | N/A                                  |
| `metadata`                           | Record<string, *any*>                | :heavy_minus_sign:                   | N/A                                  |