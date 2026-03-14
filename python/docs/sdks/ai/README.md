# Ai

## Overview

### Available Operations

* [delete_session](#delete_session) - Delete AI agent session

## delete_session

Mark an AI agent session as deleted. The session and its conversation history will be soft-deleted.

### Example Usage

<!-- UsageSnippet language="python" operationID="delete_session_api_v1_ai_sessions__session_id__delete" method="delete" path="/api/v1/ai/sessions/{session_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    linebundle.ai.delete_session(session_id="6ec45756-f75f-418a-bc3a-38d6decadfbd")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `session_id`                                                        | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |