import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import { SITE_URL } from "@/consts";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: { SITE_URL },
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
