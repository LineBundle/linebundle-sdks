# Sentry

## Overview

### Available Operations

* [triggerError](#triggererror) - Trigger Sentry Error

## triggerError

Test endpoint to verify Sentry integration.
This endpoint intentionally raises an error to test error tracking.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="trigger_sentry_error_sentry_debug_get" method="get" path="/sentry-debug" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.sentry.triggerError();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { sentryTriggerError } from "@linebundle-sdk/ts/funcs/sentry-trigger-error.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await sentryTriggerError(linebundle);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sentryTriggerError failed:", res.error);
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

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |