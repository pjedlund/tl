// @ts-check
import { defineConfig } from 'astro/config';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  //output: 'server', // Required change. Pick either hybrid or server.output: 'server',
  integrations: [db()]
});
