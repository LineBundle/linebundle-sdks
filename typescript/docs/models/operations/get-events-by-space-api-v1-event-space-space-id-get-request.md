# GetEventsBySpaceApiV1EventSpaceSpaceIdGetRequest

## Example Usage

```typescript
import { GetEventsBySpaceApiV1EventSpaceSpaceIdGetRequest } from "openapi/models/operations";

let value: GetEventsBySpaceApiV1EventSpaceSpaceIdGetRequest = {
  spaceId: 193157,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `spaceId`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Limit                                                                                         |
| `offset`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | Offset                                                                                        |
| `sortBy`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Sort by field                                                                                 |
| `sortOrder`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Sort order (asc or desc)                                                                      |
| `search`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Search query                                                                                  |
| `startDt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Start date for filtering                                                                      |
| `endDt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | End date for filtering                                                                        |