# SpaceRole

Space roles with hierarchical permissions

## Example Usage

```python
from linebundle_sdk.models import SpaceRole

# Open enum: unrecognized values are captured as UnrecognizedStr
value: SpaceRole = "space_owner"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"space_owner"`
- `"space_admin"`
- `"space_member"`
- `"space_viewer"`
