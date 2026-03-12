# CreateRuleRequest

Request to create automation rule.


## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `name`                               | *str*                                | :heavy_check_mark:                   | N/A                                  |
| `description`                        | *OptionalNullable[str]*              | :heavy_minus_sign:                   | N/A                                  |
| `scope`                              | *str*                                | :heavy_check_mark:                   | EVENT, TIMELINE, SPACE, ORGANIZATION |
| `scope_id`                           | *OptionalNullable[str]*              | :heavy_minus_sign:                   | N/A                                  |
| `enabled`                            | *Optional[bool]*                     | :heavy_minus_sign:                   | N/A                                  |
| `priority`                           | *Optional[int]*                      | :heavy_minus_sign:                   | N/A                                  |
| `conditions`                         | Dict[str, *Any*]                     | :heavy_check_mark:                   | Condition group structure            |
| `actions`                            | List[Dict[str, *Any*]]               | :heavy_check_mark:                   | List of actions                      |
| `schedule`                           | Dict[str, *Any*]                     | :heavy_check_mark:                   | Schedule configuration               |
| `constraints`                        | Dict[str, *Any*]                     | :heavy_minus_sign:                   | N/A                                  |
| `metadata`                           | Dict[str, *Any*]                     | :heavy_minus_sign:                   | N/A                                  |