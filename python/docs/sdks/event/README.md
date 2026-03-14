# Event

## Overview

### Available Operations

* [get](#get) - Get Event By Id
* [update](#update) - Update Event
* [get_section_settings](#get_section_settings) - Get Section Settings
* [unpublish_version](#unpublish_version) - Unpublish Event (Mark as Draft)
* [compare_versions](#compare_versions) - Compare Event Versions
* [get_latest_version](#get_latest_version) - Get Latest Event Version
* [get_version](#get_version) - Get Event Version

## get

Get Event By Id

### Example Usage

<!-- UsageSnippet language="python" operationID="get_event_by_id_api_v1_event__event_id__get" method="get" path="/api/v1/event/{event_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.event.get(event_id=902945)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.EventRead](../../models/eventread.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## update

Update Event

### Example Usage

<!-- UsageSnippet language="python" operationID="update_event_api_v1_event__event_id__put" method="put" path="/api/v1/event/{event_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.event.update(event_id=38536, title="<value>", start_dt="<value>", start_tm="<value>", end_dt="<value>", end_tm="<value>", timezone="America/Dawson_Creek")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                         | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `event_id`                                                                                        | *int*                                                                                             | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `title`                                                                                           | *str*                                                                                             | :heavy_check_mark:                                                                                | Title                                                                                             |
| `start_dt`                                                                                        | *str*                                                                                             | :heavy_check_mark:                                                                                | Start date                                                                                        |
| `start_tm`                                                                                        | *str*                                                                                             | :heavy_check_mark:                                                                                | Start time                                                                                        |
| `end_dt`                                                                                          | *str*                                                                                             | :heavy_check_mark:                                                                                | End date                                                                                          |
| `end_tm`                                                                                          | *str*                                                                                             | :heavy_check_mark:                                                                                | End time                                                                                          |
| `timezone`                                                                                        | *str*                                                                                             | :heavy_check_mark:                                                                                | Timezone (must be a valid IANA timezone, e.g., 'UTC', 'America/New_York', 'Europe/London')        |
| `description`                                                                                     | *OptionalNullable[str]*                                                                           | :heavy_minus_sign:                                                                                | Description                                                                                       |
| `visibility`                                                                                      | *OptionalNullable[int]*                                                                           | :heavy_minus_sign:                                                                                | Visibility (optional - defaults to PRIVATE if no spaces, inherits from spaces if spaces provided) |
| `keywords`                                                                                        | List[*str*]                                                                                       | :heavy_minus_sign:                                                                                | Keywords                                                                                          |
| `space_ids`                                                                                       | List[*int*]                                                                                       | :heavy_minus_sign:                                                                                | Space IDs                                                                                         |
| `document_ids`                                                                                    | List[*str*]                                                                                       | :heavy_minus_sign:                                                                                | Document IDs (UUIDs from document service)                                                        |
| `repeat_days`                                                                                     | List[*int*]                                                                                       | :heavy_minus_sign:                                                                                | Repeat Days                                                                                       |
| `repeat_presets`                                                                                  | *OptionalNullable[str]*                                                                           | :heavy_minus_sign:                                                                                | Repeat Presets                                                                                    |
| `timeline_preset`                                                                                 | *OptionalNullable[str]*                                                                           | :heavy_minus_sign:                                                                                | Timeline Preset                                                                                   |
| `latitude`                                                                                        | *OptionalNullable[float]*                                                                         | :heavy_minus_sign:                                                                                | Latitude coordinate (-90 to 90)                                                                   |
| `longitude`                                                                                       | *OptionalNullable[float]*                                                                         | :heavy_minus_sign:                                                                                | Longitude coordinate (-180 to 180)                                                                |
| `address`                                                                                         | *OptionalNullable[str]*                                                                           | :heavy_minus_sign:                                                                                | Physical address                                                                                  |
| `event_metadata`                                                                                  | Dict[str, *Any*]                                                                                  | :heavy_minus_sign:                                                                                | Event Metadata (JSON)                                                                             |
| `retries`                                                                                         | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                                  | :heavy_minus_sign:                                                                                | Configuration to override the default retry behavior of the client.                               |

### Response

**[models.EventRead](../../models/eventread.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_section_settings

Get Section Settings

### Example Usage

<!-- UsageSnippet language="python" operationID="get_section_settings_api_v1_event__event_id__section_settings_get" method="get" path="/api/v1/event/{event_id}/section/settings" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.event.get_section_settings(event_id=284666)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SectionSettingsRead](../../models/sectionsettingsread.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## unpublish_version

Mark event as draft (unpublished)

### Example Usage

<!-- UsageSnippet language="python" operationID="unpublish_event_version_api_v1_event__event_id__versions_unpublish_post" method="post" path="/api/v1/event/{event_id}/versions/unpublish" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    linebundle.event.unpublish_version(event_id=544756)

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## compare_versions

Compare two versions and see what changed

### Example Usage

<!-- UsageSnippet language="python" operationID="compare_event_versions_api_v1_event__event_id__versions_compare_get" method="get" path="/api/v1/event/{event_id}/versions/compare" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.event.compare_versions(event_id=9301, transaction_id_a=196275, transaction_id_b=886925)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `transaction_id_a`                                                  | *int*                                                               | :heavy_check_mark:                                                  | First transaction ID to compare                                     |
| `transaction_id_b`                                                  | *int*                                                               | :heavy_check_mark:                                                  | Second transaction ID to compare                                    |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_latest_version

Get the most recent published version of an event

### Example Usage

<!-- UsageSnippet language="python" operationID="get_latest_event_version_api_v1_event__event_id__versions_latest_get" method="get" path="/api/v1/event/{event_id}/versions/latest" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.event.get_latest_version(event_id=342518)

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

## get_version

Get specific published version of an event

### Example Usage

<!-- UsageSnippet language="python" operationID="get_event_version_api_v1_event__event_id__versions__transaction_id__get" method="get" path="/api/v1/event/{event_id}/versions/{transaction_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.event.get_version(event_id=352601, transaction_id=717392)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `transaction_id`                                                    | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.EventVersionRead](../../models/eventversionread.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |