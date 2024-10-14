// uno.config.ts
import {
  defineConfig,
  presetUno
} from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  // presets: [
  //   presetUno(),
  //   presetAttributify(),
  //   presetIcons(),
  //   presetTypography(),
  //   presetWebFonts({
  //     fonts: {
  //       // ...
  //     },
  //   }),
  // ],
  rules: [
    ['color-primary', { color: '#316c72' }],
  ]
})