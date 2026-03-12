# ContactSearchResponse

Response model for contact search results.


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contacts`                                                   | List[[models.ContactResponse](../models/contactresponse.md)] | :heavy_check_mark:                                           | Search results                                               |
| `query`                                                      | *str*                                                        | :heavy_check_mark:                                           | Search query                                                 |
| `total`                                                      | *int*                                                        | :heavy_check_mark:                                           | Total number of results                                      |