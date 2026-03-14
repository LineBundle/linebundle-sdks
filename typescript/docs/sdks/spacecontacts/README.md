# SpaceContacts

## Overview

### Available Operations

* [getContactsBySpace](#getcontactsbyspace) - Get Space Contacts
* [add](#add) - Add Contact To Space
* [getSpacesByContact](#getspacesbycontact) - Get Contact Spaces
* [get](#get) - Get Space Contact
* [remove](#remove) - Remove Contact From Space
* [addBulk](#addbulk) - Bulk Add Contacts To Space
* [bulkDelete](#bulkdelete) - Bulk Remove Contacts From Space
* [count](#count) - Count Space Contacts

## getContactsBySpace

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
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.spaceContacts.getContactsBySpace({
    spaceId: 260446,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceContactsGetContactsBySpace } from "@linebundle-sdk/ts/funcs/space-contacts-get-contacts-by-space.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceContactsGetContactsBySpace(linebundle, {
    spaceId: 260446,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceContactsGetContactsBySpace failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## add

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
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.spaceContacts.add({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceContactsAdd } from "@linebundle-sdk/ts/funcs/space-contacts-add.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceContactsAdd(linebundle, {
    spaceId: 503177,
    body: {
      contactId: "c7b4bc6c-dbde-4dd7-b30c-c1ae77fc4016",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceContactsAdd failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## getSpacesByContact

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
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.spaceContacts.getSpacesByContact({
    contactId: "9bb1f2eb-c6ab-4c76-a1d4-ff656e5f0d1e",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceContactsGetSpacesByContact } from "@linebundle-sdk/ts/funcs/space-contacts-get-spaces-by-contact.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceContactsGetSpacesByContact(linebundle, {
    contactId: "9bb1f2eb-c6ab-4c76-a1d4-ff656e5f0d1e",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceContactsGetSpacesByContact failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get

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
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.spaceContacts.get({
    spaceContactId: 402469,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceContactsGet } from "@linebundle-sdk/ts/funcs/space-contacts-get.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceContactsGet(linebundle, {
    spaceContactId: 402469,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceContactsGet failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## remove

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
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.spaceContacts.remove({
    spaceContactId: 481359,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceContactsRemove } from "@linebundle-sdk/ts/funcs/space-contacts-remove.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceContactsRemove(linebundle, {
    spaceContactId: 481359,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceContactsRemove failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## addBulk

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
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.spaceContacts.addBulk({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceContactsAddBulk } from "@linebundle-sdk/ts/funcs/space-contacts-add-bulk.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceContactsAddBulk(linebundle, {
    spaceId: 857341,
    body: [
      "db6728a0-7d85-4190-831b-7c7f94249f7d",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceContactsAddBulk failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## bulkDelete

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
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.spaceContacts.bulkDelete({
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
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceContactsBulkDelete } from "@linebundle-sdk/ts/funcs/space-contacts-bulk-delete.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceContactsBulkDelete(linebundle, {
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
    console.log("spaceContactsBulkDelete failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## count

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
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.spaceContacts.count({
    spaceId: 42492,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LinebundleCore } from "@linebundle-sdk/ts/core.js";
import { spaceContactsCount } from "@linebundle-sdk/ts/funcs/space-contacts-count.js";

// Use `LinebundleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const linebundle = new LinebundleCore({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await spaceContactsCount(linebundle, {
    spaceId: 42492,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("spaceContactsCount failed:", res.error);
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

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |