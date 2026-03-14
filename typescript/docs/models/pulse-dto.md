# PulseDTO

## Example Usage

```typescript
import { PulseDTO } from "@linebundle-sdk/ts/models";

let value: PulseDTO = {
  members: {},
  events: {},
  materials: {},
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `members`                                               | [models.MetricBreakdown](../models/metric-breakdown.md) | :heavy_check_mark:                                      | N/A                                                     |
| `events`                                                | [models.MetricBreakdown](../models/metric-breakdown.md) | :heavy_check_mark:                                      | N/A                                                     |
| `materials`                                             | [models.MetricBreakdown](../models/metric-breakdown.md) | :heavy_check_mark:                                      | N/A                                                     |
| `velocity`                                              | *string*                                                | :heavy_minus_sign:                                      | 'growth', 'stable', 'quiet'                             |