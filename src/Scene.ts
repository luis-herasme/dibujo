
import Render   from './Render'
import Vector2D from './Vector'
import * as Graphic  from './Graphic'

export default class Scene {
  public context
  public renderer    : Render
  public followed    : Vector2D
  public temp        : Vector2D
  public childs      : Array<Graphic.Graphic> = []
  public following   : boolean  = false
  public translation : Vector2D = new Vector2D(0, 0)
  public backgroundColor : string

  add (element: Graphic.Graphic): void {
    element.context = this.context
    this.childs.push(element)
  }

  remove (element: Graphic.Graphic): void {
    this.childs.splice(this.childs.indexOf(element), 1)
  }

  clear (color: string = '#000'): void {
    this.context.fillStyle = color
    this.context.fillRect(
      -this.translation.x,
      0,
      window.innerWidth,
      window.innerHeight
    )
  }

  follow (gameObject) {
    this.followed  = gameObject.transform.position
    this.temp      = this.followed.copy()
    this.following = true
  }

  smoth (state: boolean): void {
    if (this.context.imageSmoothingEnabled) {
      this.context.imageSmoothingEnabled = state
    } else if (this.context.mozImageSmoothingEnabled) { 
      this.context.mozImageSmoothingEnabled = state
    } else if (this.context.webkitImageSmoothingEnabled) { 
      this.context.webkitImageSmoothingEnabled = state
    }
  }

  zoom (where: Vector2D, howMuch: Vector2D): void {
    this.context.translate(where.x, where.y)
    this.context.scale(howMuch.x, howMuch.y)
    this.context.translate(-where.x, -where.y)
  }

  translate(x, y) {
    this.translation.x -= x
    this.translation.y -= y
    this.context.translate(-x, -y)
  }

  update (): void {
    this.clear(this.backgroundColor)
    if (this.following) {
      const change = Vector2D.sub(this.temp, this.followed)
      this.temp = this.followed.copy()
      this.translate(-change.x, 0) /* -change.y To enable y following */
    }
    this.childs.forEach(child => child.render())
  }
}
