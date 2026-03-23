<!-- Start SDK Example Usage [usage] -->
```typescript
import { LineBundle } from "@linebundle-sdk/ts";

const lineBundle = new LineBundle({
  security: {
    oidc: "<YOUR_OIDC_HERE>",
  },
});

async function run() {
  const result = await lineBundle.user.getAssistant();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->