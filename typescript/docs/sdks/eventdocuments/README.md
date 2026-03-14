# EventDocuments

## Overview

### Available Operations

* [addDocument](#adddocument) - Add Document To Event
* [remove](#remove) - Remove Document From Event
* [getDocuments](#getdocuments) - Get Event Documents

## addDocument

Associate a document with an event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="add_document_to_event_api_v1_events__event_id__documents__document_id__post" method="post" path="/api/v1/events/{event_id}/documents/{document_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.eventDocuments.addDocument({
    eventId: 70437,
    documentId: "d5325fe4-b647-4305-81c3-35db0502e73b",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventDocumentsAddDocument } from "@linebundle-sdk/ts/funcs/event-documents-add-document.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventDocumentsAddDocument(linebundle, {
    eventId: 70437,
    documentId: "d5325fe4-b647-4305-81c3-35db0502e73b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventDocumentsAddDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                   | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                   | [operations.AddDocumentToEventApiV1EventsEventIdDocumentsDocumentIdPostRequest](../../models/operations/add-document-to-event-api-v1-events-event-id-documents-document-id-post-request.md) | :heavy_check_mark:                                                                                                                                                                          | The request object to use for the request.                                                                                                                                                  |
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

Remove a document from an event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_document_from_event_api_v1_events__event_id__documents__document_id__delete" method="delete" path="/api/v1/events/{event_id}/documents/{document_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await linebundle.eventDocuments.remove({
    eventId: 847385,
    documentId: "4b451b53-5306-4f5e-8068-129a884c3540",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventDocumentsRemove } from "@linebundle-sdk/ts/funcs/event-documents-remove.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventDocumentsRemove(linebundle, {
    eventId: 847385,
    documentId: "4b451b53-5306-4f5e-8068-129a884c3540",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("eventDocumentsRemove failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                 | Type                                                                                                                                                                                                      | Required                                                                                                                                                                                                  | Description                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                 | [operations.RemoveDocumentFromEventApiV1EventsEventIdDocumentsDocumentIdDeleteRequest](../../models/operations/remove-document-from-event-api-v1-events-event-id-documents-document-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                                        | The request object to use for the request.                                                                                                                                                                |
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

## getDocuments

Get all documents for an event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_event_documents_api_v1_events__event_id__documents_get" method="get" path="/api/v1/events/{event_id}/documents" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.eventDocuments.getDocuments({
    eventId: 438312,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventDocumentsGetDocuments } from "@linebundle-sdk/ts/funcs/event-documents-get-documents.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventDocumentsGetDocuments(linebundle, {
    eventId: 438312,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventDocumentsGetDocuments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEventDocumentsApiV1EventsEventIdDocumentsGetRequest](../../models/operations/get-event-documents-api-v1-events-event-id-documents-get-request.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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