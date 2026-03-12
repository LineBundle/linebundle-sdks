# EventTextFilter

Text-based filtering options for events.


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `search`                                                   | *OptionalNullable[str]*                                    | :heavy_minus_sign:                                         | Global text search across title, description, and keywords |
| `title`                                                    | *OptionalNullable[str]*                                    | :heavy_minus_sign:                                         | Filter by title (case-insensitive contains)                |
| `description`                                              | *OptionalNullable[str]*                                    | :heavy_minus_sign:                                         | Filter by description (case-insensitive contains)          |
| `keywords`                                                 | List[*str*]                                                | :heavy_minus_sign:                                         | Filter by keywords (must contain all specified keywords)   |