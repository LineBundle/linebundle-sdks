# EventRelationshipFilter

Relationship-based filtering options for events.


## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `space_ids`                                                     | List[*int*]                                                     | :heavy_minus_sign:                                              | Filter by space IDs (events associated with these spaces)       |
| `document_ids`                                                  | List[*str*]                                                     | :heavy_minus_sign:                                              | Filter by document IDs (events associated with these documents) |
| `has_documents`                                                 | *OptionalNullable[bool]*                                        | :heavy_minus_sign:                                              | Filter events with/without documents                            |
| `has_spaces`                                                    | *OptionalNullable[bool]*                                        | :heavy_minus_sign:                                              | Filter events with/without spaces                               |
| `has_timelines`                                                 | *OptionalNullable[bool]*                                        | :heavy_minus_sign:                                              | Filter events with/without timelines                            |