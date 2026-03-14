# RuleResponse

Automation rule response.

## Example Usage

```typescript
import { RuleResponse } from "@linebundle-sdk/ts/models";

let value: RuleResponse = {
  id: "b66b81ba-0c41-4148-9f69-e811981b7081",
  orgId: null,
  creatorId: "<id>",
  name: "<value>",
  description:
    "immediately internalise elastic easily vary focalise inasmuch convalesce",
  scope: "<value>",
  scopeId: "71663913-5359-4069-9bda-fdbd855e2a52",
  enabled: true,
  priority: 531006,
  conditions: {
    "key": "<value>",
  },
  actions: [
    {
      "key": "<value>",
    },
    {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    {
      "key": "<value>",
    },
  ],
  schedule: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  constraints: null,
  ruleMetadata: {},
  version: 505977,
  createdAt: new Date("2025-12-08T15:06:39.963Z"),
  updatedAt: new Date("2024-02-23T21:42:25.145Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `orgId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `creatorId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scope`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scopeId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `priority`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `conditions`                                                                                  | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `actions`                                                                                     | Record<string, *any*>[]                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `schedule`                                                                                    | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `constraints`                                                                                 | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `ruleMetadata`                                                                                | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `version`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scopeMode`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |