# OrgCostSummary

## Example Usage

```typescript
import { OrgCostSummary } from "openapi/models";

let value: OrgCostSummary = {
  orgId: "4bfe49a3-4438-4c0b-ac23-a64255d4144c",
  totalCostUsd: 5865.79,
  totalTokens: 891939,
  sessionCount: 557229,
  userCount: 440012,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `orgId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Organization ID                                                                               |
| `totalCostUsd`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | Total cost across all sessions                                                                |
| `totalTokens`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | Total tokens used                                                                             |
| `sessionCount`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of sessions                                                                            |
| `userCount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of unique users                                                                        |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Start date filter                                                                             |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | End date filter                                                                               |