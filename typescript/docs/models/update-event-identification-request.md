# UpdateEventIdentificationRequest

## Example Usage

```typescript
import { UpdateEventIdentificationRequest } from "openapi/models";

let value: UpdateEventIdentificationRequest = {
  title: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `title`                                        | *string*                                       | :heavy_check_mark:                             | Top-level event title                          |
| `status`                                       | *string*                                       | :heavy_minus_sign:                             | Event status (e.g. pending, active, cancelled) |