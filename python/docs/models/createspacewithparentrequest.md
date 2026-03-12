# CreateSpaceWithParentRequest

Request to create a space with parent relationship


## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `title`                                  | *str*                                    | :heavy_check_mark:                       | Space title                              |
| `description`                            | *Optional[str]*                          | :heavy_minus_sign:                       | Space description                        |
| `timezone`                               | *Optional[str]*                          | :heavy_minus_sign:                       | Space timezone                           |
| `visibility`                             | *Optional[int]*                          | :heavy_minus_sign:                       | Space visibility level                   |
| `parent_id`                              | *OptionalNullable[int]*                  | :heavy_minus_sign:                       | Parent space ID for sub-spaces           |
| `inheritance_settings`                   | Dict[str, *Any*]                         | :heavy_minus_sign:                       | Inheritance configuration for sub-spaces |