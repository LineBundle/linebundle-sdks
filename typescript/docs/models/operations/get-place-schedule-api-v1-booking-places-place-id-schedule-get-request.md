# GetPlaceScheduleApiV1BookingPlacesPlaceIdScheduleGetRequest

## Example Usage

```typescript
import { GetPlaceScheduleApiV1BookingPlacesPlaceIdScheduleGetRequest } from "@linebundle-sdk/ts/models/operations";

let value: GetPlaceScheduleApiV1BookingPlacesPlaceIdScheduleGetRequest = {
  placeId: 819420,
  startDate: new Date("2024-10-13T11:51:15.845Z"),
  endDate: new Date("2025-03-03T10:40:51.877Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `placeId`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Start date for schedule                                                                       |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | End date for schedule                                                                         |