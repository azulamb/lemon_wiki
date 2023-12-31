import { defineConfig } from '$fresh/server.ts';
import { freshWebComponents } from '@fresh_web_components/plugin.ts';

import.meta.url;
export default defineConfig({
  plugins: [
    freshWebComponents(),
  ],
});
