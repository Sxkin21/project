import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import db from "@astrojs/db";
import daisyui from 'daisyui';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), db(), daisyui()],
  output: "server",
  adapter: vercel()
});