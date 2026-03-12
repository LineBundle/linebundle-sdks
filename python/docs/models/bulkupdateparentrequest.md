# BulkUpdateParentRequest

Request to update parent for multiple spaces


## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `space_ids`                            | List[*int*]                            | :heavy_check_mark:                     | List of space IDs to update            |
| `parent_id`                            | *OptionalNullable[int]*                | :heavy_minus_sign:                     | New parent ID or null to remove parent |