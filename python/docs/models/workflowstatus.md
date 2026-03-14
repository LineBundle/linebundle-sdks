# WorkflowStatus

Enum representing workflow execution status.

## Example Usage

```python
from linebundle_sdk.models import WorkflowStatus

# Open enum: unrecognized values are captured as UnrecognizedStr
value: WorkflowStatus = "pending"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"pending"`
- `"running"`
- `"completed"`
- `"failed"`
- `"cancelled"`
