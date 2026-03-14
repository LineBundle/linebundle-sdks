<!-- Start SDK Example Usage [usage] -->
```typescript
import { Linebundle } from "@linebundle-sdk/ts";

const linebundle = new Linebundle({
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await linebundle.user.getAssistant();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->