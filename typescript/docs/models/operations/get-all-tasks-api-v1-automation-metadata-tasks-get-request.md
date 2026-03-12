# GetAllTasksApiV1AutomationMetadataTasksGetRequest

## Example Usage

```typescript
import { GetAllTasksApiV1AutomationMetadataTasksGetRequest } from "openapi/models/operations";

let value: GetAllTasksApiV1AutomationMetadataTasksGetRequest = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `category`                                      | *string*                                        | :heavy_minus_sign:                              | Filter by category (trigger, condition, action) |
| `tags`                                          | *string*[]                                      | :heavy_minus_sign:                              | Filter by tags                                  |
| `search`                                        | *string*                                        | :heavy_minus_sign:                              | Search by name or description                   |