# Space

## Overview

### Available Operations

* [testAuth](#testauth) - Test Auth
* [update](#update) - Update Space
* [publish](#publish) - Publish Space
* [archive](#archive) - Archive Space
* [updateMemberRole](#updatememberrole) - Update Space Member Role
* [transfer](#transfer) - Transfer Space
* [bulkUpdateParent](#bulkupdateparent) - Bulk Update Space Parent
* [getLatestVersion](#getlatestversion) - Get latest published space version
* [getUserRoles](#getuserroles) - Get User Space Roles
* [assignUserToRole](#assignusertorole) - Assign User To Space Role

## testAuth

Test endpoint to verify authentication

### Example Usage

<!-- UsageSnippet language="typescript" operationID="test_auth_api_v1_space_test_auth_get" method="get" path="/api/v1/space/test-auth" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.space.testAuth();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceTestAuth } from "@linebundle-sdk/ts/funcs/space-test-auth.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceTestAuth(linebundle);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceTestAuth failed:", res.error);
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

## update

Update Space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_space_api_v1_space__space_id__put" method="put" path="/api/v1/space/{space_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.space.update({
    spaceId: 840637,
    body: {
      title: "<value>",
      description: "monumental atop yuck aboard lone",
      timezone: "America/Argentina/Ushuaia",
      visibility: 403702,
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
import { spaceUpdate } from "@linebundle-sdk/ts/funcs/space-update.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceUpdate(linebundle, {
    spaceId: 840637,
    body: {
      title: "<value>",
      description: "monumental atop yuck aboard lone",
      timezone: "America/Argentina/Ushuaia",
      visibility: 403702,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateSpaceApiV1SpaceSpaceIdPutRequest](../../models/operations/update-space-api-v1-space-space-id-put-request.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UpdateSpaceResponseDTO](../../models/update-space-response-dto.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## publish

Publish Space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="publish_space_api_v1_space__space_id__publish_patch" method="patch" path="/api/v1/space/{space_id}/publish" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.space.publish({
    spaceId: 949598,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spacePublish } from "@linebundle-sdk/ts/funcs/space-publish.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spacePublish(linebundle, {
    spaceId: 949598,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spacePublish failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PublishSpaceApiV1SpaceSpaceIdPublishPatchRequest](../../models/operations/publish-space-api-v1-space-space-id-publish-patch-request.md)                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

Archive Space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="archive_space_api_v1_space__space_id__archive_patch" method="patch" path="/api/v1/space/{space_id}/archive" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.space.archive({
    spaceId: 666185,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceArchive } from "@linebundle-sdk/ts/funcs/space-archive.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceArchive(linebundle, {
    spaceId: 666185,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceArchive failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ArchiveSpaceApiV1SpaceSpaceIdArchivePatchRequest](../../models/operations/archive-space-api-v1-space-space-id-archive-patch-request.md)                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## updateMemberRole

Update a space member's role

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_space_member_role_api_v1_space__space_id__members__user_id__patch" method="patch" path="/api/v1/space/{space_id}/members/{user_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.space.updateMemberRole({
    spaceId: 949597,
    userId: "<id>",
    body: {
      role: "space_viewer",
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
import { spaceUpdateMemberRole } from "@linebundle-sdk/ts/funcs/space-update-member-role.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceUpdateMemberRole(linebundle, {
    spaceId: 949597,
    userId: "<id>",
    body: {
      role: "space_viewer",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceUpdateMemberRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                             | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                             | [operations.UpdateSpaceMemberRoleApiV1SpaceSpaceIdMembersUserIdPatchRequest](../../models/operations/update-space-member-role-api-v1-space-space-id-members-user-id-patch-request.md) | :heavy_check_mark:                                                                                                                                                                    | The request object to use for the request.                                                                                                                                            |
| `options`                                                                                                                                                                             | RequestOptions                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                    | Used to set various options for making HTTP requests.                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                               | :heavy_minus_sign:                                                                                                                                                                    | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.        |
| `options.retries`                                                                                                                                                                     | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                    | Enables retrying HTTP requests under certain failure conditions.                                                                                                                      |

### Response

**Promise\<[models.SpaceMemberResponse](../../models/space-member-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## transfer

Transfer a personal space to an organization.

This endpoint allows the creator of a personal space to transfer ownership
to an organization they are a member of with owner or admin privileges.

Requirements:
- Space must be personal (org_id IS NULL)
- Caller must be the space creator
- Caller must be owner or admin of the target organization

Args:
    space_id: ID of the space to transfer
    request: Transfer request containing target_org_id

Returns:
    TransferSpaceResponse: Transfer status and metadata

Raises:
    HTTPException:
        - 400: Invalid request (already org-scoped, not creator, etc.)
        - 403: Permission denied (not org owner/admin)
        - 404: Space or organization not found
        - 500: Server error

### Example Usage

<!-- UsageSnippet language="typescript" operationID="transfer_space_api_v1_space__space_id__transfer_post" method="post" path="/api/v1/space/{space_id}/transfer" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.space.transfer({
    spaceId: 533447,
    body: {
      targetOrgId: "6dfc9394-957c-47b7-b6ec-5dcb5a5702dd",
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
import { spaceTransfer } from "@linebundle-sdk/ts/funcs/space-transfer.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceTransfer(linebundle, {
    spaceId: 533447,
    body: {
      targetOrgId: "6dfc9394-957c-47b7-b6ec-5dcb5a5702dd",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceTransfer failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TransferSpaceApiV1SpaceSpaceIdTransferPostRequest](../../models/operations/transfer-space-api-v1-space-space-id-transfer-post-request.md)                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TransferSpaceResponse](../../models/transfer-space-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## bulkUpdateParent

Bulk update parent relationship for multiple spaces

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bulk_update_space_parent_api_v1_space_bulk_parent_patch" method="patch" path="/api/v1/space/bulk-parent" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.space.bulkUpdateParent({
    spaceIds: [
      855578,
      613689,
      531784,
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
import { spaceBulkUpdateParent } from "@linebundle-sdk/ts/funcs/space-bulk-update-parent.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceBulkUpdateParent(linebundle, {
    spaceIds: [
      855578,
      613689,
      531784,
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceBulkUpdateParent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.BulkUpdateParentRequest](../../models/bulk-update-parent-request.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceWithRelationshipsResponse[]](../../models/.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## getLatestVersion

Retrieve the most recent published version of a space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_latest_space_version_api_v1_space__space_id__versions_latest_get" method="get" path="/api/v1/space/{space_id}/versions/latest" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.space.getLatestVersion({
    spaceId: 149990,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceGetLatestVersion } from "@linebundle-sdk/ts/funcs/space-get-latest-version.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceGetLatestVersion(linebundle, {
    spaceId: 149990,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceGetLatestVersion failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                          | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                          | [operations.GetLatestSpaceVersionApiV1SpaceSpaceIdVersionsLatestGetRequest](../../models/operations/get-latest-space-version-api-v1-space-space-id-versions-latest-get-request.md) | :heavy_check_mark:                                                                                                                                                                 | The request object to use for the request.                                                                                                                                         |
| `options`                                                                                                                                                                          | RequestOptions                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                            | :heavy_minus_sign:                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.     |
| `options.retries`                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                   |

### Response

**Promise\<[models.SpaceVersionRead](../../models/space-version-read.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## getUserRoles

Get all space roles for a user in a specific space.

Requires space read permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_user_space_roles_api_v1_space_spaces__space_id__members__user_id__roles_get" method="get" path="/api/v1/space/spaces/{space_id}/members/{user_id}/roles" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.space.getUserRoles({
    spaceId: 960716,
    userId: "f30afe95-41fa-4a51-93b6-79ab1718f195",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceGetUserRoles } from "@linebundle-sdk/ts/funcs/space-get-user-roles.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceGetUserRoles(linebundle, {
    spaceId: 960716,
    userId: "f30afe95-41fa-4a51-93b6-79ab1718f195",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceGetUserRoles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                         | Type                                                                                                                                                                                              | Required                                                                                                                                                                                          | Description                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                         | [operations.GetUserSpaceRolesApiV1SpaceSpacesSpaceIdMembersUserIdRolesGetRequest](../../models/operations/get-user-space-roles-api-v1-space-spaces-space-id-members-user-id-roles-get-request.md) | :heavy_check_mark:                                                                                                                                                                                | The request object to use for the request.                                                                                                                                                        |
| `options`                                                                                                                                                                                         | RequestOptions                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                | Used to set various options for making HTTP requests.                                                                                                                                             |
| `options.fetchOptions`                                                                                                                                                                            | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                    |
| `options.retries`                                                                                                                                                                                 | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                  |

### Response

**Promise\<[{ [k: string]: any }[]](../../models/.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## assignUserToRole

Assign a user to a space role.

Requires space member management permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="assign_user_to_space_role_api_v1_space_spaces__space_id__members__user_id__roles_post" method="post" path="/api/v1/space/spaces/{space_id}/members/{user_id}/roles" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.space.assignUserToRole({
    spaceId: 462735,
    userId: "a6ddf73b-a020-4fa8-a6a8-b25734353b72",
    spaceRoleId: "e42784a5-701f-4c53-81be-a09ec6960e13",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceAssignUserToRole } from "@linebundle-sdk/ts/funcs/space-assign-user-to-role.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceAssignUserToRole(linebundle, {
    spaceId: 462735,
    userId: "a6ddf73b-a020-4fa8-a6a8-b25734353b72",
    spaceRoleId: "e42784a5-701f-4c53-81be-a09ec6960e13",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceAssignUserToRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                    | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                    | [operations.AssignUserToSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesPostRequest](../../models/operations/assign-user-to-space-role-api-v1-space-spaces-space-id-members-user-id-roles-post-request.md) | :heavy_check_mark:                                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                                   |
| `options`                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                               |
| `options.retries`                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                             |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |