
import Vector2D from './Vector2D'
import Graphic  from './graphics/Graphic'
import Scene    from './Scene'

class Camera {

  public context          : CanvasRenderingContext2D
  public followingX       : boolean        = false
  public followingY       : boolean        = false

  public translation      : Vector2D       = new Vector2D(0, 0)
  public followedPosition : Vector2D
  public fLastPosition    : Vector2D

  constructor (scene: Scene) {
    this.context = scene.context
  }

  follow (graphic: Graphic): void {
    this.followedPosition  = graphic.position
    this.followingX = true
    this.followingY = true
  }

  followX (graphic: Graphic): void {
    this.followedPosition  = graphic.position
    this.followingX = true
  }

  followY (graphic: Graphic): void {
    this.followedPosition  = graphic.position
    this.followingY = true
  }

  stopFollowing (): void {
    this.followingX = false
    this.followingY = false
  }

  stopFollowingX (): void {
    this.followingX = false
  }

  stopFollowingY (): void {
    this.followingY = false
  }

  zoom (where: Vector2D, howMuch: Vector2D): void {
    this.context.translate(where.x, where.y)
    this.context.scale(howMuch.x, howMuch.y)
    this.context.translate(-where.x, -where.y)
  }

  translate (x: number, y: number): void {
    this.context.translate(x, y)
  }

  update () {
    if (this.followingX || this.followingY) {
      const change = Vector2D.sub(this.fLastPosition, this.followedPosition)
      this.fLastPosition = this.followedPosition.copy()
      this.translate(change.x, change.y)
    }
  }
}

export default Camera
