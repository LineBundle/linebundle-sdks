# AttendeeStatus

Attendee status enumeration.

## Example Usage

```typescript
import { AttendeeStatus } from "@linebundle-sdk/ts/models";

let value: AttendeeStatus = "confirmed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"invited" | "confirmed" | "declined" | "tentative" | "checked_in" | Unrecognized<string>
```