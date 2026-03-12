# EventAdvancedFilters

Complete advanced filtering options for events.

## Example Usage

```typescript
import { EventAdvancedFilters } from "openapi/models";

let value: EventAdvancedFilters = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `dateFilters`                                                            | [models.EventDateFilter](../models/event-date-filter.md)                 | :heavy_minus_sign:                                                       | Date-based filters                                                       |
| `textFilters`                                                            | [models.EventTextFilter](../models/event-text-filter.md)                 | :heavy_minus_sign:                                                       | Text-based filters                                                       |
| `statusFilters`                                                          | [models.EventStatusFilter](../models/event-status-filter.md)             | :heavy_minus_sign:                                                       | Status-based filters                                                     |
| `relationshipFilters`                                                    | [models.EventRelationshipFilter](../models/event-relationship-filter.md) | :heavy_minus_sign:                                                       | Relationship-based filters                                               |
| `repeatFilters`                                                          | [models.EventRepeatFilter](../models/event-repeat-filter.md)             | :heavy_minus_sign:                                                       | Recurrence-based filters                                                 |
| `locationFilters`                                                        | [models.EventLocationFilter](../models/event-location-filter.md)         | :heavy_minus_sign:                                                       | Location-based filters                                                   |
| `customConditions`                                                       | *string*                                                                 | :heavy_minus_sign:                                                       | JSON string for complex filter conditions using FilterGroup format       |