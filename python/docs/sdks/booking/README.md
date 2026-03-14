# Booking

## Overview

### Available Operations

* [create](#create) - Create Booking

## create

Create a new booking

### Example Usage

<!-- UsageSnippet language="python" operationID="create_booking_api_v1_booking_post" method="post" path="/api/v1/booking" -->
```python
from linebundle_sdk import Linebundle, models
from linebundle_sdk.utils import parse_datetime


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.booking.create(place_id=155472, title="<value>", start_dt=parse_datetime("2026-07-29T07:30:38.034Z"), end_dt=parse_datetime("2025-07-25T01:27:35.680Z"))

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `place_id`                                                           | *int*                                                                | :heavy_check_mark:                                                   | Place ID to book                                                     |
| `title`                                                              | *str*                                                                | :heavy_check_mark:                                                   | Booking title                                                        |
| `start_dt`                                                           | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | Start datetime                                                       |
| `end_dt`                                                             | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | End datetime                                                         |
| `description`                                                        | *OptionalNullable[str]*                                              | :heavy_minus_sign:                                                   | Booking description                                                  |
| `retries`                                                            | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)     | :heavy_minus_sign:                                                   | Configuration to override the default retry behavior of the client.  |

### Response

**[models.BookingRead](../../models/bookingread.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |