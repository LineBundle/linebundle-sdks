# SectionSettingsRead

Partial response model for Settings (Visibility, Access Control).
Used by `PATCH /settings` and `GET /section/settings`.

## Example Usage

```typescript
import { SectionSettingsRead } from "openapi/models";

let value: SectionSettingsRead = {
  id: 195173,
  title: "<value>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `id`                          | *number*                      | :heavy_check_mark:            | Event ID                      |
| `title`                       | *string*                      | :heavy_check_mark:            | Top-level event title         |
| `status`                      | *string*                      | :heavy_minus_sign:            | Event status                  |
| `visibility`                  | *number*                      | :heavy_minus_sign:            | Visibility                    |
| `keywords`                    | *string*[]                    | :heavy_minus_sign:            | Keywords                      |
| `isLocked`                    | *boolean*                     | :heavy_minus_sign:            | Is Locked                     |
| `subcontribSpeakersCanSubmit` | *boolean*                     | :heavy_minus_sign:            | Speaker submission allowed    |