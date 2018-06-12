import Graphic from './Graphic'
import Vector from '../Vector'

class Poligon extends Graphic {
  public cords: Array<Vector>

  constructor(configuration: any) {
    super(configuration)
    if (configuration.color) this.color = configuration.color
    if (configuration.stroke) this.stroke = configuration.stroke
    if (configuration.cords) this.cords = configuration.cords.slice(1, configuration.cords.length)
    if (configuration.fill) this.fill = configuration.fill
    this.position = configuration.cords.slice[0]
    this.cords.filter((pnt) => {
      return new Vector(pnt.x - this.position.x, pnt.y - this.position.y)
    })
  }

  render(): void {
    this.context.beginPath()
    this.context.strokeStyle = this.lineColor
    this.context.lineCap = this.lineCap
    this.context.fillStyle = this.color
    this.context.lineJoin = this.lineJoin
    this.context.moveTo(this.cords[0].x, this.cords[0].y)
    for (var i = 0; i < this.cords.length; i++) {
      this.context.lineTo(this.cords[i].x + this.position.x, this.cords[i].y + this.position.y)
    }

    this.context.closePath()
    this.context.fill()
    if (this.stroke) this.context.stroke
  }
}

export default Poligon
