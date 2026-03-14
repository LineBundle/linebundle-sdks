# SpaceRole

Space roles with hierarchical permissions

## Example Usage

```typescript
import { SpaceRole } from "@linebundle-sdk/ts/models";

let value: SpaceRole = "space_admin";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"space_owner" | "space_admin" | "space_member" | "space_viewer" | Unrecognized<string>
```