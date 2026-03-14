# TransferEventRequest

## Example Usage

```typescript
import { TransferEventRequest } from "@linebundle-sdk/ts/models";

let value: TransferEventRequest = {
  targetOrgId: "f86d3c8e-4bfd-49c9-bf21-e8ddbfa7fe07",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `targetOrgId`                                             | *string*                                                  | :heavy_check_mark:                                        | UUID of the target organization to transfer this event to |