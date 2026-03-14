# CompareEventVersionsApiV1EventEventIdVersionsCompareGetRequest

## Example Usage

```typescript
import { CompareEventVersionsApiV1EventEventIdVersionsCompareGetRequest } from "@linebundle-sdk/ts/models/operations";

let value: CompareEventVersionsApiV1EventEventIdVersionsCompareGetRequest = {
  eventId: 524722,
  transactionIdA: 528265,
  transactionIdB: 279305,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `eventId`                        | *number*                         | :heavy_check_mark:               | N/A                              |
| `transactionIdA`                 | *number*                         | :heavy_check_mark:               | First transaction ID to compare  |
| `transactionIdB`                 | *number*                         | :heavy_check_mark:               | Second transaction ID to compare |