# UpdateAttendeesStatusBulkApiV1EventsEventIdAttendeesBulkStatusPatchRequest

## Example Usage

```typescript
import { UpdateAttendeesStatusBulkApiV1EventsEventIdAttendeesBulkStatusPatchRequest } from "openapi/models/operations";

let value:
  UpdateAttendeesStatusBulkApiV1EventsEventIdAttendeesBulkStatusPatchRequest = {
    eventId: 228024,
    status: "checked_in",
    body: [],
  };
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `eventId`                                                | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `status`                                                 | [models.AttendeeStatus](../../models/attendee-status.md) | :heavy_check_mark:                                       | Attendee status enumeration.                             |
| `body`                                                   | *string*[]                                               | :heavy_check_mark:                                       | N/A                                                      |