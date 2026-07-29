import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  outExtension: ({ format }) => ({ js: format === 'cjs' ? '.cjs' : '.js' }),
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  // React stays a peer — the design-sync bundle supplies its own copy as a vendor.
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  // Emit one stylesheet (dist/index.css) rather than injecting <style> at import
  // time: the design system's CSS has to be linkable on its own.
  injectStyle: false,
});
