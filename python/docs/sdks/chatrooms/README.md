# ChatRooms

## Overview

### Available Operations

* [create_direct](#create_direct) - Create Direct Room
* [create_group](#create_group) - Create Group Room
* [list](#list) - List User Rooms
* [get_by_id](#get_by_id) - Get Room By Id
* [update](#update) - Update Room
* [list_members](#list_members) - List Room Members
* [add_member](#add_member) - Add Member To Room
* [remove_member](#remove_member) - Remove Member From Room

## create_direct

Create Direct Room

### Example Usage

<!-- UsageSnippet language="python" operationID="create_direct_room_api_v1_chat_rooms_direct_post" method="post" path="/api/v1/chat/rooms/direct" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.chat_rooms.create_direct(other_user_id="476232a8-5b15-416e-ae52-b831d1dd9623")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `other_user_id`                                                     | *str*                                                               | :heavy_check_mark:                                                  | User ID to create direct message with                               |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.RoomResponse](../../models/roomresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## create_group

Create Group Room

### Example Usage

<!-- UsageSnippet language="python" operationID="create_group_room_api_v1_chat_rooms_group_post" method="post" path="/api/v1/chat/rooms/group" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.chat_rooms.create_group(name="<value>", visibility=20)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `name`                                                              | *str*                                                               | :heavy_check_mark:                                                  | Group chat name                                                     |
| `description`                                                       | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Group chat description                                              |
| `visibility`                                                        | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Visibility level (10=public, 20=private, 30=org, 40=personal)       |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.RoomResponse](../../models/roomresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## list

List User Rooms

### Example Usage

<!-- UsageSnippet language="python" operationID="list_user_rooms_api_v1_chat_rooms__get" method="get" path="/api/v1/chat/rooms/" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.chat_rooms.list(skip=0, limit=50)

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `skip`                                                              | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Number of rooms to skip                                             |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Maximum number of rooms to return                                   |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.RoomListResponse](../../models/roomlistresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## get_by_id

Get Room By Id

### Example Usage

<!-- UsageSnippet language="python" operationID="get_room_by_id_api_v1_chat_rooms__room_id__get" method="get" path="/api/v1/chat/rooms/{room_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.chat_rooms.get_by_id(room_id="ad8c71fe-b4a8-4ec7-a7dc-b702d41ab141")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `room_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.RoomResponse](../../models/roomresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## update

Update Room

### Example Usage

<!-- UsageSnippet language="python" operationID="update_room_api_v1_chat_rooms__room_id__patch" method="patch" path="/api/v1/chat/rooms/{room_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.chat_rooms.update(room_id="1b3fb3c3-92f9-4a63-999d-a20a466eed99")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `room_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `name`                                                              | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Updated room name                                                   |
| `description`                                                       | *OptionalNullable[str]*                                             | :heavy_minus_sign:                                                  | Updated room description                                            |
| `visibility`                                                        | *OptionalNullable[int]*                                             | :heavy_minus_sign:                                                  | Updated visibility level                                            |
| `metadata`                                                          | Dict[str, *Any*]                                                    | :heavy_minus_sign:                                                  | Updated metadata                                                    |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.RoomResponse](../../models/roomresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## list_members

List Room Members

### Example Usage

<!-- UsageSnippet language="python" operationID="list_room_members_api_v1_chat_rooms__room_id__members_get" method="get" path="/api/v1/chat/rooms/{room_id}/members" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.chat_rooms.list_members(room_id="6926012f-3dc0-4e0d-b35c-f21a3ad078d6")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `room_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.MembersListResponse](../../models/memberslistresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## add_member

Add Member To Room

### Example Usage

<!-- UsageSnippet language="python" operationID="add_member_to_room_api_v1_chat_rooms__room_id__members_post" method="post" path="/api/v1/chat/rooms/{room_id}/members" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.chat_rooms.add_member(room_id="a8c3b244-2897-4ce9-8007-7ccc8aa374bb", user_id="14f48096-50e2-4a14-ae8f-ce366dcc8d5b", role="member")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `room_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `user_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | User ID to add to room                                              |
| `role`                                                              | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | Member role (member, admin, owner)                                  |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.MemberResponse](../../models/memberresponse.md)**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |

## remove_member

Remove Member From Room

### Example Usage

<!-- UsageSnippet language="python" operationID="remove_member_from_room_api_v1_chat_rooms__room_id__members__user_id__delete" method="delete" path="/api/v1/chat/rooms/{room_id}/members/{user_id}" -->
```python
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    linebundle.chat_rooms.remove_member(room_id="c98b5ec7-781a-452e-ab0b-5db40a5b8e12", user_id="246bb03f-d809-4124-bf1d-6127f8dfed4e")

    # Use the SDK ...

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `room_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `user_id`                                                           | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.HTTPValidationError    | 422                           | application/json              |
| errors.LinebundleDefaultError | 4XX, 5XX                      | \*/\*                         |