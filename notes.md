# Plugin tailwind to add animations
Lo primero que haremo es instalar standard
    ```
        npm install standard -D
    ```
Obvio necesitamos tailwind
    npm install tailwindcss -D

y en el package.json colocamos
    "peerDependencies": {
        "tailwindcss": "^3.0.0"
    },
porque es una dependencia que queramos que tenga el proyecto

Otra cosa que necesitamos que tenga es postcss
    npm install postcss -D


Sacaremos las animaciones de esta pagina
    https://animation.ibelick.com/
de su repositorio del archivo tailwind.config.ts nos copiamos las animaciones y los keyframes

Tambien usaremos para los test para que nos minifique de alguna manera las lineas de css que nos va a imprimir para que esten sin saltos de linea espaciados etc

    npm install @csstools/postcss-minify 

Para hacer los test lo haremos con vitest
    npm install vitest -D

Leer este articulo sobre buen uso de las animaciones
    https://uxdesign.cc/the-ultimate-guide-to-proper-use-of-animation-in-ux-10bd98614fa9

# Para crear la pagina
    npm create astro@latest
añadimos tailwind
    npx astro add tailwind

para añadir nuestro plugin en el archivo
tailwind.config.mjs

```
    import animations from '../../src/index.js'

    /** @type {import('tailwindcss').Config} */
    export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {}
    },
    plugins: [animations]
    }
```
# Para publicar
npm login <- logearse en npm
npm whoami  <- para saber en que cuenta estamos
npm publish --access=public <-- para publicarlo como publico
npm info <namepackage><- Para saber la informacion de la publicacion
npm info @ignaccio7/tailwind-animations

npm publish --dry-run <-- para simular que si hubiera publicado y te muestra las cosas que esta publicando