# EventTextFilter

Text-based filtering options for events.

## Example Usage

```typescript
import { EventTextFilter } from "@linebundle-sdk/ts/models";

let value: EventTextFilter = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `search`                                                   | *string*                                                   | :heavy_minus_sign:                                         | Global text search across title, description, and keywords |
| `title`                                                    | *string*                                                   | :heavy_minus_sign:                                         | Filter by title (case-insensitive contains)                |
| `description`                                              | *string*                                                   | :heavy_minus_sign:                                         | Filter by description (case-insensitive contains)          |
| `keywords`                                                 | *string*[]                                                 | :heavy_minus_sign:                                         | Filter by keywords (must contain all specified keywords)   |