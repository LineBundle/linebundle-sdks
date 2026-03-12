# AddSpaceMemberRequest

Request model for adding a member to a space


## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `email`                                              | *str*                                                | :heavy_check_mark:                                   | Email of the user to add                             |
| `role`                                               | [Optional[models.SpaceRole]](../models/spacerole.md) | :heavy_minus_sign:                                   | Space roles with hierarchical permissions            |