# EventAttendees

## Overview

### Available Operations

* [get](#get) - Get Event Attendees
* [add](#add) - Add Event Attendee
* [addBulk](#addbulk) - Add Event Attendees Bulk
* [removeBulk](#removebulk) - Remove Event Attendees Bulk
* [update](#update) - Update Event Attendee
* [remove](#remove) - Remove Event Attendee
* [checkIn](#checkin) - Check In Attendee
* [updateBulkStatus](#updatebulkstatus) - Update Attendees Status Bulk

## get

Get all attendees for a specific event.

Supports filtering by status and check-in status.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_event_attendees_api_v1_events__event_id__attendees_get" method="get" path="/api/v1/events/{event_id}/attendees" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.eventAttendees.get({
    eventId: 166052,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventAttendeesGet } from "@linebundle-sdk/ts/funcs/event-attendees-get.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventAttendeesGet(linebundle, {
    eventId: 166052,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventAttendeesGet failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## add

Add a contact as an attendee to an event.

The contact must belong to the user's contact list (personal or org).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="add_event_attendee_api_v1_events__event_id__attendees_post" method="post" path="/api/v1/events/{event_id}/attendees" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.eventAttendees.add({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventAttendeesAdd } from "@linebundle-sdk/ts/funcs/event-attendees-add.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventAttendeesAdd(linebundle, {
    eventId: 498036,
    body: {
      contactId: "3bb3695d-0966-4dbe-932b-7dc6fabed4dc",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventAttendeesAdd failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## addBulk

Add multiple contacts as attendees to an event.

All contacts must belong to the user's contact list.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="add_event_attendees_bulk_api_v1_events__event_id__attendees_bulk_post" method="post" path="/api/v1/events/{event_id}/attendees/bulk" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.eventAttendees.addBulk({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventAttendeesAddBulk } from "@linebundle-sdk/ts/funcs/event-attendees-add-bulk.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventAttendeesAddBulk(linebundle, {
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
    console.log("eventAttendeesAddBulk failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## removeBulk

Remove multiple attendees from an event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_event_attendees_bulk_api_v1_events__event_id__attendees_bulk_delete" method="delete" path="/api/v1/events/{event_id}/attendees/bulk" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.eventAttendees.removeBulk({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventAttendeesRemoveBulk } from "@linebundle-sdk/ts/funcs/event-attendees-remove-bulk.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventAttendeesRemoveBulk(linebundle, {
    eventId: 648531,
    body: [
      "6c68acd7-d9c9-465c-b5aa-1d5c0568d624",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventAttendeesRemoveBulk failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## update

Update an attendee's information (status, notes, check-in status).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_event_attendee_api_v1_events__event_id__attendees__attendee_id__put" method="put" path="/api/v1/events/{event_id}/attendees/{attendee_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.eventAttendees.update({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventAttendeesUpdate } from "@linebundle-sdk/ts/funcs/event-attendees-update.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventAttendeesUpdate(linebundle, {
    eventId: 976136,
    attendeeId: 914331,
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventAttendeesUpdate failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## remove

Remove an attendee from an event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_event_attendee_api_v1_events__event_id__attendees__attendee_id__delete" method="delete" path="/api/v1/events/{event_id}/attendees/{attendee_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await linebundle.eventAttendees.remove({
    eventId: 727478,
    attendeeId: 297527,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventAttendeesRemove } from "@linebundle-sdk/ts/funcs/event-attendees-remove.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventAttendeesRemove(linebundle, {
    eventId: 727478,
    attendeeId: 297527,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("eventAttendeesRemove failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## checkIn

Check in an attendee to the event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="check_in_attendee_api_v1_events__event_id__attendees__attendee_id__check_in_post" method="post" path="/api/v1/events/{event_id}/attendees/{attendee_id}/check-in" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.eventAttendees.checkIn({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventAttendeesCheckIn } from "@linebundle-sdk/ts/funcs/event-attendees-check-in.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventAttendeesCheckIn(linebundle, {
    eventId: 860811,
    attendeeId: 571354,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventAttendeesCheckIn failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## updateBulkStatus

Update status for multiple attendees at once.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_attendees_status_bulk_api_v1_events__event_id__attendees_bulk_status_patch" method="patch" path="/api/v1/events/{event_id}/attendees/bulk/status" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.eventAttendees.updateBulkStatus({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventAttendeesUpdateBulkStatus } from "@linebundle-sdk/ts/funcs/event-attendees-update-bulk-status.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventAttendeesUpdateBulkStatus(linebundle, {
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
    console.log("eventAttendeesUpdateBulkStatus failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |