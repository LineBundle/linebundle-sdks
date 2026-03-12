# SpaceContactRead

Pydantic model for reading space contact data.


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *int*                                                                      | :heavy_check_mark:                                                         | Space contact relationship ID                                              |
| `space_id`                                                                 | *int*                                                                      | :heavy_check_mark:                                                         | Space ID                                                                   |
| `contact_id`                                                               | *str*                                                                      | :heavy_check_mark:                                                         | Contact ID                                                                 |
| `created_at`                                                               | *str*                                                                      | :heavy_check_mark:                                                         | Creation timestamp                                                         |
| `updated_at`                                                               | *str*                                                                      | :heavy_check_mark:                                                         | Last update timestamp                                                      |
| `contact`                                                                  | [OptionalNullable[models.SpaceContactInfo]](../models/spacecontactinfo.md) | :heavy_minus_sign:                                                         | Contact information                                                        |