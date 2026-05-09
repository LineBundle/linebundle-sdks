import { defineConfig } from 'tsup';

export default defineConfig({
  entry: { index: 'src/index.ts' },
  format: ['esm'],
  dts: true,
  outDir: 'esm',
  clean: true,
  sourcemap: true,
  target: 'es2020',
});
