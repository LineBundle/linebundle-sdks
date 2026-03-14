# Events

## Overview

### Available Operations

* [list](#list) - Get Event List
* [publish_with_notifications](#publish_with_notifications) - Publish Event With Notifications
* [create](#create) - Create Event
* [list_calendar](#list_calendar) - Get Calendar Events
* [get_social_feed](#get_social_feed) - Get Social Feed
* [filter_advanced](#filter_advanced) - Filter Events Advanced
* [list_by_space](#list_by_space) - Get Events By Space
* [delete](#delete) - Delete Event
* [patch_identification](#patch_identification) - Patch Event Identification
* [get_section_identification](#get_section_identification) - Get Section Identification
* [get_section_content](#get_section_content) - Get Section Content
* [patch_content](#patch_content) - Patch Event Content
* [get_settings](#get_settings) - Get Event Settings
* [patch_settings](#patch_settings) - Patch Event Settings
* [update_cover](#update_cover) - Update Cover
* [publish](#publish) - Publish Event
* [archive](#archive) - Archive Event
* [transfer](#transfer) - Transfer Event
* [publish_version](#publish_version) - Publish Event Version
* [list_versions](#list_versions) - List Event Versions
* [rollback_version](#rollback_version) - Rollback Event to Version
* [get_timezones](#get_timezones) - Get Timezone Info

## list

Get events with advanced filtering capabilities.

Supports multiple filtering strategies:
- Legacy query parameters for backward compatibility
- Individual advanced filter parameters
- Complex JSON filter object for advanced use cases

### Example Usage

<!-- UsageSnippet language="python" operationID="get_event_list_api_v1_event_get" method="get" path="/api/v1/event" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.list(limit=10, offset=0, sort_by="created_dt", sort_order="desc")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `limit`                                                              | *Optional[int]*                                                      | :heavy_minus_sign:                                                   | Items per page                                                       |
| `offset`                                                             | *Optional[int]*                                                      | :heavy_minus_sign:                                                   | Offset for pagination                                                |
| `sort_by`                                                            | *Optional[str]*                                                      | :heavy_minus_sign:                                                   | Field to sort by                                                     |
| `sort_order`                                                         | *Optional[str]*                                                      | :heavy_minus_sign:                                                   | Sort order                                                           |
| `search`                                                             | *OptionalNullable[str]*                                              | :heavy_minus_sign:                                                   | Global text search                                                   |
| `start_dt`                                                           | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_minus_sign:                                                   | Start date for filtering                                             |
| `end_dt`                                                             | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_minus_sign:                                                   | End date for filtering                                               |
| `visibility`                                                         | List[*int*]                                                          | :heavy_minus_sign:                                                   | Filter by visibility levels                                          |
| `creator_ids`                                                        | List[*str*]                                                          | :heavy_minus_sign:                                                   | Filter by creator IDs                                                |
| `is_deleted`                                                         | *OptionalNullable[bool]*                                             | :heavy_minus_sign:                                                   | Filter by deletion status                                            |
| `is_locked`                                                          | *OptionalNullable[bool]*                                             | :heavy_minus_sign:                                                   | Filter by lock status                                                |
| `space_ids`                                                          | List[*int*]                                                          | :heavy_minus_sign:                                                   | Filter by space IDs                                                  |
| `document_ids`                                                       | List[*str*]                                                          | :heavy_minus_sign:                                                   | Filter by document IDs                                               |
| `has_documents`                                                      | *OptionalNullable[bool]*                                             | :heavy_minus_sign:                                                   | Filter events with/without documents                                 |
| `has_spaces`                                                         | *OptionalNullable[bool]*                                             | :heavy_minus_sign:                                                   | Filter events with/without spaces                                    |
| `title`                                                              | *OptionalNullable[str]*                                              | :heavy_minus_sign:                                                   | Filter by title                                                      |
| `description`                                                        | *OptionalNullable[str]*                                              | :heavy_minus_sign:                                                   | Filter by description                                                |
| `keywords`                                                           | List[*str*]                                                          | :heavy_minus_sign:                                                   | Filter by keywords                                                   |
| `is_recurring`                                                       | *OptionalNullable[bool]*                                             | :heavy_minus_sign:                                                   | Filter recurring events                                              |
| `repeat_presets`                                                     | List[*str*]                                                          | :heavy_minus_sign:                                                   | Filter by repeat presets                                             |
| `repeat_days`                                                        | List[*int*]                                                          | :heavy_minus_sign:                                                   | Filter by repeat days                                                |
| `filters`                                                            | *OptionalNullable[str]*                                              | :heavy_minus_sign:                                                   | JSON filter object for complex queries                               |
| `retries`                                                            | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)     | :heavy_minus_sign:                                                   | Configuration to override the default retry behavior of the client.  |

### Response

**[models.PaginatedEventListResponse](../../models/paginatedeventlistresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## publish_with_notifications

Publish Event With Notifications

### Example Usage

<!-- UsageSnippet language="python" operationID="publish_event_with_notifications_api_v1_event__event_id__publish_with_notifications_post" method="post" path="/api/v1/event/{event_id}/publish-with-notifications" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.publish_with_notifications(event_id=385781, notify_attendees=False)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                   | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `event_id`                                                                  | *int*                                                                       | :heavy_check_mark:                                                          | N/A                                                                         |
| `notify_attendees`                                                          | *Optional[bool]*                                                            | :heavy_minus_sign:                                                          | Whether to notify attendees about the publication                           |
| `notification_channels`                                                     | List[*str*]                                                                 | :heavy_minus_sign:                                                          | List of channels to use for notification (e.g., 'EMAIL', 'SMS', 'WHATSAPP') |
| `retries`                                                                   | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)            | :heavy_minus_sign:                                                          | Configuration to override the default retry behavior of the client.         |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## create

Create Event

### Example Usage

<!-- UsageSnippet language="python" operationID="create_event_api_v1_event_post" method="post" path="/api/v1/event" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.create(request="<value>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                               | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `request`                                                                                               | *str*                                                                                                   | :heavy_check_mark:                                                                                      | JSON string of CreateEventRequest                                                                       |
| `file`                                                                                                  | [Optional[models.BodyCreateEventAPIV1EventPostFile]](../../models/bodycreateeventapiv1eventpostfile.md) | :heavy_minus_sign:                                                                                      | Optional cover image file                                                                               |
| `retries`                                                                                               | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                        | :heavy_minus_sign:                                                                                      | Configuration to override the default retry behavior of the client.                                     |

### Response

**[models.EventRead](../../models/eventread.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## list_calendar

Get events for calendar view.

Requires start_date and end_date.
Returns all events in the range (high limit) to avoid missing data.
Supports all standard event filters.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_calendar_events_api_v1_event_calendar_get" method="get" path="/api/v1/event/calendar" -->
```python
from linebundle_sdk import Linebundle, models
from linebundle_sdk.utils import parse_datetime


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.list_calendar(start_date=parse_datetime("2024-02-02T07:48:18.433Z"), end_date=parse_datetime("2024-03-03T23:02:32.865Z"), sort_by="start_dt", sort_order="asc")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `start_date`                                                         | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | Start date for calendar range                                        |
| `end_date`                                                           | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | End date for calendar range                                          |
| `sort_by`                                                            | *Optional[str]*                                                      | :heavy_minus_sign:                                                   | Field to sort by                                                     |
| `sort_order`                                                         | *Optional[str]*                                                      | :heavy_minus_sign:                                                   | Sort order                                                           |
| `search`                                                             | *OptionalNullable[str]*                                              | :heavy_minus_sign:                                                   | Global text search                                                   |
| `visibility`                                                         | List[*int*]                                                          | :heavy_minus_sign:                                                   | Filter by visibility levels                                          |
| `creator_ids`                                                        | List[*str*]                                                          | :heavy_minus_sign:                                                   | Filter by creator IDs                                                |
| `is_deleted`                                                         | *OptionalNullable[bool]*                                             | :heavy_minus_sign:                                                   | Filter by deletion status                                            |
| `is_locked`                                                          | *OptionalNullable[bool]*                                             | :heavy_minus_sign:                                                   | Filter by lock status                                                |
| `space_ids`                                                          | List[*int*]                                                          | :heavy_minus_sign:                                                   | Filter by space IDs                                                  |
| `document_ids`                                                       | List[*str*]                                                          | :heavy_minus_sign:                                                   | Filter by document IDs                                               |
| `has_documents`                                                      | *OptionalNullable[bool]*                                             | :heavy_minus_sign:                                                   | Filter events with/without documents                                 |
| `has_spaces`                                                         | *OptionalNullable[bool]*                                             | :heavy_minus_sign:                                                   | Filter events with/without spaces                                    |
| `title`                                                              | *OptionalNullable[str]*                                              | :heavy_minus_sign:                                                   | Filter by title                                                      |
| `description`                                                        | *OptionalNullable[str]*                                              | :heavy_minus_sign:                                                   | Filter by description                                                |
| `keywords`                                                           | List[*str*]                                                          | :heavy_minus_sign:                                                   | Filter by keywords                                                   |
| `is_recurring`                                                       | *OptionalNullable[bool]*                                             | :heavy_minus_sign:                                                   | Filter recurring events                                              |
| `repeat_presets`                                                     | List[*str*]                                                          | :heavy_minus_sign:                                                   | Filter by repeat presets                                             |
| `repeat_days`                                                        | List[*int*]                                                          | :heavy_minus_sign:                                                   | Filter by repeat days                                                |
| `filters`                                                            | *OptionalNullable[str]*                                              | :heavy_minus_sign:                                                   | JSON filter object for complex queries                               |
| `retries`                                                            | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)     | :heavy_minus_sign:                                                   | Configuration to override the default retry behavior of the client.  |

### Response

**[models.PaginatedEventListResponse](../../models/paginatedeventlistresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_social_feed

Get the social feed of events for the current user.

Events are ranked by:
1. User relationship (personal events > owned spaces > member spaces > others)
2. Temporal proximity to user's current time (events happening soon rank higher)

### Example Usage

<!-- UsageSnippet language="python" operationID="get_social_feed_api_v1_event_social_feed_get" method="get" path="/api/v1/event/social/feed" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.get_social_feed(limit=20)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                 | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `cursor`                                                                  | *OptionalNullable[str]*                                                   | :heavy_minus_sign:                                                        | Cursor for pagination                                                     |
| `limit`                                                                   | *Optional[int]*                                                           | :heavy_minus_sign:                                                        | Items per page                                                            |
| `current_time`                                                            | [date](https://docs.python.org/3/library/datetime.html#date-objects)      | :heavy_minus_sign:                                                        | User's current time for ranking (defaults to server time if not provided) |
| `retries`                                                                 | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)          | :heavy_minus_sign:                                                        | Configuration to override the default retry behavior of the client.       |

### Response

**[models.PaginatedEventListResponse](../../models/paginatedeventlistresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## filter_advanced

Advanced event filtering using POST method for complex filter objects.

This endpoint is useful for complex filtering scenarios that exceed
URL length limits or require complex nested conditions.

### Example Usage

<!-- UsageSnippet language="python" operationID="filter_events_advanced_api_v1_event_filter_post" method="post" path="/api/v1/event/filter" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.filter_advanced(sort={
        "sorts": [
            {
                "field": "start_dt",
            },
            {
                "field": "end_dt",
                "order": "desc",
            },
        ],
    })

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                 | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `filters`                                                                                 | [OptionalNullable[models.EventAdvancedFilters]](../../models/eventadvancedfilters.md)     | :heavy_minus_sign:                                                                        | Advanced filters                                                                          |
| `sort`                                                                                    | [OptionalNullable[models.EventSortOptions]](../../models/eventsortoptions.md)             | :heavy_minus_sign:                                                                        | Sort options                                                                              |
| `pagination`                                                                              | [OptionalNullable[models.EventPaginationOptions]](../../models/eventpaginationoptions.md) | :heavy_minus_sign:                                                                        | Pagination options                                                                        |
| `retries`                                                                                 | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                          | :heavy_minus_sign:                                                                        | Configuration to override the default retry behavior of the client.                       |

### Response

**[models.PaginatedEventListResponse](../../models/paginatedeventlistresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## list_by_space

Get Events By Space

### Example Usage

<!-- UsageSnippet language="python" operationID="get_events_by_space_api_v1_event_space__space_id__get" method="get" path="/api/v1/event/space/{space_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.list_by_space(space_id=462093, limit=10, offset=0, sort_by="created_at", sort_order="desc")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `space_id`                                                           | *int*                                                                | :heavy_check_mark:                                                   | N/A                                                                  |
| `limit`                                                              | *Optional[int]*                                                      | :heavy_minus_sign:                                                   | Limit                                                                |
| `offset`                                                             | *Optional[int]*                                                      | :heavy_minus_sign:                                                   | Offset                                                               |
| `sort_by`                                                            | *Optional[str]*                                                      | :heavy_minus_sign:                                                   | Sort by field                                                        |
| `sort_order`                                                         | *Optional[str]*                                                      | :heavy_minus_sign:                                                   | Sort order (asc or desc)                                             |
| `search`                                                             | *Optional[str]*                                                      | :heavy_minus_sign:                                                   | Search query                                                         |
| `start_dt`                                                           | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_minus_sign:                                                   | Start date for filtering                                             |
| `end_dt`                                                             | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_minus_sign:                                                   | End date for filtering                                               |
| `retries`                                                            | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)     | :heavy_minus_sign:                                                   | Configuration to override the default retry behavior of the client.  |

### Response

**[models.PaginatedEventListResponse](../../models/paginatedeventlistresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## delete

Delete Event

### Example Usage

<!-- UsageSnippet language="python" operationID="delete_event_api_v1_event__event_id__delete" method="delete" path="/api/v1/event/{event_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.delete(event_id=490397)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## patch_identification

Update event title and status (Identification info). API renamed from /header.

### Example Usage

<!-- UsageSnippet language="python" operationID="patch_event_identification_api_v1_event__event_id__identification_patch" method="patch" path="/api/v1/event/{event_id}/identification" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.patch_identification(event_id=851964, title="<value>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `title`                                                             | *str*                                                               | :heavy_check_mark:                                                  | Top-level event title                                               |
| `status`                                                            | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Event status (e.g. pending, active, cancelled)                      |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SectionIdentificationRead](../../models/sectionidentificationread.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_section_identification

Get Section Identification

### Example Usage

<!-- UsageSnippet language="python" operationID="get_section_identification_api_v1_event__event_id__section_identification_get" method="get" path="/api/v1/event/{event_id}/section/identification" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.get_section_identification(event_id=454878)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SectionIdentificationRead](../../models/sectionidentificationread.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_section_content

Get Section Content

### Example Usage

<!-- UsageSnippet language="python" operationID="get_section_content_api_v1_event__event_id__section_content_get" method="get" path="/api/v1/event/{event_id}/section/content" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.get_section_content(event_id=645408)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SectionContentRead](../../models/sectioncontentread.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## patch_content

Update event content (Description, Metadata, Theme).

### Example Usage

<!-- UsageSnippet language="python" operationID="patch_event_content_api_v1_event__event_id__content_patch" method="patch" path="/api/v1/event/{event_id}/content" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.patch_content(event_id=812886)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `description`                                                       | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | N/A                                                                 |
| `event_metadata`                                                    | Dict[str, *Any*]                                                    | :heavy_minus_sign:                                                  | Metadata including themes                                           |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SectionContentRead](../../models/sectioncontentread.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_settings

Get dedicated event settings.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_event_settings_api_v1_event__event_id__settings_get" method="get" path="/api/v1/event/{event_id}/settings" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.get_settings(event_id=674327)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SectionSettingsRead](../../models/sectionsettingsread.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## patch_settings

Update event settings (Visibility, Access).

### Example Usage

<!-- UsageSnippet language="python" operationID="patch_event_settings_api_v1_event__event_id__settings_patch" method="patch" path="/api/v1/event/{event_id}/settings" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.patch_settings(event_id=184687)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `visibility`                                                        | *OptionalNullable[int]*                                             | :heavy_minus_sign:                                                  | N/A                                                                 |
| `keywords`                                                          | List[*str*]                                                         | :heavy_minus_sign:                                                  | N/A                                                                 |
| `is_locked`                                                         | *OptionalNullable[bool]*                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `subcontrib_speakers_can_submit`                                    | *OptionalNullable[bool]*                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SectionSettingsRead](../../models/sectionsettingsread.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## update_cover

Update Cover

### Example Usage

<!-- UsageSnippet language="python" operationID="update_cover_api_v1_event__event_id__cover_patch" method="patch" path="/api/v1/event/{event_id}/cover" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.update_cover(event_id=391827, file={
        "file_name": "example.file",
        "content": open("example.file", "rb"),
    })

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                               | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `event_id`                                                                                                              | *int*                                                                                                                   | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `file`                                                                                                                  | [models.BodyUpdateCoverAPIV1EventEventIDCoverPatchFile](../../models/bodyupdatecoverapiv1eventeventidcoverpatchfile.md) | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `theme`                                                                                                                 | *OptionalNullable[str]*                                                                                                 | :heavy_minus_sign:                                                                                                      | JSON string of theme colors                                                                                             |
| `retries`                                                                                                               | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                        | :heavy_minus_sign:                                                                                                      | Configuration to override the default retry behavior of the client.                                                     |

### Response

**[models.EventRead](../../models/eventread.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## publish

Publish Event

### Example Usage

<!-- UsageSnippet language="python" operationID="publish_event_api_v1_event__event_id__publish_patch" method="patch" path="/api/v1/event/{event_id}/publish" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.publish(event_id=59446)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## archive

Archive Event

### Example Usage

<!-- UsageSnippet language="python" operationID="archive_event_api_v1_event__event_id__archive_patch" method="patch" path="/api/v1/event/{event_id}/archive" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.archive(event_id=949489)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## transfer

Transfer a personal event to an organization.

Requirements:
- Event must be personal (org_id IS NULL)
- Current user must be the creator
- Current user must be owner or admin of target organization

Returns:
    - 200: Transfer successful
    - 400: Validation error (event already org-scoped, etc.)
    - 403: Permission denied (not creator or not org admin)
    - 404: Event not found

### Example Usage

<!-- UsageSnippet language="python" operationID="transfer_event_api_v1_event__event_id__transfer_post" method="post" path="/api/v1/event/{event_id}/transfer" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.transfer(event_id=916824, target_org_id="83be6f26-b930-4b36-a344-0b0753b6cbd0")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `target_org_id`                                                     | *str*                                                               | :heavy_check_mark:                                                  | UUID of the target organization to transfer this event to           |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Dict[str, Any]](../../models/.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## publish_version

Create an immutable published version of the event for recommendations

### Example Usage

<!-- UsageSnippet language="python" operationID="publish_event_version_api_v1_event__event_id__versions_publish_post" method="post" path="/api/v1/event/{event_id}/versions/publish" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.publish_version(event_id=711120)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## list_versions

Get all published versions of an event

### Example Usage

<!-- UsageSnippet language="python" operationID="list_event_versions_api_v1_event__event_id__versions_get" method="get" path="/api/v1/event/{event_id}/versions" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.list_versions(event_id=701217)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## rollback_version

Restore event to a specific published version

### Example Usage

<!-- UsageSnippet language="python" operationID="rollback_event_version_api_v1_event__event_id__versions_rollback_post" method="post" path="/api/v1/event/{event_id}/versions/rollback" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.rollback_version(event_id=196193, transaction_id=590648)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `transaction_id`                                                    | *int*                                                               | :heavy_check_mark:                                                  | Transaction ID to rollback to                                       |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.EventRead](../../models/eventread.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_timezones

Get timezone information for frontend validation and suggestions.

Returns:
    Dictionary containing:
    - all_timezones: List of all valid IANA timezones
    - common_timezones: List of commonly used timezones for UI suggestions
    - count: Total number of supported timezones

### Example Usage

<!-- UsageSnippet language="python" operationID="get_timezone_info_api_v1_event_timezones__get" method="get" path="/api/v1/event/timezones/" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.events.get_timezones()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Dict[str, Any]](../../models/.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |