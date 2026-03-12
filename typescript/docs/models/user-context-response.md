# UserContextResponse

Response schema for auth context endpoint.

## Example Usage

```typescript
import { UserContextResponse } from "openapi/models";

let value: UserContextResponse = {
  userId: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `userId`                                                    | *string*                                                    | :heavy_check_mark:                                          | External User ID (Subject)                                  |
| `email`                                                     | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `username`                                                  | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `isServiceAccount`                                          | *boolean*                                                   | :heavy_minus_sign:                                          | True if M2M token                                           |
| `organizations`                                             | [models.OrganizationRead](../models/organization-read.md)[] | :heavy_minus_sign:                                          | N/A                                                         |