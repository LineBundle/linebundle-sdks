# EventRepeatFilter

Recurrence/repeat-based filtering options for events.


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `repeat_days`                                           | List[*int*]                                             | :heavy_minus_sign:                                      | Filter by repeat days (0=Sunday, 1=Monday, etc.)        |
| `repeat_presets`                                        | List[*str*]                                             | :heavy_minus_sign:                                      | Filter by repeat presets (daily, weekly, monthly, etc.) |
| `is_recurring`                                          | *OptionalNullable[bool]*                                | :heavy_minus_sign:                                      | Filter recurring vs non-recurring events                |
| `timeline_preset`                                       | List[*str*]                                             | :heavy_minus_sign:                                      | Filter by timeline preset values                        |