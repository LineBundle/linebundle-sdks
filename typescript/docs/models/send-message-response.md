# SendMessageResponse

## Example Usage

```typescript
import { SendMessageResponse } from "openapi/models";

let value: SendMessageResponse = {
  sessionId: "fb3a689a-000a-4e43-93c4-1975c6d26ef3",
  threadId: "<id>",
  message: "<value>",
  messageCount: 53828,
  timestamp: new Date("2024-10-26T07:59:07.037Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sessionId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Session ID                                                                                    |
| `threadId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Thread ID                                                                                     |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | AI agent response                                                                             |
| `messageCount`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | Updated message count                                                                         |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Response timestamp                                                                            |
| `tokensUsed`                                                                                  | [models.TokenUsage](../models/token-usage.md)                                                 | :heavy_minus_sign:                                                                            | Token usage for this message                                                                  |
| `costUsd`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | Cost in USD for this message                                                                  |