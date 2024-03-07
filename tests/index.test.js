import { generatePluginCSS } from './utils.js'
import { describe, it, expect } from 'vitest'

describe('tailwindcss-animations-plugins', () => {
  // probando que compare las clases correctamente de las animaciones
  it('use a predefined animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-zoom-in">Hello</div>'
    })
    console.log(css)
    expect(css).toMatch('@keyframes zoom-in{0%{opacity:0;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}.animate-zoom-in{animation:zoom-in 0.6s ease-out both}')
  })
  // probando el uso de las clases con delay
  it('use a animation delay', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-delay-100">Hello</div>'
    })
    console.log(css)
    expect(css).toMatch('.animate-delay-100{animation-delay:100ms}')
  })
  // probando el uso de las clases con delay personalizado
  it('use a custom animation delay', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-delay-[777ms]">Hello</div>'
    })
    console.log(css)
    expect(css).toMatch('.animate-delay-\\[777ms\\]{animation-delay:777ms}')
  })

  // probando el uso de las clases con duration
  it('use a animation duration', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-duration-100">Hello</div>'
    })
    console.log(css)
    expect(css).toMatch('.animate-duration-100{animation-duration:100ms}')
  })
  // probando el uso de las clases con duration personalizado
  it('use a custom animation duration', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-duration-[777ms]">Hello</div>'
    })
    console.log(css)
    expect(css).toMatch('.animate-duration-\\[777ms\\]{animation-duration:777ms}')
  })

  // probando el uso de las clases con timing duration
  it('use a timing function animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-linear">Hello</div>'
    })
    console.log(css)
    expect(css).toMatch('.animate-linear{animation-timing-function:linear}')
  })
  it('use a timing faster function animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-duration-faster">Hello</div>'
    })
    console.log(css)
    expect(css).toMatch('.animate-duration-faster{animation-duration:100ms}')
  })
})
