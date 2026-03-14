# WorkflowType

Enum representing different workflow types.

## Example Usage

```python
from linebundle_sdk.models import WorkflowType

# Open enum: unrecognized values are captured as UnrecognizedStr
value: WorkflowType = "supervisor"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"supervisor"`
- `"parallel"`
- `"sequential"`
- `"evaluator_optimizer"`
