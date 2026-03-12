# EventStatusFilter

Status-based filtering options for events.

## Example Usage

```typescript
import { EventStatusFilter } from "openapi/models";

let value: EventStatusFilter = {};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `visibility`                | *number*[]                  | :heavy_minus_sign:          | Filter by visibility levels |
| `isDeleted`                 | *boolean*                   | :heavy_minus_sign:          | Filter by deletion status   |
| `isLocked`                  | *boolean*                   | :heavy_minus_sign:          | Filter by lock status       |
| `creatorIds`                | *string*[]                  | :heavy_minus_sign:          | Filter by creator IDs       |