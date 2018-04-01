const defaultCss = document.createElement('style')
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
document.head.appendChild(defaultCss)

import Scene from './Scene'
import Render from './Render'
import Graphic from './graphics/Graphic'
import Animation from './graphics/Animation'

import Rect from './graphics/Rect'
import Circle from './graphics/Circle'
import Ellipse from './graphics/Ellipse'
import LinearGradient from './LinearGradient'
import Line from './graphics/Line'
import Poligon from './graphics/Poligon'
import Picture from './graphics/Picture'
import Video from './graphics/Video'
import Text from './graphics/Text'
import Arc from './graphics/Arc'
import Group from './Group'
import Vector from './Vector'

import Color from './Color'

// Events
import Mouse from './Events/Mouse'
import KeyBoard from './Events/KeyBoard'

const mouse = new Mouse()
const keyboard = new KeyBoard()

export {
  Video,
  LinearGradient,
  Ellipse,
  mouse,
  keyboard,
  Group,
  Color,
  Animation,
  Rect,
  Circle,
  Vector,
  Line,
  Poligon,
  Picture,
  Text,
  Arc,
  Graphic,
  Scene,
  Render
}
