
import Graphic from './Graphic'
import Point from '../Point'

export default class Line extends Graphic{
  public color: string
  public start: Point = {x: 0, y: 0}
  public end  : Point = {x: 1, y: 1}
  public type: string = "line"

  constructor (data) {
    super(data)
    if (data.start) this.start = data.start
    if (data.end)   this.end   = data.end
    if (data.color) this.color = data.color
    this.position = data.start
    this.end = new Point(this.end.x - this.start.x, this.end.y - this.start.y)
  }

  render (): void {
    this.context.beginPath()
    this.context.moveTo(this.position.x, this.position.y)
    this.context.lineTo(this.end.x + this.position.x, this.end.y + this.position.y)
    this.context.stroke()
  }
}
