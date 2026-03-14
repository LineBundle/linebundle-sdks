# TransferSpaceResponse

## Example Usage

```typescript
import { TransferSpaceResponse } from "@linebundle-sdk/ts/models";

let value: TransferSpaceResponse = {
  status: "<value>",
  spaceId: 64489,
  targetOrgId: "<id>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `status`                        | *string*                        | :heavy_check_mark:              | Transfer status                 |
| `spaceId`                       | *number*                        | :heavy_check_mark:              | ID of the transferred space     |
| `targetOrgId`                   | *string*                        | :heavy_check_mark:              | UUID of the target organization |