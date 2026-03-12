# BookingRead

Response schema for booking data


## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `id`                    | *int*                   | :heavy_check_mark:      | Booking ID              |
| `place_id`              | *int*                   | :heavy_check_mark:      | Place ID                |
| `user_id`               | *str*                   | :heavy_check_mark:      | User ID                 |
| `title`                 | *str*                   | :heavy_check_mark:      | Booking title           |
| `description`           | *OptionalNullable[str]* | :heavy_minus_sign:      | Booking description     |
| `start_dt`              | *str*                   | :heavy_check_mark:      | Start datetime          |
| `end_dt`                | *str*                   | :heavy_check_mark:      | End datetime            |
| `status`                | *str*                   | :heavy_check_mark:      | Booking status          |
| `created_at`            | *str*                   | :heavy_check_mark:      | Created datetime        |
| `updated_at`            | *str*                   | :heavy_check_mark:      | Updated datetime        |