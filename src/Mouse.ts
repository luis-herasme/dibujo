
import Vector2D from './Vector2D'

class Mouse {
  private velocity    : Vector2D = new Vector2D(0, 0)
  private acceleration: Vector2D = new Vector2D(0, 0)
  private friction    : number   = 0.9
  private context     : CanvasRenderingContext2D

  public x: number = 0
  public y: number = 0

  constructor (context: CanvasRenderingContext2D) {
    this.context = context
  }

  update () {
    this.velocity.add(this.acceleration)
    this.context.translate(this.velocity.x, this.velocity.y)
    this.velocity.mult(this.friction)
    this.acceleration.zero()
  }

  addForce(force: Vector2D) {
    this.acceleration.add(force)
  }
}

export default Mouse
