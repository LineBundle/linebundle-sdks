# UserSearchResponseDTO

## Example Usage

```typescript
import { UserSearchResponseDTO } from "@linebundle-sdk/ts/models";

let value: UserSearchResponseDTO = {
  id: "<id>",
  createdAt: "1723608124453",
  updatedAt: "1735647797243",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | User ID            |
| `username`         | *string*           | :heavy_minus_sign: | Username           |
| `email`            | *string*           | :heavy_minus_sign: | Email              |
| `avatarUrl`        | *string*           | :heavy_minus_sign: | Avatar URL         |
| `createdAt`        | *string*           | :heavy_check_mark: | Created At         |
| `updatedAt`        | *string*           | :heavy_check_mark: | Updated At         |