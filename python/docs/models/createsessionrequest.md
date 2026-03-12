# CreateSessionRequest


## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `agent_type`                                                  | [Optional[models.AgentType]](../models/agenttype.md)          | :heavy_minus_sign:                                            | Enum representing different types of AI agents.               |
| `title`                                                       | *OptionalNullable[str]*                                       | :heavy_minus_sign:                                            | Human-readable session title (auto-generated if not provided) |
| `model`                                                       | *Optional[str]*                                               | :heavy_minus_sign:                                            | OpenAI model to use (e.g., gpt-4o, gpt-4o-mini)               |
| `temperature`                                                 | *Optional[float]*                                             | :heavy_minus_sign:                                            | LLM temperature for response randomness (0.0-2.0)             |
| `system_prompt`                                               | *OptionalNullable[str]*                                       | :heavy_minus_sign:                                            | Custom system prompt to override default agent behavior       |