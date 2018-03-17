
var defaultCss = document.createElement('style')
defaultCss.type = 'text/css'
defaultCss.innerHTML = `
* {
  margin:0%;
  padding: 0%;
}
canvas {
  display: block;
}
`
document.body.appendChild(defaultCss)

import Scene from './Scene'
import Render from './Render'
import Sprite from './Sprite'
import * as Graphic from './Graphic'
import Animation from './Animation'
import Color from './Color'

export {
  Color,
  Animation,
  Graphic,
  Sprite,
  Scene,
  Render
}
