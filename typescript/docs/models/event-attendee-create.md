# EventAttendeeCreate

Pydantic model for creating a new event attendee.

## Example Usage

```typescript
import { EventAttendeeCreate } from "openapi/models";

let value: EventAttendeeCreate = {
  contactId: "83469960-8d4d-4c9c-b98e-6d25f3a555ca",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `status`                                              | [models.AttendeeStatus](../models/attendee-status.md) | :heavy_minus_sign:                                    | Attendee status enumeration.                          |
| `notes`                                               | *string*                                              | :heavy_minus_sign:                                    | Additional notes                                      |
| `contactId`                                           | *string*                                              | :heavy_check_mark:                                    | Contact ID to add as attendee                         |