# SpaceContacts

## Overview

### Available Operations

* [get_space_contacts_api_v1_spaces_space_id_contacts_get](#get_space_contacts_api_v1_spaces_space_id_contacts_get) - Get Space Contacts
* [add_contact_to_space_api_v1_spaces_space_id_contacts_post](#add_contact_to_space_api_v1_spaces_space_id_contacts_post) - Add Contact To Space
* [get_contact_spaces_api_v1_contacts_contact_id_spaces_get](#get_contact_spaces_api_v1_contacts_contact_id_spaces_get) - Get Contact Spaces
* [get_space_contact_api_v1_space_contacts_space_contact_id_get](#get_space_contact_api_v1_space_contacts_space_contact_id_get) - Get Space Contact
* [remove_contact_from_space_api_v1_space_contacts_space_contact_id_delete](#remove_contact_from_space_api_v1_space_contacts_space_contact_id_delete) - Remove Contact From Space
* [bulk_add_contacts_to_space_api_v1_spaces_space_id_contacts_bulk_post](#bulk_add_contacts_to_space_api_v1_spaces_space_id_contacts_bulk_post) - Bulk Add Contacts To Space
* [bulk_remove_contacts_from_space_api_v1_spaces_space_id_contacts_bulk_delete](#bulk_remove_contacts_from_space_api_v1_spaces_space_id_contacts_bulk_delete) - Bulk Remove Contacts From Space
* [count_space_contacts_api_v1_spaces_space_id_contacts_count_get](#count_space_contacts_api_v1_spaces_space_id_contacts_count_get) - Count Space Contacts

## get_space_contacts_api_v1_spaces_space_id_contacts_get

Get all contacts for a specific space.

Args:
    space_id: Space ID
    limit: Maximum number of contacts to return
    offset: Number of contacts to skip
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space contact service

Returns:
    List of space contacts with total count

### Example Usage

<!-- UsageSnippet language="python" operationID="get_space_contacts_api_v1_spaces__space_id__contacts_get" method="get" path="/api/v1/spaces/{space_id}/contacts" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_contacts.get_space_contacts_api_v1_spaces_space_id_contacts_get(space_id=260446, limit=50, offset=0)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `offset`                                                            | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SpaceContactList](../../models/spacecontactlist.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## add_contact_to_space_api_v1_spaces_space_id_contacts_post

Add a contact to a space.

Args:
    space_id: Space ID
    request: Space contact creation request
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space contact service

Returns:
    Created space contact

### Example Usage

<!-- UsageSnippet language="python" operationID="add_contact_to_space_api_v1_spaces__space_id__contacts_post" method="post" path="/api/v1/spaces/{space_id}/contacts" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_contacts.add_contact_to_space_api_v1_spaces_space_id_contacts_post(space_id=503177, contact_id="c7b4bc6c-dbde-4dd7-b30c-c1ae77fc4016")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `contact_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | Contact ID to add to space                                          |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SpaceContactRead](../../models/spacecontactread.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_contact_spaces_api_v1_contacts_contact_id_spaces_get

Get all spaces for a specific contact.

Args:
    contact_id: Contact ID
    limit: Maximum number of spaces to return
    offset: Number of spaces to skip
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space contact service

Returns:
    List of space contacts

### Example Usage

<!-- UsageSnippet language="python" operationID="get_contact_spaces_api_v1_contacts__contact_id__spaces_get" method="get" path="/api/v1/contacts/{contact_id}/spaces" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_contacts.get_contact_spaces_api_v1_contacts_contact_id_spaces_get(contact_id="9bb1f2eb-c6ab-4c76-a1d4-ff656e5f0d1e", limit=50, offset=0)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `contact_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `offset`                                                            | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.SpaceContactRead]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_space_contact_api_v1_space_contacts_space_contact_id_get

Get space contact by ID.

Args:
    space_contact_id: Space contact relationship ID
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space contact service

Returns:
    Space contact details

### Example Usage

<!-- UsageSnippet language="python" operationID="get_space_contact_api_v1_space_contacts__space_contact_id__get" method="get" path="/api/v1/space-contacts/{space_contact_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_contacts.get_space_contact_api_v1_space_contacts_space_contact_id_get(space_contact_id=402469)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_contact_id`                                                  | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SpaceContactRead](../../models/spacecontactread.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## remove_contact_from_space_api_v1_space_contacts_space_contact_id_delete

Remove a contact from a space.

Args:
    space_contact_id: Space contact relationship ID
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space contact service

Returns:
    Success message

### Example Usage

<!-- UsageSnippet language="python" operationID="remove_contact_from_space_api_v1_space_contacts__space_contact_id__delete" method="delete" path="/api/v1/space-contacts/{space_contact_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_contacts.remove_contact_from_space_api_v1_space_contacts_space_contact_id_delete(space_contact_id=481359)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_contact_id`                                                  | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Dict[str, Any]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## bulk_add_contacts_to_space_api_v1_spaces_space_id_contacts_bulk_post

Add multiple contacts to a space.

Args:
    space_id: Space ID
    contact_ids: List of contact IDs to add
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space contact service

Returns:
    List of created space contacts

### Example Usage

<!-- UsageSnippet language="python" operationID="bulk_add_contacts_to_space_api_v1_spaces__space_id__contacts_bulk_post" method="post" path="/api/v1/spaces/{space_id}/contacts/bulk" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_contacts.bulk_add_contacts_to_space_api_v1_spaces_space_id_contacts_bulk_post(space_id=857341, body=[
        "db6728a0-7d85-4190-831b-7c7f94249f7d",
    ])

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `body`                                                              | List[*str*]                                                         | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.SpaceContactRead]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## bulk_remove_contacts_from_space_api_v1_spaces_space_id_contacts_bulk_delete

Bulk remove contacts from a space.

Args:
    space_id: Space ID
    contact_ids: List of contact IDs to remove
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space contact service

Returns:
    Number of contacts removed

### Example Usage

<!-- UsageSnippet language="python" operationID="bulk_remove_contacts_from_space_api_v1_spaces__space_id__contacts_bulk_delete" method="delete" path="/api/v1/spaces/{space_id}/contacts/bulk" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_contacts.bulk_remove_contacts_from_space_api_v1_spaces_space_id_contacts_bulk_delete(space_id=618570, body=[
        "bffc934c-a67d-47d1-871d-d9ac0d11e2d8",
        "46024cac-3eb2-4d0b-9db3-b714d934147c",
    ])

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `body`                                                              | List[*str*]                                                         | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Dict[str, Any]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## count_space_contacts_api_v1_spaces_space_id_contacts_count_get

Count contacts in a space.

Args:
    space_id: Space ID
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space contact service

Returns:
    Number of contacts in space

### Example Usage

<!-- UsageSnippet language="python" operationID="count_space_contacts_api_v1_spaces__space_id__contacts_count_get" method="get" path="/api/v1/spaces/{space_id}/contacts/count" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_contacts.count_space_contacts_api_v1_spaces_space_id_contacts_count_get(space_id=42492)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Dict[str, Any]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |