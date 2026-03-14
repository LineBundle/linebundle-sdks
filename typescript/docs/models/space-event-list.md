# SpaceEventList

Model for list of space events with event info.

## Example Usage

```typescript
import { SpaceEventList } from "@linebundle-sdk/ts/models";

let value: SpaceEventList = {
  total: 16155,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `events`                                                 | [models.SpaceEventRead](../models/space-event-read.md)[] | :heavy_minus_sign:                                       | List of space events                                     |
| `total`                                                  | *number*                                                 | :heavy_check_mark:                                       | Total number of events                                   |