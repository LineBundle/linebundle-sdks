# SpaceRoles

## Overview

### Available Operations

* [listSpaceRolesApiV1SpaceSpacesSpaceIdRolesGet](#listspacerolesapiv1spacespacesspaceidrolesget) - List Space Roles
* [createSpaceRoleApiV1SpaceSpacesSpaceIdRolesPost](#createspaceroleapiv1spacespacesspaceidrolespost) - Create Space Role
* [getSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdGet](#getspaceroleapiv1spacespacesspaceidrolesroleidget) - Get Space Role
* [updateSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPut](#updatespaceroleapiv1spacespacesspaceidrolesroleidput) - Update Space Role
* [deleteSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdDelete](#deletespaceroleapiv1spacespacesspaceidrolesroleiddelete) - Delete Space Role
* [assignPermissionToSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPost](#assignpermissiontospaceroleapiv1spacespacesspaceidrolesroleidpermissionspost) - Assign Permission To Space Role
* [removePermissionFromSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPermissionIdDelete](#removepermissionfromspaceroleapiv1spacespacesspaceidrolesroleidpermissionspermissioniddelete) - Remove Permission From Space Role

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
  const result = await sdk.spaceRoles.listSpaceRolesApiV1SpaceSpacesSpaceIdRolesGet({
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
  const result = await sdk.spaceRoles.createSpaceRoleApiV1SpaceSpacesSpaceIdRolesPost({
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
  const result = await sdk.spaceRoles.getSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdGet({
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
  const result = await sdk.spaceRoles.updateSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPut({
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
  await sdk.spaceRoles.deleteSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdDelete({
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
  const result = await sdk.spaceRoles.assignPermissionToSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPost({
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
  await sdk.spaceRoles.removePermissionFromSpaceRoleApiV1SpaceSpacesSpaceIdRolesRoleIdPermissionsPermissionIdDelete({
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