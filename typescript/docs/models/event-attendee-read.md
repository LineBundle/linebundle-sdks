# EventAttendeeRead

Pydantic model for reading event attendee data.

## Example Usage

```typescript
import { EventAttendeeRead } from "openapi/models";

let value: EventAttendeeRead = {
  id: 783333,
  eventId: 735692,
  contactId: "45de7ed5-2e6c-46f9-a3a4-b7bd236687f6",
  isCheckedIn: false,
  createdAt: new Date("2025-04-21T16:29:18.685Z"),
  updatedAt: new Date("2025-10-21T19:57:00.224Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `status`                                                                                      | [models.AttendeeStatus](../models/attendee-status.md)                                         | :heavy_minus_sign:                                                                            | Attendee status enumeration.                                                                  |
| `notes`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Additional notes                                                                              |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | Attendee relationship ID                                                                      |
| `eventId`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | Event ID                                                                                      |
| `contactId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Contact ID                                                                                    |
| `isCheckedIn`                                                                                 | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether attendee has checked in                                                               |
| `checkedInAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Check-in timestamp                                                                            |
| `invitedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Invitation timestamp                                                                          |
| `respondedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Response timestamp                                                                            |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp                                                                            |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last update timestamp                                                                         |
| `contact`                                                                                     | [models.AttendeeInfo](../models/attendee-info.md)                                             | :heavy_minus_sign:                                                                            | Contact information                                                                           |