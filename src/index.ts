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

/* 
            GUI
*/

.wind {
  position: fixed;
  background: #333;
  color: white;
  font-family: arial;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #111;
  cursor: pointer;
}

button {
  cursor: pointer;
  padding: 5px;
  border: 1px solid #333;
  color:black;
  border-radius: 5px;
}

/* 
            END GUI
*/
`
document.head.appendChild(defaultCss)

import Scene from './Scene'
import Render from './Render'
import LinearGradient from './LinearGradient'
import Group from './Group'
import { Vector2D } from 'vector_class'
import Color from './Color'

import Wind from './GUI/Window'


// Graphics
import Animation from './Media/Animation'
import Graphic from './graphics/Graphic'
import Ellipse from './graphics/Ellipse'
import Poligon from './graphics/Poligon'
import Picture from './Media/Picture'
import Circle from './graphics/Circle'
import Video from './Media/Video'
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
  Wind,
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
  Vector2D,
  Line,
  Poligon,
  Picture,
  Text,
  Arc,
  Graphic,
  Scene,
  Render
}
