# EventLocationFilter

Location-based filtering options for events.

## Example Usage

```typescript
import { EventLocationFilter } from "@linebundle-sdk/ts/models";

let value: EventLocationFilter = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `latitude`                                            | *number*                                              | :heavy_minus_sign:                                    | Center latitude for proximity search                  |
| `longitude`                                           | *number*                                              | :heavy_minus_sign:                                    | Center longitude for proximity search                 |
| `radiusKm`                                            | *number*                                              | :heavy_minus_sign:                                    | Search radius in kilometers (max Earth circumference) |
| `hasLocation`                                         | *boolean*                                             | :heavy_minus_sign:                                    | Filter events with/without location coordinates       |
| `addressContains`                                     | *string*                                              | :heavy_minus_sign:                                    | Filter by address text (case-insensitive contains)    |