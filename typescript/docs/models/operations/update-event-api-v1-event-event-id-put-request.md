# UpdateEventApiV1EventEventIdPutRequest

## Example Usage

```typescript
import { UpdateEventApiV1EventEventIdPutRequest } from "openapi/models/operations";

let value: UpdateEventApiV1EventEventIdPutRequest = {
  eventId: 858537,
  body: {
    title: "<value>",
    startDt: "<value>",
    startTm: "<value>",
    endDt: "<value>",
    endTm: "<value>",
    timezone: "America/Anguilla",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `eventId`                                                         | *number*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `body`                                                            | [models.CreateEventRequest](../../models/create-event-request.md) | :heavy_check_mark:                                                | N/A                                                               |