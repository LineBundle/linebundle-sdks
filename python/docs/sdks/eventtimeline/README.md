# EventTimeline

## Overview

### Available Operations

* [get_timeline_api_v1_event_event_id_timeline_get](#get_timeline_api_v1_event_event_id_timeline_get) - Get event timeline
* [get_published_timeline_api_v1_event_event_id_timeline_published_get](#get_published_timeline_api_v1_event_event_id_timeline_published_get) - Get published event timeline
* [create_milestone_api_v1_event_event_id_timeline_milestones_post](#create_milestone_api_v1_event_event_id_timeline_milestones_post) - Create and link milestone
* [link_milestone_api_v1_event_event_id_timeline_link_post](#link_milestone_api_v1_event_event_id_timeline_link_post) - Link existing event
* [unlink_milestone_api_v1_event_event_id_timeline_milestone_event_id_delete](#unlink_milestone_api_v1_event_event_id_timeline_milestone_event_id_delete) - Unlink milestone

## get_timeline_api_v1_event_event_id_timeline_get

Retrieve all milestones linked to a base event.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_timeline_api_v1_event__event_id__timeline_get" method="get" path="/api/v1/event/{event_id}/timeline" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
) as sdk:

    res = sdk.event_timeline.get_timeline_api_v1_event_event_id_timeline_get(security=models.GetTimelineAPIV1EventEventIDTimelineGetSecurity(
        permission_dependency="<YOUR_BEARER_TOKEN_HERE>",
    ), event_id=805045)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                 | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `security`                                                                                                                | [models.GetTimelineAPIV1EventEventIDTimelineGetSecurity](../../models/gettimelineapiv1eventeventidtimelinegetsecurity.md) | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `event_id`                                                                                                                | *int*                                                                                                                     | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `retries`                                                                                                                 | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                          | :heavy_minus_sign:                                                                                                        | Configuration to override the default retry behavior of the client.                                                       |

### Response

**[List[models.EventRead]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_published_timeline_api_v1_event_event_id_timeline_published_get

Retrieve published milestones for a base event's published version. Returns only milestones that were linked at publish time AND are themselves published.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_published_timeline_api_v1_event__event_id__timeline_published_get" method="get" path="/api/v1/event/{event_id}/timeline/published" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event_timeline.get_published_timeline_api_v1_event_event_id_timeline_published_get(event_id=160691)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.EventRead]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## create_milestone_api_v1_event_event_id_timeline_milestones_post

Create a new event and automatically link it as a milestone.

### Example Usage

<!-- UsageSnippet language="python" operationID="create_milestone_api_v1_event__event_id__timeline_milestones_post" method="post" path="/api/v1/event/{event_id}/timeline/milestones" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
) as sdk:

    res = sdk.event_timeline.create_milestone_api_v1_event_event_id_timeline_milestones_post(security=models.CreateMilestoneAPIV1EventEventIDTimelineMilestonesPostSecurity(
        permission_dependency="<YOUR_BEARER_TOKEN_HERE>",
    ), event_id=858013, request="<value>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                         | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `security`                                                                                                                                                        | [models.CreateMilestoneAPIV1EventEventIDTimelineMilestonesPostSecurity](../../models/createmilestoneapiv1eventeventidtimelinemilestonespostsecurity.md)           | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `event_id`                                                                                                                                                        | *int*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `request`                                                                                                                                                         | *str*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                | JSON string of CreateEventRequest                                                                                                                                 |
| `file`                                                                                                                                                            | [Optional[models.BodyCreateMilestoneAPIV1EventEventIDTimelineMilestonesPostFile]](../../models/bodycreatemilestoneapiv1eventeventidtimelinemilestonespostfile.md) | :heavy_minus_sign:                                                                                                                                                | Optional cover image                                                                                                                                              |
| `retries`                                                                                                                                                         | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                  | :heavy_minus_sign:                                                                                                                                                | Configuration to override the default retry behavior of the client.                                                                                               |

### Response

**[models.EventRead](../../models/eventread.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## link_milestone_api_v1_event_event_id_timeline_link_post

Link an existing event as a milestone to a base event.

### Example Usage

<!-- UsageSnippet language="python" operationID="link_milestone_api_v1_event__event_id__timeline_link_post" method="post" path="/api/v1/event/{event_id}/timeline/link" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
) as sdk:

    res = sdk.event_timeline.link_milestone_api_v1_event_event_id_timeline_link_post(security=models.LinkMilestoneAPIV1EventEventIDTimelineLinkPostSecurity(
        permission_dependency="<YOUR_BEARER_TOKEN_HERE>",
    ), event_id=191709, milestone_event_id=690438, sequence=0)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                               | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `security`                                                                                                                              | [models.LinkMilestoneAPIV1EventEventIDTimelineLinkPostSecurity](../../models/linkmilestoneapiv1eventeventidtimelinelinkpostsecurity.md) | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |
| `event_id`                                                                                                                              | *int*                                                                                                                                   | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |
| `milestone_event_id`                                                                                                                    | *int*                                                                                                                                   | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |
| `sequence`                                                                                                                              | *Optional[int]*                                                                                                                         | :heavy_minus_sign:                                                                                                                      | N/A                                                                                                                                     |
| `retries`                                                                                                                               | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                        | :heavy_minus_sign:                                                                                                                      | Configuration to override the default retry behavior of the client.                                                                     |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## unlink_milestone_api_v1_event_event_id_timeline_milestone_event_id_delete

Remove a milestone link without deleting the event.

### Example Usage

<!-- UsageSnippet language="python" operationID="unlink_milestone_api_v1_event__event_id__timeline__milestone_event_id__delete" method="delete" path="/api/v1/event/{event_id}/timeline/{milestone_event_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
) as sdk:

    res = sdk.event_timeline.unlink_milestone_api_v1_event_event_id_timeline_milestone_event_id_delete(security=models.UnlinkMilestoneAPIV1EventEventIDTimelineMilestoneEventIDDeleteSecurity(
        permission_dependency="<YOUR_BEARER_TOKEN_HERE>",
    ), event_id=675180, milestone_event_id=578718)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                               | Type                                                                                                                                                                    | Required                                                                                                                                                                | Description                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `security`                                                                                                                                                              | [models.UnlinkMilestoneAPIV1EventEventIDTimelineMilestoneEventIDDeleteSecurity](../../models/unlinkmilestoneapiv1eventeventidtimelinemilestoneeventiddeletesecurity.md) | :heavy_check_mark:                                                                                                                                                      | N/A                                                                                                                                                                     |
| `event_id`                                                                                                                                                              | *int*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                      | N/A                                                                                                                                                                     |
| `milestone_event_id`                                                                                                                                                    | *int*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                      | N/A                                                                                                                                                                     |
| `retries`                                                                                                                                                               | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                        | :heavy_minus_sign:                                                                                                                                                      | Configuration to override the default retry behavior of the client.                                                                                                     |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |