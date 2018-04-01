import Graphic from './graphics/Graphic'
import Vector from './Vector'

class LinearGradient extends Graphic {
  public context: CanvasRenderingContext2D
  public size: Vector
  public gradient: any
  constructor (config?: any) {
    super(config)
    this.context = config.context
    this.size = config.size ? config.size : new Vector(100, 100)
    this.gradient = this.context.createLinearGradient(this.position.x, this.position.y, this.size.x, this.size.y)
    let counter = 0
    for (let color of config.colors) {
      this.gradient.addColorStop(counter, color)
     // console.log(1 / config.colors.length)
      counter += 1 / config.colors.length
    }
  }
}

export default LinearGradient