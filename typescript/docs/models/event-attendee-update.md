# EventAttendeeUpdate

Pydantic model for updating an existing event attendee.

## Example Usage

```typescript
import { EventAttendeeUpdate } from "@linebundle-sdk/ts/models";

let value: EventAttendeeUpdate = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `status`                                              | [models.AttendeeStatus](../models/attendee-status.md) | :heavy_minus_sign:                                    | Attendee status enumeration.                          |
| `notes`                                               | *string*                                              | :heavy_minus_sign:                                    | Additional notes                                      |