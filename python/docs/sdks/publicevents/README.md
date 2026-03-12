# PublicEvents

## Overview

### Available Operations

* [get_latest_public_event_version_api_v1_public_event_event_id_versions_latest_get](#get_latest_public_event_version_api_v1_public_event_event_id_versions_latest_get) - Get Latest Event Version (Public Access)

## get_latest_public_event_version_api_v1_public_event_event_id_versions_latest_get

Get the most recent published version of an event. Supports unauthenticated access for PUBLIC events.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_latest_public_event_version_api_v1_public_event__event_id__versions_latest_get" method="get" path="/api/v1/public/event/{event_id}/versions/latest" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.public_events.get_latest_public_event_version_api_v1_public_event_event_id_versions_latest_get(event_id=291072)

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