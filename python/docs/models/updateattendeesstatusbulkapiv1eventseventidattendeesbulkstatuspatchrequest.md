# UpdateAttendeesStatusBulkAPIV1EventsEventIDAttendeesBulkStatusPatchRequest


## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `event_id`                                           | *int*                                                | :heavy_check_mark:                                   | N/A                                                  |
| `status`                                             | [models.AttendeeStatus](../models/attendeestatus.md) | :heavy_check_mark:                                   | Attendee status enumeration.                         |
| `body`                                               | List[*str*]                                          | :heavy_check_mark:                                   | N/A                                                  |