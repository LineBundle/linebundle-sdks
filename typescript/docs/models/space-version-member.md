# SpaceVersionMember

## Example Usage

```typescript
import { SpaceVersionMember } from "@linebundle-sdk/ts/models";

let value: SpaceVersionMember = {
  userId: "6d492270-7fd9-4923-a997-9d54822fd251",
  role: "<value>",
  isActive: true,
  profile: {
    id: "ab7da7e5-f6eb-4e30-95de-31ec0684e685",
    email: "Ephraim_Rowe9@yahoo.com",
    firstName: "Denis",
    lastName: "Macejkovic",
    avatarUrl: "https://austere-pressure.com",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `role`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isActive`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `joinedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `profile`                                                                                     | [models.SpaceVersionProfile](../models/space-version-profile.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |