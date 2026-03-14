# CheckAvailabilityRequest

Request schema for checking place availability

## Example Usage

```typescript
import { CheckAvailabilityRequest } from "@linebundle-sdk/ts/models";

let value: CheckAvailabilityRequest = {
  placeId: 193342,
  startDt: new Date("2024-05-30T05:07:11.128Z"),
  endDt: new Date("2024-01-24T03:34:25.697Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `placeId`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | Place ID to check                                                                             |
| `startDt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Start datetime                                                                                |
| `endDt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | End datetime                                                                                  |
| `excludeBookingId`                                                                            | *number*                                                                                      | :heavy_minus_sign:                                                                            | Booking ID to exclude from conflict check                                                     |