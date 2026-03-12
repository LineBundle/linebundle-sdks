# GetSpaceListResponseDTO


## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `id`                                               | *int*                                              | :heavy_check_mark:                                 | ID                                                 |
| `title`                                            | *str*                                              | :heavy_check_mark:                                 | Title                                              |
| `description`                                      | *str*                                              | :heavy_check_mark:                                 | Description                                        |
| `created_at`                                       | *str*                                              | :heavy_check_mark:                                 | Created At                                         |
| `updated_at`                                       | *str*                                              | :heavy_check_mark:                                 | Updated At                                         |
| `timezone`                                         | *str*                                              | :heavy_check_mark:                                 | Timezone                                           |
| `visibility`                                       | *OptionalNullable[int]*                            | :heavy_minus_sign:                                 | Visibility                                         |
| `creator_id`                                       | *OptionalNullable[str]*                            | :heavy_minus_sign:                                 | Creator ID                                         |
| `org_id`                                           | *OptionalNullable[str]*                            | :heavy_minus_sign:                                 | Organization ID                                    |
| `parent_id`                                        | *OptionalNullable[int]*                            | :heavy_minus_sign:                                 | N/A                                                |
| `children`                                         | List[*int*]                                        | :heavy_minus_sign:                                 | N/A                                                |
| `inheritance_settings`                             | Dict[str, *Any*]                                   | :heavy_minus_sign:                                 | N/A                                                |
| `member_count`                                     | *Optional[int]*                                    | :heavy_minus_sign:                                 | Number of members in the space                     |
| `event_count`                                      | *Optional[int]*                                    | :heavy_minus_sign:                                 | Number of events in the space                      |
| `is_member`                                        | *Optional[bool]*                                   | :heavy_minus_sign:                                 | Whether the current user is a member of this space |
| `user_role`                                        | *OptionalNullable[str]*                            | :heavy_minus_sign:                                 | Current user's role in the space                   |