
import Vector2D from './Vector2D'
import Graphic  from './graphics/Graphic'
import Scene    from './Scene'

class Camera {

  public context          : CanvasRenderingContext2D
  public followingX       : boolean  = false
  public followingY       : boolean  = false

  public translation      : Vector2D = new Vector2D(0, 0)
  public followedPosition : Vector2D
  public fLastPosition    : Vector2D
  public mouse

  public keyMap = {
    up   : 'w',
    down : 's',
    left : 'a',
    right: 'd'
  }

  constructor (scene: Scene) {
    this.context = scene.context

    this.mouse = {
      velocity:     new Vector2D(0, 0),
      acceleration: new Vector2D(0, 0),
      friction:     0.9,
    
      x: 0,
      y: 0,
    
      update () {
        this.velocity.add(this.acceleration)
        this.context.translate(this.velocity.x, this.velocity.y)
        this.velocity.mult(this.friction)
        this.acceleration.zero()
      },
    
      addForce(force) {
        this.acceleration.add(force)
      }
    }
  }

  enable () {
    document.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX
      this.mouse.y = e.clientY
    })
  }

  enableKeyTranslate () {
    document.addEventListener('keypress', (e) => {

      if (e.key.toLowerCase() === this.keyMap.up) {
        this.mouse.addForce(new Vector2D(0, 10))
      }
      if (e.key.toLowerCase() === this.keyMap.down) {
        this.mouse.addForce(new Vector2D(0, -10))
      }
      if (e.key.toLowerCase() === this.keyMap.left) {
        this.mouse.addForce(new Vector2D(10, 0))
      }
      if (e.key.toLowerCase() === this.keyMap.right) {
        this.mouse.addForce(new Vector2D(-10, 0))
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
