# SpaceEvents

## Overview

### Available Operations

* [getSpaceEventsApiV1SpacesSpaceIdEventsGet](#getspaceeventsapiv1spacesspaceideventsget) - Get Space Events
* [addEventToSpaceApiV1SpacesSpaceIdEventsPost](#addeventtospaceapiv1spacesspaceideventspost) - Add Event To Space
* [getEventSpacesApiV1EventsEventIdSpacesGet](#geteventspacesapiv1eventseventidspacesget) - Get Event Spaces
* [getSpaceEventApiV1SpaceEventsSpaceEventIdGet](#getspaceeventapiv1spaceeventsspaceeventidget) - Get Space Event
* [removeEventFromSpaceApiV1SpaceEventsSpaceEventIdDelete](#removeeventfromspaceapiv1spaceeventsspaceeventiddelete) - Remove Event From Space
* [bulkAddEventsToSpaceApiV1SpacesSpaceIdEventsBulkPost](#bulkaddeventstospaceapiv1spacesspaceideventsbulkpost) - Bulk Add Events To Space
* [bulkRemoveEventsFromSpaceApiV1SpacesSpaceIdEventsBulkDelete](#bulkremoveeventsfromspaceapiv1spacesspaceideventsbulkdelete) - Bulk Remove Events From Space
* [countSpaceEventsApiV1SpacesSpaceIdEventsCountGet](#countspaceeventsapiv1spacesspaceideventscountget) - Count Space Events

## getSpaceEventsApiV1SpacesSpaceIdEventsGet

Get all events for a specific space.

Args:
    space_id: Space ID
    limit: Maximum number of events to return
    offset: Number of events to skip
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space event service

Returns:
    List of space events with total count

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_space_events_api_v1_spaces__space_id__events_get" method="get" path="/api/v1/spaces/{space_id}/events" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.spaceEvents.getSpaceEventsApiV1SpacesSpaceIdEventsGet({
    spaceId: 930600,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceEventsGetSpaceEventsApiV1SpacesSpaceIdEventsGet } from "openapi/funcs/space-events-get-space-events-api-v1-spaces-space-id-events-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceEventsGetSpaceEventsApiV1SpacesSpaceIdEventsGet(sdk, {
    spaceId: 930600,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceEventsGetSpaceEventsApiV1SpacesSpaceIdEventsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSpaceEventsApiV1SpacesSpaceIdEventsGetRequest](../../models/operations/get-space-events-api-v1-spaces-space-id-events-get-request.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceEventList](../../models/space-event-list.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## addEventToSpaceApiV1SpacesSpaceIdEventsPost

Add an event to a space.

Args:
    space_id: Space ID
    request: Space event creation request
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space event service

Returns:
    Created space event

### Example Usage

<!-- UsageSnippet language="typescript" operationID="add_event_to_space_api_v1_spaces__space_id__events_post" method="post" path="/api/v1/spaces/{space_id}/events" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.spaceEvents.addEventToSpaceApiV1SpacesSpaceIdEventsPost({
    spaceId: 905375,
    body: {
      eventId: 981959,
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceEventsAddEventToSpaceApiV1SpacesSpaceIdEventsPost } from "openapi/funcs/space-events-add-event-to-space-api-v1-spaces-space-id-events-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceEventsAddEventToSpaceApiV1SpacesSpaceIdEventsPost(sdk, {
    spaceId: 905375,
    body: {
      eventId: 981959,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceEventsAddEventToSpaceApiV1SpacesSpaceIdEventsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddEventToSpaceApiV1SpacesSpaceIdEventsPostRequest](../../models/operations/add-event-to-space-api-v1-spaces-space-id-events-post-request.md)                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceEventRead](../../models/space-event-read.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getEventSpacesApiV1EventsEventIdSpacesGet

Get all spaces for a specific event.

Args:
    event_id: Event ID
    limit: Maximum number of spaces to return
    offset: Number of spaces to skip
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space event service

Returns:
    List of space events

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_event_spaces_api_v1_events__event_id__spaces_get" method="get" path="/api/v1/events/{event_id}/spaces" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.spaceEvents.getEventSpacesApiV1EventsEventIdSpacesGet({
    eventId: 370745,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceEventsGetEventSpacesApiV1EventsEventIdSpacesGet } from "openapi/funcs/space-events-get-event-spaces-api-v1-events-event-id-spaces-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceEventsGetEventSpacesApiV1EventsEventIdSpacesGet(sdk, {
    eventId: 370745,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceEventsGetEventSpacesApiV1EventsEventIdSpacesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEventSpacesApiV1EventsEventIdSpacesGetRequest](../../models/operations/get-event-spaces-api-v1-events-event-id-spaces-get-request.md)                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceEventRead[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getSpaceEventApiV1SpaceEventsSpaceEventIdGet

Get space event by ID.

Args:
    space_event_id: Space event relationship ID
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space event service

Returns:
    Space event details

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_space_event_api_v1_space_events__space_event_id__get" method="get" path="/api/v1/space-events/{space_event_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.spaceEvents.getSpaceEventApiV1SpaceEventsSpaceEventIdGet({
    spaceEventId: 303300,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceEventsGetSpaceEventApiV1SpaceEventsSpaceEventIdGet } from "openapi/funcs/space-events-get-space-event-api-v1-space-events-space-event-id-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceEventsGetSpaceEventApiV1SpaceEventsSpaceEventIdGet(sdk, {
    spaceEventId: 303300,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceEventsGetSpaceEventApiV1SpaceEventsSpaceEventIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSpaceEventApiV1SpaceEventsSpaceEventIdGetRequest](../../models/operations/get-space-event-api-v1-space-events-space-event-id-get-request.md)                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceEventRead](../../models/space-event-read.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## removeEventFromSpaceApiV1SpaceEventsSpaceEventIdDelete

Remove an event from a space.

Args:
    space_event_id: Space event relationship ID
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space event service

Returns:
    Success message

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_event_from_space_api_v1_space_events__space_event_id__delete" method="delete" path="/api/v1/space-events/{space_event_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.spaceEvents.removeEventFromSpaceApiV1SpaceEventsSpaceEventIdDelete({
    spaceEventId: 627694,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceEventsRemoveEventFromSpaceApiV1SpaceEventsSpaceEventIdDelete } from "openapi/funcs/space-events-remove-event-from-space-api-v1-space-events-space-event-id-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceEventsRemoveEventFromSpaceApiV1SpaceEventsSpaceEventIdDelete(sdk, {
    spaceEventId: 627694,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceEventsRemoveEventFromSpaceApiV1SpaceEventsSpaceEventIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.RemoveEventFromSpaceApiV1SpaceEventsSpaceEventIdDeleteRequest](../../models/operations/remove-event-from-space-api-v1-space-events-space-event-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `options`                                                                                                                                                                        | RequestOptions                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                          | :heavy_minus_sign:                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.   |
| `options.retries`                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                 |

### Response

**Promise\<[{ [k: string]: any }](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## bulkAddEventsToSpaceApiV1SpacesSpaceIdEventsBulkPost

Add multiple events to a space.

Args:
    space_id: Space ID
    event_ids: List of event IDs to add
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space event service

Returns:
    List of created space events

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bulk_add_events_to_space_api_v1_spaces__space_id__events_bulk_post" method="post" path="/api/v1/spaces/{space_id}/events/bulk" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.spaceEvents.bulkAddEventsToSpaceApiV1SpacesSpaceIdEventsBulkPost({
    spaceId: 415319,
    body: [
      84998,
      771269,
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceEventsBulkAddEventsToSpaceApiV1SpacesSpaceIdEventsBulkPost } from "openapi/funcs/space-events-bulk-add-events-to-space-api-v1-spaces-space-id-events-bulk-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceEventsBulkAddEventsToSpaceApiV1SpacesSpaceIdEventsBulkPost(sdk, {
    spaceId: 415319,
    body: [
      84998,
      771269,
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceEventsBulkAddEventsToSpaceApiV1SpacesSpaceIdEventsBulkPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.BulkAddEventsToSpaceApiV1SpacesSpaceIdEventsBulkPostRequest](../../models/operations/bulk-add-events-to-space-api-v1-spaces-space-id-events-bulk-post-request.md)  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceEventRead[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## bulkRemoveEventsFromSpaceApiV1SpacesSpaceIdEventsBulkDelete

Bulk remove events from a space.

Args:
    space_id: Space ID
    event_ids: List of event IDs to remove
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space event service

Returns:
    Number of events removed

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bulk_remove_events_from_space_api_v1_spaces__space_id__events_bulk_delete" method="delete" path="/api/v1/spaces/{space_id}/events/bulk" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.spaceEvents.bulkRemoveEventsFromSpaceApiV1SpacesSpaceIdEventsBulkDelete({
    spaceId: 405270,
    eventIds: [
      175699,
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceEventsBulkRemoveEventsFromSpaceApiV1SpacesSpaceIdEventsBulkDelete } from "openapi/funcs/space-events-bulk-remove-events-from-space-api-v1-spaces-space-id-events-bulk-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceEventsBulkRemoveEventsFromSpaceApiV1SpacesSpaceIdEventsBulkDelete(sdk, {
    spaceId: 405270,
    eventIds: [
      175699,
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceEventsBulkRemoveEventsFromSpaceApiV1SpacesSpaceIdEventsBulkDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                   | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                   | [operations.BulkRemoveEventsFromSpaceApiV1SpacesSpaceIdEventsBulkDeleteRequest](../../models/operations/bulk-remove-events-from-space-api-v1-spaces-space-id-events-bulk-delete-request.md) | :heavy_check_mark:                                                                                                                                                                          | The request object to use for the request.                                                                                                                                                  |
| `options`                                                                                                                                                                                   | RequestOptions                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                          | Used to set various options for making HTTP requests.                                                                                                                                       |
| `options.fetchOptions`                                                                                                                                                                      | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                     | :heavy_minus_sign:                                                                                                                                                                          | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.              |
| `options.retries`                                                                                                                                                                           | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                          | Enables retrying HTTP requests under certain failure conditions.                                                                                                                            |

### Response

**Promise\<[{ [k: string]: any }](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## countSpaceEventsApiV1SpacesSpaceIdEventsCountGet

Count events in a space.

Args:
    space_id: Space ID
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space event service

Returns:
    Number of events in space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="count_space_events_api_v1_spaces__space_id__events_count_get" method="get" path="/api/v1/spaces/{space_id}/events/count" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.spaceEvents.countSpaceEventsApiV1SpacesSpaceIdEventsCountGet({
    spaceId: 494382,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceEventsCountSpaceEventsApiV1SpacesSpaceIdEventsCountGet } from "openapi/funcs/space-events-count-space-events-api-v1-spaces-space-id-events-count-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceEventsCountSpaceEventsApiV1SpacesSpaceIdEventsCountGet(sdk, {
    spaceId: 494382,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceEventsCountSpaceEventsApiV1SpacesSpaceIdEventsCountGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CountSpaceEventsApiV1SpacesSpaceIdEventsCountGetRequest](../../models/operations/count-space-events-api-v1-spaces-space-id-events-count-get-request.md)            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[{ [k: string]: any }](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |