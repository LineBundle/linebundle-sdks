# EventAttendeeList

Model for list of attendees with contact info.

## Example Usage

```typescript
import { EventAttendeeList } from "@linebundle-sdk/ts/models";

let value: EventAttendeeList = {
  total: 96244,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `attendees`                                                    | [models.EventAttendeeRead](../models/event-attendee-read.md)[] | :heavy_minus_sign:                                             | List of attendees                                              |
| `total`                                                        | *number*                                                       | :heavy_check_mark:                                             | Total number of attendees                                      |