import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  routeRules: {
    // HTML/doc requests: always revalidate so refreshed pages pick up latest CSS/font refs.
    "/": {
      headers: {
        "Cache-Control": "no-cache, must-revalidate",
      },
    },
    "/**": {
      headers: {
        "Cache-Control": "no-cache, must-revalidate",
      },
    },

    // Vite-hashed build assets (CSS, JS, fonts, etc.) are safe to cache forever.
    "/assets/**": {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },

    // Non-hashed public font paths should not be aggressively cached.
    "/fonts/**": {
      headers: {
        "Cache-Control": "public, max-age=0, must-revalidate",
      },
    },

    // Ensure service worker updates are not stuck behind cache.
    "/sw.js": {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    },
  },
});
