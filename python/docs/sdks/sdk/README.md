# SDK

## Overview

LineBundle API: LineBundle multi-tenant SaaS API

## Realtime WebSocket
Connect to the realtime channel at `wss://<host>/ws` (or `ws://localhost:8000/ws` in dev). Requires the same authentication context (JWT) as HTTP requests.

On successful connection the server sends a single ACK message:
```json
{
  "tenant_id": "<uuid>",
  "correlation_id": "<uuid|null>"
}
```
After the ACK the server may push events (client messages are currently ignored). For more details see `/realtime-info` endpoint.

### Available Operations

* [handle_org_created_api_v1_integration_org_created_post](#handle_org_created_api_v1_integration_org_created_post) - Webhook from Zitadel for organization creation
* [handle_org_removed_api_v1_integration_org_removed_post](#handle_org_removed_api_v1_integration_org_removed_post) - Webhook from Zitadel for organization removal
* [handle_user_removed_api_v1_integration_user_removed_post](#handle_user_removed_api_v1_integration_user_removed_post) - Webhook from Zitadel for user removal
* [get_latest_published_version_api_v1_public_space_space_id_versions_latest_get](#get_latest_published_version_api_v1_public_space_space_id_versions_latest_get) - Get Latest Published Version
* [health_check_health_get](#health_check_health_get) - Health Check
* [trigger_sentry_error_sentry_debug_get](#trigger_sentry_error_sentry_debug_get) - Trigger Sentry Error
* [notification_health_check_health_notifications_get](#notification_health_check_health_notifications_get) - Notification Health Check
* [metrics_metrics_get](#metrics_metrics_get) - Metrics
* [get_feature_flags_config_features_get](#get_feature_flags_config_features_get) - Get Feature Flags

## handle_org_created_api_v1_integration_org_created_post

Receives an authenticated JWT webhook payload from a Zitadel Action
when a new organization is created.

### Example Usage

<!-- UsageSnippet language="python" operationID="handle_org_created_api_v1_integration_org_created_post" method="post" path="/api/v1/integration/org-created" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.handle_org_created_api_v1_integration_org_created_post()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## handle_org_removed_api_v1_integration_org_removed_post

Receives an authenticated JWT webhook payload from a Zitadel Action
when an organization is removed.

### Example Usage

<!-- UsageSnippet language="python" operationID="handle_org_removed_api_v1_integration_org_removed_post" method="post" path="/api/v1/integration/org-removed" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.handle_org_removed_api_v1_integration_org_removed_post()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## handle_user_removed_api_v1_integration_user_removed_post

Receives an authenticated JWT webhook payload from a Zitadel Action
when a user is removed.

### Example Usage

<!-- UsageSnippet language="python" operationID="handle_user_removed_api_v1_integration_user_removed_post" method="post" path="/api/v1/integration/user-removed" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.handle_user_removed_api_v1_integration_user_removed_post()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## get_latest_published_version_api_v1_public_space_space_id_versions_latest_get

Get the latest published version of a space.
Public access permitted.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_latest_published_version_api_v1_public_space__space_id__versions_latest_get" method="get" path="/api/v1/public/space/{space_id}/versions/latest" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.get_latest_published_version_api_v1_public_space_space_id_versions_latest_get(space_id=745559)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `space_id`                                                          | *int*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.SpaceVersionRead](../../models/spaceversionread.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## health_check_health_get

Health endpoint.

- Default (`/health` or `/health?shallow=true`) is **liveness**: fast, no external deps.
- Optional (`/health?deep=true` or `/health?shallow=false`) performs **readiness** checks.

Readiness only treats DB + Redis as critical. Other checks are informational/skipped.

### Example Usage

<!-- UsageSnippet language="python" operationID="health_check_health_get" method="get" path="/health" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.health_check_health_get(shallow=True, deep=False)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `shallow`                                                           | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `deep`                                                              | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## trigger_sentry_error_sentry_debug_get

Test endpoint to verify Sentry integration.
This endpoint intentionally raises an error to test error tracking.

### Example Usage

<!-- UsageSnippet language="python" operationID="trigger_sentry_error_sentry_debug_get" method="get" path="/sentry-debug" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.trigger_sentry_error_sentry_debug_get()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## notification_health_check_health_notifications_get

Health check endpoint for notification services configuration.

### Example Usage

<!-- UsageSnippet language="python" operationID="notification_health_check_health_notifications_get" method="get" path="/health/notifications" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.notification_health_check_health_notifications_get()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## metrics_metrics_get

Prometheus metrics endpoint for monitoring.

### Example Usage

<!-- UsageSnippet language="python" operationID="metrics_metrics_get" method="get" path="/metrics" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.metrics_metrics_get()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## get_feature_flags_config_features_get

Get current feature flag status for frontend clients.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_feature_flags_config_features_get" method="get" path="/config/features" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.get_feature_flags_config_features_get()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[Any](../../models/.md)**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |