# SpaceEventCreate

Pydantic model for creating a new space event association.

## Example Usage

```typescript
import { SpaceEventCreate } from "@linebundle-sdk/ts/models";

let value: SpaceEventCreate = {
  eventId: 607346,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `eventId`                | *number*                 | :heavy_check_mark:       | Event ID to add to space |