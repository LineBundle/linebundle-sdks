# EventDateFilter

Date-based filtering options for events.

## Example Usage

```typescript
import { EventDateFilter } from "@linebundle-sdk/ts/models";

let value: EventDateFilter = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Filter events starting after this date                                                        |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Filter events ending before this date                                                         |
| `createdAfter`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Filter events created after this date                                                         |
| `createdBefore`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Filter events created before this date                                                        |
| `dateOperator`                                                                                | [models.FilterOperator](../models/filter-operator.md)                                         | :heavy_minus_sign:                                                                            | Supported filter operators for building query conditions.                                     |