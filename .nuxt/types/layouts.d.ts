import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "page"
declare module "../../node_modules/.pnpm/nuxt@3.7.4_eslint@8.51.0_rollup@3.29.4_typescript@5.2.2/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}