# ListSessionsAPIV1AiSessionsGetRequest


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `agent_type`                                                         | [OptionalNullable[models.AgentType]](../models/agenttype.md)         | :heavy_minus_sign:                                                   | Filter by agent type                                                 |
| `status`                                                             | [OptionalNullable[models.SessionStatus]](../models/sessionstatus.md) | :heavy_minus_sign:                                                   | Filter by session status                                             |
| `limit`                                                              | *Optional[int]*                                                      | :heavy_minus_sign:                                                   | Number of sessions to return                                         |
| `offset`                                                             | *Optional[int]*                                                      | :heavy_minus_sign:                                                   | Offset for pagination                                                |