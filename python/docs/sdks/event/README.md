# Event

## Overview

### Available Operations

* [get_event_list_api_v1_event_get](#get_event_list_api_v1_event_get) - Get Event List
* [create_event_api_v1_event_post](#create_event_api_v1_event_post) - Create Event
* [get_calendar_events_api_v1_event_calendar_get](#get_calendar_events_api_v1_event_calendar_get) - Get Calendar Events
* [get_social_feed_api_v1_event_social_feed_get](#get_social_feed_api_v1_event_social_feed_get) - Get Social Feed
* [filter_events_advanced_api_v1_event_filter_post](#filter_events_advanced_api_v1_event_filter_post) - Filter Events Advanced
* [get_events_by_space_api_v1_event_space_space_id_get](#get_events_by_space_api_v1_event_space_space_id_get) - Get Events By Space
* [get_event_by_id_api_v1_event_event_id_get](#get_event_by_id_api_v1_event_event_id_get) - Get Event By Id
* [update_event_api_v1_event_event_id_put](#update_event_api_v1_event_event_id_put) - Update Event
* [delete_event_api_v1_event_event_id_delete](#delete_event_api_v1_event_event_id_delete) - Delete Event
* [patch_event_identification_api_v1_event_event_id_identification_patch](#patch_event_identification_api_v1_event_event_id_identification_patch) - Patch Event Identification
* [get_section_identification_api_v1_event_event_id_section_identification_get](#get_section_identification_api_v1_event_event_id_section_identification_get) - Get Section Identification
* [get_section_content_api_v1_event_event_id_section_content_get](#get_section_content_api_v1_event_event_id_section_content_get) - Get Section Content
* [get_section_settings_api_v1_event_event_id_section_settings_get](#get_section_settings_api_v1_event_event_id_section_settings_get) - Get Section Settings
* [patch_event_content_api_v1_event_event_id_content_patch](#patch_event_content_api_v1_event_event_id_content_patch) - Patch Event Content
* [get_event_settings_api_v1_event_event_id_settings_get](#get_event_settings_api_v1_event_event_id_settings_get) - Get Event Settings
* [patch_event_settings_api_v1_event_event_id_settings_patch](#patch_event_settings_api_v1_event_event_id_settings_patch) - Patch Event Settings
* [update_cover_api_v1_event_event_id_cover_patch](#update_cover_api_v1_event_event_id_cover_patch) - Update Cover
* [publish_event_api_v1_event_event_id_publish_patch](#publish_event_api_v1_event_event_id_publish_patch) - Publish Event
* [publish_event_with_notifications_api_v1_event_event_id_publish_with_notifications_post](#publish_event_with_notifications_api_v1_event_event_id_publish_with_notifications_post) - Publish Event With Notifications
* [archive_event_api_v1_event_event_id_archive_patch](#archive_event_api_v1_event_event_id_archive_patch) - Archive Event
* [transfer_event_api_v1_event_event_id_transfer_post](#transfer_event_api_v1_event_event_id_transfer_post) - Transfer Event
* [publish_event_version_api_v1_event_event_id_versions_publish_post](#publish_event_version_api_v1_event_event_id_versions_publish_post) - Publish Event Version
* [unpublish_event_version_api_v1_event_event_id_versions_unpublish_post](#unpublish_event_version_api_v1_event_event_id_versions_unpublish_post) - Unpublish Event (Mark as Draft)
* [list_event_versions_api_v1_event_event_id_versions_get](#list_event_versions_api_v1_event_event_id_versions_get) - List Event Versions
* [rollback_event_version_api_v1_event_event_id_versions_rollback_post](#rollback_event_version_api_v1_event_event_id_versions_rollback_post) - Rollback Event to Version
* [compare_event_versions_api_v1_event_event_id_versions_compare_get](#compare_event_versions_api_v1_event_event_id_versions_compare_get) - Compare Event Versions
* [get_latest_event_version_api_v1_event_event_id_versions_latest_get](#get_latest_event_version_api_v1_event_event_id_versions_latest_get) - Get Latest Event Version
* [get_event_version_api_v1_event_event_id_versions_transaction_id_get](#get_event_version_api_v1_event_event_id_versions_transaction_id_get) - Get Event Version
* [get_timezone_info_api_v1_event_timezones_get](#get_timezone_info_api_v1_event_timezones_get) - Get Timezone Info
* [validate_timezone_api_v1_event_timezones_validate_get](#validate_timezone_api_v1_event_timezones_validate_get) - Validate Timezone

## get_event_list_api_v1_event_get

Get events with advanced filtering capabilities.

Supports multiple filtering strategies:
- Legacy query parameters for backward compatibility
- Individual advanced filter parameters
- Complex JSON filter object for advanced use cases

### Example Usage

<!-- UsageSnippet language="python" operationID="get_event_list_api_v1_event_get" method="get" path="/api/v1/event" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.get_event_list_api_v1_event_get(limit=10, offset=0, sort_by="created_dt", sort_order="desc")

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## create_event_api_v1_event_post

Create Event

### Example Usage

<!-- UsageSnippet language="python" operationID="create_event_api_v1_event_post" method="post" path="/api/v1/event" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.create_event_api_v1_event_post(request="<value>")

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_calendar_events_api_v1_event_calendar_get

Get events for calendar view.

Requires start_date and end_date.
Returns all events in the range (high limit) to avoid missing data.
Supports all standard event filters.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_calendar_events_api_v1_event_calendar_get" method="get" path="/api/v1/event/calendar" -->
```python
from openapi import SDK, models
from openapi.utils import parse_datetime


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.get_calendar_events_api_v1_event_calendar_get(start_date=parse_datetime("2024-02-02T07:48:18.433Z"), end_date=parse_datetime("2024-03-03T23:02:32.865Z"), sort_by="start_dt", sort_order="asc")

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_social_feed_api_v1_event_social_feed_get

Get the social feed of events for the current user.

Events are ranked by:
1. User relationship (personal events > owned spaces > member spaces > others)
2. Temporal proximity to user's current time (events happening soon rank higher)

### Example Usage

<!-- UsageSnippet language="python" operationID="get_social_feed_api_v1_event_social_feed_get" method="get" path="/api/v1/event/social/feed" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.get_social_feed_api_v1_event_social_feed_get(limit=20)

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## filter_events_advanced_api_v1_event_filter_post

Advanced event filtering using POST method for complex filter objects.

This endpoint is useful for complex filtering scenarios that exceed
URL length limits or require complex nested conditions.

### Example Usage

<!-- UsageSnippet language="python" operationID="filter_events_advanced_api_v1_event_filter_post" method="post" path="/api/v1/event/filter" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.filter_events_advanced_api_v1_event_filter_post(sort={
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_events_by_space_api_v1_event_space_space_id_get

Get Events By Space

### Example Usage

<!-- UsageSnippet language="python" operationID="get_events_by_space_api_v1_event_space__space_id__get" method="get" path="/api/v1/event/space/{space_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.get_events_by_space_api_v1_event_space_space_id_get(space_id=462093, limit=10, offset=0, sort_by="created_at", sort_order="desc")

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_event_by_id_api_v1_event_event_id_get

Get Event By Id

### Example Usage

<!-- UsageSnippet language="python" operationID="get_event_by_id_api_v1_event__event_id__get" method="get" path="/api/v1/event/{event_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.get_event_by_id_api_v1_event_event_id_get(event_id=902945)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.EventRead](../../models/eventread.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## update_event_api_v1_event_event_id_put

Update Event

### Example Usage

<!-- UsageSnippet language="python" operationID="update_event_api_v1_event__event_id__put" method="put" path="/api/v1/event/{event_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.update_event_api_v1_event_event_id_put(event_id=38536, title="<value>", start_dt="<value>", start_tm="<value>", end_dt="<value>", end_tm="<value>", timezone="America/Dawson_Creek")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                         | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `event_id`                                                                                        | *int*                                                                                             | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `title`                                                                                           | *str*                                                                                             | :heavy_check_mark:                                                                                | Title                                                                                             |
| `start_dt`                                                                                        | *str*                                                                                             | :heavy_check_mark:                                                                                | Start date                                                                                        |
| `start_tm`                                                                                        | *str*                                                                                             | :heavy_check_mark:                                                                                | Start time                                                                                        |
| `end_dt`                                                                                          | *str*                                                                                             | :heavy_check_mark:                                                                                | End date                                                                                          |
| `end_tm`                                                                                          | *str*                                                                                             | :heavy_check_mark:                                                                                | End time                                                                                          |
| `timezone`                                                                                        | *str*                                                                                             | :heavy_check_mark:                                                                                | Timezone (must be a valid IANA timezone, e.g., 'UTC', 'America/New_York', 'Europe/London')        |
| `description`                                                                                     | *OptionalNullable[str]*                                                                           | :heavy_minus_sign:                                                                                | Description                                                                                       |
| `visibility`                                                                                      | *OptionalNullable[int]*                                                                           | :heavy_minus_sign:                                                                                | Visibility (optional - defaults to PRIVATE if no spaces, inherits from spaces if spaces provided) |
| `keywords`                                                                                        | List[*str*]                                                                                       | :heavy_minus_sign:                                                                                | Keywords                                                                                          |
| `space_ids`                                                                                       | List[*int*]                                                                                       | :heavy_minus_sign:                                                                                | Space IDs                                                                                         |
| `document_ids`                                                                                    | List[*str*]                                                                                       | :heavy_minus_sign:                                                                                | Document IDs (UUIDs from document service)                                                        |
| `repeat_days`                                                                                     | List[*int*]                                                                                       | :heavy_minus_sign:                                                                                | Repeat Days                                                                                       |
| `repeat_presets`                                                                                  | *OptionalNullable[str]*                                                                           | :heavy_minus_sign:                                                                                | Repeat Presets                                                                                    |
| `timeline_preset`                                                                                 | *OptionalNullable[str]*                                                                           | :heavy_minus_sign:                                                                                | Timeline Preset                                                                                   |
| `latitude`                                                                                        | *OptionalNullable[float]*                                                                         | :heavy_minus_sign:                                                                                | Latitude coordinate (-90 to 90)                                                                   |
| `longitude`                                                                                       | *OptionalNullable[float]*                                                                         | :heavy_minus_sign:                                                                                | Longitude coordinate (-180 to 180)                                                                |
| `address`                                                                                         | *OptionalNullable[str]*                                                                           | :heavy_minus_sign:                                                                                | Physical address                                                                                  |
| `event_metadata`                                                                                  | Dict[str, *Any*]                                                                                  | :heavy_minus_sign:                                                                                | Event Metadata (JSON)                                                                             |
| `retries`                                                                                         | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                  | :heavy_minus_sign:                                                                                | Configuration to override the default retry behavior of the client.                               |

### Response

**[models.EventRead](../../models/eventread.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## delete_event_api_v1_event_event_id_delete

Delete Event

### Example Usage

<!-- UsageSnippet language="python" operationID="delete_event_api_v1_event__event_id__delete" method="delete" path="/api/v1/event/{event_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.delete_event_api_v1_event_event_id_delete(event_id=490397)

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## patch_event_identification_api_v1_event_event_id_identification_patch

Update event title and status (Identification info). API renamed from /header.

### Example Usage

<!-- UsageSnippet language="python" operationID="patch_event_identification_api_v1_event__event_id__identification_patch" method="patch" path="/api/v1/event/{event_id}/identification" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.patch_event_identification_api_v1_event_event_id_identification_patch(event_id=851964, title="<value>")

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_section_identification_api_v1_event_event_id_section_identification_get

Get Section Identification

### Example Usage

<!-- UsageSnippet language="python" operationID="get_section_identification_api_v1_event__event_id__section_identification_get" method="get" path="/api/v1/event/{event_id}/section/identification" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.get_section_identification_api_v1_event_event_id_section_identification_get(event_id=454878)

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_section_content_api_v1_event_event_id_section_content_get

Get Section Content

### Example Usage

<!-- UsageSnippet language="python" operationID="get_section_content_api_v1_event__event_id__section_content_get" method="get" path="/api/v1/event/{event_id}/section/content" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.get_section_content_api_v1_event_event_id_section_content_get(event_id=645408)

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_section_settings_api_v1_event_event_id_section_settings_get

Get Section Settings

### Example Usage

<!-- UsageSnippet language="python" operationID="get_section_settings_api_v1_event__event_id__section_settings_get" method="get" path="/api/v1/event/{event_id}/section/settings" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.get_section_settings_api_v1_event_event_id_section_settings_get(event_id=284666)

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## patch_event_content_api_v1_event_event_id_content_patch

Update event content (Description, Metadata, Theme).

### Example Usage

<!-- UsageSnippet language="python" operationID="patch_event_content_api_v1_event__event_id__content_patch" method="patch" path="/api/v1/event/{event_id}/content" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.patch_event_content_api_v1_event_event_id_content_patch(event_id=812886)

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_event_settings_api_v1_event_event_id_settings_get

Get dedicated event settings.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_event_settings_api_v1_event__event_id__settings_get" method="get" path="/api/v1/event/{event_id}/settings" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.get_event_settings_api_v1_event_event_id_settings_get(event_id=674327)

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## patch_event_settings_api_v1_event_event_id_settings_patch

Update event settings (Visibility, Access).

### Example Usage

<!-- UsageSnippet language="python" operationID="patch_event_settings_api_v1_event__event_id__settings_patch" method="patch" path="/api/v1/event/{event_id}/settings" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.patch_event_settings_api_v1_event_event_id_settings_patch(event_id=184687)

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## update_cover_api_v1_event_event_id_cover_patch

Update Cover

### Example Usage

<!-- UsageSnippet language="python" operationID="update_cover_api_v1_event__event_id__cover_patch" method="patch" path="/api/v1/event/{event_id}/cover" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.update_cover_api_v1_event_event_id_cover_patch(event_id=391827, file={
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## publish_event_api_v1_event_event_id_publish_patch

Publish Event

### Example Usage

<!-- UsageSnippet language="python" operationID="publish_event_api_v1_event__event_id__publish_patch" method="patch" path="/api/v1/event/{event_id}/publish" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.publish_event_api_v1_event_event_id_publish_patch(event_id=59446)

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## publish_event_with_notifications_api_v1_event_event_id_publish_with_notifications_post

Publish Event With Notifications

### Example Usage

<!-- UsageSnippet language="python" operationID="publish_event_with_notifications_api_v1_event__event_id__publish_with_notifications_post" method="post" path="/api/v1/event/{event_id}/publish-with-notifications" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.publish_event_with_notifications_api_v1_event_event_id_publish_with_notifications_post(event_id=385781, notify_attendees=False)

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## archive_event_api_v1_event_event_id_archive_patch

Archive Event

### Example Usage

<!-- UsageSnippet language="python" operationID="archive_event_api_v1_event__event_id__archive_patch" method="patch" path="/api/v1/event/{event_id}/archive" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.archive_event_api_v1_event_event_id_archive_patch(event_id=949489)

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## transfer_event_api_v1_event_event_id_transfer_post

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
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.transfer_event_api_v1_event_event_id_transfer_post(event_id=916824, target_org_id="83be6f26-b930-4b36-a344-0b0753b6cbd0")

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## publish_event_version_api_v1_event_event_id_versions_publish_post

Create an immutable published version of the event for recommendations

### Example Usage

<!-- UsageSnippet language="python" operationID="publish_event_version_api_v1_event__event_id__versions_publish_post" method="post" path="/api/v1/event/{event_id}/versions/publish" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.publish_event_version_api_v1_event_event_id_versions_publish_post(event_id=711120)

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## unpublish_event_version_api_v1_event_event_id_versions_unpublish_post

Mark event as draft (unpublished)

### Example Usage

<!-- UsageSnippet language="python" operationID="unpublish_event_version_api_v1_event__event_id__versions_unpublish_post" method="post" path="/api/v1/event/{event_id}/versions/unpublish" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    sdk.event.unpublish_event_version_api_v1_event_event_id_versions_unpublish_post(event_id=544756)

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## list_event_versions_api_v1_event_event_id_versions_get

Get all published versions of an event

### Example Usage

<!-- UsageSnippet language="python" operationID="list_event_versions_api_v1_event__event_id__versions_get" method="get" path="/api/v1/event/{event_id}/versions" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.list_event_versions_api_v1_event_event_id_versions_get(event_id=701217)

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## rollback_event_version_api_v1_event_event_id_versions_rollback_post

Restore event to a specific published version

### Example Usage

<!-- UsageSnippet language="python" operationID="rollback_event_version_api_v1_event__event_id__versions_rollback_post" method="post" path="/api/v1/event/{event_id}/versions/rollback" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.rollback_event_version_api_v1_event_event_id_versions_rollback_post(event_id=196193, transaction_id=590648)

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## compare_event_versions_api_v1_event_event_id_versions_compare_get

Compare two versions and see what changed

### Example Usage

<!-- UsageSnippet language="python" operationID="compare_event_versions_api_v1_event__event_id__versions_compare_get" method="get" path="/api/v1/event/{event_id}/versions/compare" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.compare_event_versions_api_v1_event_event_id_versions_compare_get(event_id=9301, transaction_id_a=196275, transaction_id_b=886925)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `transaction_id_a`                                                  | *int*                                                               | :heavy_check_mark:                                                  | First transaction ID to compare                                     |
| `transaction_id_b`                                                  | *int*                                                               | :heavy_check_mark:                                                  | Second transaction ID to compare                                    |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_latest_event_version_api_v1_event_event_id_versions_latest_get

Get the most recent published version of an event

### Example Usage

<!-- UsageSnippet language="python" operationID="get_latest_event_version_api_v1_event__event_id__versions_latest_get" method="get" path="/api/v1/event/{event_id}/versions/latest" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.get_latest_event_version_api_v1_event_event_id_versions_latest_get(event_id=342518)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.EventVersionRead](../../models/eventversionread.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_event_version_api_v1_event_event_id_versions_transaction_id_get

Get specific published version of an event

### Example Usage

<!-- UsageSnippet language="python" operationID="get_event_version_api_v1_event__event_id__versions__transaction_id__get" method="get" path="/api/v1/event/{event_id}/versions/{transaction_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.get_event_version_api_v1_event_event_id_versions_transaction_id_get(event_id=352601, transaction_id=717392)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `transaction_id`                                                    | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.EventVersionRead](../../models/eventversionread.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_timezone_info_api_v1_event_timezones_get

Get timezone information for frontend validation and suggestions.

Returns:
    Dictionary containing:
    - all_timezones: List of all valid IANA timezones
    - common_timezones: List of commonly used timezones for UI suggestions
    - count: Total number of supported timezones

### Example Usage

<!-- UsageSnippet language="python" operationID="get_timezone_info_api_v1_event_timezones__get" method="get" path="/api/v1/event/timezones/" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.get_timezone_info_api_v1_event_timezones_get()

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

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## validate_timezone_api_v1_event_timezones_validate_get

Validate a specific timezone string.

Args:
    timezone: Timezone string to validate (query parameter)

Returns:
    Dictionary containing:
    - valid: Boolean indicating if timezone is valid
    - timezone: The validated timezone string
    - suggestions: List of similar timezones if invalid (empty if valid)

### Example Usage

<!-- UsageSnippet language="python" operationID="validate_timezone_api_v1_event_timezones_validate_get" method="get" path="/api/v1/event/timezones/validate" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event.validate_timezone_api_v1_event_timezones_validate_get(timezone="Europe/London")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `timezone`                                                          | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Dict[str, Any]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |