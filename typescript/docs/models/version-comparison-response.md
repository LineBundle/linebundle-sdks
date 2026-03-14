# VersionComparisonResponse

Response showing differences between two versions.

## Example Usage

```typescript
import { VersionComparisonResponse } from "@linebundle-sdk/ts/models";

let value: VersionComparisonResponse = {
  spaceId: 123,
  versionA: 1,
  versionB: 2,
  differences: {
    "member_ids": {
      "added": [
        "user-5",
        "user-6",
      ],
      "removed": [
        "user-1",
        "user-2",
      ],
    },
    "title": {
      "version_a": "Old Title",
      "version_b": "New Title",
    },
  },
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `spaceId`                                            | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `versionA`                                           | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `versionB`                                           | *number*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `differences`                                        | Record<string, *any*>                                | :heavy_check_mark:                                   | Dictionary of field changes and relationship changes |