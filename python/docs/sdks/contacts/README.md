# Contacts

## Overview

### Available Operations

* [list](#list) - List Contacts
* [create](#create) - Create Contact
* [search](#search) - Search Contacts
* [get](#get) - Get Contact
* [update](#update) - Update Contact
* [delete](#delete) - Delete Contact
* [toggle_favorite](#toggle_favorite) - Toggle Favorite

## list

List all contacts for the current user with tenant isolation.

### Example Usage

<!-- UsageSnippet language="python" operationID="list_contacts_api_v1_contacts_get" method="get" path="/api/v1/contacts" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.contacts.list(limit=50, offset=0)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Maximum number of contacts to return                                |
| `offset`                                                            | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Number of contacts to skip                                          |
| `search`                                                            | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Search term for name/email                                          |
| `is_favorite`                                                       | *OptionalNullable[bool]*                                            | :heavy_minus_sign:                                                  | Filter by favorite status                                           |
| `tags`                                                              | List[*str*]                                                         | :heavy_minus_sign:                                                  | Filter by tags                                                      |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.ContactListResponse](../../models/contactlistresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## create

Create a new contact.

### Example Usage

<!-- UsageSnippet language="python" operationID="create_contact_api_v1_contacts_post" method="post" path="/api/v1/contacts" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.contacts.create(is_favorite=False)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `org_id`                                                            | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Organization ID                                                     |
| `first_name`                                                        | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | First name                                                          |
| `last_name`                                                         | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Last name                                                           |
| `middle_name`                                                       | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Middle name                                                         |
| `nickname`                                                          | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Nickname                                                            |
| `email`                                                             | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Email address                                                       |
| `phone_primary`                                                     | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Primary phone number                                                |
| `phone_secondary`                                                   | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Secondary phone number                                              |
| `phone_work`                                                        | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Work phone number                                                   |
| `address_line1`                                                     | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Address line 1                                                      |
| `address_line2`                                                     | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Address line 2                                                      |
| `city`                                                              | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | City                                                                |
| `state_province`                                                    | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | State or province                                                   |
| `postal_code`                                                       | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Postal code                                                         |
| `country`                                                           | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Country                                                             |
| `company`                                                           | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Company name                                                        |
| `job_title`                                                         | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Job title                                                           |
| `website`                                                           | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Website URL                                                         |
| `notes`                                                             | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Additional notes                                                    |
| `avatar_url`                                                        | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Avatar URL                                                          |
| `linked_user_id`                                                    | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Linked user ID                                                      |
| `is_favorite`                                                       | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | Whether contact is marked as favorite                               |
| `tags`                                                              | List[*str*]                                                         | :heavy_minus_sign:                                                  | Tags for categorization                                             |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.ContactResponse](../../models/contactresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## search

Search contacts by query string with tenant isolation.

### Example Usage

<!-- UsageSnippet language="python" operationID="search_contacts_api_v1_contacts_search_get" method="get" path="/api/v1/contacts/search" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.contacts.search(query="<value>", limit=20, offset=0)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `query`                                                             | *str*                                                               | :heavy_check_mark:                                                  | Search query                                                        |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Maximum number of results to return                                 |
| `offset`                                                            | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Number of results to skip                                           |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.ContactSearchResponse](../../models/contactsearchresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get

Get a specific contact by ID.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_contact_api_v1_contacts__contact_id__get" method="get" path="/api/v1/contacts/{contact_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.contacts.get(contact_id="d55d19ee-02a1-4352-aed9-4ca75ea454a2")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `contact_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.ContactResponse](../../models/contactresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## update

Update a contact.

### Example Usage

<!-- UsageSnippet language="python" operationID="update_contact_api_v1_contacts__contact_id__put" method="put" path="/api/v1/contacts/{contact_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.contacts.update(contact_id="56b1f168-3f8b-49ee-bf97-4db8cc488ef1")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `contact_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `org_id`                                                            | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Organization ID                                                     |
| `first_name`                                                        | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | First name                                                          |
| `last_name`                                                         | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Last name                                                           |
| `middle_name`                                                       | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Middle name                                                         |
| `nickname`                                                          | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Nickname                                                            |
| `email`                                                             | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Email address                                                       |
| `phone_primary`                                                     | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Primary phone number                                                |
| `phone_secondary`                                                   | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Secondary phone number                                              |
| `phone_work`                                                        | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Work phone number                                                   |
| `address_line1`                                                     | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Address line 1                                                      |
| `address_line2`                                                     | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Address line 2                                                      |
| `city`                                                              | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | City                                                                |
| `state_province`                                                    | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | State or province                                                   |
| `postal_code`                                                       | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Postal code                                                         |
| `country`                                                           | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Country                                                             |
| `company`                                                           | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Company name                                                        |
| `job_title`                                                         | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Job title                                                           |
| `website`                                                           | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Website URL                                                         |
| `notes`                                                             | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Additional notes                                                    |
| `avatar_url`                                                        | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Avatar URL                                                          |
| `linked_user_id`                                                    | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Linked user ID                                                      |
| `is_favorite`                                                       | *OptionalNullable[bool]*                                            | :heavy_minus_sign:                                                  | Whether contact is marked as favorite                               |
| `tags`                                                              | List[*str*]                                                         | :heavy_minus_sign:                                                  | Tags for categorization                                             |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.ContactResponse](../../models/contactresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## delete

Delete a contact.

### Example Usage

<!-- UsageSnippet language="python" operationID="delete_contact_api_v1_contacts__contact_id__delete" method="delete" path="/api/v1/contacts/{contact_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    linebundle.contacts.delete(contact_id="182112b5-9e0b-4499-b088-d2e528ac9b5a")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `contact_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## toggle_favorite

Toggle contact favorite status.

### Example Usage

<!-- UsageSnippet language="python" operationID="toggle_favorite_api_v1_contacts__contact_id__favorite_patch" method="patch" path="/api/v1/contacts/{contact_id}/favorite" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.contacts.toggle_favorite(contact_id="5554e3b3-a9d3-4626-976d-37d55690993b")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `contact_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `is_favorite`                                                       | *OptionalNullable[bool]*                                            | :heavy_minus_sign:                                                  | New favorite status                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.ContactResponse](../../models/contactresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |