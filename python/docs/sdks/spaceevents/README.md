# SpaceEvents

## Overview

### Available Operations

* [get_space_events_api_v1_spaces_space_id_events_get](#get_space_events_api_v1_spaces_space_id_events_get) - Get Space Events
* [add_event_to_space_api_v1_spaces_space_id_events_post](#add_event_to_space_api_v1_spaces_space_id_events_post) - Add Event To Space
* [get_event_spaces_api_v1_events_event_id_spaces_get](#get_event_spaces_api_v1_events_event_id_spaces_get) - Get Event Spaces
* [get_space_event_api_v1_space_events_space_event_id_get](#get_space_event_api_v1_space_events_space_event_id_get) - Get Space Event
* [remove_event_from_space_api_v1_space_events_space_event_id_delete](#remove_event_from_space_api_v1_space_events_space_event_id_delete) - Remove Event From Space
* [bulk_add_events_to_space_api_v1_spaces_space_id_events_bulk_post](#bulk_add_events_to_space_api_v1_spaces_space_id_events_bulk_post) - Bulk Add Events To Space
* [bulk_remove_events_from_space_api_v1_spaces_space_id_events_bulk_delete](#bulk_remove_events_from_space_api_v1_spaces_space_id_events_bulk_delete) - Bulk Remove Events From Space
* [count_space_events_api_v1_spaces_space_id_events_count_get](#count_space_events_api_v1_spaces_space_id_events_count_get) - Count Space Events

## get_space_events_api_v1_spaces_space_id_events_get

Get all events for a specific space.

Args:
    space_id: Space ID
    limit: Maximum number of events to return
    offset: Number of events to skip
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space event service

Returns:
    List of space events with total count

### Example Usage

<!-- UsageSnippet language="python" operationID="get_space_events_api_v1_spaces__space_id__events_get" method="get" path="/api/v1/spaces/{space_id}/events" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_events.get_space_events_api_v1_spaces_space_id_events_get(space_id=930600, limit=50, offset=0)

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

**[models.SpaceEventList](../../models/spaceeventlist.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## add_event_to_space_api_v1_spaces_space_id_events_post

Add an event to a space.

Args:
    space_id: Space ID
    request: Space event creation request
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space event service

Returns:
    Created space event

### Example Usage

<!-- UsageSnippet language="python" operationID="add_event_to_space_api_v1_spaces__space_id__events_post" method="post" path="/api/v1/spaces/{space_id}/events" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_events.add_event_to_space_api_v1_spaces_space_id_events_post(space_id=905375, event_id=981959)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | Event ID to add to space                                            |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SpaceEventRead](../../models/spaceeventread.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_event_spaces_api_v1_events_event_id_spaces_get

Get all spaces for a specific event.

Args:
    event_id: Event ID
    limit: Maximum number of spaces to return
    offset: Number of spaces to skip
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space event service

Returns:
    List of space events

### Example Usage

<!-- UsageSnippet language="python" operationID="get_event_spaces_api_v1_events__event_id__spaces_get" method="get" path="/api/v1/events/{event_id}/spaces" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_events.get_event_spaces_api_v1_events_event_id_spaces_get(event_id=370745, limit=50, offset=0)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `offset`                                                            | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.SpaceEventRead]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_space_event_api_v1_space_events_space_event_id_get

Get space event by ID.

Args:
    space_event_id: Space event relationship ID
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space event service

Returns:
    Space event details

### Example Usage

<!-- UsageSnippet language="python" operationID="get_space_event_api_v1_space_events__space_event_id__get" method="get" path="/api/v1/space-events/{space_event_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_events.get_space_event_api_v1_space_events_space_event_id_get(space_event_id=303300)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_event_id`                                                    | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SpaceEventRead](../../models/spaceeventread.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## remove_event_from_space_api_v1_space_events_space_event_id_delete

Remove an event from a space.

Args:
    space_event_id: Space event relationship ID
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space event service

Returns:
    Success message

### Example Usage

<!-- UsageSnippet language="python" operationID="remove_event_from_space_api_v1_space_events__space_event_id__delete" method="delete" path="/api/v1/space-events/{space_event_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_events.remove_event_from_space_api_v1_space_events_space_event_id_delete(space_event_id=627694)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_event_id`                                                    | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Dict[str, Any]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## bulk_add_events_to_space_api_v1_spaces_space_id_events_bulk_post

Add multiple events to a space.

Args:
    space_id: Space ID
    event_ids: List of event IDs to add
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space event service

Returns:
    List of created space events

### Example Usage

<!-- UsageSnippet language="python" operationID="bulk_add_events_to_space_api_v1_spaces__space_id__events_bulk_post" method="post" path="/api/v1/spaces/{space_id}/events/bulk" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_events.bulk_add_events_to_space_api_v1_spaces_space_id_events_bulk_post(space_id=415319, body=[
        84998,
        771269,
    ])

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `body`                                                              | List[*int*]                                                         | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.SpaceEventRead]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## bulk_remove_events_from_space_api_v1_spaces_space_id_events_bulk_delete

Bulk remove events from a space.

Args:
    space_id: Space ID
    event_ids: List of event IDs to remove
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space event service

Returns:
    Number of events removed

### Example Usage

<!-- UsageSnippet language="python" operationID="bulk_remove_events_from_space_api_v1_spaces__space_id__events_bulk_delete" method="delete" path="/api/v1/spaces/{space_id}/events/bulk" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_events.bulk_remove_events_from_space_api_v1_spaces_space_id_events_bulk_delete(space_id=405270, event_ids=[
        175699,
    ])

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `event_ids`                                                         | List[*int*]                                                         | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Dict[str, Any]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## count_space_events_api_v1_spaces_space_id_events_count_get

Count events in a space.

Args:
    space_id: Space ID
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space event service

Returns:
    Number of events in space

### Example Usage

<!-- UsageSnippet language="python" operationID="count_space_events_api_v1_spaces__space_id__events_count_get" method="get" path="/api/v1/spaces/{space_id}/events/count" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_events.count_space_events_api_v1_spaces_space_id_events_count_get(space_id=494382)

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