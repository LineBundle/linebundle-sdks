# SpaceMemberResponse

Response model for space member information


## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `user_id`                                  | *str*                                      | :heavy_check_mark:                         | User ID                                    |
| `email`                                    | *str*                                      | :heavy_check_mark:                         | User's email                               |
| `name`                                     | *OptionalNullable[str]*                    | :heavy_minus_sign:                         | User's display name                        |
| `role`                                     | [models.SpaceRole](../models/spacerole.md) | :heavy_check_mark:                         | Space roles with hierarchical permissions  |
| `joined_at`                                | *str*                                      | :heavy_check_mark:                         | When the user joined the space             |
| `avatar_url`                               | *OptionalNullable[str]*                    | :heavy_minus_sign:                         | User's avatar URL                          |