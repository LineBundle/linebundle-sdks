# SearchUsersApiV1UserSearchGetRequest

## Example Usage

```typescript
import { SearchUsersApiV1UserSearchGetRequest } from "openapi/models/operations";

let value: SearchUsersApiV1UserSearchGetRequest = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `q`                                                                                                       | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Search query for username, first_name, last_name, or email. If empty, returns first users based on limit. |
| `limit`                                                                                                   | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | Limit for pagination                                                                                      |
| `prev`                                                                                                    | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | Previous ID for cursor-based pagination                                                                   |
| `orgId`                                                                                                   | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Optional organization ID to filter users within specific organization                                     |