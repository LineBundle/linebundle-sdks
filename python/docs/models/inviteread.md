# InviteRead

Schema representing an organization invitation.


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *str*                                                                | :heavy_check_mark:                                                   | Invitation ID                                                        |
| `org_id`                                                             | *str*                                                                | :heavy_check_mark:                                                   | Organization ID                                                      |
| `email`                                                              | *str*                                                                | :heavy_check_mark:                                                   | Invitee email address                                                |
| `role`                                                               | *Optional[str]*                                                      | :heavy_minus_sign:                                                   | Role to assign on acceptance                                         |
| `status`                                                             | *Optional[str]*                                                      | :heavy_minus_sign:                                                   | Invitation status                                                    |
| `inviter_id`                                                         | *str*                                                                | :heavy_check_mark:                                                   | ID of user who sent invite                                           |
| `expires_at`                                                         | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_minus_sign:                                                   | When invitation expires                                              |
| `created_at`                                                         | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_minus_sign:                                                   | When invitation was created                                          |