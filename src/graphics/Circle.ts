
import CircleEvents from '../Events/CircleEvents'

class Circle extends CircleEvents {
  public radius: number = 5

  constructor (config?: any) {
    super(config)
    if (config) {
      this.radius = config.radius ? config.radius : 5
    }
  }

  selfRender(): void {
    this.context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)

    if (this.fill) {
      this.context.fill()
    }

    if (this.stroke) {
      this.context.stroke()
    }
  } 
}

export default Circle
