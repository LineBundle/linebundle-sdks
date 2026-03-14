# Events

## Overview

### Available Operations

* [list](#list) - Get Event List
* [publishWithNotifications](#publishwithnotifications) - Publish Event With Notifications
* [create](#create) - Create Event
* [listCalendar](#listcalendar) - Get Calendar Events
* [getSocialFeed](#getsocialfeed) - Get Social Feed
* [filterAdvanced](#filteradvanced) - Filter Events Advanced
* [listBySpace](#listbyspace) - Get Events By Space
* [delete](#delete) - Delete Event
* [patchIdentification](#patchidentification) - Patch Event Identification
* [getSectionIdentification](#getsectionidentification) - Get Section Identification
* [getSectionContent](#getsectioncontent) - Get Section Content
* [patchContent](#patchcontent) - Patch Event Content
* [getSettings](#getsettings) - Get Event Settings
* [patchSettings](#patchsettings) - Patch Event Settings
* [updateCover](#updatecover) - Update Cover
* [publish](#publish) - Publish Event
* [archive](#archive) - Archive Event
* [transfer](#transfer) - Transfer Event
* [publishVersion](#publishversion) - Publish Event Version
* [listVersions](#listversions) - List Event Versions
* [rollbackVersion](#rollbackversion) - Rollback Event to Version
* [getTimezones](#gettimezones) - Get Timezone Info

## list

Get events with advanced filtering capabilities.

Supports multiple filtering strategies:
- Legacy query parameters for backward compatibility
- Individual advanced filter parameters
- Complex JSON filter object for advanced use cases

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_event_list_api_v1_event_get" method="get" path="/api/v1/event" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.list({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventsList } from "@linebundle-sdk/ts/funcs/events-list.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsList(linebundle, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEventListApiV1EventGetRequest](../../models/operations/get-event-list-api-v1-event-get-request.md)                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PaginatedEventListResponse](../../models/paginated-event-list-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## publishWithNotifications

Publish Event With Notifications

### Example Usage

<!-- UsageSnippet language="typescript" operationID="publish_event_with_notifications_api_v1_event__event_id__publish_with_notifications_post" method="post" path="/api/v1/event/{event_id}/publish-with-notifications" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.publishWithNotifications({
    eventId: 385781,
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
import { eventsPublishWithNotifications } from "@linebundle-sdk/ts/funcs/events-publish-with-notifications.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsPublishWithNotifications(linebundle, {
    eventId: 385781,
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsPublishWithNotifications failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                  | Description                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                 | [operations.PublishEventWithNotificationsApiV1EventEventIdPublishWithNotificationsPostRequest](../../models/operations/publish-event-with-notifications-api-v1-event-event-id-publish-with-notifications-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                        | The request object to use for the request.                                                                                                                                                                                |
| `options`                                                                                                                                                                                                                 | RequestOptions                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                        | Used to set various options for making HTTP requests.                                                                                                                                                                     |
| `options.fetchOptions`                                                                                                                                                                                                    | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                        | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                            |
| `options.retries`                                                                                                                                                                                                         | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                        | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                          |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## create

Create Event

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_event_api_v1_event_post" method="post" path="/api/v1/event" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.create({
    request: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventsCreate } from "@linebundle-sdk/ts/funcs/events-create.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsCreate(linebundle, {
    request: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.BodyCreateEventApiV1EventPost](../../models/body-create-event-api-v1-event-post.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## listCalendar

Get events for calendar view.

Requires start_date and end_date.
Returns all events in the range (high limit) to avoid missing data.
Supports all standard event filters.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_calendar_events_api_v1_event_calendar_get" method="get" path="/api/v1/event/calendar" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.listCalendar({
    startDate: new Date("2024-02-02T07:48:18.433Z"),
    endDate: new Date("2024-03-03T23:02:32.865Z"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventsListCalendar } from "@linebundle-sdk/ts/funcs/events-list-calendar.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsListCalendar(linebundle, {
    startDate: new Date("2024-02-02T07:48:18.433Z"),
    endDate: new Date("2024-03-03T23:02:32.865Z"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsListCalendar failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCalendarEventsApiV1EventCalendarGetRequest](../../models/operations/get-calendar-events-api-v1-event-calendar-get-request.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PaginatedEventListResponse](../../models/paginated-event-list-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## getSocialFeed

Get the social feed of events for the current user.

Events are ranked by:
1. User relationship (personal events > owned spaces > member spaces > others)
2. Temporal proximity to user's current time (events happening soon rank higher)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_social_feed_api_v1_event_social_feed_get" method="get" path="/api/v1/event/social/feed" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.getSocialFeed({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventsGetSocialFeed } from "@linebundle-sdk/ts/funcs/events-get-social-feed.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsGetSocialFeed(linebundle, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsGetSocialFeed failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSocialFeedApiV1EventSocialFeedGetRequest](../../models/operations/get-social-feed-api-v1-event-social-feed-get-request.md)                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PaginatedEventListResponse](../../models/paginated-event-list-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## filterAdvanced

Advanced event filtering using POST method for complex filter objects.

This endpoint is useful for complex filtering scenarios that exceed
URL length limits or require complex nested conditions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="filter_events_advanced_api_v1_event_filter_post" method="post" path="/api/v1/event/filter" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.filterAdvanced({
    sort: {
      sorts: [
        {
          field: "start_dt",
        },
        {
          field: "end_dt",
          order: "desc",
        },
      ],
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
import { eventsFilterAdvanced } from "@linebundle-sdk/ts/funcs/events-filter-advanced.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsFilterAdvanced(linebundle, {
    sort: {
      sorts: [
        {
          field: "start_dt",
        },
        {
          field: "end_dt",
          order: "desc",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsFilterAdvanced failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.EventFilterRequest](../../models/event-filter-request.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PaginatedEventListResponse](../../models/paginated-event-list-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## listBySpace

Get Events By Space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_events_by_space_api_v1_event_space__space_id__get" method="get" path="/api/v1/event/space/{space_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.listBySpace({
    spaceId: 462093,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventsListBySpace } from "@linebundle-sdk/ts/funcs/events-list-by-space.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsListBySpace(linebundle, {
    spaceId: 462093,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsListBySpace failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEventsBySpaceApiV1EventSpaceSpaceIdGetRequest](../../models/operations/get-events-by-space-api-v1-event-space-space-id-get-request.md)                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PaginatedEventListResponse](../../models/paginated-event-list-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## delete

Delete Event

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_event_api_v1_event__event_id__delete" method="delete" path="/api/v1/event/{event_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.delete({
    eventId: 490397,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventsDelete } from "@linebundle-sdk/ts/funcs/events-delete.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsDelete(linebundle, {
    eventId: 490397,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteEventApiV1EventEventIdDeleteRequest](../../models/operations/delete-event-api-v1-event-event-id-delete-request.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## patchIdentification

Update event title and status (Identification info). API renamed from /header.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_event_identification_api_v1_event__event_id__identification_patch" method="patch" path="/api/v1/event/{event_id}/identification" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.patchIdentification({
    eventId: 851964,
    body: {
      title: "<value>",
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
import { eventsPatchIdentification } from "@linebundle-sdk/ts/funcs/events-patch-identification.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsPatchIdentification(linebundle, {
    eventId: 851964,
    body: {
      title: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsPatchIdentification failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.PatchEventIdentificationApiV1EventEventIdIdentificationPatchRequest](../../models/operations/patch-event-identification-api-v1-event-event-id-identification-patch-request.md) | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `options`                                                                                                                                                                                  | RequestOptions                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.             |
| `options.retries`                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                           |

### Response

**Promise\<[models.SectionIdentificationRead](../../models/section-identification-read.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## getSectionIdentification

Get Section Identification

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_section_identification_api_v1_event__event_id__section_identification_get" method="get" path="/api/v1/event/{event_id}/section/identification" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.getSectionIdentification({
    eventId: 454878,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventsGetSectionIdentification } from "@linebundle-sdk/ts/funcs/events-get-section-identification.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsGetSectionIdentification(linebundle, {
    eventId: 454878,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsGetSectionIdentification failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                             | Type                                                                                                                                                                                                  | Required                                                                                                                                                                                              | Description                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                             | [operations.GetSectionIdentificationApiV1EventEventIdSectionIdentificationGetRequest](../../models/operations/get-section-identification-api-v1-event-event-id-section-identification-get-request.md) | :heavy_check_mark:                                                                                                                                                                                    | The request object to use for the request.                                                                                                                                                            |
| `options`                                                                                                                                                                                             | RequestOptions                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                    | Used to set various options for making HTTP requests.                                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                                | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                    | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                        |
| `options.retries`                                                                                                                                                                                     | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                    | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                      |

### Response

**Promise\<[models.SectionIdentificationRead](../../models/section-identification-read.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## getSectionContent

Get Section Content

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_section_content_api_v1_event__event_id__section_content_get" method="get" path="/api/v1/event/{event_id}/section/content" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.getSectionContent({
    eventId: 645408,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventsGetSectionContent } from "@linebundle-sdk/ts/funcs/events-get-section-content.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsGetSectionContent(linebundle, {
    eventId: 645408,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsGetSectionContent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSectionContentApiV1EventEventIdSectionContentGetRequest](../../models/operations/get-section-content-api-v1-event-event-id-section-content-get-request.md)      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SectionContentRead](../../models/section-content-read.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## patchContent

Update event content (Description, Metadata, Theme).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_event_content_api_v1_event__event_id__content_patch" method="patch" path="/api/v1/event/{event_id}/content" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.patchContent({
    eventId: 812886,
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
import { eventsPatchContent } from "@linebundle-sdk/ts/funcs/events-patch-content.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsPatchContent(linebundle, {
    eventId: 812886,
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsPatchContent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchEventContentApiV1EventEventIdContentPatchRequest](../../models/operations/patch-event-content-api-v1-event-event-id-content-patch-request.md)                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SectionContentRead](../../models/section-content-read.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## getSettings

Get dedicated event settings.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_event_settings_api_v1_event__event_id__settings_get" method="get" path="/api/v1/event/{event_id}/settings" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.getSettings({
    eventId: 674327,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventsGetSettings } from "@linebundle-sdk/ts/funcs/events-get-settings.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsGetSettings(linebundle, {
    eventId: 674327,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsGetSettings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEventSettingsApiV1EventEventIdSettingsGetRequest](../../models/operations/get-event-settings-api-v1-event-event-id-settings-get-request.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SectionSettingsRead](../../models/section-settings-read.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## patchSettings

Update event settings (Visibility, Access).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patch_event_settings_api_v1_event__event_id__settings_patch" method="patch" path="/api/v1/event/{event_id}/settings" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.patchSettings({
    eventId: 184687,
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
import { eventsPatchSettings } from "@linebundle-sdk/ts/funcs/events-patch-settings.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsPatchSettings(linebundle, {
    eventId: 184687,
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsPatchSettings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchEventSettingsApiV1EventEventIdSettingsPatchRequest](../../models/operations/patch-event-settings-api-v1-event-event-id-settings-patch-request.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SectionSettingsRead](../../models/section-settings-read.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## updateCover

Update Cover

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_cover_api_v1_event__event_id__cover_patch" method="patch" path="/api/v1/event/{event_id}/cover" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";
import { openAsBlob } from "node:fs";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.updateCover({
    eventId: 391827,
    body: {
      file: await openAsBlob("example.file"),
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
import { eventsUpdateCover } from "@linebundle-sdk/ts/funcs/events-update-cover.js";
import { openAsBlob } from "node:fs";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsUpdateCover(linebundle, {
    eventId: 391827,
    body: {
      file: await openAsBlob("example.file"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsUpdateCover failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCoverApiV1EventEventIdCoverPatchRequest](../../models/operations/update-cover-api-v1-event-event-id-cover-patch-request.md)                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## publish

Publish Event

### Example Usage

<!-- UsageSnippet language="typescript" operationID="publish_event_api_v1_event__event_id__publish_patch" method="patch" path="/api/v1/event/{event_id}/publish" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.publish({
    eventId: 59446,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventsPublish } from "@linebundle-sdk/ts/funcs/events-publish.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsPublish(linebundle, {
    eventId: 59446,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsPublish failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PublishEventApiV1EventEventIdPublishPatchRequest](../../models/operations/publish-event-api-v1-event-event-id-publish-patch-request.md)                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## archive

Archive Event

### Example Usage

<!-- UsageSnippet language="typescript" operationID="archive_event_api_v1_event__event_id__archive_patch" method="patch" path="/api/v1/event/{event_id}/archive" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.archive({
    eventId: 949489,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventsArchive } from "@linebundle-sdk/ts/funcs/events-archive.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsArchive(linebundle, {
    eventId: 949489,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsArchive failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ArchiveEventApiV1EventEventIdArchivePatchRequest](../../models/operations/archive-event-api-v1-event-event-id-archive-patch-request.md)                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## transfer

Transfer a personal event to an organization.

Requirements:
- Event must be personal (org_id IS NULL)
- Current user must be the creator
- Current user must be owner or admin of target organization

Returns:
    - 200: Transfer successful
    - 400: Validation error (event already org-scoped, etc.)
    - 403: Permission denied (not creator or not org admin)
    - 404: Event not found

### Example Usage

<!-- UsageSnippet language="typescript" operationID="transfer_event_api_v1_event__event_id__transfer_post" method="post" path="/api/v1/event/{event_id}/transfer" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.transfer({
    eventId: 916824,
    body: {
      targetOrgId: "83be6f26-b930-4b36-a344-0b0753b6cbd0",
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
import { eventsTransfer } from "@linebundle-sdk/ts/funcs/events-transfer.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsTransfer(linebundle, {
    eventId: 916824,
    body: {
      targetOrgId: "83be6f26-b930-4b36-a344-0b0753b6cbd0",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsTransfer failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TransferEventApiV1EventEventIdTransferPostRequest](../../models/operations/transfer-event-api-v1-event-event-id-transfer-post-request.md)                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[{ [k: string]: any }](../../models/.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## publishVersion

Create an immutable published version of the event for recommendations

### Example Usage

<!-- UsageSnippet language="typescript" operationID="publish_event_version_api_v1_event__event_id__versions_publish_post" method="post" path="/api/v1/event/{event_id}/versions/publish" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.publishVersion({
    eventId: 711120,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventsPublishVersion } from "@linebundle-sdk/ts/funcs/events-publish-version.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsPublishVersion(linebundle, {
    eventId: 711120,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsPublishVersion failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                         | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                         | [operations.PublishEventVersionApiV1EventEventIdVersionsPublishPostRequest](../../models/operations/publish-event-version-api-v1-event-event-id-versions-publish-post-request.md) | :heavy_check_mark:                                                                                                                                                                | The request object to use for the request.                                                                                                                                        |
| `options`                                                                                                                                                                         | RequestOptions                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                | Used to set various options for making HTTP requests.                                                                                                                             |
| `options.fetchOptions`                                                                                                                                                            | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                           | :heavy_minus_sign:                                                                                                                                                                | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.    |
| `options.retries`                                                                                                                                                                 | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                | Enables retrying HTTP requests under certain failure conditions.                                                                                                                  |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## listVersions

Get all published versions of an event

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_event_versions_api_v1_event__event_id__versions_get" method="get" path="/api/v1/event/{event_id}/versions" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.listVersions({
    eventId: 701217,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventsListVersions } from "@linebundle-sdk/ts/funcs/events-list-versions.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsListVersions(linebundle, {
    eventId: 701217,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsListVersions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListEventVersionsApiV1EventEventIdVersionsGetRequest](../../models/operations/list-event-versions-api-v1-event-event-id-versions-get-request.md)                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## rollbackVersion

Restore event to a specific published version

### Example Usage

<!-- UsageSnippet language="typescript" operationID="rollback_event_version_api_v1_event__event_id__versions_rollback_post" method="post" path="/api/v1/event/{event_id}/versions/rollback" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.rollbackVersion({
    eventId: 196193,
    transactionId: 590648,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventsRollbackVersion } from "@linebundle-sdk/ts/funcs/events-rollback-version.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsRollbackVersion(linebundle, {
    eventId: 196193,
    transactionId: 590648,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsRollbackVersion failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                             | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                             | [operations.RollbackEventVersionApiV1EventEventIdVersionsRollbackPostRequest](../../models/operations/rollback-event-version-api-v1-event-event-id-versions-rollback-post-request.md) | :heavy_check_mark:                                                                                                                                                                    | The request object to use for the request.                                                                                                                                            |
| `options`                                                                                                                                                                             | RequestOptions                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                    | Used to set various options for making HTTP requests.                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                               | :heavy_minus_sign:                                                                                                                                                                    | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.        |
| `options.retries`                                                                                                                                                                     | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                    | Enables retrying HTTP requests under certain failure conditions.                                                                                                                      |

### Response

**Promise\<[models.EventRead](../../models/event-read.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## getTimezones

Get timezone information for frontend validation and suggestions.

Returns:
    Dictionary containing:
    - all_timezones: List of all valid IANA timezones
    - common_timezones: List of commonly used timezones for UI suggestions
    - count: Total number of supported timezones

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_timezone_info_api_v1_event_timezones__get" method="get" path="/api/v1/event/timezones/" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.events.getTimezones();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventsGetTimezones } from "@linebundle-sdk/ts/funcs/events-get-timezones.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventsGetTimezones(linebundle);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventsGetTimezones failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[{ [k: string]: any }](../../models/.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |