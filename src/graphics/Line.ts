import Graphic from './Graphic'
import Vector from '../Vector'

class Line extends Graphic {
  public color: string
  public start: Vector = new Vector(0, 0)
  public end: Vector = new Vector(1, 1)
  public type: string = "line"

  constructor(data: any) {
    super(data)
    if (data.start) this.start = data.start
    if (data.end) this.end = data.end
    if (data.color) this.color = data.color
    this.position = data.start
    this.end = new Vector(this.end.x - this.start.x, this.end.y - this.start.y)
  }

  render(): void {
    this.context.beginPath()
    this.context.moveTo(this.position.x, this.position.y)
    this.context.lineTo(this.end.x + this.position.x, this.end.y + this.position.y)
    this.context.stroke()
  }
}

export default Line
