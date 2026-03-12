# GetEventAttendeesApiV1EventsEventIdAttendeesGetRequest

## Example Usage

```typescript
import { GetEventAttendeesApiV1EventsEventIdAttendeesGetRequest } from "openapi/models/operations";

let value: GetEventAttendeesApiV1EventsEventIdAttendeesGetRequest = {
  eventId: 509506,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `eventId`                                                | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `limit`                                                  | *number*                                                 | :heavy_minus_sign:                                       | Items per page                                           |
| `offset`                                                 | *number*                                                 | :heavy_minus_sign:                                       | Offset for pagination                                    |
| `status`                                                 | [models.AttendeeStatus](../../models/attendee-status.md) | :heavy_minus_sign:                                       | Filter by attendance status                              |
| `isCheckedIn`                                            | *boolean*                                                | :heavy_minus_sign:                                       | Filter by check-in status                                |