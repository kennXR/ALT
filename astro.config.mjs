// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://kennxr.github.io/ALT",
  base: "/ALT",
  output: 'static',
  build: {
    assets: '_assets'
  }
});
