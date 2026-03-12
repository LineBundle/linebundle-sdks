# SectionIdentificationRead

Partial response model for Identification (Title, Status).
Used by `PATCH /identification` and `GET /section/identification`.

## Example Usage

```typescript
import { SectionIdentificationRead } from "openapi/models";

let value: SectionIdentificationRead = {
  id: 211589,
  title: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `id`                  | *number*              | :heavy_check_mark:    | Event ID              |
| `title`               | *string*              | :heavy_check_mark:    | Top-level event title |
| `status`              | *string*              | :heavy_minus_sign:    | Event status          |