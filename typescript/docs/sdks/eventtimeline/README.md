# EventTimeline

## Overview

### Available Operations

* [get](#get) - Get event timeline
* [getPublished](#getpublished) - Get published event timeline
* [createMilestone](#createmilestone) - Create and link milestone
* [linkMilestone](#linkmilestone) - Link existing event
* [unlink](#unlink) - Unlink milestone

## get

Retrieve all milestones linked to a base event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_timeline_api_v1_event__event_id__timeline_get" method="get" path="/api/v1/event/{event_id}/timeline" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle();

async function run() {
  const result = await linebundle.eventTimeline.get({
    eventId: 805045,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventTimelineGet } from "@linebundle-sdk/ts/funcs/event-timeline-get.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore();

async function run() {
  const res = await eventTimelineGet(linebundle, {
    eventId: 805045,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventTimelineGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTimelineApiV1EventEventIdTimelineGetRequest](../../models/operations/get-timeline-api-v1-event-event-id-timeline-get-request.md)                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EventRead[]](../../models/.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## getPublished

Retrieve published milestones for a base event's published version. Returns only milestones that were linked at publish time AND are themselves published.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_published_timeline_api_v1_event__event_id__timeline_published_get" method="get" path="/api/v1/event/{event_id}/timeline/published" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.eventTimeline.getPublished({
    eventId: 160691,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventTimelineGetPublished } from "@linebundle-sdk/ts/funcs/event-timeline-get-published.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventTimelineGetPublished(linebundle, {
    eventId: 160691,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventTimelineGetPublished failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## createMilestone

Create a new event and automatically link it as a milestone.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_milestone_api_v1_event__event_id__timeline_milestones_post" method="post" path="/api/v1/event/{event_id}/timeline/milestones" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle();

async function run() {
  const result = await linebundle.eventTimeline.createMilestone({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventTimelineCreateMilestone } from "@linebundle-sdk/ts/funcs/event-timeline-create-milestone.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore();

async function run() {
  const res = await eventTimelineCreateMilestone(linebundle, {
    eventId: 858013,
    body: {
      request: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventTimelineCreateMilestone failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateMilestoneApiV1EventEventIdTimelineMilestonesPostRequest](../../models/operations/create-milestone-api-v1-event-event-id-timeline-milestones-post-request.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EventRead](../../models/event-read.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## linkMilestone

Link an existing event as a milestone to a base event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="link_milestone_api_v1_event__event_id__timeline_link_post" method="post" path="/api/v1/event/{event_id}/timeline/link" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle();

async function run() {
  const result = await linebundle.eventTimeline.linkMilestone({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventTimelineLinkMilestone } from "@linebundle-sdk/ts/funcs/event-timeline-link-milestone.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore();

async function run() {
  const res = await eventTimelineLinkMilestone(linebundle, {
    eventId: 191709,
    milestoneEventId: 690438,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventTimelineLinkMilestone failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.LinkMilestoneApiV1EventEventIdTimelineLinkPostRequest](../../models/operations/link-milestone-api-v1-event-event-id-timeline-link-post-request.md)                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## unlink

Remove a milestone link without deleting the event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="unlink_milestone_api_v1_event__event_id__timeline__milestone_event_id__delete" method="delete" path="/api/v1/event/{event_id}/timeline/{milestone_event_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle();

async function run() {
  const result = await linebundle.eventTimeline.unlink({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventTimelineUnlink } from "@linebundle-sdk/ts/funcs/event-timeline-unlink.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore();

async function run() {
  const res = await eventTimelineUnlink(linebundle, {
    eventId: 675180,
    milestoneEventId: 578718,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventTimelineUnlink failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                        | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                        | [operations.UnlinkMilestoneApiV1EventEventIdTimelineMilestoneEventIdDeleteRequest](../../models/operations/unlink-milestone-api-v1-event-event-id-timeline-milestone-event-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                       |
| `options`                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                          | :heavy_minus_sign:                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                   |
| `options.retries`                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                 |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |