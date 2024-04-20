import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
<<<<<<< HEAD
import db from "@astrojs/db";

import netlify from "@astrojs/netlify";
=======

import db from "@astrojs/db";
>>>>>>> 0300e722a1287109d9083dd4060cb2e9fdbeb789

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), db()],
  output: "server",
  adapter: netlify()
<<<<<<< HEAD
});
=======
});
>>>>>>> 0300e722a1287109d9083dd4060cb2e9fdbeb789
