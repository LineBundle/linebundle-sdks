# SpaceVersionListResponse

List of space versions.

## Example Usage

```typescript
import { SpaceVersionListResponse } from "openapi/models";

let value: SpaceVersionListResponse = {
  versions: [
    {
      id: 437800,
      spaceId: 47680,
      versionNumber: 40266,
      status: "<value>",
      title: "<value>",
      description: "consequently vice drat impressionable seagull",
      timezone: "Asia/Colombo",
      visibility: 545106,
      eventCreationMode: 178119,
      suggestionsDisabled: true,
      notifyManagers: true,
      iconMetadata: null,
      logoMetadata: {
        "key": "<value>",
      },
      publishedAt: new Date("2025-12-24T19:41:08.878Z"),
      publishedBy: null,
      createdAt: new Date("2025-08-13T08:21:41.716Z"),
      updatedAt: new Date("2025-11-06T02:43:28.151Z"),
    },
  ],
  total: 283590,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `versions`                                                   | [models.SpaceVersionRead](../models/space-version-read.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `total`                                                      | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |