# SectionIdentificationRead

Partial response model for Identification (Title, Status).
Used by `PATCH /identification` and `GET /section/identification`.


## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `id`                    | *int*                   | :heavy_check_mark:      | Event ID                |
| `title`                 | *str*                   | :heavy_check_mark:      | Top-level event title   |
| `status`                | *OptionalNullable[str]* | :heavy_minus_sign:      | Event status            |