# GetSpaceListResponseDTO

## Example Usage

```typescript
import { GetSpaceListResponseDTO } from "openapi/models";

let value: GetSpaceListResponseDTO = {
  id: 626740,
  title: "<value>",
  description: "since but where oof jaggedly farm",
  createdAt: "1714040805653",
  updatedAt: "1735687113996",
  timezone: "Asia/Singapore",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `id`                                               | *number*                                           | :heavy_check_mark:                                 | ID                                                 |
| `title`                                            | *string*                                           | :heavy_check_mark:                                 | Title                                              |
| `description`                                      | *string*                                           | :heavy_check_mark:                                 | Description                                        |
| `createdAt`                                        | *string*                                           | :heavy_check_mark:                                 | Created At                                         |
| `updatedAt`                                        | *string*                                           | :heavy_check_mark:                                 | Updated At                                         |
| `timezone`                                         | *string*                                           | :heavy_check_mark:                                 | Timezone                                           |
| `visibility`                                       | *number*                                           | :heavy_minus_sign:                                 | Visibility                                         |
| `creatorId`                                        | *string*                                           | :heavy_minus_sign:                                 | Creator ID                                         |
| `orgId`                                            | *string*                                           | :heavy_minus_sign:                                 | Organization ID                                    |
| `parentId`                                         | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `children`                                         | *number*[]                                         | :heavy_minus_sign:                                 | N/A                                                |
| `inheritanceSettings`                              | Record<string, *any*>                              | :heavy_minus_sign:                                 | N/A                                                |
| `memberCount`                                      | *number*                                           | :heavy_minus_sign:                                 | Number of members in the space                     |
| `eventCount`                                       | *number*                                           | :heavy_minus_sign:                                 | Number of events in the space                      |
| `isMember`                                         | *boolean*                                          | :heavy_minus_sign:                                 | Whether the current user is a member of this space |
| `userRole`                                         | *string*                                           | :heavy_minus_sign:                                 | Current user's role in the space                   |