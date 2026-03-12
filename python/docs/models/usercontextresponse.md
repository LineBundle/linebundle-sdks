# UserContextResponse

Response schema for auth context endpoint.


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `user_id`                                                      | *str*                                                          | :heavy_check_mark:                                             | External User ID (Subject)                                     |
| `email`                                                        | *OptionalNullable[str]*                                        | :heavy_minus_sign:                                             | N/A                                                            |
| `username`                                                     | *OptionalNullable[str]*                                        | :heavy_minus_sign:                                             | N/A                                                            |
| `is_service_account`                                           | *Optional[bool]*                                               | :heavy_minus_sign:                                             | True if M2M token                                              |
| `organizations`                                                | List[[models.OrganizationRead](../models/organizationread.md)] | :heavy_minus_sign:                                             | N/A                                                            |