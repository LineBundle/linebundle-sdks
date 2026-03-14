# RollbackSpaceRequest

Request to rollback space to a specific version.

## Example Usage

```typescript
import { RollbackSpaceRequest } from "@linebundle-sdk/ts/models";

let value: RollbackSpaceRequest = {
  versionNumber: 928000,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `versionNumber`               | *number*                      | :heavy_check_mark:            | Version number to rollback to |