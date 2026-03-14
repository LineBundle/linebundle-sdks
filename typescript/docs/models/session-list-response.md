# SessionListResponse

## Example Usage

```typescript
import { SessionListResponse } from "@linebundle-sdk/ts/models";

let value: SessionListResponse = {
  sessions: [],
  total: 894483,
  limit: 662673,
  offset: 728675,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `sessions`                                                             | [models.CreateSessionResponse](../models/create-session-response.md)[] | :heavy_check_mark:                                                     | List of sessions                                                       |
| `total`                                                                | *number*                                                               | :heavy_check_mark:                                                     | Total number of sessions                                               |
| `limit`                                                                | *number*                                                               | :heavy_check_mark:                                                     | Page size                                                              |
| `offset`                                                               | *number*                                                               | :heavy_check_mark:                                                     | Offset                                                                 |