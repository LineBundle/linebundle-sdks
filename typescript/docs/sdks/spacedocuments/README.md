# SpaceDocuments

## Overview

### Available Operations

* [addDocumentToSpaceApiV1SpacesSpaceIdDocumentsDocumentIdPost](#adddocumenttospaceapiv1spacesspaceiddocumentsdocumentidpost) - Add Document To Space
* [removeDocumentFromSpaceApiV1SpacesSpaceIdDocumentsDocumentIdDelete](#removedocumentfromspaceapiv1spacesspaceiddocumentsdocumentiddelete) - Remove Document From Space
* [getSpaceDocumentsApiV1SpacesSpaceIdDocumentsGet](#getspacedocumentsapiv1spacesspaceiddocumentsget) - Get Space Documents

## addDocumentToSpaceApiV1SpacesSpaceIdDocumentsDocumentIdPost

Associate a document with a space.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="add_document_to_space_api_v1_spaces__space_id__documents__document_id__post" method="post" path="/api/v1/spaces/{space_id}/documents/{document_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.spaceDocuments.addDocumentToSpaceApiV1SpacesSpaceIdDocumentsDocumentIdPost({
    spaceId: 668035,
    documentId: "17eee19e-b841-4532-bbb7-0fede4ca3594",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceDocumentsAddDocumentToSpaceApiV1SpacesSpaceIdDocumentsDocumentIdPost } from "openapi/funcs/space-documents-add-document-to-space-api-v1-spaces-space-id-documents-document-id-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceDocumentsAddDocumentToSpaceApiV1SpacesSpaceIdDocumentsDocumentIdPost(sdk, {
    spaceId: 668035,
    documentId: "17eee19e-b841-4532-bbb7-0fede4ca3594",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceDocumentsAddDocumentToSpaceApiV1SpacesSpaceIdDocumentsDocumentIdPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                   | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                   | [operations.AddDocumentToSpaceApiV1SpacesSpaceIdDocumentsDocumentIdPostRequest](../../models/operations/add-document-to-space-api-v1-spaces-space-id-documents-document-id-post-request.md) | :heavy_check_mark:                                                                                                                                                                          | The request object to use for the request.                                                                                                                                                  |
| `options`                                                                                                                                                                                   | RequestOptions                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                          | Used to set various options for making HTTP requests.                                                                                                                                       |
| `options.fetchOptions`                                                                                                                                                                      | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                     | :heavy_minus_sign:                                                                                                                                                                          | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.              |
| `options.retries`                                                                                                                                                                           | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                          | Enables retrying HTTP requests under certain failure conditions.                                                                                                                            |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## removeDocumentFromSpaceApiV1SpacesSpaceIdDocumentsDocumentIdDelete

Remove a document from a space.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_document_from_space_api_v1_spaces__space_id__documents__document_id__delete" method="delete" path="/api/v1/spaces/{space_id}/documents/{document_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await sdk.spaceDocuments.removeDocumentFromSpaceApiV1SpacesSpaceIdDocumentsDocumentIdDelete({
    spaceId: 791779,
    documentId: "f547f5de-d55e-4d0e-8476-b1ad08752270",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceDocumentsRemoveDocumentFromSpaceApiV1SpacesSpaceIdDocumentsDocumentIdDelete } from "openapi/funcs/space-documents-remove-document-from-space-api-v1-spaces-space-id-documents-document-id-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceDocumentsRemoveDocumentFromSpaceApiV1SpacesSpaceIdDocumentsDocumentIdDelete(sdk, {
    spaceId: 791779,
    documentId: "f547f5de-d55e-4d0e-8476-b1ad08752270",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("spaceDocumentsRemoveDocumentFromSpaceApiV1SpacesSpaceIdDocumentsDocumentIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                 | Type                                                                                                                                                                                                      | Required                                                                                                                                                                                                  | Description                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                 | [operations.RemoveDocumentFromSpaceApiV1SpacesSpaceIdDocumentsDocumentIdDeleteRequest](../../models/operations/remove-document-from-space-api-v1-spaces-space-id-documents-document-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                                        | The request object to use for the request.                                                                                                                                                                |
| `options`                                                                                                                                                                                                 | RequestOptions                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                        | Used to set various options for making HTTP requests.                                                                                                                                                     |
| `options.fetchOptions`                                                                                                                                                                                    | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                        | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                            |
| `options.retries`                                                                                                                                                                                         | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                        | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                          |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getSpaceDocumentsApiV1SpacesSpaceIdDocumentsGet

Get all documents for a space.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_space_documents_api_v1_spaces__space_id__documents_get" method="get" path="/api/v1/spaces/{space_id}/documents" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.spaceDocuments.getSpaceDocumentsApiV1SpacesSpaceIdDocumentsGet({
    spaceId: 912986,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceDocumentsGetSpaceDocumentsApiV1SpacesSpaceIdDocumentsGet } from "openapi/funcs/space-documents-get-space-documents-api-v1-spaces-space-id-documents-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceDocumentsGetSpaceDocumentsApiV1SpacesSpaceIdDocumentsGet(sdk, {
    spaceId: 912986,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceDocumentsGetSpaceDocumentsApiV1SpacesSpaceIdDocumentsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSpaceDocumentsApiV1SpacesSpaceIdDocumentsGetRequest](../../models/operations/get-space-documents-api-v1-spaces-space-id-documents-get-request.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[string[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |