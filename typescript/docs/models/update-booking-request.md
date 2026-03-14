# UpdateBookingRequest

Request schema for updating a booking

## Example Usage

```typescript
import { UpdateBookingRequest } from "@linebundle-sdk/ts/models";

let value: UpdateBookingRequest = {
  title: "<value>",
  startDt: new Date("2025-02-24T08:42:24.443Z"),
  endDt: new Date("2025-04-24T04:18:13.979Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Booking title                                                                                 |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Booking description                                                                           |
| `startDt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Start datetime                                                                                |
| `endDt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | End datetime                                                                                  |
| `status`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Booking status                                                                                |