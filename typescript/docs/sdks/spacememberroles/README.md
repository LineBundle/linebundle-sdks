# SpaceMemberRoles

## Overview

### Available Operations

* [getUserSpaceRolesApiV1SpaceSpacesSpaceIdMembersUserIdRolesGet](#getuserspacerolesapiv1spacespacesspaceidmembersuseridrolesget) - Get User Space Roles
* [assignUserToSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesPost](#assignusertospaceroleapiv1spacespacesspaceidmembersuseridrolespost) - Assign User To Space Role
* [removeUserFromSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesSpaceRoleIdDelete](#removeuserfromspaceroleapiv1spacespacesspaceidmembersuseridrolesspaceroleiddelete) - Remove User From Space Role

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
  const result = await sdk.spaceMemberRoles.getUserSpaceRolesApiV1SpaceSpacesSpaceIdMembersUserIdRolesGet({
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
  const result = await sdk.spaceMemberRoles.assignUserToSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesPost({
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
  await sdk.spaceMemberRoles.removeUserFromSpaceRoleApiV1SpaceSpacesSpaceIdMembersUserIdRolesSpaceRoleIdDelete({
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