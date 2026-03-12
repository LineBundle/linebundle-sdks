# Place

## Overview

### Available Operations

* [get_place_list_api_v1_place_get](#get_place_list_api_v1_place_get) - Get Place List
* [create_place_api_v1_place_post](#create_place_api_v1_place_post) - Create Place
* [get_place_by_id_api_v1_place_place_id_get](#get_place_by_id_api_v1_place_place_id_get) - Get Place By Id
* [update_place_api_v1_place_place_id_put](#update_place_api_v1_place_place_id_put) - Update Place
* [delete_place_api_v1_place_place_id_delete](#delete_place_api_v1_place_place_id_delete) - Delete Place
* [publish_place_api_v1_place_place_id_publish_patch](#publish_place_api_v1_place_place_id_publish_patch) - Publish Place
* [archive_place_api_v1_place_place_id_archive_patch](#archive_place_api_v1_place_place_id_archive_patch) - Archive Place

## get_place_list_api_v1_place_get

Get Place List

### Example Usage

<!-- UsageSnippet language="python" operationID="get_place_list_api_v1_place_get" method="get" path="/api/v1/place" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.place.get_place_list_api_v1_place_get(limit=10)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Limit                                                               |
| `prev`                                                              | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Prev ID                                                             |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.GetPlaceListResponseDTO]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## create_place_api_v1_place_post

Create Place

### Example Usage

<!-- UsageSnippet language="python" operationID="create_place_api_v1_place_post" method="post" path="/api/v1/place" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.place.create_place_api_v1_place_post(request={
        "title": "<value>",
        "description": "around wildly biodegrade",
        "visibility": 252569,
        "place_type": "online_meeting",
        "meeting_url": "https://uniform-squid.com/",
    })

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                                                   | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `request`                                                                                   | [models.CreatePlaceAPIV1PlacePostRequest](../../models/createplaceapiv1placepostrequest.md) | :heavy_check_mark:                                                                          | The request object to use for the request.                                                  |
| `retries`                                                                                   | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)                            | :heavy_minus_sign:                                                                          | Configuration to override the default retry behavior of the client.                         |

### Response

**[models.CreatePlaceResponseDTO](../../models/createplaceresponsedto.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_place_by_id_api_v1_place_place_id_get

Get Place By Id

### Example Usage

<!-- UsageSnippet language="python" operationID="get_place_by_id_api_v1_place__place_id__get" method="get" path="/api/v1/place/{place_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.place.get_place_by_id_api_v1_place_place_id_get(place_id=95579)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `place_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.GetPlaceListResponseDTO](../../models/getplacelistresponsedto.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## update_place_api_v1_place_place_id_put

Update Place

### Example Usage

<!-- UsageSnippet language="python" operationID="update_place_api_v1_place__place_id__put" method="put" path="/api/v1/place/{place_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.place.update_place_api_v1_place_place_id_put(place_id=241943, title="<value>", description="swanling replacement monster amend", visibility=978640)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `place_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `title`                                                             | *str*                                                               | :heavy_check_mark:                                                  | Place title                                                         |
| `description`                                                       | *str*                                                               | :heavy_check_mark:                                                  | Place description                                                   |
| `visibility`                                                        | *int*                                                               | :heavy_check_mark:                                                  | Visibility level                                                    |
| `keywords`                                                          | List[*str*]                                                         | :heavy_minus_sign:                                                  | Keywords                                                            |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.UpdatePlaceResponseDTO](../../models/updateplaceresponsedto.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## delete_place_api_v1_place_place_id_delete

Delete Place

### Example Usage

<!-- UsageSnippet language="python" operationID="delete_place_api_v1_place__place_id__delete" method="delete" path="/api/v1/place/{place_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.place.delete_place_api_v1_place_place_id_delete(place_id=54419)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `place_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## publish_place_api_v1_place_place_id_publish_patch

Publish Place

### Example Usage

<!-- UsageSnippet language="python" operationID="publish_place_api_v1_place__place_id__publish_patch" method="patch" path="/api/v1/place/{place_id}/publish" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.place.publish_place_api_v1_place_place_id_publish_patch(place_id=313360)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `place_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## archive_place_api_v1_place_place_id_archive_patch

Archive Place

### Example Usage

<!-- UsageSnippet language="python" operationID="archive_place_api_v1_place__place_id__archive_patch" method="patch" path="/api/v1/place/{place_id}/archive" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.place.archive_place_api_v1_place_place_id_archive_patch(place_id=75845)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `place_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |