# EventTimeline

## Overview

### Available Operations

* [get](#get) - Get event timeline
* [get_published](#get_published) - Get published event timeline
* [create_milestone](#create_milestone) - Create and link milestone
* [link_milestone](#link_milestone) - Link existing event
* [unlink](#unlink) - Unlink milestone

## get

Retrieve all milestones linked to a base event.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_timeline_api_v1_event__event_id__timeline_get" method="get" path="/api/v1/event/{event_id}/timeline" -->
```python
from linebundle_sdk import Linebundle


with Linebundle() as linebundle:

    res = linebundle.event_timeline.get(event_id=805045)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_published

Retrieve published milestones for a base event's published version. Returns only milestones that were linked at publish time AND are themselves published.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_published_timeline_api_v1_event__event_id__timeline_published_get" method="get" path="/api/v1/event/{event_id}/timeline/published" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.event_timeline.get_published(event_id=160691)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## create_milestone

Create a new event and automatically link it as a milestone.

### Example Usage

<!-- UsageSnippet language="python" operationID="create_milestone_api_v1_event__event_id__timeline_milestones_post" method="post" path="/api/v1/event/{event_id}/timeline/milestones" -->
```python
from linebundle_sdk import Linebundle


with Linebundle() as linebundle:

    res = linebundle.event_timeline.create_milestone(event_id=858013, request="<value>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                                                                                         | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `event_id`                                                                                                                                                        | *int*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `request`                                                                                                                                                         | *str*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                | JSON string of CreateEventRequest                                                                                                                                 |
| `file`                                                                                                                                                            | [Optional[models.BodyCreateMilestoneAPIV1EventEventIDTimelineMilestonesPostFile]](../../models/bodycreatemilestoneapiv1eventeventidtimelinemilestonespostfile.md) | :heavy_minus_sign:                                                                                                                                                | Optional cover image                                                                                                                                              |
| `retries`                                                                                                                                                         | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                                                                                  | :heavy_minus_sign:                                                                                                                                                | Configuration to override the default retry behavior of the client.                                                                                               |

### Response

**[models.EventRead](../../models/eventread.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## link_milestone

Link an existing event as a milestone to a base event.

### Example Usage

<!-- UsageSnippet language="python" operationID="link_milestone_api_v1_event__event_id__timeline_link_post" method="post" path="/api/v1/event/{event_id}/timeline/link" -->
```python
from linebundle_sdk import Linebundle


with Linebundle() as linebundle:

    res = linebundle.event_timeline.link_milestone(event_id=191709, milestone_event_id=690438, sequence=0)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `milestone_event_id`                                                | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `sequence`                                                          | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## unlink

Remove a milestone link without deleting the event.

### Example Usage

<!-- UsageSnippet language="python" operationID="unlink_milestone_api_v1_event__event_id__timeline__milestone_event_id__delete" method="delete" path="/api/v1/event/{event_id}/timeline/{milestone_event_id}" -->
```python
from linebundle_sdk import Linebundle


with Linebundle() as linebundle:

    res = linebundle.event_timeline.unlink(event_id=675180, milestone_event_id=578718)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `milestone_event_id`                                                | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |