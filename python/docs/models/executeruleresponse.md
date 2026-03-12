# ExecuteRuleResponse

Response from rule execution.


## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `execution_id`           | *str*                    | :heavy_check_mark:       | N/A                      |
| `status`                 | *str*                    | :heavy_check_mark:       | N/A                      |
| `conditions_met`         | *OptionalNullable[bool]* | :heavy_minus_sign:       | N/A                      |
| `condition_results`      | List[Dict[str, *Any*]]   | :heavy_minus_sign:       | N/A                      |
| `action_results`         | List[Dict[str, *Any*]]   | :heavy_minus_sign:       | N/A                      |
| `error`                  | *OptionalNullable[str]*  | :heavy_minus_sign:       | N/A                      |
| `cached`                 | *Optional[bool]*         | :heavy_minus_sign:       | N/A                      |