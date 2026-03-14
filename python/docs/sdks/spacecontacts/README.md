# SpaceContacts

## Overview

### Available Operations

* [get_contacts_by_space](#get_contacts_by_space) - Get Space Contacts
* [add](#add) - Add Contact To Space
* [get_spaces_by_contact](#get_spaces_by_contact) - Get Contact Spaces
* [get](#get) - Get Space Contact
* [remove](#remove) - Remove Contact From Space
* [add_bulk](#add_bulk) - Bulk Add Contacts To Space
* [bulk_delete](#bulk_delete) - Bulk Remove Contacts From Space
* [count](#count) - Count Space Contacts

## get_contacts_by_space

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
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.space_contacts.get_contacts_by_space(space_id=260446, limit=50, offset=0)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## add

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
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.space_contacts.add(space_id=503177, contact_id="c7b4bc6c-dbde-4dd7-b30c-c1ae77fc4016")

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_spaces_by_contact

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
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.space_contacts.get_spaces_by_contact(contact_id="9bb1f2eb-c6ab-4c76-a1d4-ff656e5f0d1e", limit=50, offset=0)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get

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
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.space_contacts.get(space_contact_id=402469)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## remove

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
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.space_contacts.remove(space_contact_id=481359)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## add_bulk

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
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.space_contacts.add_bulk(space_id=857341, body=[
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## bulk_delete

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
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.space_contacts.bulk_delete(space_id=618570, body=[
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## count

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
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.space_contacts.count(space_id=42492)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |