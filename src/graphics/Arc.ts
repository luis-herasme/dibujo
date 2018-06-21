import CircleEvents from '../Events/CircleEvents'

class Arc extends CircleEvents {
  public endAngle: number = 0
  public startAngle: number = Math.PI

  constructor(configuration?: any) {
    super(configuration)
    if (configuration) {
      this.endAngle = configuration.endAngle ? configuration.endAngle : 0
      this.startAngle = configuration.startAngle ? configuration.startAngle : Math.PI
    }
  }
  
  selfRender(): void {
    this.context.arc(0, 0, this.radius, this.endAngle, this.startAngle, true)

    if (this.fill) {
      this.context.fill()
    }

    if (this.stroke) {
      this.context.stroke()
    }
  }
}

export default Arc
