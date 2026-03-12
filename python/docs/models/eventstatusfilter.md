# EventStatusFilter

Status-based filtering options for events.


## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `visibility`                | List[*int*]                 | :heavy_minus_sign:          | Filter by visibility levels |
| `is_deleted`                | *OptionalNullable[bool]*    | :heavy_minus_sign:          | Filter by deletion status   |
| `is_locked`                 | *OptionalNullable[bool]*    | :heavy_minus_sign:          | Filter by lock status       |
| `creator_ids`               | List[*str*]                 | :heavy_minus_sign:          | Filter by creator IDs       |