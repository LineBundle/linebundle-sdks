# WorkflowStatus

Enum representing workflow execution status.

## Example Usage

```typescript
import { WorkflowStatus } from "@linebundle-sdk/ts/models";

let value: WorkflowStatus = "running";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "running" | "completed" | "failed" | "cancelled" | Unrecognized<string>
```