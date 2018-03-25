
import Vector2D from '../Vector2D'
import Graphic  from './Graphic'

class Animation extends Graphic {

  public loop     : boolean = true
  public scale    : Vector2D
  public size     : Vector2D
  public frameRate: number
  public x        : number
  public y        : number
  public image
  public interval 

  constructor (
    src       : string,
    scale     : Vector2D = new Vector2D(1, 1),
    position  : Vector2D = new Vector2D(1, 1),
    frameRate : number   = 100,
    size      : Vector2D = new Vector2D(32, 32),
    loop      : boolean  = true
  ) {
    super(position)
    this.load(src)
    this.loop      = loop
    this.size      = size
    this.scale     = scale
    this.frameRate = frameRate
    let frame      = new Vector2D(0, 0)
    this.x         = 0
    this.y         = 0

    this.interval = setInterval(() => {
      frame.x += 1

      this.x = this.size.x * frame.x
      this.y = this.size.y * frame.y

      if (this.x >= this.image.width) {
        frame.x = 0
      }

      if (this.y >= this.image.height) {
        frame.y = 0

        if (!this.loop) {
          this.destroy()
        }
      }
      this.x = this.size.x * frame.x
      this.y = this.size.y * frame.y
      
    }, this.frameRate)
  }

  onClick (func: Function): void {}

  load (src: string): void {
    this.image = new Image()
    this.image.src = src
  }

  getSize () {
    return new Vector2D(this.size.x * this.scale.x, this.size.y * this.scale.y)
  }

  render () {
    this.context.drawImage(
      this.image,
      this.x,
      this.y,
      this.size.x, this.size.y,
      this.position.x,
      this.position.y,
      this.size.x * this.scale.x,
      this.size.y * this.scale.y
    )
  }

  destroy () {
    clearInterval(this.interval)
  }
}

export default Animation
