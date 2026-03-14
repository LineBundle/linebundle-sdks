# TokenUsage

## Example Usage

```typescript
import { TokenUsage } from "@linebundle-sdk/ts/models";

let value: TokenUsage = {
  input: 554754,
  output: 782710,
  total: 916852,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `input`                       | *number*                      | :heavy_check_mark:            | Input tokens consumed         |
| `output`                      | *number*                      | :heavy_check_mark:            | Output tokens generated       |
| `total`                       | *number*                      | :heavy_check_mark:            | Total tokens (input + output) |