# AvailabilityResponse

Response schema for availability checks

## Example Usage

```typescript
import { AvailabilityResponse } from "openapi/models";

let value: AvailabilityResponse = {
  available: true,
  placeId: 802636,
  startDt: new Date("2026-04-05T21:32:34.663Z"),
  endDt: new Date("2024-02-25T00:53:24.775Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `available`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the place is available                                                                |
| `placeId`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | Place ID that was checked                                                                     |
| `startDt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Start datetime checked                                                                        |
| `endDt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | End datetime checked                                                                          |