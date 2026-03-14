# SpaceRoles

## Overview

### Available Operations

* [listRoles](#listroles) - List Space Roles
* [create](#create) - Create Space Role
* [get](#get) - Get Space Role
* [updateRole](#updaterole) - Update Space Role
* [delete](#delete) - Delete Space Role
* [removePermission](#removepermission) - Remove Permission From Space Role
* [assignPermission](#assignpermission) - Assign Permission To Space Role

## listRoles

List all roles for a space.

Requires space read permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_space_roles_api_v1_space_spaces__space_id__roles__get" method="get" path="/api/v1/space/spaces/{space_id}/roles/" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.spaceRoles.listRoles({
    spaceId: 723392,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceRolesListRoles } from "@linebundle-sdk/ts/funcs/space-roles-list-roles.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceRolesListRoles(linebundle, {
    spaceId: 723392,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceRolesListRoles failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## create

Create a new role for a space.

Requires space management permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_space_role_api_v1_space_spaces__space_id__roles__post" method="post" path="/api/v1/space/spaces/{space_id}/roles/" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.spaceRoles.create({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceRolesCreate } from "@linebundle-sdk/ts/funcs/space-roles-create.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceRolesCreate(linebundle, {
    spaceId: 14917,
    body: {
      name: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceRolesCreate failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get

Get a specific space role by ID.

Requires space read permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_space_role_api_v1_space_spaces__space_id__roles__role_id__get" method="get" path="/api/v1/space/spaces/{space_id}/roles/{role_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.spaceRoles.get({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceRolesGet } from "@linebundle-sdk/ts/funcs/space-roles-get.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceRolesGet(linebundle, {
    spaceId: 812713,
    roleId: "75d3a981-642f-4ac9-8643-dd2d4cf0f3c1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceRolesGet failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## updateRole

Update a space role.

Requires space management permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_space_role_api_v1_space_spaces__space_id__roles__role_id__put" method="put" path="/api/v1/space/spaces/{space_id}/roles/{role_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.spaceRoles.updateRole({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceRolesUpdateRole } from "@linebundle-sdk/ts/funcs/space-roles-update-role.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceRolesUpdateRole(linebundle, {
    spaceId: 771152,
    roleId: "af40c759-21a2-41ec-9835-58bf03edd24d",
    body: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceRolesUpdateRole failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## delete

Delete a space role.

Requires space management permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_space_role_api_v1_space_spaces__space_id__roles__role_id__delete" method="delete" path="/api/v1/space/spaces/{space_id}/roles/{role_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await linebundle.spaceRoles.delete({
    spaceId: 603327,
    roleId: "9f590db2-df4b-4631-9086-522755626b91",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceRolesDelete } from "@linebundle-sdk/ts/funcs/space-roles-delete.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceRolesDelete(linebundle, {
    spaceId: 603327,
    roleId: "9f590db2-df4b-4631-9086-522755626b91",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("spaceRolesDelete failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## removePermission

Remove a permission from a space role.

Requires space management permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_permission_from_space_role_api_v1_space_spaces__space_id__roles__role_id__permissions__permission_id__delete" method="delete" path="/api/v1/space/spaces/{space_id}/roles/{role_id}/permissions/{permission_id}" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  await linebundle.spaceRoles.removePermission({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceRolesRemovePermission } from "@linebundle-sdk/ts/funcs/space-roles-remove-permission.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceRolesRemovePermission(linebundle, {
    spaceId: 285337,
    roleId: "1c09981c-a99c-4295-bc98-bbe1f8b1d79c",
    permissionId: "1ac9eed7-e946-491e-b666-52ce12192498",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("spaceRolesRemovePermission failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## assignPermission

Assign a permission to a space role.

Requires space management permissions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="assign_permission_to_space_role_api_v1_space_spaces__space_id__roles__role_id__permissions_post" method="post" path="/api/v1/space/spaces/{space_id}/roles/{role_id}/permissions" -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.spaceRoles.assignPermission({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceRolesAssignPermission } from "@linebundle-sdk/ts/funcs/space-roles-assign-permission.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceRolesAssignPermission(linebundle, {
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
    console.log("spaceRolesAssignPermission failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |