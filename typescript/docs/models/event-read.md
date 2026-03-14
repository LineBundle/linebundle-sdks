# EventRead

Schema for reading Event data.

This model represents the public API response for an event, including
calculated fields like attendee counts and formatted timestamps.

## Example Usage

```typescript
import { EventRead } from "@linebundle-sdk/ts/models";

let value: EventRead = {
  id: 973430,
  title: "<value>",
  isDeleted: false,
  isLocked: false,
  creatorId: "165dd0f0-2022-426e-be97-09a97e5cb140",
  createdDt: "<value>",
  startDt: "<value>",
  endDt: "<value>",
  timezone: "Asia/Tomsk",
  ownMapUrl: "https://slow-babushka.org",
  subcontribSpeakersCanSubmit: false,
  createdAt: "1711885307759",
  updatedAt: "1735618269937",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `title`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `isDeleted`                                                                              | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `isLocked`                                                                               | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `creatorId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `orgId`                                                                                  | *string*                                                                                 | :heavy_minus_sign:                                                                       | Owning organization UUID or null for personal events                                     |
| `createdDt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `startDt`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `endDt`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `timezone`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `visibility`                                                                             | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `keywords`                                                                               | *string*[]                                                                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `urlShortcut`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `ownMapUrl`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `subcontribSpeakersCanSubmit`                                                            | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `repeatDays`                                                                             | *number*[]                                                                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `repeatPresets`                                                                          | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `timelinePreset`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `attendeeCount`                                                                          | *number*                                                                                 | :heavy_minus_sign:                                                                       | Number of attendees for this event                                                       |
| `latitude`                                                                               | *number*                                                                                 | :heavy_minus_sign:                                                                       | Latitude coordinate of the event location                                                |
| `longitude`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | Longitude coordinate of the event location                                               |
| `address`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | Physical address of the event location                                                   |
| `eventMetadata`                                                                          | Record<string, *any*>                                                                    | :heavy_minus_sign:                                                                       | JSON metadata like vibrant colors                                                        |
| `dependencies`                                                                           | *any*[]                                                                                  | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `documents`                                                                              | *string*[]                                                                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `baseEvents`                                                                             | [models.BaseEventInfo](../models/base-event-info.md)[]                                   | :heavy_minus_sign:                                                                       | List of base events that this event is a milestone of. Empty if this is not a milestone. |