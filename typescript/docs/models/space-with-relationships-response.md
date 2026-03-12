# SpaceWithRelationshipsResponse

Extended space response with relationship fields

## Example Usage

```typescript
import { SpaceWithRelationshipsResponse } from "openapi/models";

let value: SpaceWithRelationshipsResponse = {
  id: 634156,
  title: "<value>",
  description:
    "punctually while obnoxiously besides chime graceful government since freely majestically",
  timezone: "America/Argentina/Tucuman",
  visibility: 646594,
  creatorId: "<id>",
  parentId: 734204,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `title`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `description`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `timezone`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `visibility`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `creatorId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `parentId`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `children`                                                                 | *number*[]                                                                 | :heavy_minus_sign:                                                         | N/A                                                                        |
| `inheritanceSettings`                                                      | [models.SpaceInheritanceSettings](../models/space-inheritance-settings.md) | :heavy_minus_sign:                                                         | N/A                                                                        |