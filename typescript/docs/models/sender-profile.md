# SenderProfile

## Example Usage

```typescript
import { SenderProfile } from "@linebundle-sdk/ts/models";

let value: SenderProfile = {
  id: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | User ID            |
| `username`         | *string*           | :heavy_minus_sign: | Username           |
| `firstName`        | *string*           | :heavy_minus_sign: | First name         |
| `lastName`         | *string*           | :heavy_minus_sign: | Last name          |
| `avatarUrl`        | *string*           | :heavy_minus_sign: | Avatar URL         |