# RoomListResponse

## Example Usage

```typescript
import { RoomListResponse } from "@linebundle-sdk/ts/models";

let value: RoomListResponse = {
  rooms: [],
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `rooms`                                             | [models.RoomResponse](../models/room-response.md)[] | :heavy_check_mark:                                  | N/A                                                 |
| `nextCursor`                                        | *string*                                            | :heavy_minus_sign:                                  | Cursor for next page of results                     |
| `hasMore`                                           | *boolean*                                           | :heavy_minus_sign:                                  | Whether there are more results available            |