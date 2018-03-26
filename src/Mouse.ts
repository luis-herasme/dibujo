import Vector from './Vector'

class Mouse {
  private context     : CanvasRenderingContext2D
  private velocity    : Vector = new Vector(0, 0)
  private acceleration: Vector = new Vector(0, 0)
  private friction    : number = 0.9
  public position     : Vector = new Vector(0, 0)

  constructor (context: CanvasRenderingContext2D) {
    this.context = context
  }

  update () {
    this.velocity.add(this.acceleration)
    this.velocity.mult(this.friction)
    this.position.add(this.velocity)
    this.context.translate(this.velocity.x, this.velocity.y)
    this.acceleration.zero()
  }

  addForce(force: Vector) {
    this.acceleration.add(force)
  }
}

export default Mouse
