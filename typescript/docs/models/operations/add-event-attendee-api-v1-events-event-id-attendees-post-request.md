# AddEventAttendeeApiV1EventsEventIdAttendeesPostRequest

## Example Usage

```typescript
import { AddEventAttendeeApiV1EventsEventIdAttendeesPostRequest } from "@linebundle-sdk/ts/models/operations";

let value: AddEventAttendeeApiV1EventsEventIdAttendeesPostRequest = {
  eventId: 170765,
  body: {
    contactId: "ce50376f-9f78-4d72-8e7f-ec9bcc9cbf4f",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `eventId`                                                           | *number*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `body`                                                              | [models.EventAttendeeCreate](../../models/event-attendee-create.md) | :heavy_check_mark:                                                  | N/A                                                                 |