# CreateBookingRequest

Request schema for creating a booking


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `place_id`                                                           | *int*                                                                | :heavy_check_mark:                                                   | Place ID to book                                                     |
| `title`                                                              | *str*                                                                | :heavy_check_mark:                                                   | Booking title                                                        |
| `description`                                                        | *OptionalNullable[str]*                                              | :heavy_minus_sign:                                                   | Booking description                                                  |
| `start_dt`                                                           | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | Start datetime                                                       |
| `end_dt`                                                             | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | End datetime                                                         |