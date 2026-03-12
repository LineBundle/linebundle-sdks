# EventAttendeeUpdate

Pydantic model for updating an existing event attendee.


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `status`                                                       | [Optional[models.AttendeeStatus]](../models/attendeestatus.md) | :heavy_minus_sign:                                             | Attendee status enumeration.                                   |
| `notes`                                                        | *OptionalNullable[str]*                                        | :heavy_minus_sign:                                             | Additional notes                                               |