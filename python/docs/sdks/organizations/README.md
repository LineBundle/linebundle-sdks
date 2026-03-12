# Organizations

## Overview

### Available Operations

* [list_organizations_endpoint_api_v1_organizations_get](#list_organizations_endpoint_api_v1_organizations_get) - List Organizations Endpoint
* [create_organization_endpoint_api_v1_organizations_post](#create_organization_endpoint_api_v1_organizations_post) - Create Organization Endpoint
* [get_current_organization_endpoint_api_v1_organizations_me_get](#get_current_organization_endpoint_api_v1_organizations_me_get) - Get Current Organization Endpoint
* [get_organization_invites_endpoint_api_v1_organizations_org_id_invites_get](#get_organization_invites_endpoint_api_v1_organizations_org_id_invites_get) - Get Organization Invites Endpoint
* [create_invite_endpoint_api_v1_organizations_org_id_invites_post](#create_invite_endpoint_api_v1_organizations_org_id_invites_post) - Create Invite Endpoint
* [delete_invite_endpoint_api_v1_organizations_org_id_invites_invite_id_delete](#delete_invite_endpoint_api_v1_organizations_org_id_invites_invite_id_delete) - Delete Invite Endpoint
* [get_organization_endpoint_api_v1_organizations_org_id_get](#get_organization_endpoint_api_v1_organizations_org_id_get) - Get Organization Endpoint
* [update_organization_endpoint_api_v1_organizations_org_id_put](#update_organization_endpoint_api_v1_organizations_org_id_put) - Update Organization Endpoint
* [archive_organization_endpoint_api_v1_organizations_org_id_delete](#archive_organization_endpoint_api_v1_organizations_org_id_delete) - Archive Organization Endpoint

## list_organizations_endpoint_api_v1_organizations_get

List all organizations the current user belongs to.

### Example Usage

<!-- UsageSnippet language="python" operationID="list_organizations_endpoint_api_v1_organizations_get" method="get" path="/api/v1/organizations" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.organizations.list_organizations_endpoint_api_v1_organizations_get(limit=100, offset=0)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `offset`                                                            | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.OrganizationResponse]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## create_organization_endpoint_api_v1_organizations_post

Create a new organization.

### Example Usage

<!-- UsageSnippet language="python" operationID="create_organization_endpoint_api_v1_organizations_post" method="post" path="/api/v1/organizations" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.organizations.create_organization_endpoint_api_v1_organizations_post(plan="free", allow_public_visibility=True)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `plan`                                                              | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `allow_public_visibility`                                           | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | Controls whether users can create PUBLIC visibility resources       |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.OrganizationResponse](../../models/organizationresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_current_organization_endpoint_api_v1_organizations_me_get

Get the current organization from JWT claims.
Returns the org that the user is currently authenticated for.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_current_organization_endpoint_api_v1_organizations_me_get" method="get" path="/api/v1/organizations/me" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.organizations.get_current_organization_endpoint_api_v1_organizations_me_get()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.OrganizationResponse](../../models/organizationresponse.md)**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.SDKDefaultError | 4XX, 5XX               | \*/\*                  |

## get_organization_invites_endpoint_api_v1_organizations_org_id_invites_get

Get all pending invitations for an organization.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_organization_invites_endpoint_api_v1_organizations__org_id__invites_get" method="get" path="/api/v1/organizations/{org_id}/invites" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.organizations.get_organization_invites_endpoint_api_v1_organizations_org_id_invites_get(org_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `org_id`                                                            | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[List[models.InviteRead]](../../models/.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## create_invite_endpoint_api_v1_organizations_org_id_invites_post

Create an invite to the organization. Requires owner or admin role.

### Example Usage

<!-- UsageSnippet language="python" operationID="create_invite_endpoint_api_v1_organizations__org_id__invites_post" method="post" path="/api/v1/organizations/{org_id}/invites" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.organizations.create_invite_endpoint_api_v1_organizations_org_id_invites_post(org_id="<id>", email="Clinton_Kerluke89@hotmail.com", role="member", expires_in_days=7)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `org_id`                                                            | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `email`                                                             | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `role`                                                              | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `expires_in_days`                                                   | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.InviteRead](../../models/inviteread.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## delete_invite_endpoint_api_v1_organizations_org_id_invites_invite_id_delete

Delete/rescind an organization invite. Requires owner or admin role.

### Example Usage

<!-- UsageSnippet language="python" operationID="delete_invite_endpoint_api_v1_organizations__org_id__invites__invite_id__delete" method="delete" path="/api/v1/organizations/{org_id}/invites/{invite_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    sdk.organizations.delete_invite_endpoint_api_v1_organizations_org_id_invites_invite_id_delete(org_id="<id>", invite_id="<id>")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `org_id`                                                            | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `invite_id`                                                         | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## get_organization_endpoint_api_v1_organizations_org_id_get

Get a single organization by ID.

### Example Usage

<!-- UsageSnippet language="python" operationID="get_organization_endpoint_api_v1_organizations__org_id__get" method="get" path="/api/v1/organizations/{org_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.organizations.get_organization_endpoint_api_v1_organizations_org_id_get(org_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `org_id`                                                            | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.OrganizationResponse](../../models/organizationresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## update_organization_endpoint_api_v1_organizations_org_id_put

Update an organization. Requires owner or admin role.

### Example Usage

<!-- UsageSnippet language="python" operationID="update_organization_endpoint_api_v1_organizations__org_id__put" method="put" path="/api/v1/organizations/{org_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.organizations.update_organization_endpoint_api_v1_organizations_org_id_put(org_id="<id>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `org_id`                                                            | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `plan`                                                              | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | N/A                                                                 |
| `allow_public_visibility`                                           | *OptionalNullable[bool]*                                            | :heavy_minus_sign:                                                  | Controls whether users can create PUBLIC visibility resources       |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.OrganizationResponse](../../models/organizationresponse.md)**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## archive_organization_endpoint_api_v1_organizations_org_id_delete

Archive an organization (soft delete). Requires owner role only.

### Example Usage

<!-- UsageSnippet language="python" operationID="archive_organization_endpoint_api_v1_organizations__org_id__delete" method="delete" path="/api/v1/organizations/{org_id}" -->
```python
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    sdk.organizations.archive_organization_endpoint_api_v1_organizations_org_id_delete(org_id="<id>")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `org_id`                                                            | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |