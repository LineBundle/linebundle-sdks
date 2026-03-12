# Space

## Overview

### Available Operations

* [testAuthApiV1SpaceTestAuthGet](#testauthapiv1spacetestauthget) - Test Auth
* [getSpaceListApiV1SpaceGet](#getspacelistapiv1spaceget) - Get Space List
* [createSpaceApiV1SpacePost](#createspaceapiv1spacepost) - Create Space
* [getSpaceByIdApiV1SpaceSpaceIdGet](#getspacebyidapiv1spacespaceidget) - Get Space By Id
* [updateSpaceApiV1SpaceSpaceIdPut](#updatespaceapiv1spacespaceidput) - Update Space
* [deleteSpaceApiV1SpaceSpaceIdDelete](#deletespaceapiv1spacespaceiddelete) - Delete Space
* [createSpaceWithParentApiV1SpaceWithParentPost](#createspacewithparentapiv1spacewithparentpost) - Create Space With Parent
* [publishSpaceApiV1SpaceSpaceIdPublishPost](#publishspaceapiv1spacespaceidpublishpost) - Publish space
* [publishSpaceApiV1SpaceSpaceIdPublishPatch](#publishspaceapiv1spacespaceidpublishpatch) - Publish Space
* [archiveSpaceApiV1SpaceSpaceIdArchivePatch](#archivespaceapiv1spacespaceidarchivepatch) - Archive Space
* [getSpaceMembersApiV1SpaceSpaceIdMembersGet](#getspacemembersapiv1spacespaceidmembersget) - Get Space Members
* [addSpaceMemberApiV1SpaceSpaceIdMembersPost](#addspacememberapiv1spacespaceidmemberspost) - Add Space Member
* [removeSpaceMemberApiV1SpaceSpaceIdMembersUserIdDelete](#removespacememberapiv1spacespaceidmembersuseriddelete) - Remove Space Member
* [updateSpaceMemberRoleApiV1SpaceSpaceIdMembersUserIdPatch](#updatespacememberroleapiv1spacespaceidmembersuseridpatch) - Update Space Member Role
* [getJoinableSpacesByUserApiV1SpaceByUserUserIdJoinableGet](#getjoinablespacesbyuserapiv1spacebyuseruseridjoinableget) - Get Joinable Spaces By User
* [joinSpaceApiV1SpaceSpaceIdJoinPost](#joinspaceapiv1spacespaceidjoinpost) - Join Space
* [transferSpaceApiV1SpaceSpaceIdTransferPost](#transferspaceapiv1spacespaceidtransferpost) - Transfer Space
* [getSpaceChildrenApiV1SpaceSpaceIdChildrenGet](#getspacechildrenapiv1spacespaceidchildrenget) - Get Space Children
* [getSpaceParentApiV1SpaceSpaceIdParentGet](#getspaceparentapiv1spacespaceidparentget) - Get Space Parent
* [detachSpaceFromParentApiV1SpaceSpaceIdParentDelete](#detachspacefromparentapiv1spacespaceidparentdelete) - Detach Space From Parent
* [updateSpaceParentApiV1SpaceSpaceIdParentPatch](#updatespaceparentapiv1spacespaceidparentpatch) - Update Space Parent
* [getSpaceHierarchyApiV1SpaceSpaceIdHierarchyGet](#getspacehierarchyapiv1spacespaceidhierarchyget) - Get Space Hierarchy
* [bulkUpdateSpaceParentApiV1SpaceBulkParentPatch](#bulkupdatespaceparentapiv1spacebulkparentpatch) - Bulk Update Space Parent
* [unpublishSpaceApiV1SpaceSpaceIdUnpublishPost](#unpublishspaceapiv1spacespaceidunpublishpost) - Unpublish space
* [listSpaceVersionsApiV1SpaceSpaceIdVersionsGet](#listspaceversionsapiv1spacespaceidversionsget) - List space versions
* [getLatestSpaceVersionApiV1SpaceSpaceIdVersionsLatestGet](#getlatestspaceversionapiv1spacespaceidversionslatestget) - Get latest published space version
* [getSpaceVersionApiV1SpaceSpaceIdVersionsVersionNumberGet](#getspaceversionapiv1spacespaceidversionsversionnumberget) - Get specific space version
* [compareSpaceVersionsApiV1SpaceSpaceIdVersionsCompareGet](#comparespaceversionsapiv1spacespaceidversionscompareget) - Compare space versions
* [rollbackSpaceApiV1SpaceSpaceIdRollbackPost](#rollbackspaceapiv1spacespaceidrollbackpost) - Rollback space to version
* [listSpaceRolesApiV1SpaceSpacesSpaceIdRolesGet](#listspacerolesapiv1spacespacesspaceidrolesget) - List Space Roles
* [createSpaceRoleApiV1SpaceSpacesSpaceIdRolesPost](#createspaceroleapiv1spacespacesspaceidrolespost) - Create Space Role
* [getSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdGet](#getspaceroleapiv1spacespacesspaceidrolesroleidget) - Get Space Role
* [updateSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPut](#updatespaceroleapiv1spacespacesspaceidrolesroleidput) - Update Space Role
* [deleteSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdDelete](#deletespaceroleapiv1spacespacesspaceidrolesroleiddelete) - Delete Space Role
* [assignPermissionToSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPost](#assignpermissiontospaceroleapiv1spacespacesspaceidrolesroleidpermissionspost) - Assign Permission To Space Role
* [removePermissionFromSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPermissionIdDelete](#removepermissionfromspaceroleapiv1spacespacesspaceidrolesroleidpermissionspermissioniddelete) - Remove Permission From Space Role
* [getUserSpaceRolesApiV1SpaceSpacesSpaceIdMembersUserIdRolesGet](#getuserspacerolesapiv1spacespacesspaceidmembersuseridrolesget) - Get User Space Roles
* [assignUserToSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesPost](#assignusertospaceroleapiv1spacespacesspaceidmembersuseridrolespost) - Assign User To Space Role
* [removeUserFromSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesSpaceRoleIdDelete](#removeuserfromspaceroleapiv1spacespacesspaceidmembersuseridrolesspaceroleiddelete) - Remove User From Space Role

## testAuthApiV1SpaceTestAuthGet

Test endpoint to verify authentication

### Example Usage

<!-- UsageSnippet language="typescript" operationID="test_auth_api_v1_space_test_auth_get" method="get" path="/api/v1/space/test-auth" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.testAuthApiV1SpaceTestAuthGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceTestAuthApiV1SpaceTestAuthGet } from "openapi/funcs/space-test-auth-api-v1-space-test-auth-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceTestAuthApiV1SpaceTestAuthGet(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceTestAuthApiV1SpaceTestAuthGet failed:", res.error);
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

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## getSpaceListApiV1SpaceGet

Get Space List

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_space_list_api_v1_space__get" method="get" path="/api/v1/space/" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.getSpaceListApiV1SpaceGet({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceGetSpaceListApiV1SpaceGet } from "openapi/funcs/space-get-space-list-api-v1-space-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceGetSpaceListApiV1SpaceGet(sdk, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceGetSpaceListApiV1SpaceGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSpaceListApiV1SpaceGetRequest](../../models/operations/get-space-list-api-v1-space-get-request.md)                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PaginatedSpaceListResponseDTO](../../models/paginated-space-list-response-dto.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## createSpaceApiV1SpacePost

Create Space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_space_api_v1_space__post" method="post" path="/api/v1/space/" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.createSpaceApiV1SpacePost({
    title: "<value>",
    description: "kindheartedly secondary ethyl brr disappointment eek of towards elegantly",
    timezone: "Europe/Busingen",
    visibility: 302580,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceCreateSpaceApiV1SpacePost } from "openapi/funcs/space-create-space-api-v1-space-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceCreateSpaceApiV1SpacePost(sdk, {
    title: "<value>",
    description: "kindheartedly secondary ethyl brr disappointment eek of towards elegantly",
    timezone: "Europe/Busingen",
    visibility: 302580,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceCreateSpaceApiV1SpacePost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateSpaceRequest](../../models/create-space-request.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateSpaceResponseDTO](../../models/create-space-response-dto.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getSpaceByIdApiV1SpaceSpaceIdGet

Get Space By Id

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_space_by_id_api_v1_space__space_id__get" method="get" path="/api/v1/space/{space_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.getSpaceByIdApiV1SpaceSpaceIdGet({
    spaceId: 605238,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceGetSpaceByIdApiV1SpaceSpaceIdGet } from "openapi/funcs/space-get-space-by-id-api-v1-space-space-id-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceGetSpaceByIdApiV1SpaceSpaceIdGet(sdk, {
    spaceId: 605238,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceGetSpaceByIdApiV1SpaceSpaceIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSpaceByIdApiV1SpaceSpaceIdGetRequest](../../models/operations/get-space-by-id-api-v1-space-space-id-get-request.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetSpaceListResponseDTO](../../models/get-space-list-response-dto.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## updateSpaceApiV1SpaceSpaceIdPut

Update Space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_space_api_v1_space__space_id__put" method="put" path="/api/v1/space/{space_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.updateSpaceApiV1SpaceSpaceIdPut({
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
import { SDKCore } from "openapi/core.js";
import { spaceUpdateSpaceApiV1SpaceSpaceIdPut } from "openapi/funcs/space-update-space-api-v1-space-space-id-put.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceUpdateSpaceApiV1SpaceSpaceIdPut(sdk, {
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
    console.log("spaceUpdateSpaceApiV1SpaceSpaceIdPut failed:", res.error);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## deleteSpaceApiV1SpaceSpaceIdDelete

Delete Space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_space_api_v1_space__space_id__delete" method="delete" path="/api/v1/space/{space_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.deleteSpaceApiV1SpaceSpaceIdDelete({
    spaceId: 938678,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceDeleteSpaceApiV1SpaceSpaceIdDelete } from "openapi/funcs/space-delete-space-api-v1-space-space-id-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceDeleteSpaceApiV1SpaceSpaceIdDelete(sdk, {
    spaceId: 938678,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceDeleteSpaceApiV1SpaceSpaceIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteSpaceApiV1SpaceSpaceIdDeleteRequest](../../models/operations/delete-space-api-v1-space-space-id-delete-request.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## createSpaceWithParentApiV1SpaceWithParentPost

Create a space with parent relationship and inheritance settings

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_space_with_parent_api_v1_space_with_parent_post" method="post" path="/api/v1/space/with-parent" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.createSpaceWithParentApiV1SpaceWithParentPost({
    title: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceCreateSpaceWithParentApiV1SpaceWithParentPost } from "openapi/funcs/space-create-space-with-parent-api-v1-space-with-parent-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceCreateSpaceWithParentApiV1SpaceWithParentPost(sdk, {
    title: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceCreateSpaceWithParentApiV1SpaceWithParentPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateSpaceWithParentRequest](../../models/create-space-with-parent-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateSpaceResponseDTO](../../models/create-space-response-dto.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## publishSpaceApiV1SpaceSpaceIdPublishPost

Publish current space state as immutable version for community discovery

### Example Usage

<!-- UsageSnippet language="typescript" operationID="publish_space_api_v1_space__space_id__publish_post" method="post" path="/api/v1/space/{space_id}/publish" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.publishSpaceApiV1SpaceSpaceIdPublishPost({
    spaceId: 334267,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spacePublishSpaceApiV1SpaceSpaceIdPublishPost } from "openapi/funcs/space-publish-space-api-v1-space-space-id-publish-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spacePublishSpaceApiV1SpaceSpaceIdPublishPost(sdk, {
    spaceId: 334267,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spacePublishSpaceApiV1SpaceSpaceIdPublishPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PublishSpaceApiV1SpaceSpaceIdPublishPostRequest](../../models/operations/publish-space-api-v1-space-space-id-publish-post-request.md)                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceVersionRead](../../models/space-version-read.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## publishSpaceApiV1SpaceSpaceIdPublishPatch

Publish Space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="publish_space_api_v1_space__space_id__publish_patch" method="patch" path="/api/v1/space/{space_id}/publish" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.publishSpaceApiV1SpaceSpaceIdPublishPatch({
    spaceId: 949598,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spacePublishSpaceApiV1SpaceSpaceIdPublishPatch } from "openapi/funcs/space-publish-space-api-v1-space-space-id-publish-patch.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spacePublishSpaceApiV1SpaceSpaceIdPublishPatch(sdk, {
    spaceId: 949598,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spacePublishSpaceApiV1SpaceSpaceIdPublishPatch failed:", res.error);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## archiveSpaceApiV1SpaceSpaceIdArchivePatch

Archive Space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="archive_space_api_v1_space__space_id__archive_patch" method="patch" path="/api/v1/space/{space_id}/archive" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.archiveSpaceApiV1SpaceSpaceIdArchivePatch({
    spaceId: 666185,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceArchiveSpaceApiV1SpaceSpaceIdArchivePatch } from "openapi/funcs/space-archive-space-api-v1-space-space-id-archive-patch.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceArchiveSpaceApiV1SpaceSpaceIdArchivePatch(sdk, {
    spaceId: 666185,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceArchiveSpaceApiV1SpaceSpaceIdArchivePatch failed:", res.error);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getSpaceMembersApiV1SpaceSpaceIdMembersGet

Get all members of a space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_space_members_api_v1_space__space_id__members_get" method="get" path="/api/v1/space/{space_id}/members" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.getSpaceMembersApiV1SpaceSpaceIdMembersGet({
    spaceId: 614422,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceGetSpaceMembersApiV1SpaceSpaceIdMembersGet } from "openapi/funcs/space-get-space-members-api-v1-space-space-id-members-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceGetSpaceMembersApiV1SpaceSpaceIdMembersGet(sdk, {
    spaceId: 614422,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceGetSpaceMembersApiV1SpaceSpaceIdMembersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSpaceMembersApiV1SpaceSpaceIdMembersGetRequest](../../models/operations/get-space-members-api-v1-space-space-id-members-get-request.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceMemberResponse[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## addSpaceMemberApiV1SpaceSpaceIdMembersPost

Add a member to a space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="add_space_member_api_v1_space__space_id__members_post" method="post" path="/api/v1/space/{space_id}/members" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.addSpaceMemberApiV1SpaceSpaceIdMembersPost({
    spaceId: 264528,
    body: {
      email: "Petra.Larson80@yahoo.com",
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
import { spaceAddSpaceMemberApiV1SpaceSpaceIdMembersPost } from "openapi/funcs/space-add-space-member-api-v1-space-space-id-members-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceAddSpaceMemberApiV1SpaceSpaceIdMembersPost(sdk, {
    spaceId: 264528,
    body: {
      email: "Petra.Larson80@yahoo.com",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceAddSpaceMemberApiV1SpaceSpaceIdMembersPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddSpaceMemberApiV1SpaceSpaceIdMembersPostRequest](../../models/operations/add-space-member-api-v1-space-space-id-members-post-request.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceMemberResponse](../../models/space-member-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## removeSpaceMemberApiV1SpaceSpaceIdMembersUserIdDelete

Remove a member from a space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_space_member_api_v1_space__space_id__members__user_id__delete" method="delete" path="/api/v1/space/{space_id}/members/{user_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.removeSpaceMemberApiV1SpaceSpaceIdMembersUserIdDelete({
    spaceId: 367023,
    userId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceRemoveSpaceMemberApiV1SpaceSpaceIdMembersUserIdDelete } from "openapi/funcs/space-remove-space-member-api-v1-space-space-id-members-user-id-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceRemoveSpaceMemberApiV1SpaceSpaceIdMembersUserIdDelete(sdk, {
    spaceId: 367023,
    userId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceRemoveSpaceMemberApiV1SpaceSpaceIdMembersUserIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveSpaceMemberApiV1SpaceSpaceIdMembersUserIdDeleteRequest](../../models/operations/remove-space-member-api-v1-space-space-id-members-user-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## updateSpaceMemberRoleApiV1SpaceSpaceIdMembersUserIdPatch

Update a space member's role

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_space_member_role_api_v1_space__space_id__members__user_id__patch" method="patch" path="/api/v1/space/{space_id}/members/{user_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.updateSpaceMemberRoleApiV1SpaceSpaceIdMembersUserIdPatch({
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
import { SDKCore } from "openapi/core.js";
import { spaceUpdateSpaceMemberRoleApiV1SpaceSpaceIdMembersUserIdPatch } from "openapi/funcs/space-update-space-member-role-api-v1-space-space-id-members-user-id-patch.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceUpdateSpaceMemberRoleApiV1SpaceSpaceIdMembersUserIdPatch(sdk, {
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
    console.log("spaceUpdateSpaceMemberRoleApiV1SpaceSpaceIdMembersUserIdPatch failed:", res.error);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getJoinableSpacesByUserApiV1SpaceByUserUserIdJoinableGet

Get spaces owned by a user that the current viewer can join.

This endpoint returns spaces where the target user is an owner and the current
viewer has permission to join based on visibility rules:
- PUBLIC: Always visible to all users
- TENANT: Visible only to users in the same organization
- MEMBERS_ONLY: Excluded from joinable list (requires approval)

Args:
    user_id: UUID string of the user whose spaces to retrieve
    limit: Maximum number of spaces to return (default: 10, max: 12)
    prev: Previous ID for cursor-based pagination
    sort_by: Field to sort by (default: "created_at")
    sort_order: Sort order - "asc" or "desc" (default: "desc")

Returns:
    List[GetSpaceListResponseDTO]: List of joinable spaces

Raises:
    HTTPException: 401 for unauthorized access, 500 for server errors

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_joinable_spaces_by_user_api_v1_space_by_user__user_id__joinable_get" method="get" path="/api/v1/space/by-user/{user_id}/joinable" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.getJoinableSpacesByUserApiV1SpaceByUserUserIdJoinableGet({
    userId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceGetJoinableSpacesByUserApiV1SpaceByUserUserIdJoinableGet } from "openapi/funcs/space-get-joinable-spaces-by-user-api-v1-space-by-user-user-id-joinable-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceGetJoinableSpacesByUserApiV1SpaceByUserUserIdJoinableGet(sdk, {
    userId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceGetJoinableSpacesByUserApiV1SpaceByUserUserIdJoinableGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.GetJoinableSpacesByUserApiV1SpaceByUserUserIdJoinableGetRequest](../../models/operations/get-joinable-spaces-by-user-api-v1-space-by-user-user-id-joinable-get-request.md) | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[models.GetSpaceListResponseDTO[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## joinSpaceApiV1SpaceSpaceIdJoinPost

Self-join the current user to a space if permitted.

This endpoint allows the current user to join a space based on visibility rules:
- PUBLIC: Anyone can join
- TENANT: Only users in the same organization can join
- MEMBERS_ONLY: Requires approval (returns 403)

Args:
    space_id: ID of the space to join

Returns:
    SpaceMemberResponse: Membership information after successful join

Raises:
    HTTPException:
        - 404: Space not found
        - 403: Permission denied (wrong tenant or members-only space)
        - 409: Already a member
        - 500: Server error

### Example Usage

<!-- UsageSnippet language="typescript" operationID="join_space_api_v1_space__space_id__join_post" method="post" path="/api/v1/space/{space_id}/join" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.joinSpaceApiV1SpaceSpaceIdJoinPost({
    spaceId: 648399,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceJoinSpaceApiV1SpaceSpaceIdJoinPost } from "openapi/funcs/space-join-space-api-v1-space-space-id-join-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceJoinSpaceApiV1SpaceSpaceIdJoinPost(sdk, {
    spaceId: 648399,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceJoinSpaceApiV1SpaceSpaceIdJoinPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.JoinSpaceApiV1SpaceSpaceIdJoinPostRequest](../../models/operations/join-space-api-v1-space-space-id-join-post-request.md)                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceMemberResponse](../../models/space-member-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## transferSpaceApiV1SpaceSpaceIdTransferPost

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
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.transferSpaceApiV1SpaceSpaceIdTransferPost({
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
import { SDKCore } from "openapi/core.js";
import { spaceTransferSpaceApiV1SpaceSpaceIdTransferPost } from "openapi/funcs/space-transfer-space-api-v1-space-space-id-transfer-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceTransferSpaceApiV1SpaceSpaceIdTransferPost(sdk, {
    spaceId: 533447,
    body: {
      targetOrgId: "6dfc9394-957c-47b7-b6ec-5dcb5a5702dd",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceTransferSpaceApiV1SpaceSpaceIdTransferPost failed:", res.error);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getSpaceChildrenApiV1SpaceSpaceIdChildrenGet

Get all child spaces of a given space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_space_children_api_v1_space__space_id__children_get" method="get" path="/api/v1/space/{space_id}/children" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.getSpaceChildrenApiV1SpaceSpaceIdChildrenGet({
    spaceId: 688784,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceGetSpaceChildrenApiV1SpaceSpaceIdChildrenGet } from "openapi/funcs/space-get-space-children-api-v1-space-space-id-children-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceGetSpaceChildrenApiV1SpaceSpaceIdChildrenGet(sdk, {
    spaceId: 688784,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceGetSpaceChildrenApiV1SpaceSpaceIdChildrenGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSpaceChildrenApiV1SpaceSpaceIdChildrenGetRequest](../../models/operations/get-space-children-api-v1-space-space-id-children-get-request.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SubSpaceDisplayData[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getSpaceParentApiV1SpaceSpaceIdParentGet

Get the parent space of a given space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_space_parent_api_v1_space__space_id__parent_get" method="get" path="/api/v1/space/{space_id}/parent" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.getSpaceParentApiV1SpaceSpaceIdParentGet({
    spaceId: 82395,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceGetSpaceParentApiV1SpaceSpaceIdParentGet } from "openapi/funcs/space-get-space-parent-api-v1-space-space-id-parent-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceGetSpaceParentApiV1SpaceSpaceIdParentGet(sdk, {
    spaceId: 82395,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceGetSpaceParentApiV1SpaceSpaceIdParentGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSpaceParentApiV1SpaceSpaceIdParentGetRequest](../../models/operations/get-space-parent-api-v1-space-space-id-parent-get-request.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetSpaceListResponseDTO](../../models/get-space-list-response-dto.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## detachSpaceFromParentApiV1SpaceSpaceIdParentDelete

Detach a space from its parent, making it standalone

### Example Usage

<!-- UsageSnippet language="typescript" operationID="detach_space_from_parent_api_v1_space__space_id__parent_delete" method="delete" path="/api/v1/space/{space_id}/parent" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.detachSpaceFromParentApiV1SpaceSpaceIdParentDelete({
    spaceId: 99694,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceDetachSpaceFromParentApiV1SpaceSpaceIdParentDelete } from "openapi/funcs/space-detach-space-from-parent-api-v1-space-space-id-parent-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceDetachSpaceFromParentApiV1SpaceSpaceIdParentDelete(sdk, {
    spaceId: 99694,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceDetachSpaceFromParentApiV1SpaceSpaceIdParentDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DetachSpaceFromParentApiV1SpaceSpaceIdParentDeleteRequest](../../models/operations/detach-space-from-parent-api-v1-space-space-id-parent-delete-request.md)        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetSpaceListResponseDTO](../../models/get-space-list-response-dto.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## updateSpaceParentApiV1SpaceSpaceIdParentPatch

Update the parent relationship of a space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_space_parent_api_v1_space__space_id__parent_patch" method="patch" path="/api/v1/space/{space_id}/parent" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.updateSpaceParentApiV1SpaceSpaceIdParentPatch({
    spaceId: 836081,
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceUpdateSpaceParentApiV1SpaceSpaceIdParentPatch } from "openapi/funcs/space-update-space-parent-api-v1-space-space-id-parent-patch.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceUpdateSpaceParentApiV1SpaceSpaceIdParentPatch(sdk, {
    spaceId: 836081,
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceUpdateSpaceParentApiV1SpaceSpaceIdParentPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateSpaceParentApiV1SpaceSpaceIdParentPatchRequest](../../models/operations/update-space-parent-api-v1-space-space-id-parent-patch-request.md)                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceWithRelationshipsResponse](../../models/space-with-relationships-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getSpaceHierarchyApiV1SpaceSpaceIdHierarchyGet

Get the full hierarchy tree starting from a given space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_space_hierarchy_api_v1_space__space_id__hierarchy_get" method="get" path="/api/v1/space/{space_id}/hierarchy" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.getSpaceHierarchyApiV1SpaceSpaceIdHierarchyGet({
    spaceId: 636659,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceGetSpaceHierarchyApiV1SpaceSpaceIdHierarchyGet } from "openapi/funcs/space-get-space-hierarchy-api-v1-space-space-id-hierarchy-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceGetSpaceHierarchyApiV1SpaceSpaceIdHierarchyGet(sdk, {
    spaceId: 636659,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceGetSpaceHierarchyApiV1SpaceSpaceIdHierarchyGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSpaceHierarchyApiV1SpaceSpaceIdHierarchyGetRequest](../../models/operations/get-space-hierarchy-api-v1-space-space-id-hierarchy-get-request.md)                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceHierarchyItem](../../models/space-hierarchy-item.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## bulkUpdateSpaceParentApiV1SpaceBulkParentPatch

Bulk update parent relationship for multiple spaces

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bulk_update_space_parent_api_v1_space_bulk_parent_patch" method="patch" path="/api/v1/space/bulk-parent" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.bulkUpdateSpaceParentApiV1SpaceBulkParentPatch({
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
import { SDKCore } from "openapi/core.js";
import { spaceBulkUpdateSpaceParentApiV1SpaceBulkParentPatch } from "openapi/funcs/space-bulk-update-space-parent-api-v1-space-bulk-parent-patch.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceBulkUpdateSpaceParentApiV1SpaceBulkParentPatch(sdk, {
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
    console.log("spaceBulkUpdateSpaceParentApiV1SpaceBulkParentPatch failed:", res.error);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## unpublishSpaceApiV1SpaceSpaceIdUnpublishPost

Mark space as draft (unpublished), preserving version history

### Example Usage

<!-- UsageSnippet language="typescript" operationID="unpublish_space_api_v1_space__space_id__unpublish_post" method="post" path="/api/v1/space/{space_id}/unpublish" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await sdk.space.unpublishSpaceApiV1SpaceSpaceIdUnpublishPost({
    spaceId: 36090,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceUnpublishSpaceApiV1SpaceSpaceIdUnpublishPost } from "openapi/funcs/space-unpublish-space-api-v1-space-space-id-unpublish-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceUnpublishSpaceApiV1SpaceSpaceIdUnpublishPost(sdk, {
    spaceId: 36090,
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("spaceUnpublishSpaceApiV1SpaceSpaceIdUnpublishPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UnpublishSpaceApiV1SpaceSpaceIdUnpublishPostRequest](../../models/operations/unpublish-space-api-v1-space-space-id-unpublish-post-request.md)                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## listSpaceVersionsApiV1SpaceSpaceIdVersionsGet

Get all published versions of a space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_space_versions_api_v1_space__space_id__versions_get" method="get" path="/api/v1/space/{space_id}/versions" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.listSpaceVersionsApiV1SpaceSpaceIdVersionsGet({
    spaceId: 177956,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceListSpaceVersionsApiV1SpaceSpaceIdVersionsGet } from "openapi/funcs/space-list-space-versions-api-v1-space-space-id-versions-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceListSpaceVersionsApiV1SpaceSpaceIdVersionsGet(sdk, {
    spaceId: 177956,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceListSpaceVersionsApiV1SpaceSpaceIdVersionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSpaceVersionsApiV1SpaceSpaceIdVersionsGetRequest](../../models/operations/list-space-versions-api-v1-space-space-id-versions-get-request.md)                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceVersionListResponse](../../models/space-version-list-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getLatestSpaceVersionApiV1SpaceSpaceIdVersionsLatestGet

Retrieve the most recent published version of a space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_latest_space_version_api_v1_space__space_id__versions_latest_get" method="get" path="/api/v1/space/{space_id}/versions/latest" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.getLatestSpaceVersionApiV1SpaceSpaceIdVersionsLatestGet({
    spaceId: 149990,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceGetLatestSpaceVersionApiV1SpaceSpaceIdVersionsLatestGet } from "openapi/funcs/space-get-latest-space-version-api-v1-space-space-id-versions-latest-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceGetLatestSpaceVersionApiV1SpaceSpaceIdVersionsLatestGet(sdk, {
    spaceId: 149990,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceGetLatestSpaceVersionApiV1SpaceSpaceIdVersionsLatestGet failed:", res.error);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getSpaceVersionApiV1SpaceSpaceIdVersionsVersionNumberGet

Retrieve a specific published version of a space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_space_version_api_v1_space__space_id__versions__version_number__get" method="get" path="/api/v1/space/{space_id}/versions/{version_number}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.getSpaceVersionApiV1SpaceSpaceIdVersionsVersionNumberGet({
    spaceId: 514370,
    versionNumber: 712285,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceGetSpaceVersionApiV1SpaceSpaceIdVersionsVersionNumberGet } from "openapi/funcs/space-get-space-version-api-v1-space-space-id-versions-version-number-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceGetSpaceVersionApiV1SpaceSpaceIdVersionsVersionNumberGet(sdk, {
    spaceId: 514370,
    versionNumber: 712285,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceGetSpaceVersionApiV1SpaceSpaceIdVersionsVersionNumberGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                            | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                            | [operations.GetSpaceVersionApiV1SpaceSpaceIdVersionsVersionNumberGetRequest](../../models/operations/get-space-version-api-v1-space-space-id-versions-version-number-get-request.md) | :heavy_check_mark:                                                                                                                                                                   | The request object to use for the request.                                                                                                                                           |
| `options`                                                                                                                                                                            | RequestOptions                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                              | :heavy_minus_sign:                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.       |
| `options.retries`                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                     |

### Response

**Promise\<[models.SpaceVersionRead](../../models/space-version-read.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## compareSpaceVersionsApiV1SpaceSpaceIdVersionsCompareGet

Compare two versions and see what changed

### Example Usage

<!-- UsageSnippet language="typescript" operationID="compare_space_versions_api_v1_space__space_id__versions_compare_get" method="get" path="/api/v1/space/{space_id}/versions/compare" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.compareSpaceVersionsApiV1SpaceSpaceIdVersionsCompareGet({
    spaceId: 218446,
    versionA: 97530,
    versionB: 466127,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceCompareSpaceVersionsApiV1SpaceSpaceIdVersionsCompareGet } from "openapi/funcs/space-compare-space-versions-api-v1-space-space-id-versions-compare-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceCompareSpaceVersionsApiV1SpaceSpaceIdVersionsCompareGet(sdk, {
    spaceId: 218446,
    versionA: 97530,
    versionB: 466127,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceCompareSpaceVersionsApiV1SpaceSpaceIdVersionsCompareGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                         | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                         | [operations.CompareSpaceVersionsApiV1SpaceSpaceIdVersionsCompareGetRequest](../../models/operations/compare-space-versions-api-v1-space-space-id-versions-compare-get-request.md) | :heavy_check_mark:                                                                                                                                                                | The request object to use for the request.                                                                                                                                        |
| `options`                                                                                                                                                                         | RequestOptions                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                | Used to set various options for making HTTP requests.                                                                                                                             |
| `options.fetchOptions`                                                                                                                                                            | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                           | :heavy_minus_sign:                                                                                                                                                                | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.    |
| `options.retries`                                                                                                                                                                 | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                | Enables retrying HTTP requests under certain failure conditions.                                                                                                                  |

### Response

**Promise\<[models.VersionComparisonResponse](../../models/version-comparison-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## rollbackSpaceApiV1SpaceSpaceIdRollbackPost

Restore space to a specific published version

### Example Usage

<!-- UsageSnippet language="typescript" operationID="rollback_space_api_v1_space__space_id__rollback_post" method="post" path="/api/v1/space/{space_id}/rollback" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.rollbackSpaceApiV1SpaceSpaceIdRollbackPost({
    spaceId: 146817,
    body: {
      versionNumber: 842271,
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
import { spaceRollbackSpaceApiV1SpaceSpaceIdRollbackPost } from "openapi/funcs/space-rollback-space-api-v1-space-space-id-rollback-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceRollbackSpaceApiV1SpaceSpaceIdRollbackPost(sdk, {
    spaceId: 146817,
    body: {
      versionNumber: 842271,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceRollbackSpaceApiV1SpaceSpaceIdRollbackPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RollbackSpaceApiV1SpaceSpaceIdRollbackPostRequest](../../models/operations/rollback-space-api-v1-space-space-id-rollback-post-request.md)                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetSpaceListResponseDTO](../../models/get-space-list-response-dto.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## listSpaceRolesApiV1SpaceSpacesSpaceIdRolesGet

List all roles for a space.

Requires space read permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_space_roles_api_v1_space_spaces__space_id__roles__get" method="get" path="/api/v1/space/spaces/{space_id}/roles/" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.listSpaceRolesApiV1SpaceSpacesSpaceIdRolesGet({
    spaceId: 723392,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceListSpaceRolesApiV1SpaceSpacesSpaceIdRolesGet } from "openapi/funcs/space-list-space-roles-api-v1-space-spaces-space-id-roles-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceListSpaceRolesApiV1SpaceSpacesSpaceIdRolesGet(sdk, {
    spaceId: 723392,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceListSpaceRolesApiV1SpaceSpacesSpaceIdRolesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSpaceRolesApiV1SpaceSpacesSpaceIdRolesGetRequest](../../models/operations/list-space-roles-api-v1-space-spaces-space-id-roles-get-request.md)                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceRoleRead[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## createSpaceRoleApiV1SpaceSpacesSpaceIdRolesPost

Create a new role for a space.

Requires space management permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_space_role_api_v1_space_spaces__space_id__roles__post" method="post" path="/api/v1/space/spaces/{space_id}/roles/" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.createSpaceRoleApiV1SpaceSpacesSpaceIdRolesPost({
    spaceId: 14917,
    body: {
      name: "<value>",
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
import { spaceCreateSpaceRoleApiV1SpaceSpacesSpaceIdRolesPost } from "openapi/funcs/space-create-space-role-api-v1-space-spaces-space-id-roles-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceCreateSpaceRoleApiV1SpaceSpacesSpaceIdRolesPost(sdk, {
    spaceId: 14917,
    body: {
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceCreateSpaceRoleApiV1SpaceSpacesSpaceIdRolesPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateSpaceRoleApiV1SpaceSpacesSpaceIdRolesPostRequest](../../models/operations/create-space-role-api-v1-space-spaces-space-id-roles-post-request.md)              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceRoleRead](../../models/space-role-read.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdGet

Get a specific space role by ID.

Requires space read permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_space_role_api_v1_space_spaces__space_id__roles__role_id__get" method="get" path="/api/v1/space/spaces/{space_id}/roles/{role_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.getSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdGet({
    spaceId: 812713,
    roleId: "75d3a981-642f-4ac9-8643-dd2d4cf0f3c1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceGetSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdGet } from "openapi/funcs/space-get-space-role-api-v1-space-spaces-space-id-roles-role-id-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceGetSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdGet(sdk, {
    spaceId: 812713,
    roleId: "75d3a981-642f-4ac9-8643-dd2d4cf0f3c1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceGetSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdGetRequest](../../models/operations/get-space-role-api-v1-space-spaces-space-id-roles-role-id-get-request.md)        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceRoleRead](../../models/space-role-read.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## updateSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPut

Update a space role.

Requires space management permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_space_role_api_v1_space_spaces__space_id__roles__role_id__put" method="put" path="/api/v1/space/spaces/{space_id}/roles/{role_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.updateSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPut({
    spaceId: 771152,
    roleId: "af40c759-21a2-41ec-9835-58bf03edd24d",
    body: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceUpdateSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPut } from "openapi/funcs/space-update-space-role-api-v1-space-spaces-space-id-roles-role-id-put.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceUpdateSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPut(sdk, {
    spaceId: 771152,
    roleId: "af40c759-21a2-41ec-9835-58bf03edd24d",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceUpdateSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPutRequest](../../models/operations/update-space-role-api-v1-space-spaces-space-id-roles-role-id-put-request.md)  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceRoleRead](../../models/space-role-read.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## deleteSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdDelete

Delete a space role.

Requires space management permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_space_role_api_v1_space_spaces__space_id__roles__role_id__delete" method="delete" path="/api/v1/space/spaces/{space_id}/roles/{role_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await sdk.space.deleteSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdDelete({
    spaceId: 603327,
    roleId: "9f590db2-df4b-4631-9086-522755626b91",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceDeleteSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdDelete } from "openapi/funcs/space-delete-space-role-api-v1-space-spaces-space-id-roles-role-id-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceDeleteSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdDelete(sdk, {
    spaceId: 603327,
    roleId: "9f590db2-df4b-4631-9086-522755626b91",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("spaceDeleteSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                           | Type                                                                                                                                                                                | Required                                                                                                                                                                            | Description                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                           | [operations.DeleteSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdDeleteRequest](../../models/operations/delete-space-role-api-v1-space-spaces-space-id-roles-role-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                  | The request object to use for the request.                                                                                                                                          |
| `options`                                                                                                                                                                           | RequestOptions                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                               |
| `options.fetchOptions`                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                             | :heavy_minus_sign:                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.      |
| `options.retries`                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                    |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## assignPermissionToSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPost

Assign a permission to a space role.

Requires space management permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="assign_permission_to_space_role_api_v1_space_spaces__space_id__roles__role_id__permissions_post" method="post" path="/api/v1/space/spaces/{space_id}/roles/{role_id}/permissions" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.assignPermissionToSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPost({
    spaceId: 447317,
    roleId: "cb79fecb-5593-4d09-a2fc-d78fe8a9ffc9",
    body: {
      permissionId: "34688f2f-8cd7-466e-afec-1c0558de48c7",
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
import {
  spaceAssignPermissionToSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPost,
} from "openapi/funcs/space-assign-permission-to-space-role-api-v1-space-spaces-space-id-roles-role-id-permissions-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceAssignPermissionToSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPost(sdk, {
    spaceId: 447317,
    roleId: "cb79fecb-5593-4d09-a2fc-d78fe8a9ffc9",
    body: {
      permissionId: "34688f2f-8cd7-466e-afec-1c0558de48c7",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceAssignPermissionToSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                        | [operations.AssignPermissionToSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPostRequest](../../models/operations/assign-permission-to-space-role-api-v1-space-spaces-space-id-roles-role-id-permissions-post-request.md) | :heavy_check_mark:                                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                                       |
| `options`                                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                   |
| `options.retries`                                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                 |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## removePermissionFromSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPermissionIdDelete

Remove a permission from a space role.

Requires space management permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_permission_from_space_role_api_v1_space_spaces__space_id__roles__role_id__permissions__permission_id__delete" method="delete" path="/api/v1/space/spaces/{space_id}/roles/{role_id}/permissions/{permission_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await sdk.space.removePermissionFromSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPermissionIdDelete({
    spaceId: 285337,
    roleId: "1c09981c-a99c-4295-bc98-bbe1f8b1d79c",
    permissionId: "1ac9eed7-e946-491e-b666-52ce12192498",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import {
  spaceRemovePermissionFromSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPermissionIdDelete,
} from "openapi/funcs/space-remove-permission-from-space-role-api-v1-space-spaces-space-id-roles-role-id-permissions-permission-id-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceRemovePermissionFromSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPermissionIdDelete(sdk, {
    spaceId: 285337,
    roleId: "1c09981c-a99c-4295-bc98-bbe1f8b1d79c",
    permissionId: "1ac9eed7-e946-491e-b666-52ce12192498",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("spaceRemovePermissionFromSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPermissionIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                                                          | [operations.RemovePermissionFromSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPermissionIdDeleteRequest](../../models/operations/remove-permission-from-space-role-api-v1-space-spaces-space-id-roles-role-id-permissions-permission-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                                                                                         |
| `options`                                                                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                     |
| `options.retries`                                                                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                   |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getUserSpaceRolesApiV1SpaceSpacesSpaceIdMembersUserIdRolesGet

Get all space roles for a user in a specific space.

Requires space read permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_user_space_roles_api_v1_space_spaces__space_id__members__user_id__roles_get" method="get" path="/api/v1/space/spaces/{space_id}/members/{user_id}/roles" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.getUserSpaceRolesApiV1SpaceSpacesSpaceIdMembersUserIdRolesGet({
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
import { SDKCore } from "openapi/core.js";
import { spaceGetUserSpaceRolesApiV1SpaceSpacesSpaceIdMembersUserIdRolesGet } from "openapi/funcs/space-get-user-space-roles-api-v1-space-spaces-space-id-members-user-id-roles-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceGetUserSpaceRolesApiV1SpaceSpacesSpaceIdMembersUserIdRolesGet(sdk, {
    spaceId: 960716,
    userId: "f30afe95-41fa-4a51-93b6-79ab1718f195",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceGetUserSpaceRolesApiV1SpaceSpacesSpaceIdMembersUserIdRolesGet failed:", res.error);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## assignUserToSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesPost

Assign a user to a space role.

Requires space member management permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="assign_user_to_space_role_api_v1_space_spaces__space_id__members__user_id__roles_post" method="post" path="/api/v1/space/spaces/{space_id}/members/{user_id}/roles" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.space.assignUserToSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesPost({
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
import { SDKCore } from "openapi/core.js";
import { spaceAssignUserToSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesPost } from "openapi/funcs/space-assign-user-to-space-role-api-v1-space-spaces-space-id-members-user-id-roles-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceAssignUserToSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesPost(sdk, {
    spaceId: 462735,
    userId: "a6ddf73b-a020-4fa8-a6a8-b25734353b72",
    spaceRoleId: "e42784a5-701f-4c53-81be-a09ec6960e13",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceAssignUserToSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesPost failed:", res.error);
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

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## removeUserFromSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesSpaceRoleIdDelete

Remove a user from a space role.

Requires space member management permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_user_from_space_role_api_v1_space_spaces__space_id__members__user_id__roles__space_role_id__delete" method="delete" path="/api/v1/space/spaces/{space_id}/members/{user_id}/roles/{space_role_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await sdk.space.removeUserFromSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesSpaceRoleIdDelete({
    spaceId: 93087,
    userId: "ff783c17-9a8c-49f9-a6ec-2d074a46f119",
    spaceRoleId: "fb388886-8ef8-4efc-86a2-7b069003b7c6",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import {
  spaceRemoveUserFromSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesSpaceRoleIdDelete,
} from "openapi/funcs/space-remove-user-from-space-role-api-v1-space-spaces-space-id-members-user-id-roles-space-role-id-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceRemoveUserFromSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesSpaceRoleIdDelete(sdk, {
    spaceId: 93087,
    userId: "ff783c17-9a8c-49f9-a6ec-2d074a46f119",
    spaceRoleId: "fb388886-8ef8-4efc-86a2-7b069003b7c6",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("spaceRemoveUserFromSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesSpaceRoleIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                     | [operations.RemoveUserFromSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesSpaceRoleIdDeleteRequest](../../models/operations/remove-user-from-space-role-api-v1-space-spaces-space-id-members-user-id-roles-space-role-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                                                                            | The request object to use for the request.                                                                                                                                                                                                    |
| `options`                                                                                                                                                                                                                                     | RequestOptions                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                            | Used to set various options for making HTTP requests.                                                                                                                                                                                         |
| `options.fetchOptions`                                                                                                                                                                                                                        | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                            | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                |
| `options.retries`                                                                                                                                                                                                                             | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                            | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                              |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |