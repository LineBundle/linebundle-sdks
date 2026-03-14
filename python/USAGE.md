<!-- Start SDK Example Usage [usage] -->
```python
# Synchronous Example
from linebundle_sdk import Linebundle, models


with Linebundle(
    security=models.Security(
        oidc="<YOUR_API_KEY_HERE>",
    ),
) as linebundle:

    res = linebundle.user.get_assistant()

    # Handle response
    print(res)
```

</br>

The same SDK client can also be used to make asynchronous requests by importing asyncio.

```python
# Asynchronous Example
import asyncio
from linebundle_sdk import Linebundle, models

async def main():

    async with Linebundle(
        security=models.Security(
            oidc="<YOUR_API_KEY_HERE>",
        ),
    ) as linebundle:

        res = await linebundle.user.get_assistant_async()

        # Handle response
        print(res)

asyncio.run(main())
```
<!-- End SDK Example Usage [usage] -->