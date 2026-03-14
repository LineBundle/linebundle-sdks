# CreateSpaceWithParentRequest

Request to create a space with parent relationship

## Example Usage

```typescript
import { CreateSpaceWithParentRequest } from "@linebundle-sdk/ts/models";

let value: CreateSpaceWithParentRequest = {
  title: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `title`                                  | *string*                                 | :heavy_check_mark:                       | Space title                              |
| `description`                            | *string*                                 | :heavy_minus_sign:                       | Space description                        |
| `timezone`                               | *string*                                 | :heavy_minus_sign:                       | Space timezone                           |
| `visibility`                             | *number*                                 | :heavy_minus_sign:                       | Space visibility level                   |
| `parentId`                               | *number*                                 | :heavy_minus_sign:                       | Parent space ID for sub-spaces           |
| `inheritanceSettings`                    | Record<string, *any*>                    | :heavy_minus_sign:                       | Inheritance configuration for sub-spaces |