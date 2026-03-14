# Event

## Overview

### Available Operations

* [get](#get) - Get Event By Id
* [update](#update) - Update Event
* [getSectionSettings](#getsectionsettings) - Get Section Settings
* [unpublishVersion](#unpublishversion) - Unpublish Event (Mark as Draft)
* [compareVersions](#compareversions) - Compare Event Versions
* [getLatestVersion](#getlatestversion) - Get Latest Event Version
* [getVersion](#getversion) - Get Event Version

## get

Get Event By Id

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_event_by_id_api_v1_event__event_id__get" method="get" path="/api/v1/event/{event_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.event.get({
    eventId: 902945,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventGet } from "@linebundle-sdk/ts/funcs/event-get.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventGet(linebundle, {
    eventId: 902945,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEventByIdApiV1EventEventIdGetRequest](../../models/operations/get-event-by-id-api-v1-event-event-id-get-request.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## update

Update Event

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_event_api_v1_event__event_id__put" method="put" path="/api/v1/event/{event_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.event.update({
    eventId: 38536,
    body: {
      title: "<value>",
      startDt: "<value>",
      startTm: "<value>",
      endDt: "<value>",
      endTm: "<value>",
      timezone: "America/Dawson_Creek",
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
import { eventUpdate } from "@linebundle-sdk/ts/funcs/event-update.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventUpdate(linebundle, {
    eventId: 38536,
    body: {
      title: "<value>",
      startDt: "<value>",
      startTm: "<value>",
      endDt: "<value>",
      endTm: "<value>",
      timezone: "America/Dawson_Creek",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateEventApiV1EventEventIdPutRequest](../../models/operations/update-event-api-v1-event-event-id-put-request.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## getSectionSettings

Get Section Settings

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_section_settings_api_v1_event__event_id__section_settings_get" method="get" path="/api/v1/event/{event_id}/section/settings" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.event.getSectionSettings({
    eventId: 284666,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventGetSectionSettings } from "@linebundle-sdk/ts/funcs/event-get-section-settings.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventGetSectionSettings(linebundle, {
    eventId: 284666,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventGetSectionSettings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSectionSettingsApiV1EventEventIdSectionSettingsGetRequest](../../models/operations/get-section-settings-api-v1-event-event-id-section-settings-get-request.md)  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## unpublishVersion

Mark event as draft (unpublished)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="unpublish_event_version_api_v1_event__event_id__versions_unpublish_post" method="post" path="/api/v1/event/{event_id}/versions/unpublish" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await linebundle.event.unpublishVersion({
    eventId: 544756,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventUnpublishVersion } from "@linebundle-sdk/ts/funcs/event-unpublish-version.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventUnpublishVersion(linebundle, {
    eventId: 544756,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("eventUnpublishVersion failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                 | Type                                                                                                                                                                                      | Required                                                                                                                                                                                  | Description                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                 | [operations.UnpublishEventVersionApiV1EventEventIdVersionsUnpublishPostRequest](../../models/operations/unpublish-event-version-api-v1-event-event-id-versions-unpublish-post-request.md) | :heavy_check_mark:                                                                                                                                                                        | The request object to use for the request.                                                                                                                                                |
| `options`                                                                                                                                                                                 | RequestOptions                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                        | Used to set various options for making HTTP requests.                                                                                                                                     |
| `options.fetchOptions`                                                                                                                                                                    | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                   | :heavy_minus_sign:                                                                                                                                                                        | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.            |
| `options.retries`                                                                                                                                                                         | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                        | Enables retrying HTTP requests under certain failure conditions.                                                                                                                          |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## compareVersions

Compare two versions and see what changed

### Example Usage

<!-- UsageSnippet language="typescript" operationID="compare_event_versions_api_v1_event__event_id__versions_compare_get" method="get" path="/api/v1/event/{event_id}/versions/compare" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.event.compareVersions({
    eventId: 9301,
    transactionIdA: 196275,
    transactionIdB: 886925,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventCompareVersions } from "@linebundle-sdk/ts/funcs/event-compare-versions.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventCompareVersions(linebundle, {
    eventId: 9301,
    transactionIdA: 196275,
    transactionIdB: 886925,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventCompareVersions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                         | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                         | [operations.CompareEventVersionsApiV1EventEventIdVersionsCompareGetRequest](../../models/operations/compare-event-versions-api-v1-event-event-id-versions-compare-get-request.md) | :heavy_check_mark:                                                                                                                                                                | The request object to use for the request.                                                                                                                                        |
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

## getLatestVersion

Get the most recent published version of an event

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_latest_event_version_api_v1_event__event_id__versions_latest_get" method="get" path="/api/v1/event/{event_id}/versions/latest" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.event.getLatestVersion({
    eventId: 342518,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventGetLatestVersion } from "@linebundle-sdk/ts/funcs/event-get-latest-version.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventGetLatestVersion(linebundle, {
    eventId: 342518,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventGetLatestVersion failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                          | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                          | [operations.GetLatestEventVersionApiV1EventEventIdVersionsLatestGetRequest](../../models/operations/get-latest-event-version-api-v1-event-event-id-versions-latest-get-request.md) | :heavy_check_mark:                                                                                                                                                                 | The request object to use for the request.                                                                                                                                         |
| `options`                                                                                                                                                                          | RequestOptions                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                            | :heavy_minus_sign:                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.     |
| `options.retries`                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                   |

### Response

**Promise\<[models.EventVersionRead](../../models/event-version-read.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## getVersion

Get specific published version of an event

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_event_version_api_v1_event__event_id__versions__transaction_id__get" method="get" path="/api/v1/event/{event_id}/versions/{transaction_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.event.getVersion({
    eventId: 352601,
    transactionId: 717392,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { eventGetVersion } from "@linebundle-sdk/ts/funcs/event-get-version.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventGetVersion(linebundle, {
    eventId: 352601,
    transactionId: 717392,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventGetVersion failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                            | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                            | [operations.GetEventVersionApiV1EventEventIdVersionsTransactionIdGetRequest](../../models/operations/get-event-version-api-v1-event-event-id-versions-transaction-id-get-request.md) | :heavy_check_mark:                                                                                                                                                                   | The request object to use for the request.                                                                                                                                           |
| `options`                                                                                                                                                                            | RequestOptions                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                              | :heavy_minus_sign:                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.       |
| `options.retries`                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                     |

### Response

**Promise\<[models.EventVersionRead](../../models/event-version-read.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |