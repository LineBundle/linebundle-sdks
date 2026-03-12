# DashboardStoryResponse

## Example Usage

```typescript
import { DashboardStoryResponse } from "openapi/models";

let value: DashboardStoryResponse = {
  pulse: {
    members: {},
    events: {},
    materials: {},
  },
  spaces: [],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `pulse`                                                | [models.PulseDTO](../models/pulse-dto.md)              | :heavy_check_mark:                                     | N/A                                                    |
| `spaces`                                               | [models.SpaceStoryDTO](../models/space-story-dto.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `totalSpaces`                                          | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |