# AvailabilityResponse

Response schema for availability checks


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `available`                                                          | *bool*                                                               | :heavy_check_mark:                                                   | Whether the place is available                                       |
| `place_id`                                                           | *int*                                                                | :heavy_check_mark:                                                   | Place ID that was checked                                            |
| `start_dt`                                                           | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | Start datetime checked                                               |
| `end_dt`                                                             | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | End datetime checked                                                 |