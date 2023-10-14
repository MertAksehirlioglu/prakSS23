import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/mertaksehirlioglu/Desktop/prak/prakSS23BPM/client/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}