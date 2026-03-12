# GetEventAttendeesAPIV1EventsEventIDAttendeesGetRequest


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `event_id`                                                             | *int*                                                                  | :heavy_check_mark:                                                     | N/A                                                                    |
| `limit`                                                                | *Optional[int]*                                                        | :heavy_minus_sign:                                                     | Items per page                                                         |
| `offset`                                                               | *Optional[int]*                                                        | :heavy_minus_sign:                                                     | Offset for pagination                                                  |
| `status`                                                               | [OptionalNullable[models.AttendeeStatus]](../models/attendeestatus.md) | :heavy_minus_sign:                                                     | Filter by attendance status                                            |
| `is_checked_in`                                                        | *OptionalNullable[bool]*                                               | :heavy_minus_sign:                                                     | Filter by check-in status                                              |