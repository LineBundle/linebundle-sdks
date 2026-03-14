# GetBookingsApiV1BookingGetRequest

## Example Usage

```typescript
import { GetBookingsApiV1BookingGetRequest } from "@linebundle-sdk/ts/models/operations";

let value: GetBookingsApiV1BookingGetRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Filter by user ID                                                                             |
| `placeId`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | Filter by place ID                                                                            |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Filter by start date                                                                          |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Filter by end date                                                                            |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Number of bookings to return                                                                  |
| `offset`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | Number of bookings to skip                                                                    |