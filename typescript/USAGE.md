<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  security: {
    oidc: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.handleOrgCreatedApiV1IntegrationOrgCreatedPost();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->