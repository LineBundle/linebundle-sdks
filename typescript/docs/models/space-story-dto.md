# SpaceStoryDTO

## Example Usage

```typescript
import { SpaceStoryDTO } from "openapi/models";

let value: SpaceStoryDTO = {
  id: 869229,
  name: "<value>",
  role: "<value>",
  memberCount: 286217,
  memberGrowth: 705955,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `role`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `memberCount`                                              | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `memberGrowth`                                             | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `activeEvents`                                             | [models.EventPreviewDTO](../models/event-preview-dto.md)[] | :heavy_minus_sign:                                         | N/A                                                        |
| `ongoingEventsCount`                                       | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `upcomingEventsCount`                                      | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `remainingEventsCount`                                     | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `materialCount`                                            | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `subspaceCount`                                            | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `parentSpaceName`                                          | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `visibility`                                               | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |