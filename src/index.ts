
import {Render, Graphic} from './Dibujo'

let RENDER = new Render()

let rect = new Graphic.Rect({
  position: {x: 100, y: 100},
  width: 100,
  height: 100,
  color: '#FFF'
})

let text = new Graphic.Text({
  content: 'LUIS',
  position: {x: 200, y: 200},
  style: {
    font: 'bold 32px Arial',
    fillStyle: '#336'
  }
})

let circle = new Graphic.Circle({
  radius: 50,
  color: '#F00',
  stroke: true,
  lineWidth: 3,
  lineColor: '#0F0',
  position: {x: 50, y: 50}
})

let img = new Graphic.Picture({
  position: {x: 10, y: 10},
  width: 100,
  height: 100,
  src: './apple.png',
})

circle.onClick(() => {
  console.log('Click')
  if (circle.color === '#F00') circle.color = '#00F'
  else circle.color = '#F00'
})

RENDER.addMultiple([circle, text, rect, img])

setInterval(() => {
  RENDER.render()

  circle.position.x += 0.1
  img.position.y += 1.4
  text.position.x += 0.5
  rect.position.x += 0.25
})
