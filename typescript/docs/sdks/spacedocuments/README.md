# SpaceDocuments

## Overview

### Available Operations

* [add](#add) - Add Document To Space
* [remove](#remove) - Remove Document From Space
* [get](#get) - Get Space Documents

## add

Associate a document with a space.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="add_document_to_space_api_v1_spaces__space_id__documents__document_id__post" method="post" path="/api/v1/spaces/{space_id}/documents/{document_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.spaceDocuments.add({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceDocumentsAdd } from "@linebundle-sdk/ts/funcs/space-documents-add.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceDocumentsAdd(linebundle, {
    spaceId: 668035,
    documentId: "17eee19e-b841-4532-bbb7-0fede4ca3594",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceDocumentsAdd failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## remove

Remove a document from a space.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_document_from_space_api_v1_spaces__space_id__documents__document_id__delete" method="delete" path="/api/v1/spaces/{space_id}/documents/{document_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await linebundle.spaceDocuments.remove({
    spaceId: 791779,
    documentId: "f547f5de-d55e-4d0e-8476-b1ad08752270",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceDocumentsRemove } from "@linebundle-sdk/ts/funcs/space-documents-remove.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceDocumentsRemove(linebundle, {
    spaceId: 791779,
    documentId: "f547f5de-d55e-4d0e-8476-b1ad08752270",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("spaceDocumentsRemove failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get

Get all documents for a space.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_space_documents_api_v1_spaces__space_id__documents_get" method="get" path="/api/v1/spaces/{space_id}/documents" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.spaceDocuments.get({
    spaceId: 912986,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceDocumentsGet } from "@linebundle-sdk/ts/funcs/space-documents-get.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceDocumentsGet(linebundle, {
    spaceId: 912986,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceDocumentsGet failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |