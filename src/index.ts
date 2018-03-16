
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
  strokeWidth: 3,
  strokeColor: '#0F0',
  x: 50,
  y: 50
})

let img = new Graphic.Picture({
  src: './apple.png'
})

let a = [circle, text, rect, img]
a.forEach((e) => RENDER.add(e))
setInterval(() => {
  RENDER.update()
})
