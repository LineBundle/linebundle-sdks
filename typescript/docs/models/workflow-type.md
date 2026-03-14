# WorkflowType

Enum representing different workflow types.

## Example Usage

```typescript
import { WorkflowType } from "@linebundle-sdk/ts/models";

let value: WorkflowType = "sequential";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"supervisor" | "parallel" | "sequential" | "evaluator_optimizer" | Unrecognized<string>
```