# SpaceHierarchyItem

Space hierarchy item for tree display


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *int*                                                              | :heavy_check_mark:                                                 | N/A                                                                |
| `title`                                                            | *str*                                                              | :heavy_check_mark:                                                 | N/A                                                                |
| `description`                                                      | *str*                                                              | :heavy_check_mark:                                                 | N/A                                                                |
| `parent_id`                                                        | *Nullable[int]*                                                    | :heavy_check_mark:                                                 | N/A                                                                |
| `children`                                                         | List[[models.SpaceHierarchyItem](../models/spacehierarchyitem.md)] | :heavy_minus_sign:                                                 | N/A                                                                |
| `level`                                                            | *Optional[int]*                                                    | :heavy_minus_sign:                                                 | N/A                                                                |
| `is_inherited`                                                     | *Optional[bool]*                                                   | :heavy_minus_sign:                                                 | N/A                                                                |