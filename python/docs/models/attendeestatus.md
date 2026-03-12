# AttendeeStatus

Attendee status enumeration.

## Example Usage

```python
from openapi.models import AttendeeStatus

# Open enum: unrecognized values are captured as UnrecognizedStr
value: AttendeeStatus = "invited"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"invited"`
- `"confirmed"`
- `"declined"`
- `"tentative"`
- `"checked_in"`
