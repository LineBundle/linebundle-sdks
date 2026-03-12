# SpaceVersionRead

Published space version response.

## Example Usage

```typescript
import { SpaceVersionRead } from "openapi/models";

let value: SpaceVersionRead = {
  id: 805341,
  spaceId: 599813,
  versionNumber: 850757,
  status: "<value>",
  title: "<value>",
  description: "ouch rundown an highly",
  timezone: "America/Edmonton",
  visibility: 312658,
  eventCreationMode: 627005,
  suggestionsDisabled: false,
  notifyManagers: false,
  iconMetadata: {
    "key": "<value>",
  },
  logoMetadata: {
    "key": "<value>",
    "key1": "<value>",
  },
  publishedAt: new Date("2025-03-19T23:21:47.484Z"),
  publishedBy: "040df6fa-9bf2-4317-8c87-2db9954d84e7",
  createdAt: new Date("2024-11-14T01:06:03.626Z"),
  updatedAt: new Date("2026-06-29T12:50:53.789Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `spaceId`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `versionNumber`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `timezone`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `visibility`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `eventCreationMode`                                                                           | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `suggestionsDisabled`                                                                         | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `notifyManagers`                                                                              | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `iconMetadata`                                                                                | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `logoMetadata`                                                                                | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `publishedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `publishedBy`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `members`                                                                                     | [models.SpaceVersionMember](../models/space-version-member.md)[]                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `contacts`                                                                                    | [models.SpaceVersionContact](../models/space-version-contact.md)[]                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `documents`                                                                                   | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |