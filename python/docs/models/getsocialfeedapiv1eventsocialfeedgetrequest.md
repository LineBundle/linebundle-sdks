# GetSocialFeedAPIV1EventSocialFeedGetRequest


## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `cursor`                                                                  | *OptionalNullable[str]*                                                   | :heavy_minus_sign:                                                        | Cursor for pagination                                                     |
| `limit`                                                                   | *Optional[int]*                                                           | :heavy_minus_sign:                                                        | Items per page                                                            |
| `current_time`                                                            | [date](https://docs.python.org/3/library/datetime.html#date-objects)      | :heavy_minus_sign:                                                        | User's current time for ranking (defaults to server time if not provided) |