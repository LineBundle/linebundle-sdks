# AddEventAttendeesBulkApiV1EventsEventIdAttendeesBulkPostRequest

## Example Usage

```typescript
import { AddEventAttendeesBulkApiV1EventsEventIdAttendeesBulkPostRequest } from "@linebundle-sdk/ts/models/operations";

let value: AddEventAttendeesBulkApiV1EventsEventIdAttendeesBulkPostRequest = {
  eventId: 56041,
  body: [],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `eventId`                                                | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `status`                                                 | [models.AttendeeStatus](../../models/attendee-status.md) | :heavy_minus_sign:                                       | Attendee status enumeration.                             |
| `body`                                                   | *string*[]                                               | :heavy_check_mark:                                       | N/A                                                      |