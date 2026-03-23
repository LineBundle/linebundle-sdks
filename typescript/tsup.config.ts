import { defineConfig } from 'tsup';

export default defineConfig({
  entry: { index: 'src/index.ts' },
  format: ['esm'],
  // zod is used by the generated validation layer. Keep it external so the
  // consumer's own zod installation is used — avoids bundling it twice.
  external: ['zod'],
  dts: true,
  outDir: 'esm',
  clean: true,
  sourcemap: true,
  target: 'es2020',
});
