
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
import Graphic from './graphics/Graphic'
import Animation from './graphics/Animation'

import Rect from './graphics/Rect'
import Circle from './graphics/Circle'
import Line from './graphics/Line'
import Poligon from './graphics/Poligon'
import Picture from './graphics/Picture'
import Text from './graphics/Text'
import Arc from './graphics/Arc'
import Group from './Group'

import Color from './Color'

export {
 // Group,
  Color,
  Animation,
  Rect,
  Circle,
  Line,
  Poligon,
  Picture,
  Text,
  Arc,
  Graphic,
  Scene,
  Render
}
