# CreateBookingRequest

Request schema for creating a booking

## Example Usage

```typescript
import { CreateBookingRequest } from "openapi/models";

let value: CreateBookingRequest = {
  placeId: 469052,
  title: "<value>",
  startDt: new Date("2026-03-18T23:08:04.754Z"),
  endDt: new Date("2024-02-17T23:19:35.395Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `placeId`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | Place ID to book                                                                              |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Booking title                                                                                 |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Booking description                                                                           |
| `startDt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Start datetime                                                                                |
| `endDt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | End datetime                                                                                  |