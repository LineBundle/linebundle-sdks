# EventFilterRequest

Complete filter request for POST endpoint.

## Example Usage

```typescript
import { EventFilterRequest } from "@linebundle-sdk/ts/models";

let value: EventFilterRequest = {
  sort: {
    sorts: [
      {
        field: "start_dt",
      },
      {
        field: "end_dt",
        order: "desc",
      },
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `filters`                                                              | [models.EventAdvancedFilters](../models/event-advanced-filters.md)     | :heavy_minus_sign:                                                     | Advanced filters                                                       |
| `sort`                                                                 | [models.EventSortOptions](../models/event-sort-options.md)             | :heavy_minus_sign:                                                     | Sort options                                                           |
| `pagination`                                                           | [models.EventPaginationOptions](../models/event-pagination-options.md) | :heavy_minus_sign:                                                     | Pagination options                                                     |