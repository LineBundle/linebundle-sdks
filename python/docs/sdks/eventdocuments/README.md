# EventDocuments

## Overview

### Available Operations

* [add_document_to_event_api_v1_events_event_id_documents_document_id_post](#add_document_to_event_api_v1_events_event_id_documents_document_id_post) - Add Document To Event
* [remove_document_from_event_api_v1_events_event_id_documents_document_id_delete](#remove_document_from_event_api_v1_events_event_id_documents_document_id_delete) - Remove Document From Event
* [get_event_documents_api_v1_events_event_id_documents_get](#get_event_documents_api_v1_events_event_id_documents_get) - Get Event Documents

## add_document_to_event_api_v1_events_event_id_documents_document_id_post

Associate a document with an event.

### Example Usage

<!-- UsageSnippet language="python" operationID="add_document_to_event_api_v1_events__event_id__documents__document_id__post" method="post" path="/api/v1/events/{event_id}/documents/{document_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event_documents.add_document_to_event_api_v1_events_event_id_documents_document_id_post(event_id=70437, document_id="d5325fe4-b647-4305-81c3-35db0502e73b")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `document_id`                                                       | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## remove_document_from_event_api_v1_events_event_id_documents_document_id_delete

Remove a document from an event.

### Example Usage

<!-- UsageSnippet language="python" operationID="remove_document_from_event_api_v1_events__event_id__documents__document_id__delete" method="delete" path="/api/v1/events/{event_id}/documents/{document_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    sdk.event_documents.remove_document_from_event_api_v1_events_event_id_documents_document_id_delete(event_id=847385, document_id="4b451b53-5306-4f5e-8068-129a884c3540")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `document_id`                                                       | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_event_documents_api_v1_events_event_id_documents_get

Get all documents for an event.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_event_documents_api_v1_events__event_id__documents_get" method="get" path="/api/v1/events/{event_id}/documents" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.event_documents.get_event_documents_api_v1_events_event_id_documents_get(event_id=438312)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `event_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[str]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |