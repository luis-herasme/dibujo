
import Graphic from './Graphic'
import Point from '../Point'

export default class Line extends Graphic{
  public color: string
  public start: Point = {x: 0, y: 0}
  public end  : Point = {x: 1, y: 1}

  constructor (data) {
    super(data)
    if (data.start) this.start = data.start
    if (data.end)   this.end   = data.end
    if (data.color) this.color = data.color
  }

  render (): void {
    this.context.beginPath()
    this.context.moveTo(this.start.x, this.start.y)
    this.context.lineTo(this.end.x, this.end.y)
    this.context.stroke()
  }
}