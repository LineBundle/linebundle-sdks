# SectionContentRead

Partial response model for Content (Description, Metadata, Label).
Used by `PATCH /content` and `GET /section/content`.

## Example Usage

```typescript
import { SectionContentRead } from "@linebundle-sdk/ts/models";

let value: SectionContentRead = {
  id: 838547,
  title: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `id`                  | *number*              | :heavy_check_mark:    | Event ID              |
| `title`               | *string*              | :heavy_check_mark:    | Top-level event title |
| `status`              | *string*              | :heavy_minus_sign:    | Event status          |
| `description`         | *string*              | :heavy_minus_sign:    | Description           |
| `eventMetadata`       | Record<string, *any*> | :heavy_minus_sign:    | Metadata              |