# AssistantResponse

## Example Usage

```typescript
import { AssistantResponse } from "openapi/models";

let value: AssistantResponse = {
  id: "<id>",
  username: "Dell.Cummings-Reichel",
  isAiAssistant: true,
  ownerId: "<id>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | Assistant ID                                      |
| `username`                                        | *string*                                          | :heavy_check_mark:                                | Assistant username                                |
| `isAiAssistant`                                   | *boolean*                                         | :heavy_check_mark:                                | Whether this is an AI assistant                   |
| `ownerId`                                         | *string*                                          | :heavy_check_mark:                                | Owner user ID                                     |
| `roomId`                                          | *string*                                          | :heavy_minus_sign:                                | Chat room ID for conversations with the assistant |