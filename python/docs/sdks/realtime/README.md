# Realtime

## Overview

Realtime WebSocket channel documentation

### Available Operations

* [realtime_info_realtime_info_get](#realtime_info_realtime_info_get) - Realtime WebSocket protocol info
* [get_ws](#get_ws) - Establish realtime WebSocket connection (upgrade)

## realtime_info_realtime_info_get

Get WebSocket protocol information.

Returns documentation about the WebSocket endpoint including:
- Connection endpoint
- Authentication requirements
- Protocol details
- ACK message format

Returns:
    dict: WebSocket protocol information

### Example Usage

<!-- UsageSnippet language="python" operationID="realtime_info_realtime_info_get" method="get" path="/realtime-info" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.realtime.realtime_info_realtime_info_get()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## get_ws

Upgrades to WebSocket at this path (subprotocol: json).

Requires valid authenticated user & tenant context. Server sends single ACK then may push events.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_/ws" method="get" path="/ws" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    sdk.realtime.get_ws()

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |