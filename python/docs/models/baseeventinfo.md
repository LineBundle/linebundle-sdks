# BaseEventInfo

Basic info about a base event when the current event is a milestone.


## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `id`                                   | *int*                                  | :heavy_check_mark:                     | Base event ID                          |
| `title`                                | *str*                                  | :heavy_check_mark:                     | Base event title                       |
| `description`                          | *OptionalNullable[str]*                | :heavy_minus_sign:                     | Base event description                 |
| `start_dt`                             | *str*                                  | :heavy_check_mark:                     | Base event start datetime (ISO format) |
| `end_dt`                               | *str*                                  | :heavy_check_mark:                     | Base event end datetime (ISO format)   |
| `timezone`                             | *str*                                  | :heavy_check_mark:                     | Base event timezone                    |