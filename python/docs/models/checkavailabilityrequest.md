# CheckAvailabilityRequest

Request schema for checking place availability


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `place_id`                                                           | *int*                                                                | :heavy_check_mark:                                                   | Place ID to check                                                    |
| `start_dt`                                                           | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | Start datetime                                                       |
| `end_dt`                                                             | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | End datetime                                                         |
| `exclude_booking_id`                                                 | *OptionalNullable[int]*                                              | :heavy_minus_sign:                                                   | Booking ID to exclude from conflict check                            |