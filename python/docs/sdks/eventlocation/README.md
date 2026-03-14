# EventLocation

## Overview

### Available Operations

* [get](#get) - Get Event Location
* [update](#update) - Update Event Location

## get

Get the location details for an event.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_event_location_api_v1_events__event_id__location_get" method="get" path="/api/v1/events/{event_id}/location" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.event_location.get(event_id=20391)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## update

Update the location details for an event.

### Example Usage

<!-- UsageSnippet language="python" operationID="update_event_location_api_v1_events__event_id__location_put" method="put" path="/api/v1/events/{event_id}/location" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.event_location.update(event_id=563901)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |