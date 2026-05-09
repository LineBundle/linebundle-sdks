import { createClient } from '@hey-api/client-fetch';
import { Linebundle } from './generated/index.js';

// hey-api v0.95 generates its own Client type declarations in
// src/generated/client/types.gen.ts that are structurally incompatible with
// the Client returned by @hey-api/client-fetch's createClient (the BuildUrlFn
// parameter types diverge due to contravariance). At runtime both are the same
// object — the cast is safe.
type _LinebundleClient = NonNullable<ConstructorParameters<typeof Linebundle>[0]>['client'];

/**
 * Options for initializing the LineBundle client.
 */
export type LinebundleOptions = {
  /** API credential (sk_lb_...) — generate in LineBundle Studio. */
  token: string;
  /** Organization UUID — find it in Studio → Settings → API Credentials. */
  orgId?: string;
  /**
   * Override the base URL.
   * Defaults to https://api.linebundle.com (production).
   * Pass https://staging-api.linebundle.com for staging.
   */
  baseUrl?: string;
};

/**
 * Create a configured LineBundle client.
 *
 * @example
 * ```typescript
 * import { createLinebundle } from '@linebundle-sdk/ts';
 *
 * const lb = createLinebundle({
 *   token: process.env.LINEBUNDLE_TOKEN!,
 *   orgId: process.env.LINEBUNDLE_ORG_ID!,
 * });
 *
 * const { data } = await lb.events.list({ query: { page: 1, size: 20 } });
 * ```
 */
export function createLinebundle({
  token,
  orgId,
  baseUrl,
}: LinebundleOptions): Linebundle {
  return new Linebundle({
    client: createClient({
      baseUrl: baseUrl ?? 'https://api.linebundle.com',
      headers: {
        Authorization: `Bearer ${token}`,
        ...(orgId ? { 'X-Org-ID': orgId } : {}),
      },
    }) as unknown as _LinebundleClient,
  });
}
