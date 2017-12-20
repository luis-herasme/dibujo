
import { Vector2D } from 'vector_class'

class Graphic {
  public position: Vector2D
  public scale: Vector2D
  public rotation: number
  public renderFunction
  public context

  constructor (renderFunction, position, scale, rotation) {
    this.renderFunction = renderFunction.bind(this)
    this.position = position
    this.scale = scale
    this.rotation = rotation
  }

  line (start, end, style) {
    this.context.beginPath()
    this.setStyle(style)
    this.context.moveTo(start[0], start[1])
    this.context.lineTo(end[0], end[1])
    this.context.stroke()
  }

  poligon (vecs, color: string) {
    this.context.beginPath()
    this.context.fillStyle = color
    this.context.moveTo(vecs[0][0], vecs[0][1])
    for (var i = 0; i < vecs.length; i++) {
      this.context.lineTo(vecs[i][0], vecs[i][1])
    }
    this.context.closePath()
    this.context.fill()
  }

  strokePoligon (vecs, color: string) {
    this.context.beginPath()
    this.context.fillStyle = color
    this.context.moveTo(vecs[0][0], vecs[0][1])
    for (var i = 0; i < vecs.length; i++) {
      this.context.lineTo(vecs[i][0], vecs[i][1])
    }
    this.context.closePath()
    
    this.context.stroke()
  }

  rect (x: number, y: number, width, height, color = '#fff') {
    this.context.beginPath()
    this.context.fillStyle = color
    this.context.fillRect(x, y, width, height)
  }

  strokeRect (x: number, y: number, width: number, height: number, color = '#fff', lineWidth: number) {
    this.context.beginPath()
    this.context.strokeStyle = color
    this.context.strokeRect(x, y, width, height)
  }

  setStyle (styles) {
    for (let style in styles) {
      this.context[style] = styles[style]
    }
  }

  text (texto: string, x: number, y: number, style, stroke) {
    this.setStyle(style)
    if (stroke) {
      this.context.strokeText(texto, x, y)
    }
    this.context.fillText(texto, x, y)
  }

  strokeCircle (x: number, y: number, radius, color = '#fff', width = 1) {
    this.context.beginPath()
    this.context.strokeStyle = color
    this.context.arc(x, y, radius, 0, 2 * Math.PI)
    this.context.lineWidth = width
    this.context.stroke()
  }

  circle (x: number, y: number, radius: number, color: string = '#fff'): void {
    this.context.beginPath()
    this.context.fillStyle = color
    this.context.arc(x, y, radius, 0, 2 * Math.PI)
    this.context.fill()
  }

  strokeArc (x: number, y: number, radius: number, lineWidth: number, eAngl: number, aAngl: number, color): void {
    this.context.beginPath()
    this.context.strokeStyle = color
    this.context.arc(x, y, radius, eAngl, aAngl, true)
    this.context.lineWidth = lineWidth
    this.context.stroke()
  }

  render (): void {
    this.context.save()
    this.context.scale(this.scale.x, this.scale.y)
    this.context.rotate(this.rotation)
    this.renderFunction()
    this.context.restore()
  }
}

export default Graphic
