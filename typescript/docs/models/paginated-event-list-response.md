# PaginatedEventListResponse

## Example Usage

```typescript
import { PaginatedEventListResponse } from "openapi/models";

let value: PaginatedEventListResponse = {
  items: [
    {
      id: 678742,
      title: "<value>",
      description: "fall axe fork abaft instead inasmuch grandson",
      startDt: "<value>",
      endDt: "<value>",
      timezone: "Asia/Amman",
      visibility: 995303,
      keywords: [
        "<value 1>",
        "<value 2>",
      ],
      createdAt: "1725706415216",
      updatedAt: "1735650575896",
    },
  ],
  meta: {
    limit: 706530,
    offset: 389464,
    hasNext: false,
    hasPrev: true,
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `items`                                                               | [models.GetEventListResponse](../models/get-event-list-response.md)[] | :heavy_check_mark:                                                    | N/A                                                                   |
| `meta`                                                                | [models.PaginationMeta](../models/pagination-meta.md)                 | :heavy_check_mark:                                                    | N/A                                                                   |