# CustomRoles

## Overview

### Available Operations

* [listRolesEndpointApiV1ApiV1RolesGet](#listrolesendpointapiv1apiv1rolesget) - List Roles Endpoint
* [createRoleEndpointApiV1ApiV1RolesPost](#createroleendpointapiv1apiv1rolespost) - Create Role Endpoint
* [getRoleEndpointApiV1ApiV1RolesRoleIdGet](#getroleendpointapiv1apiv1rolesroleidget) - Get Role Endpoint
* [updateRoleEndpointApiV1ApiV1RolesRoleIdPut](#updateroleendpointapiv1apiv1rolesroleidput) - Update Role Endpoint
* [deleteRoleEndpointApiV1ApiV1RolesRoleIdDelete](#deleteroleendpointapiv1apiv1rolesroleiddelete) - Delete Role Endpoint
* [setPermissionsEndpointApiV1ApiV1RolesRoleIdPermissionsPut](#setpermissionsendpointapiv1apiv1rolesroleidpermissionsput) - Set Permissions Endpoint
* [addPermissionEndpointApiV1ApiV1RolesRoleIdPermissionsPost](#addpermissionendpointapiv1apiv1rolesroleidpermissionspost) - Add Permission Endpoint
* [removePermissionEndpointApiV1ApiV1RolesRoleIdPermissionsPermissionCodeDelete](#removepermissionendpointapiv1apiv1rolesroleidpermissionspermissioncodedelete) - Remove Permission Endpoint
* [getMyPermissionsEndpointApiV1ApiV1RolesMePermissionsGet](#getmypermissionsendpointapiv1apiv1rolesmepermissionsget) - Get My Permissions Endpoint
* [assignRoleToUserEndpointApiV1ApiV1RolesUsersUserIdRolesPost](#assignroletouserendpointapiv1apiv1rolesusersuseridrolespost) - Assign Role To User Endpoint
* [removeRoleFromUserEndpointApiV1ApiV1RolesUsersUserIdRolesRoleIdDelete](#removerolefromuserendpointapiv1apiv1rolesusersuseridrolesroleiddelete) - Remove Role From User Endpoint

## listRolesEndpointApiV1ApiV1RolesGet

List all custom roles for an organization.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_roles_endpoint_api_v1_api_v1_roles_get" method="get" path="/api/v1/api/v1/roles" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.customRoles.listRolesEndpointApiV1ApiV1RolesGet({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { customRolesListRolesEndpointApiV1ApiV1RolesGet } from "openapi/funcs/custom-roles-list-roles-endpoint-api-v1-api-v1-roles-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesListRolesEndpointApiV1ApiV1RolesGet(sdk, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customRolesListRolesEndpointApiV1ApiV1RolesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListRolesEndpointApiV1ApiV1RolesGetRequest](../../models/operations/list-roles-endpoint-api-v1-api-v1-roles-get-request.md)                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RoleListResponse[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## createRoleEndpointApiV1ApiV1RolesPost

Create a new custom role.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_role_endpoint_api_v1_api_v1_roles_post" method="post" path="/api/v1/api/v1/roles" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.customRoles.createRoleEndpointApiV1ApiV1RolesPost({
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
import { customRolesCreateRoleEndpointApiV1ApiV1RolesPost } from "openapi/funcs/custom-roles-create-role-endpoint-api-v1-api-v1-roles-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesCreateRoleEndpointApiV1ApiV1RolesPost(sdk, {
    body: {
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customRolesCreateRoleEndpointApiV1ApiV1RolesPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateRoleEndpointApiV1ApiV1RolesPostRequest](../../models/operations/create-role-endpoint-api-v1-api-v1-roles-post-request.md)                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RoleResponse](../../models/role-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getRoleEndpointApiV1ApiV1RolesRoleIdGet

Get a single custom role by ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_role_endpoint_api_v1_api_v1_roles__role_id__get" method="get" path="/api/v1/api/v1/roles/{role_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.customRoles.getRoleEndpointApiV1ApiV1RolesRoleIdGet({
    roleId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { customRolesGetRoleEndpointApiV1ApiV1RolesRoleIdGet } from "openapi/funcs/custom-roles-get-role-endpoint-api-v1-api-v1-roles-role-id-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesGetRoleEndpointApiV1ApiV1RolesRoleIdGet(sdk, {
    roleId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customRolesGetRoleEndpointApiV1ApiV1RolesRoleIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRoleEndpointApiV1ApiV1RolesRoleIdGetRequest](../../models/operations/get-role-endpoint-api-v1-api-v1-roles-role-id-get-request.md)                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RoleResponse](../../models/role-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## updateRoleEndpointApiV1ApiV1RolesRoleIdPut

Update an existing custom role.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_role_endpoint_api_v1_api_v1_roles__role_id__put" method="put" path="/api/v1/api/v1/roles/{role_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.customRoles.updateRoleEndpointApiV1ApiV1RolesRoleIdPut({
    roleId: "<id>",
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
import { customRolesUpdateRoleEndpointApiV1ApiV1RolesRoleIdPut } from "openapi/funcs/custom-roles-update-role-endpoint-api-v1-api-v1-roles-role-id-put.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesUpdateRoleEndpointApiV1ApiV1RolesRoleIdPut(sdk, {
    roleId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customRolesUpdateRoleEndpointApiV1ApiV1RolesRoleIdPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateRoleEndpointApiV1ApiV1RolesRoleIdPutRequest](../../models/operations/update-role-endpoint-api-v1-api-v1-roles-role-id-put-request.md)                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RoleResponse](../../models/role-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## deleteRoleEndpointApiV1ApiV1RolesRoleIdDelete

Delete a custom role.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_role_endpoint_api_v1_api_v1_roles__role_id__delete" method="delete" path="/api/v1/api/v1/roles/{role_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await sdk.customRoles.deleteRoleEndpointApiV1ApiV1RolesRoleIdDelete({
    roleId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { customRolesDeleteRoleEndpointApiV1ApiV1RolesRoleIdDelete } from "openapi/funcs/custom-roles-delete-role-endpoint-api-v1-api-v1-roles-role-id-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesDeleteRoleEndpointApiV1ApiV1RolesRoleIdDelete(sdk, {
    roleId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("customRolesDeleteRoleEndpointApiV1ApiV1RolesRoleIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteRoleEndpointApiV1ApiV1RolesRoleIdDeleteRequest](../../models/operations/delete-role-endpoint-api-v1-api-v1-roles-role-id-delete-request.md)                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## setPermissionsEndpointApiV1ApiV1RolesRoleIdPermissionsPut

Set all permissions for a role (replaces existing).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="set_permissions_endpoint_api_v1_api_v1_roles__role_id__permissions_put" method="put" path="/api/v1/api/v1/roles/{role_id}/permissions" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.customRoles.setPermissionsEndpointApiV1ApiV1RolesRoleIdPermissionsPut({
    roleId: "<id>",
    body: {
      permissionCodes: [
        "<value 1>",
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
import { SDKCore } from "openapi/core.js";
import { customRolesSetPermissionsEndpointApiV1ApiV1RolesRoleIdPermissionsPut } from "openapi/funcs/custom-roles-set-permissions-endpoint-api-v1-api-v1-roles-role-id-permissions-put.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesSetPermissionsEndpointApiV1ApiV1RolesRoleIdPermissionsPut(sdk, {
    roleId: "<id>",
    body: {
      permissionCodes: [
        "<value 1>",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customRolesSetPermissionsEndpointApiV1ApiV1RolesRoleIdPermissionsPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.SetPermissionsEndpointApiV1ApiV1RolesRoleIdPermissionsPutRequest](../../models/operations/set-permissions-endpoint-api-v1-api-v1-roles-role-id-permissions-put-request.md) | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## addPermissionEndpointApiV1ApiV1RolesRoleIdPermissionsPost

Add a permission to a role.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="add_permission_endpoint_api_v1_api_v1_roles__role_id__permissions_post" method="post" path="/api/v1/api/v1/roles/{role_id}/permissions" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.customRoles.addPermissionEndpointApiV1ApiV1RolesRoleIdPermissionsPost({
    roleId: "<id>",
    body: {
      permissionCode: "<value>",
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
import { customRolesAddPermissionEndpointApiV1ApiV1RolesRoleIdPermissionsPost } from "openapi/funcs/custom-roles-add-permission-endpoint-api-v1-api-v1-roles-role-id-permissions-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesAddPermissionEndpointApiV1ApiV1RolesRoleIdPermissionsPost(sdk, {
    roleId: "<id>",
    body: {
      permissionCode: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customRolesAddPermissionEndpointApiV1ApiV1RolesRoleIdPermissionsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.AddPermissionEndpointApiV1ApiV1RolesRoleIdPermissionsPostRequest](../../models/operations/add-permission-endpoint-api-v1-api-v1-roles-role-id-permissions-post-request.md) | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## removePermissionEndpointApiV1ApiV1RolesRoleIdPermissionsPermissionCodeDelete

Remove a permission from a role.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_permission_endpoint_api_v1_api_v1_roles__role_id__permissions__permission_code__delete" method="delete" path="/api/v1/api/v1/roles/{role_id}/permissions/{permission_code}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await sdk.customRoles.removePermissionEndpointApiV1ApiV1RolesRoleIdPermissionsPermissionCodeDelete({
    roleId: "<id>",
    permissionCode: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import {
  customRolesRemovePermissionEndpointApiV1ApiV1RolesRoleIdPermissionsPermissionCodeDelete,
} from "openapi/funcs/custom-roles-remove-permission-endpoint-api-v1-api-v1-roles-role-id-permissions-permission-code-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesRemovePermissionEndpointApiV1ApiV1RolesRoleIdPermissionsPermissionCodeDelete(sdk, {
    roleId: "<id>",
    permissionCode: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("customRolesRemovePermissionEndpointApiV1ApiV1RolesRoleIdPermissionsPermissionCodeDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                      | [operations.RemovePermissionEndpointApiV1ApiV1RolesRoleIdPermissionsPermissionCodeDeleteRequest](../../models/operations/remove-permission-endpoint-api-v1-api-v1-roles-role-id-permissions-permission-code-delete-request.md) | :heavy_check_mark:                                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                                     |
| `options`                                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                 |
| `options.retries`                                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getMyPermissionsEndpointApiV1ApiV1RolesMePermissionsGet

Get current user's effective permissions.

This returns the permissions from the JWT token claims, augmented with
any custom role permissions from the database.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_my_permissions_endpoint_api_v1_api_v1_roles_me_permissions_get" method="get" path="/api/v1/api/v1/roles/me/permissions" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.customRoles.getMyPermissionsEndpointApiV1ApiV1RolesMePermissionsGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { customRolesGetMyPermissionsEndpointApiV1ApiV1RolesMePermissionsGet } from "openapi/funcs/custom-roles-get-my-permissions-endpoint-api-v1-api-v1-roles-me-permissions-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesGetMyPermissionsEndpointApiV1ApiV1RolesMePermissionsGet(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customRolesGetMyPermissionsEndpointApiV1ApiV1RolesMePermissionsGet failed:", res.error);
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

**Promise\<[models.PermissionResponse[]](../../models/.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## assignRoleToUserEndpointApiV1ApiV1RolesUsersUserIdRolesPost

Assign a role to a user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="assign_role_to_user_endpoint_api_v1_api_v1_roles_users__user_id__roles_post" method="post" path="/api/v1/api/v1/roles/users/{user_id}/roles" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.customRoles.assignRoleToUserEndpointApiV1ApiV1RolesUsersUserIdRolesPost({
    userId: "<id>",
    roleId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { customRolesAssignRoleToUserEndpointApiV1ApiV1RolesUsersUserIdRolesPost } from "openapi/funcs/custom-roles-assign-role-to-user-endpoint-api-v1-api-v1-roles-users-user-id-roles-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesAssignRoleToUserEndpointApiV1ApiV1RolesUsersUserIdRolesPost(sdk, {
    userId: "<id>",
    roleId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customRolesAssignRoleToUserEndpointApiV1ApiV1RolesUsersUserIdRolesPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                     | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                     | [operations.AssignRoleToUserEndpointApiV1ApiV1RolesUsersUserIdRolesPostRequest](../../models/operations/assign-role-to-user-endpoint-api-v1-api-v1-roles-users-user-id-roles-post-request.md) | :heavy_check_mark:                                                                                                                                                                            | The request object to use for the request.                                                                                                                                                    |
| `options`                                                                                                                                                                                     | RequestOptions                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                            | Used to set various options for making HTTP requests.                                                                                                                                         |
| `options.fetchOptions`                                                                                                                                                                        | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                       | :heavy_minus_sign:                                                                                                                                                                            | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                |
| `options.retries`                                                                                                                                                                             | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                            | Enables retrying HTTP requests under certain failure conditions.                                                                                                                              |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## removeRoleFromUserEndpointApiV1ApiV1RolesUsersUserIdRolesRoleIdDelete

Remove a role from a user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_role_from_user_endpoint_api_v1_api_v1_roles_users__user_id__roles__role_id__delete" method="delete" path="/api/v1/api/v1/roles/users/{user_id}/roles/{role_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await sdk.customRoles.removeRoleFromUserEndpointApiV1ApiV1RolesUsersUserIdRolesRoleIdDelete({
    userId: "<id>",
    roleId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { customRolesRemoveRoleFromUserEndpointApiV1ApiV1RolesUsersUserIdRolesRoleIdDelete } from "openapi/funcs/custom-roles-remove-role-from-user-endpoint-api-v1-api-v1-roles-users-user-id-roles-role-id-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesRemoveRoleFromUserEndpointApiV1ApiV1RolesUsersUserIdRolesRoleIdDelete(sdk, {
    userId: "<id>",
    roleId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("customRolesRemoveRoleFromUserEndpointApiV1ApiV1RolesUsersUserIdRolesRoleIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                           | Type                                                                                                                                                                                                                | Required                                                                                                                                                                                                            | Description                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                           | [operations.RemoveRoleFromUserEndpointApiV1ApiV1RolesUsersUserIdRolesRoleIdDeleteRequest](../../models/operations/remove-role-from-user-endpoint-api-v1-api-v1-roles-users-user-id-roles-role-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                                                  | The request object to use for the request.                                                                                                                                                                          |
| `options`                                                                                                                                                                                                           | RequestOptions                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                                                               |
| `options.fetchOptions`                                                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                      |
| `options.retries`                                                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                    |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |