# UpdateProfileRequest

Profile update - only avatar and username can be changed locally.
Note: first_name and last_name are managed by external auth (Zitadel).

## Example Usage

```typescript
import { UpdateProfileRequest } from "openapi/models";

let value: UpdateProfileRequest = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `username`         | *string*           | :heavy_minus_sign: | Username           |
| `avatarUrl`        | *string*           | :heavy_minus_sign: | Avatar URL         |