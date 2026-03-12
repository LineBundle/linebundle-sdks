# Timezones

## Overview

### Available Operations

* [get_timezone_info_api_v1_event_timezones_get](#get_timezone_info_api_v1_event_timezones_get) - Get Timezone Info
* [validate_timezone_api_v1_event_timezones_validate_get](#validate_timezone_api_v1_event_timezones_validate_get) - Validate Timezone

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

    res = sdk.timezones.get_timezone_info_api_v1_event_timezones_get()

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

    res = sdk.timezones.validate_timezone_api_v1_event_timezones_validate_get(timezone="Europe/London")

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