# EventTimezones

## Overview

### Available Operations

* [validate](#validate) - Validate Timezone

## validate

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
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.event_timezones.validate(timezone="Europe/London")

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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |