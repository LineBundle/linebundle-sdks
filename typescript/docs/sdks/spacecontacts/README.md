# SpaceContacts

## Overview

### Available Operations

* [getSpaceContactsApiV1SpacesSpaceIdContactsGet](#getspacecontactsapiv1spacesspaceidcontactsget) - Get Space Contacts
* [addContactToSpaceApiV1SpacesSpaceIdContactsPost](#addcontacttospaceapiv1spacesspaceidcontactspost) - Add Contact To Space
* [getContactSpacesApiV1ContactsContactIdSpacesGet](#getcontactspacesapiv1contactscontactidspacesget) - Get Contact Spaces
* [getSpaceContactApiV1SpaceContactsSpaceContactIdGet](#getspacecontactapiv1spacecontactsspacecontactidget) - Get Space Contact
* [removeContactFromSpaceApiV1SpaceContactsSpaceContactIdDelete](#removecontactfromspaceapiv1spacecontactsspacecontactiddelete) - Remove Contact From Space
* [bulkAddContactsToSpaceApiV1SpacesSpaceIdContactsBulkPost](#bulkaddcontactstospaceapiv1spacesspaceidcontactsbulkpost) - Bulk Add Contacts To Space
* [bulkRemoveContactsFromSpaceApiV1SpacesSpaceIdContactsBulkDelete](#bulkremovecontactsfromspaceapiv1spacesspaceidcontactsbulkdelete) - Bulk Remove Contacts From Space
* [countSpaceContactsApiV1SpacesSpaceIdContactsCountGet](#countspacecontactsapiv1spacesspaceidcontactscountget) - Count Space Contacts

## getSpaceContactsApiV1SpacesSpaceIdContactsGet

Get all contacts for a specific space.

Args:
    space_id: Space ID
    limit: Maximum number of contacts to return
    offset: Number of contacts to skip
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space contact service

Returns:
    List of space contacts with total count

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_space_contacts_api_v1_spaces__space_id__contacts_get" method="get" path="/api/v1/spaces/{space_id}/contacts" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.spaceContacts.getSpaceContactsApiV1SpacesSpaceIdContactsGet({
    spaceId: 260446,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceContactsGetSpaceContactsApiV1SpacesSpaceIdContactsGet } from "openapi/funcs/space-contacts-get-space-contacts-api-v1-spaces-space-id-contacts-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceContactsGetSpaceContactsApiV1SpacesSpaceIdContactsGet(sdk, {
    spaceId: 260446,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceContactsGetSpaceContactsApiV1SpacesSpaceIdContactsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSpaceContactsApiV1SpacesSpaceIdContactsGetRequest](../../models/operations/get-space-contacts-api-v1-spaces-space-id-contacts-get-request.md)                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceContactList](../../models/space-contact-list.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## addContactToSpaceApiV1SpacesSpaceIdContactsPost

Add a contact to a space.

Args:
    space_id: Space ID
    request: Space contact creation request
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space contact service

Returns:
    Created space contact

### Example Usage

<!-- UsageSnippet language="typescript" operationID="add_contact_to_space_api_v1_spaces__space_id__contacts_post" method="post" path="/api/v1/spaces/{space_id}/contacts" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.spaceContacts.addContactToSpaceApiV1SpacesSpaceIdContactsPost({
    spaceId: 503177,
    body: {
      contactId: "c7b4bc6c-dbde-4dd7-b30c-c1ae77fc4016",
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
import { spaceContactsAddContactToSpaceApiV1SpacesSpaceIdContactsPost } from "openapi/funcs/space-contacts-add-contact-to-space-api-v1-spaces-space-id-contacts-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceContactsAddContactToSpaceApiV1SpacesSpaceIdContactsPost(sdk, {
    spaceId: 503177,
    body: {
      contactId: "c7b4bc6c-dbde-4dd7-b30c-c1ae77fc4016",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceContactsAddContactToSpaceApiV1SpacesSpaceIdContactsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AddContactToSpaceApiV1SpacesSpaceIdContactsPostRequest](../../models/operations/add-contact-to-space-api-v1-spaces-space-id-contacts-post-request.md)              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceContactRead](../../models/space-contact-read.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getContactSpacesApiV1ContactsContactIdSpacesGet

Get all spaces for a specific contact.

Args:
    contact_id: Contact ID
    limit: Maximum number of spaces to return
    offset: Number of spaces to skip
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space contact service

Returns:
    List of space contacts

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_contact_spaces_api_v1_contacts__contact_id__spaces_get" method="get" path="/api/v1/contacts/{contact_id}/spaces" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.spaceContacts.getContactSpacesApiV1ContactsContactIdSpacesGet({
    contactId: "9bb1f2eb-c6ab-4c76-a1d4-ff656e5f0d1e",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceContactsGetContactSpacesApiV1ContactsContactIdSpacesGet } from "openapi/funcs/space-contacts-get-contact-spaces-api-v1-contacts-contact-id-spaces-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceContactsGetContactSpacesApiV1ContactsContactIdSpacesGet(sdk, {
    contactId: "9bb1f2eb-c6ab-4c76-a1d4-ff656e5f0d1e",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceContactsGetContactSpacesApiV1ContactsContactIdSpacesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetContactSpacesApiV1ContactsContactIdSpacesGetRequest](../../models/operations/get-contact-spaces-api-v1-contacts-contact-id-spaces-get-request.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceContactRead[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getSpaceContactApiV1SpaceContactsSpaceContactIdGet

Get space contact by ID.

Args:
    space_contact_id: Space contact relationship ID
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space contact service

Returns:
    Space contact details

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_space_contact_api_v1_space_contacts__space_contact_id__get" method="get" path="/api/v1/space-contacts/{space_contact_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.spaceContacts.getSpaceContactApiV1SpaceContactsSpaceContactIdGet({
    spaceContactId: 402469,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceContactsGetSpaceContactApiV1SpaceContactsSpaceContactIdGet } from "openapi/funcs/space-contacts-get-space-contact-api-v1-space-contacts-space-contact-id-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceContactsGetSpaceContactApiV1SpaceContactsSpaceContactIdGet(sdk, {
    spaceContactId: 402469,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceContactsGetSpaceContactApiV1SpaceContactsSpaceContactIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSpaceContactApiV1SpaceContactsSpaceContactIdGetRequest](../../models/operations/get-space-contact-api-v1-space-contacts-space-contact-id-get-request.md)        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SpaceContactRead](../../models/space-contact-read.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## removeContactFromSpaceApiV1SpaceContactsSpaceContactIdDelete

Remove a contact from a space.

Args:
    space_contact_id: Space contact relationship ID
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space contact service

Returns:
    Success message

### Example Usage

<!-- UsageSnippet language="typescript" operationID="remove_contact_from_space_api_v1_space_contacts__space_contact_id__delete" method="delete" path="/api/v1/space-contacts/{space_contact_id}" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.spaceContacts.removeContactFromSpaceApiV1SpaceContactsSpaceContactIdDelete({
    spaceContactId: 481359,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceContactsRemoveContactFromSpaceApiV1SpaceContactsSpaceContactIdDelete } from "openapi/funcs/space-contacts-remove-contact-from-space-api-v1-space-contacts-space-contact-id-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceContactsRemoveContactFromSpaceApiV1SpaceContactsSpaceContactIdDelete(sdk, {
    spaceContactId: 481359,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceContactsRemoveContactFromSpaceApiV1SpaceContactsSpaceContactIdDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.RemoveContactFromSpaceApiV1SpaceContactsSpaceContactIdDeleteRequest](../../models/operations/remove-contact-from-space-api-v1-space-contacts-space-contact-id-delete-request.md) | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `options`                                                                                                                                                                                    | RequestOptions                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.               |
| `options.retries`                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                             |

### Response

**Promise\<[{ [k: string]: any }](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## bulkAddContactsToSpaceApiV1SpacesSpaceIdContactsBulkPost

Add multiple contacts to a space.

Args:
    space_id: Space ID
    contact_ids: List of contact IDs to add
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space contact service

Returns:
    List of created space contacts

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bulk_add_contacts_to_space_api_v1_spaces__space_id__contacts_bulk_post" method="post" path="/api/v1/spaces/{space_id}/contacts/bulk" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.spaceContacts.bulkAddContactsToSpaceApiV1SpacesSpaceIdContactsBulkPost({
    spaceId: 857341,
    body: [
      "db6728a0-7d85-4190-831b-7c7f94249f7d",
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
import { spaceContactsBulkAddContactsToSpaceApiV1SpacesSpaceIdContactsBulkPost } from "openapi/funcs/space-contacts-bulk-add-contacts-to-space-api-v1-spaces-space-id-contacts-bulk-post.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceContactsBulkAddContactsToSpaceApiV1SpacesSpaceIdContactsBulkPost(sdk, {
    spaceId: 857341,
    body: [
      "db6728a0-7d85-4190-831b-7c7f94249f7d",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceContactsBulkAddContactsToSpaceApiV1SpacesSpaceIdContactsBulkPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                             | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                             | [operations.BulkAddContactsToSpaceApiV1SpacesSpaceIdContactsBulkPostRequest](../../models/operations/bulk-add-contacts-to-space-api-v1-spaces-space-id-contacts-bulk-post-request.md) | :heavy_check_mark:                                                                                                                                                                    | The request object to use for the request.                                                                                                                                            |
| `options`                                                                                                                                                                             | RequestOptions                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                    | Used to set various options for making HTTP requests.                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                               | :heavy_minus_sign:                                                                                                                                                                    | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.        |
| `options.retries`                                                                                                                                                                     | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                    | Enables retrying HTTP requests under certain failure conditions.                                                                                                                      |

### Response

**Promise\<[models.SpaceContactRead[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## bulkRemoveContactsFromSpaceApiV1SpacesSpaceIdContactsBulkDelete

Bulk remove contacts from a space.

Args:
    space_id: Space ID
    contact_ids: List of contact IDs to remove
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space contact service

Returns:
    Number of contacts removed

### Example Usage

<!-- UsageSnippet language="typescript" operationID="bulk_remove_contacts_from_space_api_v1_spaces__space_id__contacts_bulk_delete" method="delete" path="/api/v1/spaces/{space_id}/contacts/bulk" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.spaceContacts.bulkRemoveContactsFromSpaceApiV1SpacesSpaceIdContactsBulkDelete({
    spaceId: 618570,
    body: [
      "bffc934c-a67d-47d1-871d-d9ac0d11e2d8",
      "46024cac-3eb2-4d0b-9db3-b714d934147c",
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
import { spaceContactsBulkRemoveContactsFromSpaceApiV1SpacesSpaceIdContactsBulkDelete } from "openapi/funcs/space-contacts-bulk-remove-contacts-from-space-api-v1-spaces-space-id-contacts-bulk-delete.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceContactsBulkRemoveContactsFromSpaceApiV1SpacesSpaceIdContactsBulkDelete(sdk, {
    spaceId: 618570,
    body: [
      "bffc934c-a67d-47d1-871d-d9ac0d11e2d8",
      "46024cac-3eb2-4d0b-9db3-b714d934147c",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceContactsBulkRemoveContactsFromSpaceApiV1SpacesSpaceIdContactsBulkDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                           | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                           | [operations.BulkRemoveContactsFromSpaceApiV1SpacesSpaceIdContactsBulkDeleteRequest](../../models/operations/bulk-remove-contacts-from-space-api-v1-spaces-space-id-contacts-bulk-delete-request.md) | :heavy_check_mark:                                                                                                                                                                                  | The request object to use for the request.                                                                                                                                                          |
| `options`                                                                                                                                                                                           | RequestOptions                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                  | Used to set various options for making HTTP requests.                                                                                                                                               |
| `options.fetchOptions`                                                                                                                                                                              | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                  | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                      |
| `options.retries`                                                                                                                                                                                   | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                  | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                    |

### Response

**Promise\<[{ [k: string]: any }](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## countSpaceContactsApiV1SpacesSpaceIdContactsCountGet

Count contacts in a space.

Args:
    space_id: Space ID
    current_user: Current authenticated user
    tenant_ctx: Tenant context
    service: Space contact service

Returns:
    Number of contacts in space

### Example Usage

<!-- UsageSnippet language="typescript" operationID="count_space_contacts_api_v1_spaces__space_id__contacts_count_get" method="get" path="/api/v1/spaces/{space_id}/contacts/count" -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.spaceContacts.countSpaceContactsApiV1SpacesSpaceIdContactsCountGet({
    spaceId: 42492,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { spaceContactsCountSpaceContactsApiV1SpacesSpaceIdContactsCountGet } from "openapi/funcs/space-contacts-count-space-contacts-api-v1-spaces-space-id-contacts-count-get.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceContactsCountSpaceContactsApiV1SpacesSpaceIdContactsCountGet(sdk, {
    spaceId: 42492,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceContactsCountSpaceContactsApiV1SpacesSpaceIdContactsCountGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CountSpaceContactsApiV1SpacesSpaceIdContactsCountGetRequest](../../models/operations/count-space-contacts-api-v1-spaces-space-id-contacts-count-get-request.md)    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[{ [k: string]: any }](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |