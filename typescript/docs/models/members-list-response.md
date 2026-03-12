# MembersListResponse

## Example Usage

```typescript
import { MembersListResponse } from "openapi/models";

let value: MembersListResponse = {
  members: [],
  total: 274716,
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `members`                                               | [models.MemberResponse](../models/member-response.md)[] | :heavy_check_mark:                                      | List of room members                                    |
| `total`                                                 | *number*                                                | :heavy_check_mark:                                      | Total number of members                                 |