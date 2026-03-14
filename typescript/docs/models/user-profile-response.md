# UserProfileResponse

## Example Usage

```typescript
import { UserProfileResponse } from "@linebundle-sdk/ts/models";

let value: UserProfileResponse = {
  id: "<id>",
  email: "Yasmeen59@yahoo.com",
  createdAt: new Date("2024-07-27T02:13:10.386Z"),
  updatedAt: new Date("2024-03-29T15:54:53.602Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | User ID                                                                                       |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Email address                                                                                 |
| `externalAuthId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | External auth provider ID                                                                     |
| `username`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Username                                                                                      |
| `avatarUrl`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Avatar URL                                                                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Account creation date                                                                         |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last update date                                                                              |