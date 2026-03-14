# CreateGroupRoomRequest

## Example Usage

```typescript
import { CreateGroupRoomRequest } from "@linebundle-sdk/ts/models";

let value: CreateGroupRoomRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `name`                                                        | *string*                                                      | :heavy_check_mark:                                            | Group chat name                                               |
| `description`                                                 | *string*                                                      | :heavy_minus_sign:                                            | Group chat description                                        |
| `visibility`                                                  | *number*                                                      | :heavy_minus_sign:                                            | Visibility level (10=public, 20=private, 30=org, 40=personal) |