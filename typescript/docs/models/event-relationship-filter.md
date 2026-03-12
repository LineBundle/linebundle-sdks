# EventRelationshipFilter

Relationship-based filtering options for events.

## Example Usage

```typescript
import { EventRelationshipFilter } from "openapi/models";

let value: EventRelationshipFilter = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `spaceIds`                                                      | *number*[]                                                      | :heavy_minus_sign:                                              | Filter by space IDs (events associated with these spaces)       |
| `documentIds`                                                   | *string*[]                                                      | :heavy_minus_sign:                                              | Filter by document IDs (events associated with these documents) |
| `hasDocuments`                                                  | *boolean*                                                       | :heavy_minus_sign:                                              | Filter events with/without documents                            |
| `hasSpaces`                                                     | *boolean*                                                       | :heavy_minus_sign:                                              | Filter events with/without spaces                               |
| `hasTimelines`                                                  | *boolean*                                                       | :heavy_minus_sign:                                              | Filter events with/without timelines                            |