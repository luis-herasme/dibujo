import Vector   from './Vector'
import Graphic  from './graphics/Graphic'
import Scene    from './Scene'
import Mouse    from './Mouse'

class Camera {
  public context              : CanvasRenderingContext2D
  public followedPosition     : Vector
  public fLastPosition        : Vector   = new Vector(0, 0)
  public mouse                : Mouse

  private keyTranslateEnabled : boolean  = false
  public followingX           : boolean  = false
  public followingY           : boolean  = false

  public keyMap = {
    up   : 'w',
    down : 's',
    left : 'a',
    right: 'd'
  }

  constructor (scene: Scene) {
    this.context = scene.context
    this.mouse = new Mouse(scene.context)
  }

  enable () {
    document.addEventListener('mousemove', (e) => {
      this.mouse.position.x = e.clientX
      this.mouse.position.y = e.clientY
    })
  }

  disableKeyTranslate () {

  }

  enableKeyTranslate () {
    this.keyTranslateEnabled = true
    document.addEventListener('keypress', (e) => {

      if (e.key.toLowerCase() === this.keyMap.up) {
        this.mouse.addForce(new Vector(0, 10))
      }
      if (e.key.toLowerCase() === this.keyMap.down) {
        this.mouse.addForce(new Vector(0, -10))
      }
      if (e.key.toLowerCase() === this.keyMap.left) {
        this.mouse.addForce(new Vector(10, 0))
      }
      if (e.key.toLowerCase() === this.keyMap.right) {
        this.mouse.addForce(new Vector(-10, 0))
      }

      /*
      if (e.key === '+') {
        this.context.translate(mouse.x,mouse.y)
        this.context.scale(1.1,1.1);
        this.context.translate(-mouse.x,-mouse.y)
      }
      if (e.key === '-') {
        this.context.translate(mouse.x,mouse.y)
        this.context.scale(0.9,0.9);
        this.context.translate(-mouse.x,-mouse.y)
      }*/
    })
  }

  follow (graphic: Graphic): void {
    this.followedPosition  = graphic.position
    this.fLastPosition = this.followedPosition.copy()
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

  zoom (where: Vector, howMuch: Vector): void {
    this.context.translate(where.x, where.y)
    this.context.scale(howMuch.x, howMuch.y)
    this.context.translate(-where.x, -where.y)
  }

  translate (x: number, y: number): void {
    this.context.translate(x, y)
  }

  update () {
    if (this.keyTranslateEnabled) this.mouse.update()
    if (this.followingX || this.followingY) {
      const change = Vector.sub(this.fLastPosition, this.followedPosition)
      this.fLastPosition = this.followedPosition.copy()
      this.translate(change.x, change.y)
    }
  }
}

export default Camera
