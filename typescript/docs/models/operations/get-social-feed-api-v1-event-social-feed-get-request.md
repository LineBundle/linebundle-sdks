# GetSocialFeedApiV1EventSocialFeedGetRequest

## Example Usage

```typescript
import { GetSocialFeedApiV1EventSocialFeedGetRequest } from "openapi/models/operations";

let value: GetSocialFeedApiV1EventSocialFeedGetRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cursor`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Cursor for pagination                                                                         |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Items per page                                                                                |
| `currentTime`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | User's current time for ranking (defaults to server time if not provided)                     |