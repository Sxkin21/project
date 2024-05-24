import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import db from "@astrojs/db";
import netlify from "@astrojs/netlify";
import node from "@astrojs/node";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), db(), react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});