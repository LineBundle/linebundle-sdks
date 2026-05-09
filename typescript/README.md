# @linebundle-sdk/ts

[![npm](https://img.shields.io/npm/v/@linebundle-sdk/ts)](https://www.npmjs.com/package/@linebundle-sdk/ts)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/docs-linebundle.com-blue)](https://docs.linebundle.com/sdks/typescript)

Auto-generated, type-safe TypeScript client for the [LineBundle API](https://linebundle.com). Generated from the OpenAPI spec on every release — types and methods are always up to date.

## Requirements

- Node.js 18+ (or any runtime with native `fetch`)
- ESM project (`"type": "module"`)

## Installation

```bash
npm install @linebundle-sdk/ts
```

## Get your API credential

Generate a token inside the [LineBundle Studio](https://studio.linebundle.com):
**Organization → Settings → API Credentials → New Credential**

Then set your environment variables:

```bash
LINEBUNDLE_TOKEN=sk_lb_your_token_here
LINEBUNDLE_ORG_ID=your-org-uuid-here
```

## Quick Start

```typescript
import { createLinebundle } from '@linebundle-sdk/ts';

const lb = createLinebundle({
  token: process.env.LINEBUNDLE_TOKEN!,
  orgId: process.env.LINEBUNDLE_ORG_ID!,
});

// List upcoming events
const { data, error } = await lb.events.list({
  query: { page: 1, size: 20, sort_by: 'start_dt', sort_dir: 'asc' },
});
if (error) throw error;
console.log(data.items);  // typed EventResponse[]

// Get a single event
const { data: event } = await lb.events.get({ path: { id: 123 } });
console.log(event.title);

// List spaces
const { data: spaces } = await lb.spaces.list({
  query: { page: 1, size: 50, sort_by: 'title', sort_dir: 'asc' },
});
```

## Response Pattern

Every method returns `{ data, error, response }`. HTTP errors are captured in `error` — **they never throw**:

```typescript
const { data, error, response } = await lb.events.get({ path: { id: 123 } });

if (error) {
  if (response.status === 404) console.warn('Not found');
  else throw error;
} else {
  console.log(data.title);
}
```

## TypeScript Types

All types are generated from the API schema and exported from the package:

```typescript
import type { Event, Space } from '@linebundle-sdk/ts';
```

## Environments

| Environment | Base URL |
|-------------|----------|
| Production  | `https://api.linebundle.com` (default) |
| Staging     | `https://staging-api.linebundle.com` |

To use staging, pass `baseUrl`:

```typescript
const lb = createLinebundle({
  token: process.env.LINEBUNDLE_TOKEN!,
  orgId: process.env.LINEBUNDLE_ORG_ID!,
  baseUrl: 'https://staging-api.linebundle.com',
});
```

## Documentation

- **Full SDK guide**: https://docs.linebundle.com/sdks/typescript
- **API Reference**: https://docs.linebundle.com/sdk-reference/events
- **Changelog**: https://docs.linebundle.com/changelog

## License

MIT
