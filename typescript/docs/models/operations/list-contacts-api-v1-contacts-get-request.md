# ListContactsApiV1ContactsGetRequest

## Example Usage

```typescript
import { ListContactsApiV1ContactsGetRequest } from "openapi/models/operations";

let value: ListContactsApiV1ContactsGetRequest = {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `limit`                              | *number*                             | :heavy_minus_sign:                   | Maximum number of contacts to return |
| `offset`                             | *number*                             | :heavy_minus_sign:                   | Number of contacts to skip           |
| `search`                             | *string*                             | :heavy_minus_sign:                   | Search term for name/email           |
| `isFavorite`                         | *boolean*                            | :heavy_minus_sign:                   | Filter by favorite status            |
| `tags`                               | *string*[]                           | :heavy_minus_sign:                   | Filter by tags                       |