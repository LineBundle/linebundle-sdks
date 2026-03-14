# SearchContactsApiV1ContactsSearchGetRequest

## Example Usage

```typescript
import { SearchContactsApiV1ContactsSearchGetRequest } from "@linebundle-sdk/ts/models/operations";

let value: SearchContactsApiV1ContactsSearchGetRequest = {
  query: "<value>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `query`                             | *string*                            | :heavy_check_mark:                  | Search query                        |
| `limit`                             | *number*                            | :heavy_minus_sign:                  | Maximum number of results to return |
| `offset`                            | *number*                            | :heavy_minus_sign:                  | Number of results to skip           |