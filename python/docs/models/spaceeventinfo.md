# SpaceEventInfo

Space event information for API responses.


## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `id`                    | *int*                   | :heavy_check_mark:      | Event ID                |
| `title`                 | *str*                   | :heavy_check_mark:      | Event title             |
| `description`           | *OptionalNullable[str]* | :heavy_minus_sign:      | Event description       |
| `start_time`            | *OptionalNullable[str]* | :heavy_minus_sign:      | Event start time        |
| `end_time`              | *OptionalNullable[str]* | :heavy_minus_sign:      | Event end time          |
| `location`              | *OptionalNullable[str]* | :heavy_minus_sign:      | Event location          |
| `status`                | *OptionalNullable[str]* | :heavy_minus_sign:      | Event status            |