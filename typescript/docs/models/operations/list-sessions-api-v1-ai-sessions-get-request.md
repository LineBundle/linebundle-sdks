# ListSessionsApiV1AiSessionsGetRequest

## Example Usage

```typescript
import { ListSessionsApiV1AiSessionsGetRequest } from "openapi/models/operations";

let value: ListSessionsApiV1AiSessionsGetRequest = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `agentType`                                            | [models.AgentType](../../models/agent-type.md)         | :heavy_minus_sign:                                     | Filter by agent type                                   |
| `status`                                               | [models.SessionStatus](../../models/session-status.md) | :heavy_minus_sign:                                     | Filter by session status                               |
| `limit`                                                | *number*                                               | :heavy_minus_sign:                                     | Number of sessions to return                           |
| `offset`                                               | *number*                                               | :heavy_minus_sign:                                     | Offset for pagination                                  |