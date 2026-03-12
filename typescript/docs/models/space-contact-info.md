# SpaceContactInfo

Space contact information for API responses.

## Example Usage

```typescript
import { SpaceContactInfo } from "openapi/models";

let value: SpaceContactInfo = {
  id: "80cee6fd-e181-4107-a77a-5b4389a14491",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | Contact ID         |
| `firstName`        | *string*           | :heavy_minus_sign: | First name         |
| `lastName`         | *string*           | :heavy_minus_sign: | Last name          |
| `email`            | *string*           | :heavy_minus_sign: | Email address      |
| `phonePrimary`     | *string*           | :heavy_minus_sign: | Primary phone      |
| `company`          | *string*           | :heavy_minus_sign: | Company            |
| `jobTitle`         | *string*           | :heavy_minus_sign: | Job title          |
| `avatarUrl`        | *string*           | :heavy_minus_sign: | Avatar URL         |