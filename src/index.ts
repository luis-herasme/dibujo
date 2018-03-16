
import {Render, Graphic} from './Dibujo'

let RENDER = new Render()

let rect = new Graphic.Rect({
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  color: '#FFF'
})

let text = new Graphic.Text({
  content: 'Juan',
  x: 200,
  y: 200,
  style: {
    font: 'bold 32px Arial',
    fillStyle: '#F00'
  }
})

let circle = new Graphic.Circle({
  radius: 50,
  color: '#F00',
  stroke: true,
  lineWidth: 3,
  lineColor: '#0F0',
  x: 50,
  y: 50
})

let img = new Graphic.Picture({
  x: 10,
  y: 10,
  width: 100,
  height: 100,
  src: './apple.png',
})

RENDER.addMultiple([circle, text, rect, img])

setInterval(() => {
  RENDER.render()
  circle.x += 1
  img.y += 1.4
  text.x += 0.5
  rect.x += 0.25
})
