# CreateSessionResponse

## Example Usage

```typescript
import { CreateSessionResponse } from "@linebundle-sdk/ts/models";

let value: CreateSessionResponse = {
  id: "d8a115a7-901f-4e0a-b23c-3ead1c5cc51e",
  orgId: "6d170bde-5518-4c79-9f49-fecde7015d94",
  creatorId: "1da816a1-723a-4b45-a72e-0bd1b35f0e2c",
  title: "<value>",
  threadId: "<id>",
  agentType: "event_planner",
  model: "El Camino",
  temperature: 3891.15,
  systemPrompt: "<value>",
  status: "archived",
  messageCount: 915053,
  createdAt: new Date("2026-12-14T16:03:14.151Z"),
  updatedAt: new Date("2026-08-02T03:56:09.848Z"),
  lastMessageAt: new Date("2025-09-06T15:12:49.689Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Session ID                                                                                    |
| `orgId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Organization ID (null for personal)                                                           |
| `creatorId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | User who created the session                                                                  |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Session title                                                                                 |
| `threadId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | LangGraph thread identifier                                                                   |
| `agentType`                                                                                   | [models.AgentType](../models/agent-type.md)                                                   | :heavy_check_mark:                                                                            | Enum representing different types of AI agents.                                               |
| `model`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | OpenAI model name                                                                             |
| `temperature`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | LLM temperature                                                                               |
| `systemPrompt`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | Custom system prompt                                                                          |
| `status`                                                                                      | [models.SessionStatus](../models/session-status.md)                                           | :heavy_check_mark:                                                                            | Enum representing AI agent session status.                                                    |
| `messageCount`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of messages in session                                                                 |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp                                                                            |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last update timestamp                                                                         |
| `lastMessageAt`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last message timestamp                                                                        |