# EventAttendees

## Overview

### Available Operations

* [getEventAttendeesApiV1EventsEventIdAttendeesGet](#geteventattendeesapiv1eventseventidattendeesget) - Get Event Attendees
* [addEventAttendeeApiV1EventsEventIdAttendeesPost](#addeventattendeeapiv1eventseventidattendeespost) - Add Event Attendee
* [addEventAttendeesBulkApiV1EventsEventIdAttendeesBulkPost](#addeventattendeesbulkapiv1eventseventidattendeesbulkpost) - Add Event Attendees Bulk
* [removeEventAttendeesBulkApiV1EventsEventIdAttendeesBulkDelete](#removeeventattendeesbulkapiv1eventseventidattendeesbulkdelete) - Remove Event Attendees Bulk
* [updateEventAttendeeApiV1EventsEventIdAttendeesAttendeeIdPut](#updateeventattendeeapiv1eventseventidattendeesattendeeidput) - Update Event Attendee
* [removeEventAttendeeApiV1EventsEventIdAttendeesAttendeeIdDelete](#removeeventattendeeapiv1eventseventidattendeesattendeeiddelete) - Remove Event Attendee
* [checkInAttendeeApiV1EventsEventIdAttendeesAttendeeIdCheckInPost](#checkinattendeeapiv1eventseventidattendeesattendeeidcheckinpost) - Check In Attendee
* [updateAttendeesStatusBulkApiV1EventsEventIdAttendeesBulkStatusPatch](#updateattendeesstatusbulkapiv1eventseventidattendeesbulkstatuspatch) - Update Attendees Status Bulk

## getEventAttendeesApiV1EventsEventIdAttendeesGet

Get all attendees for a specific event.

Supports filtering by status and check-in status.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_event_attendees_api_v1_events__event_id__attendees_get" method="get" path="/api/v1/events/{event_id}/attendees" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.eventAttendees.getEventAttendeesApiV1EventsEventIdAttendeesGet({
    eventId: 166052,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { eventAttendeesGetEventAttendeesApiV1EventsEventIdAttendeesGet } from "openapi/funcs/event-attendees-get-event-attendees-api-v1-events-event-id-attendees-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventAttendeesGetEventAttendeesApiV1EventsEventIdAttendeesGet(sdk, {
    eventId: 166052,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventAttendeesGetEventAttendeesApiV1EventsEventIdAttendeesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEventAttendeesApiV1EventsEventIdAttendeesGetRequest](../../models/operations/get-event-attendees-api-v1-events-event-id-attendees-get-request.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EventAttendeeList](../../models/event-attendee-list.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## addEventAttendeeApiV1EventsEventIdAttendeesPost

Add a contact as an attendee to an event.

The contact must belong to the user's contact list (personal or org).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="add_event_attendee_api_v1_events__event_id__attendees_post" method="post" path="/api/v1/events/{event_id}/attendees" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.eventAttendees.addEventAttendeeApiV1EventsEventIdAttendeesPost({
    eventId: 498036,
    body: {
      contactId: "3bb3695d-0966-4dbe-932b-7dc6fabed4dc",
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
import { eventAttendeesAddEventAttendeeApiV1EventsEventIdAttendeesPost } from "openapi/funcs/event-attendees-add-event-attendee-api-v1-events-event-id-attendees-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventAttendeesAddEventAttendeeApiV1EventsEventIdAttendeesPost(sdk, {
    eventId: 498036,
    body: {
      contactId: "3bb3695d-0966-4dbe-932b-7dc6fabed4dc",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventAttendeesAddEventAttendeeApiV1EventsEventIdAttendeesPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddEventAttendeeApiV1EventsEventIdAttendeesPostRequest](../../models/operations/add-event-attendee-api-v1-events-event-id-attendees-post-request.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EventAttendeeRead](../../models/event-attendee-read.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## addEventAttendeesBulkApiV1EventsEventIdAttendeesBulkPost

Add multiple contacts as attendees to an event.

All contacts must belong to the user's contact list.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="add_event_attendees_bulk_api_v1_events__event_id__attendees_bulk_post" method="post" path="/api/v1/events/{event_id}/attendees/bulk" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.eventAttendees.addEventAttendeesBulkApiV1EventsEventIdAttendeesBulkPost({
    eventId: 225763,
    body: [
      "5586f6bd-5f3b-4260-9df8-43124b6bacc2",
      "488007bc-6c0b-4c34-a843-39ff301cd0b1",
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
import { eventAttendeesAddEventAttendeesBulkApiV1EventsEventIdAttendeesBulkPost } from "openapi/funcs/event-attendees-add-event-attendees-bulk-api-v1-events-event-id-attendees-bulk-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventAttendeesAddEventAttendeesBulkApiV1EventsEventIdAttendeesBulkPost(sdk, {
    eventId: 225763,
    body: [
      "5586f6bd-5f3b-4260-9df8-43124b6bacc2",
      "488007bc-6c0b-4c34-a843-39ff301cd0b1",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventAttendeesAddEventAttendeesBulkApiV1EventsEventIdAttendeesBulkPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                            | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                            | [operations.AddEventAttendeesBulkApiV1EventsEventIdAttendeesBulkPostRequest](../../models/operations/add-event-attendees-bulk-api-v1-events-event-id-attendees-bulk-post-request.md) | :heavy_check_mark:                                                                                                                                                                   | The request object to use for the request.                                                                                                                                           |
| `options`                                                                                                                                                                            | RequestOptions                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                              | :heavy_minus_sign:                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.       |
| `options.retries`                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                     |

### Response

**Promise\<[models.EventAttendeeRead[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## removeEventAttendeesBulkApiV1EventsEventIdAttendeesBulkDelete

Remove multiple attendees from an event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_event_attendees_bulk_api_v1_events__event_id__attendees_bulk_delete" method="delete" path="/api/v1/events/{event_id}/attendees/bulk" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.eventAttendees.removeEventAttendeesBulkApiV1EventsEventIdAttendeesBulkDelete({
    eventId: 648531,
    body: [
      "6c68acd7-d9c9-465c-b5aa-1d5c0568d624",
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
import { eventAttendeesRemoveEventAttendeesBulkApiV1EventsEventIdAttendeesBulkDelete } from "openapi/funcs/event-attendees-remove-event-attendees-bulk-api-v1-events-event-id-attendees-bulk-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventAttendeesRemoveEventAttendeesBulkApiV1EventsEventIdAttendeesBulkDelete(sdk, {
    eventId: 648531,
    body: [
      "6c68acd7-d9c9-465c-b5aa-1d5c0568d624",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventAttendeesRemoveEventAttendeesBulkApiV1EventsEventIdAttendeesBulkDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                      | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                      | [operations.RemoveEventAttendeesBulkApiV1EventsEventIdAttendeesBulkDeleteRequest](../../models/operations/remove-event-attendees-bulk-api-v1-events-event-id-attendees-bulk-delete-request.md) | :heavy_check_mark:                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                     |
| `options`                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                        | :heavy_minus_sign:                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                 |
| `options.retries`                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                               |

### Response

**Promise\<[{ [k: string]: any }](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## updateEventAttendeeApiV1EventsEventIdAttendeesAttendeeIdPut

Update an attendee's information (status, notes, check-in status).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_event_attendee_api_v1_events__event_id__attendees__attendee_id__put" method="put" path="/api/v1/events/{event_id}/attendees/{attendee_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.eventAttendees.updateEventAttendeeApiV1EventsEventIdAttendeesAttendeeIdPut({
    eventId: 976136,
    attendeeId: 914331,
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { eventAttendeesUpdateEventAttendeeApiV1EventsEventIdAttendeesAttendeeIdPut } from "openapi/funcs/event-attendees-update-event-attendee-api-v1-events-event-id-attendees-attendee-id-put.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventAttendeesUpdateEventAttendeeApiV1EventsEventIdAttendeesAttendeeIdPut(sdk, {
    eventId: 976136,
    attendeeId: 914331,
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventAttendeesUpdateEventAttendeeApiV1EventsEventIdAttendeesAttendeeIdPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.UpdateEventAttendeeApiV1EventsEventIdAttendeesAttendeeIdPutRequest](../../models/operations/update-event-attendee-api-v1-events-event-id-attendees-attendee-id-put-request.md) | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `options`                                                                                                                                                                                  | RequestOptions                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.             |
| `options.retries`                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                           |

### Response

**Promise\<[models.EventAttendeeRead](../../models/event-attendee-read.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## removeEventAttendeeApiV1EventsEventIdAttendeesAttendeeIdDelete

Remove an attendee from an event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_event_attendee_api_v1_events__event_id__attendees__attendee_id__delete" method="delete" path="/api/v1/events/{event_id}/attendees/{attendee_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await sdk.eventAttendees.removeEventAttendeeApiV1EventsEventIdAttendeesAttendeeIdDelete({
    eventId: 727478,
    attendeeId: 297527,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { eventAttendeesRemoveEventAttendeeApiV1EventsEventIdAttendeesAttendeeIdDelete } from "openapi/funcs/event-attendees-remove-event-attendee-api-v1-events-event-id-attendees-attendee-id-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventAttendeesRemoveEventAttendeeApiV1EventsEventIdAttendeesAttendeeIdDelete(sdk, {
    eventId: 727478,
    attendeeId: 297527,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("eventAttendeesRemoveEventAttendeeApiV1EventsEventIdAttendeesAttendeeIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                        | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                        | [operations.RemoveEventAttendeeApiV1EventsEventIdAttendeesAttendeeIdDeleteRequest](../../models/operations/remove-event-attendee-api-v1-events-event-id-attendees-attendee-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                       |
| `options`                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                          | :heavy_minus_sign:                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                   |
| `options.retries`                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                 |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## checkInAttendeeApiV1EventsEventIdAttendeesAttendeeIdCheckInPost

Check in an attendee to the event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="check_in_attendee_api_v1_events__event_id__attendees__attendee_id__check_in_post" method="post" path="/api/v1/events/{event_id}/attendees/{attendee_id}/check-in" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.eventAttendees.checkInAttendeeApiV1EventsEventIdAttendeesAttendeeIdCheckInPost({
    eventId: 860811,
    attendeeId: 571354,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { eventAttendeesCheckInAttendeeApiV1EventsEventIdAttendeesAttendeeIdCheckInPost } from "openapi/funcs/event-attendees-check-in-attendee-api-v1-events-event-id-attendees-attendee-id-check-in-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventAttendeesCheckInAttendeeApiV1EventsEventIdAttendeesAttendeeIdCheckInPost(sdk, {
    eventId: 860811,
    attendeeId: 571354,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventAttendeesCheckInAttendeeApiV1EventsEventIdAttendeesAttendeeIdCheckInPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                            | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                            | [operations.CheckInAttendeeApiV1EventsEventIdAttendeesAttendeeIdCheckInPostRequest](../../models/operations/check-in-attendee-api-v1-events-event-id-attendees-attendee-id-check-in-post-request.md) | :heavy_check_mark:                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                           |
| `options`                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                       |
| `options.retries`                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                     |

### Response

**Promise\<[models.EventAttendeeRead](../../models/event-attendee-read.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## updateAttendeesStatusBulkApiV1EventsEventIdAttendeesBulkStatusPatch

Update status for multiple attendees at once.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_attendees_status_bulk_api_v1_events__event_id__attendees_bulk_status_patch" method="patch" path="/api/v1/events/{event_id}/attendees/bulk/status" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.eventAttendees.updateAttendeesStatusBulkApiV1EventsEventIdAttendeesBulkStatusPatch({
    eventId: 891138,
    status: "tentative",
    body: [
      "a38e8a00-f8b5-41a4-a844-c6c2dbe600a9",
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
import {
  eventAttendeesUpdateAttendeesStatusBulkApiV1EventsEventIdAttendeesBulkStatusPatch,
} from "openapi/funcs/event-attendees-update-attendees-status-bulk-api-v1-events-event-id-attendees-bulk-status-patch.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventAttendeesUpdateAttendeesStatusBulkApiV1EventsEventIdAttendeesBulkStatusPatch(sdk, {
    eventId: 891138,
    status: "tentative",
    body: [
      "a38e8a00-f8b5-41a4-a844-c6c2dbe600a9",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventAttendeesUpdateAttendeesStatusBulkApiV1EventsEventIdAttendeesBulkStatusPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                   | Type                                                                                                                                                                                                        | Required                                                                                                                                                                                                    | Description                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                   | [operations.UpdateAttendeesStatusBulkApiV1EventsEventIdAttendeesBulkStatusPatchRequest](../../models/operations/update-attendees-status-bulk-api-v1-events-event-id-attendees-bulk-status-patch-request.md) | :heavy_check_mark:                                                                                                                                                                                          | The request object to use for the request.                                                                                                                                                                  |
| `options`                                                                                                                                                                                                   | RequestOptions                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                          | Used to set various options for making HTTP requests.                                                                                                                                                       |
| `options.fetchOptions`                                                                                                                                                                                      | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                          | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                              |
| `options.retries`                                                                                                                                                                                           | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                          | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                            |

### Response

**Promise\<[{ [k: string]: any }](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |