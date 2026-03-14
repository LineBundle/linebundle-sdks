# PublicEvents

## Overview

### Available Operations

* [get_latest_version](#get_latest_version) - Get Latest Event Version (Public Access)

## get_latest_version

Get the most recent published version of an event. Supports unauthenticated access for PUBLIC events.

### Example Usage

<!-- UsageSnippet language="python" operationID="getLatestPublicEventVersion" method="get" path="/api/v1/public/event/{event_id}/versions/latest" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.public_events.get_latest_version(event_id=75825)

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |