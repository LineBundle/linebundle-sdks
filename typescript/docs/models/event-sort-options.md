# EventSortOptions

Sorting options for event queries - supports multiple sort fields.

## Example Usage

```typescript
import { EventSortOptions } from "openapi/models";

let value: EventSortOptions = {
  sorts: [
    {
      field: "start_dt",
    },
    {
      field: "end_dt",
      order: "desc",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  | Example                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sortBy`                                                                                                                                                                     | [models.SortBy](../models/sort-by.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                           | Single field to sort by (legacy). Available fields: id, title, description, created_dt, start_dt, end_dt, visibility, creator_id, is_deleted, is_locked, latitude, longitude |                                                                                                                                                                              |
| `sortOrder`                                                                                                                                                                  | [models.SortOrder](../models/sort-order.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                           | Sort order for single field (legacy): 'asc' or 'desc'                                                                                                                        |                                                                                                                                                                              |
| `sorts`                                                                                                                                                                      | [models.EventSortFieldConfig](../models/event-sort-field-config.md)[]                                                                                                        | :heavy_minus_sign:                                                                                                                                                           | Multiple sort fields configuration. Chaque item specifies a field and order. Applied in sequence.                                                                            | [<br/>{<br/>"field": "start_dt",<br/>"order": "asc"<br/>},<br/>{<br/>"field": "end_dt",<br/>"order": "desc"<br/>}<br/>]                                                      |