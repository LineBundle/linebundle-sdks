# ContactListResponse

Response model for a list of contacts.


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `contacts`                                                   | List[[models.ContactResponse](../models/contactresponse.md)] | :heavy_check_mark:                                           | List of contacts                                             |
| `total`                                                      | *int*                                                        | :heavy_check_mark:                                           | Total number of contacts                                     |
| `limit`                                                      | *int*                                                        | :heavy_check_mark:                                           | Page size limit                                              |
| `offset`                                                     | *int*                                                        | :heavy_check_mark:                                           | Page offset                                                  |