# UpdateRuleRequest

Request to update automation rule.


## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `name`                   | *OptionalNullable[str]*  | :heavy_minus_sign:       | N/A                      |
| `description`            | *OptionalNullable[str]*  | :heavy_minus_sign:       | N/A                      |
| `enabled`                | *OptionalNullable[bool]* | :heavy_minus_sign:       | N/A                      |
| `priority`               | *OptionalNullable[int]*  | :heavy_minus_sign:       | N/A                      |
| `conditions`             | Dict[str, *Any*]         | :heavy_minus_sign:       | N/A                      |
| `actions`                | List[Dict[str, *Any*]]   | :heavy_minus_sign:       | N/A                      |
| `schedule`               | Dict[str, *Any*]         | :heavy_minus_sign:       | N/A                      |
| `constraints`            | Dict[str, *Any*]         | :heavy_minus_sign:       | N/A                      |
| `metadata`               | Dict[str, *Any*]         | :heavy_minus_sign:       | N/A                      |