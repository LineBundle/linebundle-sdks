# PublicEvents

## Overview

### Available Operations

* [getLatestPublicEventVersionApiV1PublicEventEventIdVersionsLatestGet](#getlatestpubliceventversionapiv1publiceventeventidversionslatestget) - Get Latest Event Version (Public Access)

## getLatestPublicEventVersionApiV1PublicEventEventIdVersionsLatestGet

Get the most recent published version of an event. Supports unauthenticated access for PUBLIC events.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_latest_public_event_version_api_v1_public_event__event_id__versions_latest_get" method="get" path="/api/v1/public/event/{event_id}/versions/latest" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.publicEvents.getLatestPublicEventVersionApiV1PublicEventEventIdVersionsLatestGet({
    eventId: 291072,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { publicEventsGetLatestPublicEventVersionApiV1PublicEventEventIdVersionsLatestGet } from "openapi/funcs/public-events-get-latest-public-event-version-api-v1-public-event-event-id-versions-latest-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await publicEventsGetLatestPublicEventVersionApiV1PublicEventEventIdVersionsLatestGet(sdk, {
    eventId: 291072,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("publicEventsGetLatestPublicEventVersionApiV1PublicEventEventIdVersionsLatestGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                    | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                    | [operations.GetLatestPublicEventVersionApiV1PublicEventEventIdVersionsLatestGetRequest](../../models/operations/get-latest-public-event-version-api-v1-public-event-event-id-versions-latest-get-request.md) | :heavy_check_mark:                                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                                   |
| `options`                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                               |
| `options.retries`                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                             |

### Response

**Promise\<[models.EventVersionRead](../../models/event-version-read.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |