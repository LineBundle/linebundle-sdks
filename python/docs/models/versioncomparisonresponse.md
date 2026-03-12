# VersionComparisonResponse

Response showing differences between two versions.


## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `space_id`                                           | *int*                                                | :heavy_check_mark:                                   | N/A                                                  |
| `version_a`                                          | *int*                                                | :heavy_check_mark:                                   | N/A                                                  |
| `version_b`                                          | *int*                                                | :heavy_check_mark:                                   | N/A                                                  |
| `differences`                                        | Dict[str, *Any*]                                     | :heavy_check_mark:                                   | Dictionary of field changes and relationship changes |