# AddSpaceMemberRequest

Request model for adding a member to a space

## Example Usage

```typescript
import { AddSpaceMemberRequest } from "openapi/models";

let value: AddSpaceMemberRequest = {
  email: "Rey24@hotmail.com",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `email`                                     | *string*                                    | :heavy_check_mark:                          | Email of the user to add                    |
| `role`                                      | [models.SpaceRole](../models/space-role.md) | :heavy_minus_sign:                          | Space roles with hierarchical permissions   |