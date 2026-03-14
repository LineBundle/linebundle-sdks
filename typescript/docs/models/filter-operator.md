# FilterOperator

Supported filter operators for building query conditions.

## Example Usage

```typescript
import { FilterOperator } from "@linebundle-sdk/ts/models";

let value: FilterOperator = "icontains";
```

## Values

```typescript
"eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "contains" | "icontains" | "startswith" | "endswith" | "in" | "not_in" | "is_null" | "is_not_null" | "between" | "regex"
```