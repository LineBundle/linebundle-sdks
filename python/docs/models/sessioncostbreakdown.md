# SessionCostBreakdown


## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `total_cost_usd`                   | *float*                            | :heavy_check_mark:                 | Total cost in USD for this session |
| `total_tokens`                     | *int*                              | :heavy_check_mark:                 | Total tokens used (input + output) |
| `total_input_tokens`               | *int*                              | :heavy_check_mark:                 | Total input tokens                 |
| `total_output_tokens`              | *int*                              | :heavy_check_mark:                 | Total output tokens                |
| `message_count`                    | *int*                              | :heavy_check_mark:                 | Number of messages in session      |
| `model`                            | *str*                              | :heavy_check_mark:                 | Model used                         |
| `last_message_cost_usd`            | *OptionalNullable[float]*          | :heavy_minus_sign:                 | Cost of last message               |