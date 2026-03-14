# CreateSessionRequest

## Example Usage

```typescript
import { CreateSessionRequest } from "@linebundle-sdk/ts/models";

let value: CreateSessionRequest = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `agentType`                                                   | [models.AgentType](../models/agent-type.md)                   | :heavy_minus_sign:                                            | Enum representing different types of AI agents.               |
| `title`                                                       | *string*                                                      | :heavy_minus_sign:                                            | Human-readable session title (auto-generated if not provided) |
| `model`                                                       | *string*                                                      | :heavy_minus_sign:                                            | OpenAI model to use (e.g., gpt-4o, gpt-4o-mini)               |
| `temperature`                                                 | *number*                                                      | :heavy_minus_sign:                                            | LLM temperature for response randomness (0.0-2.0)             |
| `systemPrompt`                                                | *string*                                                      | :heavy_minus_sign:                                            | Custom system prompt to override default agent behavior       |