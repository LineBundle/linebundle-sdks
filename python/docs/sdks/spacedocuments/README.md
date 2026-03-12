# SpaceDocuments

## Overview

### Available Operations

* [add_document_to_space_api_v1_spaces_space_id_documents_document_id_post](#add_document_to_space_api_v1_spaces_space_id_documents_document_id_post) - Add Document To Space
* [remove_document_from_space_api_v1_spaces_space_id_documents_document_id_delete](#remove_document_from_space_api_v1_spaces_space_id_documents_document_id_delete) - Remove Document From Space
* [get_space_documents_api_v1_spaces_space_id_documents_get](#get_space_documents_api_v1_spaces_space_id_documents_get) - Get Space Documents

## add_document_to_space_api_v1_spaces_space_id_documents_document_id_post

Associate a document with a space.

### Example Usage

<!-- UsageSnippet language="python" operationID="add_document_to_space_api_v1_spaces__space_id__documents__document_id__post" method="post" path="/api/v1/spaces/{space_id}/documents/{document_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_documents.add_document_to_space_api_v1_spaces_space_id_documents_document_id_post(space_id=668035, document_id="17eee19e-b841-4532-bbb7-0fede4ca3594")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `document_id`                                                       | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## remove_document_from_space_api_v1_spaces_space_id_documents_document_id_delete

Remove a document from a space.

### Example Usage

<!-- UsageSnippet language="python" operationID="remove_document_from_space_api_v1_spaces__space_id__documents__document_id__delete" method="delete" path="/api/v1/spaces/{space_id}/documents/{document_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    sdk.space_documents.remove_document_from_space_api_v1_spaces_space_id_documents_document_id_delete(space_id=791779, document_id="f547f5de-d55e-4d0e-8476-b1ad08752270")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `document_id`                                                       | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_space_documents_api_v1_spaces_space_id_documents_get

Get all documents for a space.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_space_documents_api_v1_spaces__space_id__documents_get" method="get" path="/api/v1/spaces/{space_id}/documents" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.space_documents.get_space_documents_api_v1_spaces_space_id_documents_get(space_id=912986)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[str]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |