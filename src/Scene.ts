
import Render   from './Render'
import Vector2D from './Vector2D'
import Graphic from './graphics/Graphic'

export default class Scene {
  public context

  public renderer         : Render
  public followed         : Vector2D
  public temp             : Vector2D
  public childs           : Array<Graphic> = []
  public organized        : boolean        = true
  public following        : boolean        = false
  public backgroundColor  : string         = '#000000'
  public translation      : Vector2D       = new Vector2D(0, 0)

  constructor (renderer: Render, background?: string) {
    this.renderer = renderer
    this.backgroundColor = background
  }

  add (element: Graphic): void {
    if(!this.context) this.context = this.renderer.context
    element.context = this.context
    this.organized = false
    this.childs.push(element)
  }

  remove (element: Graphic): void {
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

  organize_children (): void {
    this.childs.sort((a,b) => a.z_index - b.z_index)
  }

  update (): void {
    this.clear(this.backgroundColor)

    if (this.following) {
      const change = Vector2D.sub(this.temp, this.followed)
      this.temp = this.followed.copy()
      this.translate(-change.x, 0) /* -change.y To enable y following */
    }

    if(!this.organized) this.organize_children()
    this.organized = true
    this.childs.forEach(child => child.render())
  }
}
