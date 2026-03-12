# EventAttendeeCreate

Pydantic model for creating a new event attendee.


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `status`                                                       | [Optional[models.AttendeeStatus]](../models/attendeestatus.md) | :heavy_minus_sign:                                             | Attendee status enumeration.                                   |
| `notes`                                                        | *OptionalNullable[str]*                                        | :heavy_minus_sign:                                             | Additional notes                                               |
| `contact_id`                                                   | *str*                                                          | :heavy_check_mark:                                             | Contact ID to add as attendee                                  |