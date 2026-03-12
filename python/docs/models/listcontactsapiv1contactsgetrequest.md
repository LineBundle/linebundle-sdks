# ListContactsAPIV1ContactsGetRequest


## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `limit`                              | *Optional[int]*                      | :heavy_minus_sign:                   | Maximum number of contacts to return |
| `offset`                             | *Optional[int]*                      | :heavy_minus_sign:                   | Number of contacts to skip           |
| `search`                             | *OptionalNullable[str]*              | :heavy_minus_sign:                   | Search term for name/email           |
| `is_favorite`                        | *OptionalNullable[bool]*             | :heavy_minus_sign:                   | Filter by favorite status            |
| `tags`                               | List[*str*]                          | :heavy_minus_sign:                   | Filter by tags                       |