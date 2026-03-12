<!-- Start SDK Example Usage [usage] -->
```python
# Synchronous Example
from openapi import SDK, models


with SDK(
    "https://api.example.com",
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as sdk:

    res = sdk.handle_org_created_api_v1_integration_org_created_post()

    # Handle response
    print(res)
```

</br>

The same SDK client can also be used to make asynchronous requests by importing asyncio.

```python
# Asynchronous Example
import asyncio
from openapi import SDK, models

async def main():

    async with SDK(
        "https://api.example.com",
        security=models.Security(
            oidc="<YOUR_API_KEY_HERE>",
        ),
    ) as sdk:

        res = await sdk.handle_org_created_api_v1_integration_org_created_post_async()

        # Handle response
        print(res)

asyncio.run(main())
```
<!-- End SDK Example Usage [usage] -->