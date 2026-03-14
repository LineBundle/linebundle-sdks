# Bookings

## Overview

### Available Operations

* [list](#list) - Get Bookings
* [get_by_id](#get_by_id) - Get Booking By Id
* [delete](#delete) - Delete Booking
* [check_availability](#check_availability) - Check Availability
* [get_place_schedule](#get_place_schedule) - Get Place Schedule
* [update](#update) - Update Booking

## list

Get bookings with optional filters

### Example Usage

<!-- UsageSnippet language="python" operationID="get_bookings_api_v1_booking_get" method="get" path="/api/v1/booking" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.bookings.list(limit=50, offset=0)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `user_id`                                                            | *OptionalNullable[str]*                                              | :heavy_minus_sign:                                                   | Filter by user ID                                                    |
| `place_id`                                                           | *OptionalNullable[int]*                                              | :heavy_minus_sign:                                                   | Filter by place ID                                                   |
| `start_date`                                                         | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_minus_sign:                                                   | Filter by start date                                                 |
| `end_date`                                                           | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_minus_sign:                                                   | Filter by end date                                                   |
| `limit`                                                              | *Optional[int]*                                                      | :heavy_minus_sign:                                                   | Number of bookings to return                                         |
| `offset`                                                             | *Optional[int]*                                                      | :heavy_minus_sign:                                                   | Number of bookings to skip                                           |
| `retries`                                                            | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)     | :heavy_minus_sign:                                                   | Configuration to override the default retry behavior of the client.  |

### Response

**[List[models.BookingRead]](../../models/.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_by_id

Get booking by ID

### Example Usage

<!-- UsageSnippet language="python" operationID="get_booking_by_id_api_v1_booking__booking_id__get" method="get" path="/api/v1/booking/{booking_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.bookings.get_by_id(booking_id=390139)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `booking_id`                                                        | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.BookingRead](../../models/bookingread.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## delete

Delete a booking

### Example Usage

<!-- UsageSnippet language="python" operationID="delete_booking_api_v1_booking__booking_id__delete" method="delete" path="/api/v1/booking/{booking_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    linebundle.bookings.delete(booking_id=445945)

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `booking_id`                                                        | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## check_availability

Check if a place is available for booking

### Example Usage

<!-- UsageSnippet language="python" operationID="check_availability_api_v1_booking_check_availability_post" method="post" path="/api/v1/booking/check-availability" -->
```python
from linebundle_sdk import Linebundle, models
from linebundle_sdk.utils import parse_datetime


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.bookings.check_availability(place_id=192292, start_dt=parse_datetime("2024-11-25T20:07:13.686Z"), end_dt=parse_datetime("2025-05-23T08:23:07.188Z"))

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `place_id`                                                           | *int*                                                                | :heavy_check_mark:                                                   | Place ID to check                                                    |
| `start_dt`                                                           | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | Start datetime                                                       |
| `end_dt`                                                             | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | End datetime                                                         |
| `exclude_booking_id`                                                 | *OptionalNullable[int]*                                              | :heavy_minus_sign:                                                   | Booking ID to exclude from conflict check                            |
| `retries`                                                            | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)     | :heavy_minus_sign:                                                   | Configuration to override the default retry behavior of the client.  |

### Response

**[models.AvailabilityResponse](../../models/availabilityresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_place_schedule

Get the schedule of bookings for a place in a date range

### Example Usage

<!-- UsageSnippet language="python" operationID="get_place_schedule_api_v1_booking_places__place_id__schedule_get" method="get" path="/api/v1/booking/places/{place_id}/schedule" -->
```python
from linebundle_sdk import Linebundle, models
from linebundle_sdk.utils import parse_datetime


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.bookings.get_place_schedule(place_id=892109, start_date=parse_datetime("2026-02-03T15:48:07.831Z"), end_date=parse_datetime("2026-05-25T20:30:02.025Z"))

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `place_id`                                                           | *int*                                                                | :heavy_check_mark:                                                   | N/A                                                                  |
| `start_date`                                                         | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | Start date for schedule                                              |
| `end_date`                                                           | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | End date for schedule                                                |
| `retries`                                                            | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)     | :heavy_minus_sign:                                                   | Configuration to override the default retry behavior of the client.  |

### Response

**[List[models.BookingRead]](../../models/.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## update

Update an existing booking

### Example Usage

<!-- UsageSnippet language="python" operationID="update_booking_api_v1_booking__booking_id__put" method="put" path="/api/v1/booking/{booking_id}" -->
```python
from linebundle_sdk import Linebundle, models
from linebundle_sdk.utils import parse_datetime


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.bookings.update(booking_id=623513, title="<value>", start_dt=parse_datetime("2024-03-03T11:02:27.501Z"), end_dt=parse_datetime("2025-11-26T17:19:25.507Z"), status="confirmed")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `booking_id`                                                         | *int*                                                                | :heavy_check_mark:                                                   | N/A                                                                  |
| `title`                                                              | *str*                                                                | :heavy_check_mark:                                                   | Booking title                                                        |
| `start_dt`                                                           | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | Start datetime                                                       |
| `end_dt`                                                             | [date](https://docs.python.org/3/library/datetime.html#date-objects) | :heavy_check_mark:                                                   | End datetime                                                         |
| `description`                                                        | *OptionalNullable[str]*                                              | :heavy_minus_sign:                                                   | Booking description                                                  |
| `status`                                                             | *Optional[str]*                                                      | :heavy_minus_sign:                                                   | Booking status                                                       |
| `retries`                                                            | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)     | :heavy_minus_sign:                                                   | Configuration to override the default retry behavior of the client.  |

### Response

**[models.BookingRead](../../models/bookingread.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |