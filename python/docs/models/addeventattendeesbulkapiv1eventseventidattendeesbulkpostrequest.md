# AddEventAttendeesBulkAPIV1EventsEventIDAttendeesBulkPostRequest


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `event_id`                                                     | *int*                                                          | :heavy_check_mark:                                             | N/A                                                            |
| `status`                                                       | [Optional[models.AttendeeStatus]](../models/attendeestatus.md) | :heavy_minus_sign:                                             | Attendee status enumeration.                                   |
| `body`                                                         | List[*str*]                                                    | :heavy_check_mark:                                             | N/A                                                            |