# SpaceHierarchyItem

Space hierarchy item for tree display

## Example Usage

```typescript
import { SpaceHierarchyItem } from "@linebundle-sdk/ts/models";

let value: SpaceHierarchyItem = {
  id: 928584,
  title: "<value>",
  description: "indelible eek nervously duh dispose jagged carelessly phew",
  parentId: 540664,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `title`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `description`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `parentId`                                                       | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `children`                                                       | [models.SpaceHierarchyItem](../models/space-hierarchy-item.md)[] | :heavy_minus_sign:                                               | N/A                                                              |
| `level`                                                          | *number*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `isInherited`                                                    | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |