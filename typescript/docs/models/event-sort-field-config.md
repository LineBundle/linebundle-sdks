# EventSortFieldConfig

Individual sort field configuration.

## Example Usage

```typescript
import { EventSortFieldConfig } from "@linebundle-sdk/ts/models";

let value: EventSortFieldConfig = {
  field: "end_dt",
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `field`                                                                                                                                                      | [models.Field](../models/field.md)                                                                                                                           | :heavy_check_mark:                                                                                                                                           | Field to sort by. Available fields: id, title, description, created_dt, start_dt, end_dt, visibility, creator_id, is_deleted, is_locked, latitude, longitude |
| `order`                                                                                                                                                      | [models.Order](../models/order.md)                                                                                                                           | :heavy_minus_sign:                                                                                                                                           | Sort order: 'asc' for ascending, 'desc' for descending                                                                                                       |