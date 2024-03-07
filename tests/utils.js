import tailwindcss from 'tailwindcss'
import postcss from 'postcss'
import minify from '@csstools/postcss-minify'

import animationPlugin from '../src/index.js'

const TAILWIND_BASE = '@tailwind utilities;'

// Esto para probar los tests
// con esta funcion queremos que nos devuelva el css que se generaria
export function generatePluginCSS (options = {}) {
  // inline por si es css como si le hicieramos un apply y content si es html
  const { inline = '', content = '' } = options

  // que nos devuelva compilando con postcss
  /* return postcss([
    tailwindcss({
      plugins: [animationPlugin]
    })
  ])
    // .process(`${TAILWIND_BASE} .content { @apply pl-0 }`)
    .process(`${TAILWIND_BASE} .content { @apply animate-fade-in }`)
    .then(result => result.css) */

  return postcss([
    minify(),
    tailwindcss({
      plugins: [animationPlugin],
      content: [{ raw: content }]
    })
  ])
    .process(`${TAILWIND_BASE} ${inline}`, {
      from: undefined // el archivo de configuracion de css
    })
    .then(result => result.css)
}

// console.log(await generatePluginCSS({
//   content: '<div class="animate-zoom-in">Hello</div>'
// }))
