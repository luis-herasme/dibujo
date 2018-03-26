
import Graphic from './graphics/Graphic'
import Point from './Point'

export default class Group {
  private childs : Array<Graphic> = []
  private context: CanvasRenderingContext2D
  public position: Point
  public scale   : Point
  public rotation: number

  add (child: Graphic): void {
    this.childs.push(child)
  }

  render (): void {
    this.context.save()
    this.context.scale(this.scale.x, this.scale.y)
    this.context.rotate(this.rotation)
    this.context.translate(this.position.x, this.position.y)
    this.childs.forEach((child) => child.render())
    this.context.restore()
  }
}
