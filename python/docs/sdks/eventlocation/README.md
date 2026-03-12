# EventLocation

## Overview

### Available Operations

* [get_event_location_api_v1_events_event_id_location_get](#get_event_location_api_v1_events_event_id_location_get) - Get Event Location
* [update_event_location_api_v1_events_event_id_location_put](#update_event_location_api_v1_events_event_id_location_put) - Update Event Location

## get_event_location_api_v1_events_event_id_location_get

Get the location details for an event.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_event_location_api_v1_events__event_id__location_get" method="get" path="/api/v1/events/{event_id}/location" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event_location.get_event_location_api_v1_events_event_id_location_get(event_id=20391)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.LocationResponse](../../models/locationresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## update_event_location_api_v1_events_event_id_location_put

Update the location details for an event.

### Example Usage

<!-- UsageSnippet language="python" operationID="update_event_location_api_v1_events__event_id__location_put" method="put" path="/api/v1/events/{event_id}/location" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event_location.update_event_location_api_v1_events_event_id_location_put(event_id=563901)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `latitude`                                                          | *OptionalNullable[float]*                                           | :heavy_minus_sign:                                                  | Latitude coordinate                                                 |
| `longitude`                                                         | *OptionalNullable[float]*                                           | :heavy_minus_sign:                                                  | Longitude coordinate                                                |
| `address`                                                           | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Physical address                                                    |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.LocationResponse](../../models/locationresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |