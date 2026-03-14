# OrgCostDetailResponse

## Example Usage

```typescript
import { OrgCostDetailResponse } from "@linebundle-sdk/ts/models";

let value: OrgCostDetailResponse = {
  summary: {
    orgId: "9331b7b8-1dff-43b0-9830-842403df6f3d",
    totalCostUsd: 341.49,
    totalTokens: 413792,
    sessionCount: 473147,
    userCount: 420452,
  },
  byUser: [
    {
      userId: "ae7831e6-c150-4ec8-bc2d-b7175eb965ac",
      totalCostUsd: 4338.72,
      totalTokens: 399782,
      sessionCount: 901124,
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `summary`                                                      | [models.OrgCostSummary](../models/org-cost-summary.md)         | :heavy_check_mark:                                             | N/A                                                            |
| `byUser`                                                       | [models.UserCostBreakdown](../models/user-cost-breakdown.md)[] | :heavy_check_mark:                                             | Cost breakdown by user                                         |