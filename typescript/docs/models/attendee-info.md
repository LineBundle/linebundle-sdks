# AttendeeInfo

Attendee information for API responses.

## Example Usage

```typescript
import { AttendeeInfo } from "openapi/models";

let value: AttendeeInfo = {
  id: "d7a1c22a-fae5-4708-a656-cc11aa6ab631",
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