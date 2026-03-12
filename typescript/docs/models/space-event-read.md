# SpaceEventRead

Pydantic model for reading space event data.

## Example Usage

```typescript
import { SpaceEventRead } from "openapi/models";

let value: SpaceEventRead = {
  id: 206471,
  spaceId: 17805,
  eventId: 672719,
  createdAt: "1713690430210",
  updatedAt: "1735633788179",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                          | *number*                                                                                                      | :heavy_check_mark:                                                                                            | Space event relationship ID                                                                                   |
| `spaceId`                                                                                                     | *number*                                                                                                      | :heavy_check_mark:                                                                                            | Space ID                                                                                                      |
| `eventId`                                                                                                     | *number*                                                                                                      | :heavy_check_mark:                                                                                            | Event ID                                                                                                      |
| `createdAt`                                                                                                   | *string*                                                                                                      | :heavy_check_mark:                                                                                            | Creation timestamp                                                                                            |
| `updatedAt`                                                                                                   | *string*                                                                                                      | :heavy_check_mark:                                                                                            | Last update timestamp                                                                                         |
| `event`                                                                                                       | [models.SpaceEventInfo](../models/space-event-info.md)                                                        | :heavy_minus_sign:                                                                                            | Event information                                                                                             |
| `space`                                                                                                       | [models.AppSpaceDomainEntitySpaceEventSpaceInfo](../models/app-space-domain-entity-space-event-space-info.md) | :heavy_minus_sign:                                                                                            | Space information                                                                                             |