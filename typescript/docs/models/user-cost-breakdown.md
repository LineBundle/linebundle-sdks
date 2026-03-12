# UserCostBreakdown

## Example Usage

```typescript
import { UserCostBreakdown } from "openapi/models";

let value: UserCostBreakdown = {
  userId: "4171110c-a061-48d9-ac8e-94fa73ad6883",
  totalCostUsd: 9285.61,
  totalTokens: 193412,
  sessionCount: 291386,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `userId`                 | *string*                 | :heavy_check_mark:       | User ID                  |
| `totalCostUsd`           | *number*                 | :heavy_check_mark:       | Total cost for this user |
| `totalTokens`            | *number*                 | :heavy_check_mark:       | Total tokens used        |
| `sessionCount`           | *number*                 | :heavy_check_mark:       | Number of sessions       |