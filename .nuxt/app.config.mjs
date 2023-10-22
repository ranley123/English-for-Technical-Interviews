
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {}
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/@nuxt-themes+docus@1.15.0_nuxt@3.7.4_rollup@3.29.4_vue@3.3.4/node_modules/@nuxt-themes/docus/app.config.ts"
import cfg1 from "/Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/@nuxt-themes+typography@0.11.0_postcss@8.4.31_rollup@3.29.4_vue@3.3.4/node_modules/@nuxt-themes/typography/app.config.ts"
import cfg2 from "/Users/keqing/Code/English-for-Technical-Interviews/node_modules/.pnpm/@nuxt-themes+elements@0.9.5_postcss@8.4.31_rollup@3.29.4_vue@3.3.4/node_modules/@nuxt-themes/elements/app.config.ts"

export default /* #__PURE__ */ defuFn(cfg0, cfg1, cfg2, inlineConfig)
