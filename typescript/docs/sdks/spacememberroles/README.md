# SpaceMemberRoles

## Overview

### Available Operations

* [getUserRoles](#getuserroles) - Get User Space Roles
* [assignUserToRole](#assignusertorole) - Assign User To Space Role

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
  const result = await linebundle.spaceMemberRoles.getUserRoles({
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
  const result = await linebundle.spaceMemberRoles.assignUserToRole({
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