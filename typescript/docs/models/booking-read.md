# BookingRead

Response schema for booking data

## Example Usage

```typescript
import { BookingRead } from "@linebundle-sdk/ts/models";

let value: BookingRead = {
  id: 533121,
  placeId: 198809,
  userId: "029e6d06-5b24-47fe-ba06-3078ba6179cc",
  title: "<value>",
  startDt: "<value>",
  endDt: "<value>",
  status: "<value>",
  createdAt: "1726982095748",
  updatedAt: "1735670782373",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `id`                | *number*            | :heavy_check_mark:  | Booking ID          |
| `placeId`           | *number*            | :heavy_check_mark:  | Place ID            |
| `userId`            | *string*            | :heavy_check_mark:  | User ID             |
| `title`             | *string*            | :heavy_check_mark:  | Booking title       |
| `description`       | *string*            | :heavy_minus_sign:  | Booking description |
| `startDt`           | *string*            | :heavy_check_mark:  | Start datetime      |
| `endDt`             | *string*            | :heavy_check_mark:  | End datetime        |
| `status`            | *string*            | :heavy_check_mark:  | Booking status      |
| `createdAt`         | *string*            | :heavy_check_mark:  | Created datetime    |
| `updatedAt`         | *string*            | :heavy_check_mark:  | Updated datetime    |