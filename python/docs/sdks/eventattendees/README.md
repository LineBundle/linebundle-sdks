# EventAttendees

## Overview

### Available Operations

* [get](#get) - Get Event Attendees
* [add](#add) - Add Event Attendee
* [add_bulk](#add_bulk) - Add Event Attendees Bulk
* [remove_bulk](#remove_bulk) - Remove Event Attendees Bulk
* [update](#update) - Update Event Attendee
* [remove](#remove) - Remove Event Attendee
* [check_in](#check_in) - Check In Attendee
* [update_bulk_status](#update_bulk_status) - Update Attendees Status Bulk

## get

Get all attendees for a specific event.

Supports filtering by status and check-in status.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_event_attendees_api_v1_events__event_id__attendees_get" method="get" path="/api/v1/events/{event_id}/attendees" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.event_attendees.get(event_id=166052, limit=50, offset=0)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                 | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `event_id`                                                                | *int*                                                                     | :heavy_check_mark:                                                        | N/A                                                                       |
| `limit`                                                                   | *Optional[int]*                                                           | :heavy_minus_sign:                                                        | Items per page                                                            |
| `offset`                                                                  | *Optional[int]*                                                           | :heavy_minus_sign:                                                        | Offset for pagination                                                     |
| `status`                                                                  | [OptionalNullable[models.AttendeeStatus]](../../models/attendeestatus.md) | :heavy_minus_sign:                                                        | Filter by attendance status                                               |
| `is_checked_in`                                                           | *OptionalNullable[bool]*                                                  | :heavy_minus_sign:                                                        | Filter by check-in status                                                 |
| `retries`                                                                 | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)          | :heavy_minus_sign:                                                        | Configuration to override the default retry behavior of the client.       |

### Response

**[models.EventAttendeeList](../../models/eventattendeelist.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## add

Add a contact as an attendee to an event.

The contact must belong to the user's contact list (personal or org).

### Example Usage

<!-- UsageSnippet language="python" operationID="add_event_attendee_api_v1_events__event_id__attendees_post" method="post" path="/api/v1/events/{event_id}/attendees" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.event_attendees.add(event_id=498036, contact_id="3bb3695d-0966-4dbe-932b-7dc6fabed4dc")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `contact_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | Contact ID to add as attendee                                       |
| `status`                                                            | [Optional[models.AttendeeStatus]](../../models/attendeestatus.md)   | :heavy_minus_sign:                                                  | Attendee status enumeration.                                        |
| `notes`                                                             | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Additional notes                                                    |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.EventAttendeeRead](../../models/eventattendeeread.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## add_bulk

Add multiple contacts as attendees to an event.

All contacts must belong to the user's contact list.

### Example Usage

<!-- UsageSnippet language="python" operationID="add_event_attendees_bulk_api_v1_events__event_id__attendees_bulk_post" method="post" path="/api/v1/events/{event_id}/attendees/bulk" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.event_attendees.add_bulk(event_id=225763, body=[
        "5586f6bd-5f3b-4260-9df8-43124b6bacc2",
        "488007bc-6c0b-4c34-a843-39ff301cd0b1",
    ])

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `body`                                                              | List[*str*]                                                         | :heavy_check_mark:                                                  | N/A                                                                 |
| `status`                                                            | [Optional[models.AttendeeStatus]](../../models/attendeestatus.md)   | :heavy_minus_sign:                                                  | Attendee status enumeration.                                        |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.EventAttendeeRead]](../../models/.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## remove_bulk

Remove multiple attendees from an event.

### Example Usage

<!-- UsageSnippet language="python" operationID="remove_event_attendees_bulk_api_v1_events__event_id__attendees_bulk_delete" method="delete" path="/api/v1/events/{event_id}/attendees/bulk" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.event_attendees.remove_bulk(event_id=648531, body=[
        "6c68acd7-d9c9-465c-b5aa-1d5c0568d624",
    ])

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `body`                                                              | List[*str*]                                                         | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Dict[str, Any]](../../models/.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## update

Update an attendee's information (status, notes, check-in status).

### Example Usage

<!-- UsageSnippet language="python" operationID="update_event_attendee_api_v1_events__event_id__attendees__attendee_id__put" method="put" path="/api/v1/events/{event_id}/attendees/{attendee_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.event_attendees.update(event_id=976136, attendee_id=914331)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `attendee_id`                                                       | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `status`                                                            | [Optional[models.AttendeeStatus]](../../models/attendeestatus.md)   | :heavy_minus_sign:                                                  | Attendee status enumeration.                                        |
| `notes`                                                             | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Additional notes                                                    |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.EventAttendeeRead](../../models/eventattendeeread.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## remove

Remove an attendee from an event.

### Example Usage

<!-- UsageSnippet language="python" operationID="remove_event_attendee_api_v1_events__event_id__attendees__attendee_id__delete" method="delete" path="/api/v1/events/{event_id}/attendees/{attendee_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    linebundle.event_attendees.remove(event_id=727478, attendee_id=297527)

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `attendee_id`                                                       | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## check_in

Check in an attendee to the event.

### Example Usage

<!-- UsageSnippet language="python" operationID="check_in_attendee_api_v1_events__event_id__attendees__attendee_id__check_in_post" method="post" path="/api/v1/events/{event_id}/attendees/{attendee_id}/check-in" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.event_attendees.check_in(event_id=860811, attendee_id=571354)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `attendee_id`                                                       | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.EventAttendeeRead](../../models/eventattendeeread.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## update_bulk_status

Update status for multiple attendees at once.

### Example Usage

<!-- UsageSnippet language="python" operationID="update_attendees_status_bulk_api_v1_events__event_id__attendees_bulk_status_patch" method="patch" path="/api/v1/events/{event_id}/attendees/bulk/status" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.event_attendees.update_bulk_status(event_id=891138, status="tentative", body=[
        "a38e8a00-f8b5-41a4-a844-c6c2dbe600a9",
    ])

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `status`                                                            | [models.AttendeeStatus](../../models/attendeestatus.md)             | :heavy_check_mark:                                                  | Attendee status enumeration.                                        |
| `body`                                                              | List[*str*]                                                         | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Dict[str, Any]](../../models/.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |