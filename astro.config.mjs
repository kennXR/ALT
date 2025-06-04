// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://evryingreth.github.io/RETH",
  integrations: [],
  output: 'static',
  build: {
    assets: '_assets'
  }
});
