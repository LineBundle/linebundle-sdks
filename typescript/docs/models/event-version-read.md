# EventVersionRead

Published event version response.

## Example Usage

```typescript
import { EventVersionRead } from "@linebundle-sdk/ts/models";

let value: EventVersionRead = {
  id: 165974,
  eventId: 233338,
  transactionId: 302904,
  status: "<value>",
  title: "<value>",
  startDt: new Date("2026-07-27T00:48:55.876Z"),
  endDt: new Date("2025-04-24T06:01:43.683Z"),
  timezone: "Europe/Dublin",
  visibility: 603075,
  keywords: [
    "<value 1>",
  ],
  latitude: 4032.36,
  longitude: 7214.36,
  publishedAt: new Date("2025-01-11T11:36:58.132Z"),
  publishedBy: "f5ccd525-699e-448e-ac7a-56ff5f86e2a8",
  createdAt: new Date("2025-11-02T21:23:03.207Z"),
  updatedAt: new Date("2024-02-20T18:16:01.253Z"),
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `eventId`                                                                                            | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `transactionId`                                                                                      | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `title`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `startDt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `endDt`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `timezone`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | Timezone (IANA timezone format, e.g., 'UTC', 'America/New_York', 'Europe/London')                    |
| `visibility`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `keywords`                                                                                           | *string*[]                                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `latitude`                                                                                           | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `longitude`                                                                                          | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `address`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `eventMetadata`                                                                                      | Record<string, *any*>                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `publishedAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `publishedBy`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `spaces`                                                                                             | [models.AppEventDomainEntityEventSpaceInfo](../models/app-event-domain-entity-event-space-info.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `documents`                                                                                          | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `timeline`                                                                                           | [models.EventRead](../models/event-read.md)[]                                                        | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `updatedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |