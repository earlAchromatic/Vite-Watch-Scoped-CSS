# Vite Watch Scoped CSS Repro

See [this issue which was closed due to no repro.](https://github.com/vitejs/vite/issues/6633)

The problem is that there is decoupling between the scoped CSS id's and the `data-v-xxxx` ids that Vue generates when using vite's build `--watch` (or `watch: true` in the config).

## Reproduce

Use: `npx degit https://github.com/earlAchromatic/Vite-Watch-Scoped-CSS.git` `pnpm i`, `pnpm build` and then `pnpm play` to build and start servers.

Then change the component template in `component.vue` you will see that the styles are no longer being applied properly.

