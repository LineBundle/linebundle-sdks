# SessionCostBreakdown

## Example Usage

```typescript
import { SessionCostBreakdown } from "openapi/models";

let value: SessionCostBreakdown = {
  totalCostUsd: 9669,
  totalTokens: 110225,
  totalInputTokens: 764646,
  totalOutputTokens: 975426,
  messageCount: 836453,
  model: "Model 3",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `totalCostUsd`                     | *number*                           | :heavy_check_mark:                 | Total cost in USD for this session |
| `totalTokens`                      | *number*                           | :heavy_check_mark:                 | Total tokens used (input + output) |
| `totalInputTokens`                 | *number*                           | :heavy_check_mark:                 | Total input tokens                 |
| `totalOutputTokens`                | *number*                           | :heavy_check_mark:                 | Total output tokens                |
| `messageCount`                     | *number*                           | :heavy_check_mark:                 | Number of messages in session      |
| `model`                            | *string*                           | :heavy_check_mark:                 | Model used                         |
| `lastMessageCostUsd`               | *number*                           | :heavy_minus_sign:                 | Cost of last message               |