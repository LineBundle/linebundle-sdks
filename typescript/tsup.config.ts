import { defineConfig } from 'tsup';

export default defineConfig({
  entry: { index: 'src/index.ts' },
  format: ['esm'],
  // Keep peer deps external so their types stay as named references in
  // the generated .d.ts — prevents duplicate-type conflicts when the
  // consuming project also imports from @hey-api/client-fetch directly.
  external: ['@hey-api/client-fetch', 'zod'],
  dts: true,
  outDir: 'esm',
  clean: true,
  sourcemap: true,
  target: 'es2020',
});
