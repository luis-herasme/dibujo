
import Graphic from './Graphic'

export default class Arc extends Graphic {
  public color: string
  public radius: number
  public lineWidth: number
  public stroke : boolean
  public eAngl: number
  public aAngl: number
  public lineColor: string  = '#000'
  public type: string = "arc"

  constructor  (configuration){
    super(configuration)
    if (configuration.stroke) this.stroke = configuration.stroke
    if (configuration.color) this.color = configuration.color
    if (configuration.radius) this.radius = configuration.radius
    if (configuration.lineWidth) this.lineWidth = configuration.lineWidth
    if (configuration.eAngl) this.eAngl = configuration.eAngl
    if (configuration.aAngl) this.aAngl = configuration.aAngl
    if (configuration.lineColor) this.lineColor = configuration.lineColor

  }

  render (): void {
    this.context.beginPath()
    this.context.fillStyle = this.color
    this.context.arc(this.position.x, this.position.y, this.radius, this.eAngl, this.aAngl, true)
    if (this.stroke) {
      this.context.strokeStyle = this.lineColor
      this.context.lineWidth = this.lineWidth
      this.context.stroke()
    }
  }
}
