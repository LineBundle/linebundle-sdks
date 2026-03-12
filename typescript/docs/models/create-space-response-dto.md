# CreateSpaceResponseDTO

## Example Usage

```typescript
import { CreateSpaceResponseDTO } from "openapi/models";

let value: CreateSpaceResponseDTO = {
  id: 894825,
  title: "<value>",
  description: "millet configuration geez lovingly",
  timezone: "America/Port-au-Prince",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *number*           | :heavy_check_mark: | ID                 |
| `title`            | *string*           | :heavy_check_mark: | Title              |
| `description`      | *string*           | :heavy_check_mark: | Description        |
| `timezone`         | *string*           | :heavy_check_mark: | Timezone           |
| `visibility`       | *number*           | :heavy_minus_sign: | Visibility         |
| `creatorId`        | *string*           | :heavy_minus_sign: | Creator ID         |