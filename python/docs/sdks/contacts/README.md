# Contacts

## Overview

### Available Operations

* [list_contacts_api_v1_contacts_get](#list_contacts_api_v1_contacts_get) - List Contacts
* [create_contact_api_v1_contacts_post](#create_contact_api_v1_contacts_post) - Create Contact
* [search_contacts_api_v1_contacts_search_get](#search_contacts_api_v1_contacts_search_get) - Search Contacts
* [get_contact_api_v1_contacts_contact_id_get](#get_contact_api_v1_contacts_contact_id_get) - Get Contact
* [update_contact_api_v1_contacts_contact_id_put](#update_contact_api_v1_contacts_contact_id_put) - Update Contact
* [delete_contact_api_v1_contacts_contact_id_delete](#delete_contact_api_v1_contacts_contact_id_delete) - Delete Contact
* [toggle_favorite_api_v1_contacts_contact_id_favorite_patch](#toggle_favorite_api_v1_contacts_contact_id_favorite_patch) - Toggle Favorite

## list_contacts_api_v1_contacts_get

List all contacts for the current user with tenant isolation.

### Example Usage

<!-- UsageSnippet language="python" operationID="list_contacts_api_v1_contacts_get" method="get" path="/api/v1/contacts" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.contacts.list_contacts_api_v1_contacts_get(limit=50, offset=0)

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## create_contact_api_v1_contacts_post

Create a new contact.

### Example Usage

<!-- UsageSnippet language="python" operationID="create_contact_api_v1_contacts_post" method="post" path="/api/v1/contacts" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.contacts.create_contact_api_v1_contacts_post(is_favorite=False)

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## search_contacts_api_v1_contacts_search_get

Search contacts by query string with tenant isolation.

### Example Usage

<!-- UsageSnippet language="python" operationID="search_contacts_api_v1_contacts_search_get" method="get" path="/api/v1/contacts/search" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.contacts.search_contacts_api_v1_contacts_search_get(query="<value>", limit=20, offset=0)

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_contact_api_v1_contacts_contact_id_get

Get a specific contact by ID.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_contact_api_v1_contacts__contact_id__get" method="get" path="/api/v1/contacts/{contact_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.contacts.get_contact_api_v1_contacts_contact_id_get(contact_id="d55d19ee-02a1-4352-aed9-4ca75ea454a2")

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## update_contact_api_v1_contacts_contact_id_put

Update a contact.

### Example Usage

<!-- UsageSnippet language="python" operationID="update_contact_api_v1_contacts__contact_id__put" method="put" path="/api/v1/contacts/{contact_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.contacts.update_contact_api_v1_contacts_contact_id_put(contact_id="56b1f168-3f8b-49ee-bf97-4db8cc488ef1")

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## delete_contact_api_v1_contacts_contact_id_delete

Delete a contact.

### Example Usage

<!-- UsageSnippet language="python" operationID="delete_contact_api_v1_contacts__contact_id__delete" method="delete" path="/api/v1/contacts/{contact_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    sdk.contacts.delete_contact_api_v1_contacts_contact_id_delete(contact_id="182112b5-9e0b-4499-b088-d2e528ac9b5a")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `contact_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## toggle_favorite_api_v1_contacts_contact_id_favorite_patch

Toggle contact favorite status.

### Example Usage

<!-- UsageSnippet language="python" operationID="toggle_favorite_api_v1_contacts__contact_id__favorite_patch" method="patch" path="/api/v1/contacts/{contact_id}/favorite" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.contacts.toggle_favorite_api_v1_contacts_contact_id_favorite_patch(contact_id="5554e3b3-a9d3-4626-976d-37d55690993b")

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |