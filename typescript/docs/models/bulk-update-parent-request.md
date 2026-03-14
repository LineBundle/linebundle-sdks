# BulkUpdateParentRequest

Request to update parent for multiple spaces

## Example Usage

```typescript
import { BulkUpdateParentRequest } from "@linebundle-sdk/ts/models";

let value: BulkUpdateParentRequest = {
  spaceIds: [],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `spaceIds`                             | *number*[]                             | :heavy_check_mark:                     | List of space IDs to update            |
| `parentId`                             | *number*                               | :heavy_minus_sign:                     | New parent ID or null to remove parent |