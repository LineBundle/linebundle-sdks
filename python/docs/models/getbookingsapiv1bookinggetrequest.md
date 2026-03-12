# GetBookingsAPIV1BookingGetRequest


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `user_id`                                                            | *OptionalNullable[str]*                                              | :heavy_minus_sign:                                                   | Filter by user ID                                                    |
| `place_id`                                                           | *OptionalNullable[int]*                                              | :heavy_minus_sign:                                                   | Filter by place ID                                                   |
| `start_date`                                                         | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_minus_sign:                                                   | Filter by start date                                                 |
| `end_date`                                                           | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_minus_sign:                                                   | Filter by end date                                                   |
| `limit`                                                              | *Optional[int]*                                                      | :heavy_minus_sign:                                                   | Number of bookings to return                                         |
| `offset`                                                             | *Optional[int]*                                                      | :heavy_minus_sign:                                                   | Number of bookings to skip                                           |