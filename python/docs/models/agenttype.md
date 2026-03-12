# AgentType

Enum representing different types of AI agents.

## Example Usage

```python
from openapi.models import AgentType

# Open enum: unrecognized values are captured as UnrecognizedStr
value: AgentType = "general"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"general"`
- `"event_planner"`
- `"content_writer"`
- `"data_analyst"`
- `"space_manager"`
- `"moderator"`
