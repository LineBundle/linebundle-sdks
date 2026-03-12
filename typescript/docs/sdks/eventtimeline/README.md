# EventTimeline

## Overview

### Available Operations

* [getTimelineApiV1EventEventIdTimelineGet](#gettimelineapiv1eventeventidtimelineget) - Get event timeline
* [getPublishedTimelineApiV1EventEventIdTimelinePublishedGet](#getpublishedtimelineapiv1eventeventidtimelinepublishedget) - Get published event timeline
* [createMilestoneApiV1EventEventIdTimelineMilestonesPost](#createmilestoneapiv1eventeventidtimelinemilestonespost) - Create and link milestone
* [linkMilestoneApiV1EventEventIdTimelineLinkPost](#linkmilestoneapiv1eventeventidtimelinelinkpost) - Link existing event
* [unlinkMilestoneApiV1EventEventIdTimelineMilestoneEventIdDelete](#unlinkmilestoneapiv1eventeventidtimelinemilestoneeventiddelete) - Unlink milestone

## getTimelineApiV1EventEventIdTimelineGet

Retrieve all milestones linked to a base event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_timeline_api_v1_event__event_id__timeline_get" method="get" path="/api/v1/event/{event_id}/timeline" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await sdk.eventTimeline.getTimelineApiV1EventEventIdTimelineGet({
    permissionDependency: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    eventId: 805045,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { eventTimelineGetTimelineApiV1EventEventIdTimelineGet } from "openapi/funcs/event-timeline-get-timeline-api-v1-event-event-id-timeline-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await eventTimelineGetTimelineApiV1EventEventIdTimelineGet(sdk, {
    permissionDependency: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    eventId: 805045,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventTimelineGetTimelineApiV1EventEventIdTimelineGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTimelineApiV1EventEventIdTimelineGetRequest](../../models/operations/get-timeline-api-v1-event-event-id-timeline-get-request.md)                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetTimelineApiV1EventEventIdTimelineGetSecurity](../../models/operations/get-timeline-api-v1-event-event-id-timeline-get-security.md)                              | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EventRead[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getPublishedTimelineApiV1EventEventIdTimelinePublishedGet

Retrieve published milestones for a base event's published version. Returns only milestones that were linked at publish time AND are themselves published.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_published_timeline_api_v1_event__event_id__timeline_published_get" method="get" path="/api/v1/event/{event_id}/timeline/published" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.eventTimeline.getPublishedTimelineApiV1EventEventIdTimelinePublishedGet({
    eventId: 160691,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { eventTimelineGetPublishedTimelineApiV1EventEventIdTimelinePublishedGet } from "openapi/funcs/event-timeline-get-published-timeline-api-v1-event-event-id-timeline-published-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventTimelineGetPublishedTimelineApiV1EventEventIdTimelinePublishedGet(sdk, {
    eventId: 160691,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventTimelineGetPublishedTimelineApiV1EventEventIdTimelinePublishedGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                             | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                             | [operations.GetPublishedTimelineApiV1EventEventIdTimelinePublishedGetRequest](../../models/operations/get-published-timeline-api-v1-event-event-id-timeline-published-get-request.md) | :heavy_check_mark:                                                                                                                                                                    | The request object to use for the request.                                                                                                                                            |
| `options`                                                                                                                                                                             | RequestOptions                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                    | Used to set various options for making HTTP requests.                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                               | :heavy_minus_sign:                                                                                                                                                                    | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.        |
| `options.retries`                                                                                                                                                                     | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                    | Enables retrying HTTP requests under certain failure conditions.                                                                                                                      |

### Response

**Promise\<[models.EventRead[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## createMilestoneApiV1EventEventIdTimelineMilestonesPost

Create a new event and automatically link it as a milestone.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_milestone_api_v1_event__event_id__timeline_milestones_post" method="post" path="/api/v1/event/{event_id}/timeline/milestones" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await sdk.eventTimeline.createMilestoneApiV1EventEventIdTimelineMilestonesPost({
    permissionDependency: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    eventId: 858013,
    body: {
      request: "<value>",
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
import { eventTimelineCreateMilestoneApiV1EventEventIdTimelineMilestonesPost } from "openapi/funcs/event-timeline-create-milestone-api-v1-event-event-id-timeline-milestones-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await eventTimelineCreateMilestoneApiV1EventEventIdTimelineMilestonesPost(sdk, {
    permissionDependency: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    eventId: 858013,
    body: {
      request: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventTimelineCreateMilestoneApiV1EventEventIdTimelineMilestonesPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.CreateMilestoneApiV1EventEventIdTimelineMilestonesPostRequest](../../models/operations/create-milestone-api-v1-event-event-id-timeline-milestones-post-request.md)   | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `security`                                                                                                                                                                       | [operations.CreateMilestoneApiV1EventEventIdTimelineMilestonesPostSecurity](../../models/operations/create-milestone-api-v1-event-event-id-timeline-milestones-post-security.md) | :heavy_check_mark:                                                                                                                                                               | The security requirements to use for the request.                                                                                                                                |
| `options`                                                                                                                                                                        | RequestOptions                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                          | :heavy_minus_sign:                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.   |
| `options.retries`                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                 |

### Response

**Promise\<[models.EventRead](../../models/event-read.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## linkMilestoneApiV1EventEventIdTimelineLinkPost

Link an existing event as a milestone to a base event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="link_milestone_api_v1_event__event_id__timeline_link_post" method="post" path="/api/v1/event/{event_id}/timeline/link" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await sdk.eventTimeline.linkMilestoneApiV1EventEventIdTimelineLinkPost({
    permissionDependency: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    eventId: 191709,
    milestoneEventId: 690438,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { eventTimelineLinkMilestoneApiV1EventEventIdTimelineLinkPost } from "openapi/funcs/event-timeline-link-milestone-api-v1-event-event-id-timeline-link-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await eventTimelineLinkMilestoneApiV1EventEventIdTimelineLinkPost(sdk, {
    permissionDependency: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    eventId: 191709,
    milestoneEventId: 690438,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventTimelineLinkMilestoneApiV1EventEventIdTimelineLinkPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LinkMilestoneApiV1EventEventIdTimelineLinkPostRequest](../../models/operations/link-milestone-api-v1-event-event-id-timeline-link-post-request.md)                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.LinkMilestoneApiV1EventEventIdTimelineLinkPostSecurity](../../models/operations/link-milestone-api-v1-event-event-id-timeline-link-post-security.md)               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## unlinkMilestoneApiV1EventEventIdTimelineMilestoneEventIdDelete

Remove a milestone link without deleting the event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="unlink_milestone_api_v1_event__event_id__timeline__milestone_event_id__delete" method="delete" path="/api/v1/event/{event_id}/timeline/{milestone_event_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await sdk.eventTimeline.unlinkMilestoneApiV1EventEventIdTimelineMilestoneEventIdDelete({
    permissionDependency: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    eventId: 675180,
    milestoneEventId: 578718,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { eventTimelineUnlinkMilestoneApiV1EventEventIdTimelineMilestoneEventIdDelete } from "openapi/funcs/event-timeline-unlink-milestone-api-v1-event-event-id-timeline-milestone-event-id-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await eventTimelineUnlinkMilestoneApiV1EventEventIdTimelineMilestoneEventIdDelete(sdk, {
    permissionDependency: "<YOUR_BEARER_TOKEN_HERE>",
  }, {
    eventId: 675180,
    milestoneEventId: 578718,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventTimelineUnlinkMilestoneApiV1EventEventIdTimelineMilestoneEventIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                          | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                          | [operations.UnlinkMilestoneApiV1EventEventIdTimelineMilestoneEventIdDeleteRequest](../../models/operations/unlink-milestone-api-v1-event-event-id-timeline-milestone-event-id-delete-request.md)   | :heavy_check_mark:                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                         |
| `security`                                                                                                                                                                                         | [operations.UnlinkMilestoneApiV1EventEventIdTimelineMilestoneEventIdDeleteSecurity](../../models/operations/unlink-milestone-api-v1-event-event-id-timeline-milestone-event-id-delete-security.md) | :heavy_check_mark:                                                                                                                                                                                 | The security requirements to use for the request.                                                                                                                                                  |
| `options`                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                     |
| `options.retries`                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                   |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |