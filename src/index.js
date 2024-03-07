// creamos el plugin
import createPlugin from 'tailwindcss/plugin.js'
import theme from './theme.js'

// vamos a usar jsdocs para no usar ts y de esta manera lo tendremos tipado
/** @type {import('tailwindcss/types/config').PluginCreator}  */
const pluginCreator = (api) => {
  // console.log('Plugin creator')
  // matchUtilities nos permitira crear nuestras propias clases dinamicas en tailwind -> si le decimos animation-delay-100 -> sera -> animation-delay: 100ms
  // theme este theme es un metodo que cuando nosotros hagamos animation-delay-100 sacara el valor correcto
  const { theme, matchUtilities, addUtilities } = api

  // refactorizando
  /* matchUtilities({
    // cuando el usuario utilize animate-delay
    'animate-delay': value => ({
      // le pasamos el valor y cuando le pasemos escribira en css :
      'animation-delay': value
    })
  },
  // para sacar los valores
  {
    values: theme('animationDelay')
  })

  matchUtilities({
    // cuando el usuario utilize animate-duration
    'animate-duration': value => ({
      // le pasamos el valor y cuando le pasemos escribira en css :
      'animation-duration': value
    })
  },
  // para sacar los valores
  {
    values: theme('animationDuration')
  }) */

  const dinamicUtils = {
    'animate-delay': { css: 'animation-delay', values: theme('animationDelay') },
    'animate-duration': { css: 'animation-duration', values: theme('animationDuration') }
  }

  Object.entries(dinamicUtils).forEach(([name, { css, values }]) => {
    matchUtilities({
      // cuando el usuario utilize animate-delay
      [name]: value => ({
        // le pasamos el valor y cuando le pasemos escribira en css :
        [css]: value
      })
    },
    // para sacar los valores
    {
      values
    })
  })

  // para las utilidades estaticas
  addUtilities({
    '.animate-ease': {
      'animation-timing-function': 'ease'
    },
    '.animate-ease-in': {
      'animation-timing-function': 'ease-in'
    },
    '.animate-ease-out': {
      'animation-timing-function': 'ease-out'
    },
    '.animate-ease-in-out': {
      'animation-timing-function': 'ease-in-out'
    },
    '.animate-linear': {
      'animation-timing-function': 'linear'
    },
    '.animate-direction-normal': {
      'animation-direction': 'normal'
    },
    '.animate-direction-reverse': {
      'animation-direction': 'reverse'
    },
    '.animate-direction-alternate': {
      'animation-direction': 'alternate'
    },
    '.animate-direction-alternate-reverse': {
      'animation-direction': 'alternate-reverse'
    },
    '.animate-play-running': {
      'animation-play-state': 'running'
    },
    '.animate-play-paused': {
      'animation-play-state': 'paused'
    }
  })
}

/** @type {import('tailwindcss/types/config').Config}  */
const pluginConfig = { theme }

export default createPlugin(pluginCreator, pluginConfig)
