# LineBundle TypeScript SDK

Type-safe TypeScript SDK for the [LineBundle API](https://docs.linebundle.com).

## Installation

```bash
npm install @linebundle-sdk/ts
```

## Quick Start

```typescript
import { Linebundle } from '@linebundle-sdk/ts';

const sdk = new Linebundle({
  auth: () => 'YOUR_API_KEY',
});

// List events
const events = await sdk.events.list();

// Create an event
const event = await sdk.events.create({
  body: {
    title: 'My Event',
    start_dt: '2026-05-01',
    start_tm: '10:00',
    end_dt: '2026-05-01',
    end_tm: '14:00',
    timezone: 'Africa/Accra',
  },
});
```

## Authentication

Pass a bearer token via the `auth` option. The function is called per-request, so it handles token refresh automatically:

```typescript
const sdk = new Linebundle({
  auth: async () => {
    const token = await getTokenFromYourAuthProvider();
    return token;
  },
});
```

## SDK Reference

See the full [SDK Reference](https://docs.linebundle.com/sdk-reference/event) for all available methods.

## License

MIT
