import type { CreateClientConfig } from './generated/client.gen.js';

/**
 * Runtime config called by the generated client at initialization.
 * Sets https://api.linebundle.com as the default base URL so developers
 * don't need to pass it unless they want to target staging.
 */
export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  baseUrl: config.baseUrl ?? 'https://api.linebundle.com',
});
