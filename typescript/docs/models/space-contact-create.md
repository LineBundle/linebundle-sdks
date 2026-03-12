# SpaceContactCreate

Pydantic model for creating a new space contact.

## Example Usage

```typescript
import { SpaceContactCreate } from "openapi/models";

let value: SpaceContactCreate = {
  contactId: "57c84358-1e29-4f64-90c8-4bfc53a9663d",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `contactId`                | *string*                   | :heavy_check_mark:         | Contact ID to add to space |