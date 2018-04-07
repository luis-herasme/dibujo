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
import LinearGradient from './LinearGradient'
import Group from './Group'
import Vector from './Vector'
import Color from './Color'

// Graphics
import Animation from './graphics/Animation'
import Graphic from './graphics/Graphic'
import Ellipse from './graphics/Ellipse'
import Poligon from './graphics/Poligon'
import Picture from './graphics/Picture'
import Circle from './graphics/Circle'
import Video from './graphics/Video'
import Rect from './graphics/Rect'
import Line from './graphics/Line'
import Text from './graphics/Text'
import Arc from './graphics/Arc'
import BezierCurve from './graphics/BezierCurve'
import QuadraticCurve from './graphics/QuadraticCurve'


// Events
import Mouse from './Events/Mouse'
import KeyBoard from './Events/KeyBoard'

const mouse = new Mouse()
const keyboard = new KeyBoard()

export {
  QuadraticCurve,
  Video,
  BezierCurve,
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
