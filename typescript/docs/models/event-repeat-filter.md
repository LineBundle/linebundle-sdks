# EventRepeatFilter

Recurrence/repeat-based filtering options for events.

## Example Usage

```typescript
import { EventRepeatFilter } from "@linebundle-sdk/ts/models";

let value: EventRepeatFilter = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `repeatDays`                                            | *number*[]                                              | :heavy_minus_sign:                                      | Filter by repeat days (0=Sunday, 1=Monday, etc.)        |
| `repeatPresets`                                         | *string*[]                                              | :heavy_minus_sign:                                      | Filter by repeat presets (daily, weekly, monthly, etc.) |
| `isRecurring`                                           | *boolean*                                               | :heavy_minus_sign:                                      | Filter recurring vs non-recurring events                |
| `timelinePreset`                                        | *string*[]                                              | :heavy_minus_sign:                                      | Filter by timeline preset values                        |