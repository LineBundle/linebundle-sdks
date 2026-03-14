# BaseEventInfo

Basic info about a base event when the current event is a milestone.

## Example Usage

```typescript
import { BaseEventInfo } from "@linebundle-sdk/ts/models";

let value: BaseEventInfo = {
  id: 517402,
  title: "<value>",
  startDt: "<value>",
  endDt: "<value>",
  timezone: "Europe/San_Marino",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `id`                                   | *number*                               | :heavy_check_mark:                     | Base event ID                          |
| `title`                                | *string*                               | :heavy_check_mark:                     | Base event title                       |
| `description`                          | *string*                               | :heavy_minus_sign:                     | Base event description                 |
| `startDt`                              | *string*                               | :heavy_check_mark:                     | Base event start datetime (ISO format) |
| `endDt`                                | *string*                               | :heavy_check_mark:                     | Base event end datetime (ISO format)   |
| `timezone`                             | *string*                               | :heavy_check_mark:                     | Base event timezone                    |