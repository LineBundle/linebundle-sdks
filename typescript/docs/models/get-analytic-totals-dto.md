# GetAnalyticTotalsDto

## Example Usage

```typescript
import { GetAnalyticTotalsDto } from "openapi/models";

let value: GetAnalyticTotalsDto = {
  event: {
    totalCount: 154599,
  },
  place: {
    totalCount: 631773,
  },
  space: {
    totalCount: 233444,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `event`                                                        | [models.EventAnalyticTotal](../models/event-analytic-total.md) | :heavy_check_mark:                                             | N/A                                                            |
| `place`                                                        | [models.PlaceAnalyticTotal](../models/place-analytic-total.md) | :heavy_check_mark:                                             | N/A                                                            |
| `space`                                                        | [models.SpaceAnalyticTotal](../models/space-analytic-total.md) | :heavy_check_mark:                                             | N/A                                                            |