# SectionSettingsRead

Partial response model for Settings (Visibility, Access Control).
Used by `PATCH /settings` and `GET /section/settings`.


## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `id`                             | *int*                            | :heavy_check_mark:               | Event ID                         |
| `title`                          | *str*                            | :heavy_check_mark:               | Top-level event title            |
| `status`                         | *OptionalNullable[str]*          | :heavy_minus_sign:               | Event status                     |
| `visibility`                     | *OptionalNullable[int]*          | :heavy_minus_sign:               | Visibility                       |
| `keywords`                       | List[*str*]                      | :heavy_minus_sign:               | Keywords                         |
| `is_locked`                      | *Optional[bool]*                 | :heavy_minus_sign:               | Is Locked                        |
| `subcontrib_speakers_can_submit` | *Optional[bool]*                 | :heavy_minus_sign:               | Speaker submission allowed       |