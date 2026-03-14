# SpaceContactList

Model for list of space contacts with contact info.

## Example Usage

```typescript
import { SpaceContactList } from "@linebundle-sdk/ts/models";

let value: SpaceContactList = {
  total: 684141,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contacts`                                                   | [models.SpaceContactRead](../models/space-contact-read.md)[] | :heavy_minus_sign:                                           | List of space contacts                                       |
| `total`                                                      | *number*                                                     | :heavy_check_mark:                                           | Total number of contacts                                     |