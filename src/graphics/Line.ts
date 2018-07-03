import Graphic from './Graphic'
import {Vector2D} from 'vector_class'

class Line extends Graphic {
  public start: Vector2D = new Vector2D(0, 0)
  public end: Vector2D = new Vector2D(1, 1)

  constructor(data: any) {
    super(data)
    if (data) {
      if (data.start) this.start = data.start
      if (data.end) this.end = data.end
      if (data.color) this.color = data.color
      if (data.start) this.position = data.start
      this.end = new Vector2D(this.end.x - this.start.x, this.end.y - this.start.y)
    }
  }

  selfRender(): void {
    /*
    this.context.strokeStyle = this.color
    this.context.lineWidth = this.width
    this.context.lineCap = this.lineCap
    this.context.lineJoin = this.lineJoin
    */
   this.context.beginPath()
    this.context.moveTo(this.position.x, this.position.y)
    this.context.lineTo(this.end.x + this.position.x, this.end.y + this.position.y)
    this.context.stroke()
  }
}

export default Line
