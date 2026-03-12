# UpdateRoomRequest

## Example Usage

```typescript
import { UpdateRoomRequest } from "openapi/models";

let value: UpdateRoomRequest = {};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `name`                   | *string*                 | :heavy_minus_sign:       | Updated room name        |
| `description`            | *string*                 | :heavy_minus_sign:       | Updated room description |
| `visibility`             | *number*                 | :heavy_minus_sign:       | Updated visibility level |
| `metadata`               | Record<string, *any*>    | :heavy_minus_sign:       | Updated metadata         |