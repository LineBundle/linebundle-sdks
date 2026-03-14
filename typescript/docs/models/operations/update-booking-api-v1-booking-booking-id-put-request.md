# UpdateBookingApiV1BookingBookingIdPutRequest

## Example Usage

```typescript
import { UpdateBookingApiV1BookingBookingIdPutRequest } from "@linebundle-sdk/ts/models/operations";

let value: UpdateBookingApiV1BookingBookingIdPutRequest = {
  bookingId: 933909,
  body: {
    title: "<value>",
    startDt: new Date("2024-12-06T19:23:57.033Z"),
    endDt: new Date("2025-08-28T03:40:07.194Z"),
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `bookingId`                                                           | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `body`                                                                | [models.UpdateBookingRequest](../../models/update-booking-request.md) | :heavy_check_mark:                                                    | N/A                                                                   |