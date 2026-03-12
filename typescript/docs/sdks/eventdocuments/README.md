# EventDocuments

## Overview

### Available Operations

* [addDocumentToEventApiV1EventsEventIdDocumentsDocumentIdPost](#adddocumenttoeventapiv1eventseventiddocumentsdocumentidpost) - Add Document To Event
* [removeDocumentFromEventApiV1EventsEventIdDocumentsDocumentIdDelete](#removedocumentfromeventapiv1eventseventiddocumentsdocumentiddelete) - Remove Document From Event
* [getEventDocumentsApiV1EventsEventIdDocumentsGet](#geteventdocumentsapiv1eventseventiddocumentsget) - Get Event Documents

## addDocumentToEventApiV1EventsEventIdDocumentsDocumentIdPost

Associate a document with an event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="add_document_to_event_api_v1_events__event_id__documents__document_id__post" method="post" path="/api/v1/events/{event_id}/documents/{document_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.eventDocuments.addDocumentToEventApiV1EventsEventIdDocumentsDocumentIdPost({
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
import { SDKCore } from "openapi/core.js";
import { eventDocumentsAddDocumentToEventApiV1EventsEventIdDocumentsDocumentIdPost } from "openapi/funcs/event-documents-add-document-to-event-api-v1-events-event-id-documents-document-id-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventDocumentsAddDocumentToEventApiV1EventsEventIdDocumentsDocumentIdPost(sdk, {
    eventId: 70437,
    documentId: "d5325fe4-b647-4305-81c3-35db0502e73b",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventDocumentsAddDocumentToEventApiV1EventsEventIdDocumentsDocumentIdPost failed:", res.error);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## removeDocumentFromEventApiV1EventsEventIdDocumentsDocumentIdDelete

Remove a document from an event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_document_from_event_api_v1_events__event_id__documents__document_id__delete" method="delete" path="/api/v1/events/{event_id}/documents/{document_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await sdk.eventDocuments.removeDocumentFromEventApiV1EventsEventIdDocumentsDocumentIdDelete({
    eventId: 847385,
    documentId: "4b451b53-5306-4f5e-8068-129a884c3540",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { eventDocumentsRemoveDocumentFromEventApiV1EventsEventIdDocumentsDocumentIdDelete } from "openapi/funcs/event-documents-remove-document-from-event-api-v1-events-event-id-documents-document-id-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventDocumentsRemoveDocumentFromEventApiV1EventsEventIdDocumentsDocumentIdDelete(sdk, {
    eventId: 847385,
    documentId: "4b451b53-5306-4f5e-8068-129a884c3540",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("eventDocumentsRemoveDocumentFromEventApiV1EventsEventIdDocumentsDocumentIdDelete failed:", res.error);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getEventDocumentsApiV1EventsEventIdDocumentsGet

Get all documents for an event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_event_documents_api_v1_events__event_id__documents_get" method="get" path="/api/v1/events/{event_id}/documents" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.eventDocuments.getEventDocumentsApiV1EventsEventIdDocumentsGet({
    eventId: 438312,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { eventDocumentsGetEventDocumentsApiV1EventsEventIdDocumentsGet } from "openapi/funcs/event-documents-get-event-documents-api-v1-events-event-id-documents-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventDocumentsGetEventDocumentsApiV1EventsEventIdDocumentsGet(sdk, {
    eventId: 438312,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventDocumentsGetEventDocumentsApiV1EventsEventIdDocumentsGet failed:", res.error);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |