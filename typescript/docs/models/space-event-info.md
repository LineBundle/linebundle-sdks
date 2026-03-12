# SpaceEventInfo

Space event information for API responses.

## Example Usage

```typescript
import { SpaceEventInfo } from "openapi/models";

let value: SpaceEventInfo = {
  id: 709781,
  title: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *number*           | :heavy_check_mark: | Event ID           |
| `title`            | *string*           | :heavy_check_mark: | Event title        |
| `description`      | *string*           | :heavy_minus_sign: | Event description  |
| `startTime`        | *string*           | :heavy_minus_sign: | Event start time   |
| `endTime`          | *string*           | :heavy_minus_sign: | Event end time     |
| `location`         | *string*           | :heavy_minus_sign: | Event location     |
| `status`           | *string*           | :heavy_minus_sign: | Event status       |