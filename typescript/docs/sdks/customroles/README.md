# CustomRoles

## Overview

### Available Operations

* [list](#list) - List Roles Endpoint
* [create](#create) - Create Role Endpoint
* [get](#get) - Get Role Endpoint
* [setPermissions](#setpermissions) - Set Permissions Endpoint
* [addPermission](#addpermission) - Add Permission Endpoint
* [removePermission](#removepermission) - Remove Permission Endpoint
* [assignToUser](#assigntouser) - Assign Role To User Endpoint
* [removeUserRole](#removeuserrole) - Remove Role From User Endpoint
* [update](#update) - Update Role Endpoint
* [getMyPermissions](#getmypermissions) - Get My Permissions Endpoint

## list

List all custom roles for an organization.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_roles_endpoint_api_v1_roles_get" method="get" path="/api/v1/roles" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.customRoles.list({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { customRolesList } from "@linebundle-sdk/ts/funcs/custom-roles-list.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesList(linebundle, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customRolesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListRolesEndpointApiV1RolesGetRequest](../../models/operations/list-roles-endpoint-api-v1-roles-get-request.md)                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RoleListResponse[]](../../models/.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## create

Create a new custom role.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_role_endpoint_api_v1_roles_post" method="post" path="/api/v1/roles" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.customRoles.create({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { customRolesCreate } from "@linebundle-sdk/ts/funcs/custom-roles-create.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesCreate(linebundle, {
    body: {
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customRolesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateRoleEndpointApiV1RolesPostRequest](../../models/operations/create-role-endpoint-api-v1-roles-post-request.md)                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RoleResponse](../../models/role-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get

Get a single custom role by ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_role_endpoint_api_v1_roles__role_id__get" method="get" path="/api/v1/roles/{role_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.customRoles.get({
    roleId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { customRolesGet } from "@linebundle-sdk/ts/funcs/custom-roles-get.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesGet(linebundle, {
    roleId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customRolesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRoleEndpointApiV1RolesRoleIdGetRequest](../../models/operations/get-role-endpoint-api-v1-roles-role-id-get-request.md)                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RoleResponse](../../models/role-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## setPermissions

Set all permissions for a role (replaces existing).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="set_permissions_endpoint_api_v1_roles__role_id__permissions_put" method="put" path="/api/v1/roles/{role_id}/permissions" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.customRoles.setPermissions({
    roleId: "<id>",
    body: {
      permissionCodes: [],
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
import { customRolesSetPermissions } from "@linebundle-sdk/ts/funcs/custom-roles-set-permissions.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesSetPermissions(linebundle, {
    roleId: "<id>",
    body: {
      permissionCodes: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customRolesSetPermissions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SetPermissionsEndpointApiV1RolesRoleIdPermissionsPutRequest](../../models/operations/set-permissions-endpoint-api-v1-roles-role-id-permissions-put-request.md)     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## addPermission

Add a permission to a role.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="add_permission_endpoint_api_v1_roles__role_id__permissions_post" method="post" path="/api/v1/roles/{role_id}/permissions" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.customRoles.addPermission({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { customRolesAddPermission } from "@linebundle-sdk/ts/funcs/custom-roles-add-permission.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesAddPermission(linebundle, {
    roleId: "<id>",
    body: {
      permissionCode: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customRolesAddPermission failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddPermissionEndpointApiV1RolesRoleIdPermissionsPostRequest](../../models/operations/add-permission-endpoint-api-v1-roles-role-id-permissions-post-request.md)     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## removePermission

Remove a permission from a role.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_permission_endpoint_api_v1_roles__role_id__permissions__permission_code__delete" method="delete" path="/api/v1/roles/{role_id}/permissions/{permission_code}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await linebundle.customRoles.removePermission({
    roleId: "<id>",
    permissionCode: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { customRolesRemovePermission } from "@linebundle-sdk/ts/funcs/custom-roles-remove-permission.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesRemovePermission(linebundle, {
    roleId: "<id>",
    permissionCode: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("customRolesRemovePermission failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                          | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                          | [operations.RemovePermissionEndpointApiV1RolesRoleIdPermissionsPermissionCodeDeleteRequest](../../models/operations/remove-permission-endpoint-api-v1-roles-role-id-permissions-permission-code-delete-request.md) | :heavy_check_mark:                                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                                         |
| `options`                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                     |
| `options.retries`                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                   |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## assignToUser

Assign a role to a user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="assign_role_to_user_endpoint_api_v1_roles_users__user_id__roles_post" method="post" path="/api/v1/roles/users/{user_id}/roles" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.customRoles.assignToUser({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { customRolesAssignToUser } from "@linebundle-sdk/ts/funcs/custom-roles-assign-to-user.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesAssignToUser(linebundle, {
    userId: "<id>",
    roleId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customRolesAssignToUser failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                         | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                         | [operations.AssignRoleToUserEndpointApiV1RolesUsersUserIdRolesPostRequest](../../models/operations/assign-role-to-user-endpoint-api-v1-roles-users-user-id-roles-post-request.md) | :heavy_check_mark:                                                                                                                                                                | The request object to use for the request.                                                                                                                                        |
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

## removeUserRole

Remove a role from a user.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_role_from_user_endpoint_api_v1_roles_users__user_id__roles__role_id__delete" method="delete" path="/api/v1/roles/users/{user_id}/roles/{role_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await linebundle.customRoles.removeUserRole({
    userId: "<id>",
    roleId: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { customRolesRemoveUserRole } from "@linebundle-sdk/ts/funcs/custom-roles-remove-user-role.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesRemoveUserRole(linebundle, {
    userId: "<id>",
    roleId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("customRolesRemoveUserRole failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                               | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                               | [operations.RemoveRoleFromUserEndpointApiV1RolesUsersUserIdRolesRoleIdDeleteRequest](../../models/operations/remove-role-from-user-endpoint-api-v1-roles-users-user-id-roles-role-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                                      | The request object to use for the request.                                                                                                                                                              |
| `options`                                                                                                                                                                                               | RequestOptions                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                      | Used to set various options for making HTTP requests.                                                                                                                                                   |
| `options.fetchOptions`                                                                                                                                                                                  | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                      | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                          |
| `options.retries`                                                                                                                                                                                       | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                      | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                        |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## update

Update an existing custom role.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_role_endpoint_api_v1_roles__role_id__put" method="put" path="/api/v1/roles/{role_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.customRoles.update({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { customRolesUpdate } from "@linebundle-sdk/ts/funcs/custom-roles-update.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesUpdate(linebundle, {
    roleId: "<id>",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customRolesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateRoleEndpointApiV1RolesRoleIdPutRequest](../../models/operations/update-role-endpoint-api-v1-roles-role-id-put-request.md)                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RoleResponse](../../models/role-response.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## getMyPermissions

Get current user's effective permissions.

This returns the permissions from the JWT token claims, augmented with
any custom role permissions from the database.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_my_permissions_endpoint_api_v1_roles_me_permissions_get" method="get" path="/api/v1/roles/me/permissions" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.customRoles.getMyPermissions();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { customRolesGetMyPermissions } from "@linebundle-sdk/ts/funcs/custom-roles-get-my-permissions.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customRolesGetMyPermissions(linebundle);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customRolesGetMyPermissions failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |