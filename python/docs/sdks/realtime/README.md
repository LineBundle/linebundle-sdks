# Realtime

## Overview

Realtime WebSocket channel documentation

### Available Operations

* [get_info](#get_info) - Realtime WebSocket protocol info
* [connect](#connect) - Establish realtime WebSocket connection (upgrade)

## get_info

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
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.realtime.get_info()

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## connect

Upgrades to WebSocket at this path (subprotocol: json).

Requires valid authenticated user & tenant context. Server sends single ACK then may push events.

### Example Usage

<!-- UsageSnippet language="python" operationID="connectWebSocket" method="get" path="/ws" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    linebundle.realtime.connect()

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |