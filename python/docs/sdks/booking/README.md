# Booking

## Overview

### Available Operations

* [get_bookings_api_v1_booking_get](#get_bookings_api_v1_booking_get) - Get Bookings
* [create_booking_api_v1_booking_post](#create_booking_api_v1_booking_post) - Create Booking
* [get_booking_by_id_api_v1_booking_booking_id_get](#get_booking_by_id_api_v1_booking_booking_id_get) - Get Booking By Id
* [update_booking_api_v1_booking_booking_id_put](#update_booking_api_v1_booking_booking_id_put) - Update Booking
* [delete_booking_api_v1_booking_booking_id_delete](#delete_booking_api_v1_booking_booking_id_delete) - Delete Booking
* [check_availability_api_v1_booking_check_availability_post](#check_availability_api_v1_booking_check_availability_post) - Check Availability
* [get_place_schedule_api_v1_booking_places_place_id_schedule_get](#get_place_schedule_api_v1_booking_places_place_id_schedule_get) - Get Place Schedule

## get_bookings_api_v1_booking_get

Get bookings with optional filters

### Example Usage

<!-- UsageSnippet language="python" operationID="get_bookings_api_v1_booking_get" method="get" path="/api/v1/booking" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.booking.get_bookings_api_v1_booking_get(limit=50, offset=0)

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## create_booking_api_v1_booking_post

Create a new booking

### Example Usage

<!-- UsageSnippet language="python" operationID="create_booking_api_v1_booking_post" method="post" path="/api/v1/booking" -->
```python
from openapi import SDK, models
from openapi.utils import parse_datetime


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.booking.create_booking_api_v1_booking_post(place_id=155472, title="<value>", start_dt=parse_datetime("2026-07-29T07:30:38.034Z"), end_dt=parse_datetime("2025-07-25T01:27:35.680Z"))

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_booking_by_id_api_v1_booking_booking_id_get

Get booking by ID

### Example Usage

<!-- UsageSnippet language="python" operationID="get_booking_by_id_api_v1_booking__booking_id__get" method="get" path="/api/v1/booking/{booking_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.booking.get_booking_by_id_api_v1_booking_booking_id_get(booking_id=390139)

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## update_booking_api_v1_booking_booking_id_put

Update an existing booking

### Example Usage

<!-- UsageSnippet language="python" operationID="update_booking_api_v1_booking__booking_id__put" method="put" path="/api/v1/booking/{booking_id}" -->
```python
from openapi import SDK, models
from openapi.utils import parse_datetime


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.booking.update_booking_api_v1_booking_booking_id_put(booking_id=623513, title="<value>", start_dt=parse_datetime("2024-03-03T11:02:27.501Z"), end_dt=parse_datetime("2025-11-26T17:19:25.507Z"), status="confirmed")

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## delete_booking_api_v1_booking_booking_id_delete

Delete a booking

### Example Usage

<!-- UsageSnippet language="python" operationID="delete_booking_api_v1_booking__booking_id__delete" method="delete" path="/api/v1/booking/{booking_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    sdk.booking.delete_booking_api_v1_booking_booking_id_delete(booking_id=445945)

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `booking_id`                                                        | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## check_availability_api_v1_booking_check_availability_post

Check if a place is available for booking

### Example Usage

<!-- UsageSnippet language="python" operationID="check_availability_api_v1_booking_check_availability_post" method="post" path="/api/v1/booking/check-availability" -->
```python
from openapi import SDK, models
from openapi.utils import parse_datetime


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.booking.check_availability_api_v1_booking_check_availability_post(place_id=192292, start_dt=parse_datetime("2024-11-25T20:07:13.686Z"), end_dt=parse_datetime("2025-05-23T08:23:07.188Z"))

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_place_schedule_api_v1_booking_places_place_id_schedule_get

Get the schedule of bookings for a place in a date range

### Example Usage

<!-- UsageSnippet language="python" operationID="get_place_schedule_api_v1_booking_places__place_id__schedule_get" method="get" path="/api/v1/booking/places/{place_id}/schedule" -->
```python
from openapi import SDK, models
from openapi.utils import parse_datetime


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.booking.get_place_schedule_api_v1_booking_places_place_id_schedule_get(place_id=892109, start_date=parse_datetime("2026-02-03T15:48:07.831Z"), end_date=parse_datetime("2026-05-25T20:30:02.025Z"))

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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |