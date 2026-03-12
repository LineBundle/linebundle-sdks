# SectionContentRead

Partial response model for Content (Description, Metadata, Label).
Used by `PATCH /content` and `GET /section/content`.


## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `id`                    | *int*                   | :heavy_check_mark:      | Event ID                |
| `title`                 | *str*                   | :heavy_check_mark:      | Top-level event title   |
| `status`                | *OptionalNullable[str]* | :heavy_minus_sign:      | Event status            |
| `description`           | *OptionalNullable[str]* | :heavy_minus_sign:      | Description             |
| `event_metadata`        | Dict[str, *Any*]        | :heavy_minus_sign:      | Metadata                |