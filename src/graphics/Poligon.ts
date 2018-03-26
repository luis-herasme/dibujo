
import Graphic from './Graphic'
import Point from '../Point'

export default class Poligon extends Graphic {
  public cords      : Array<Point>
  public fill       : boolean = true
  public stroke     : boolean = false
  public color      : string  = '#FFF'
  public strokeColor: string  = '#000'

  constructor (configuration: any) {
    super(configuration)
    if (configuration.color) this.color = configuration.color
    if (configuration.stroke) this.stroke = configuration.stroke
    if (configuration.cords) this.cords = configuration.cords
    if (configuration.fill) this.fill = configuration.fill
    if (configuration.strokeColor) this.strokeColor = configuration.strokeColor
  }

  render (): void {
    this.context.beginPath()
    this.context.fillStyle = this.color
    this.context.moveTo(this.cords[0].x, this.cords[0].y)

    for (var i = 0; i < this.cords.length; i++) {
      this.context.lineTo(this.cords[i].x, this.cords[i].y)
    }

    this.context.closePath()
    this.context.fill()
    if (this.stroke) this.context.stroke
  }
}