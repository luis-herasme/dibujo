import Vector from '../Vector'
import Graphic from '../graphics/Graphic'

class Animation extends Graphic {
  public loop: boolean = true
  public size: Vector = new Vector(32, 32)
  public scale: Vector
  public frameRate: number
  public x: number
  public y: number
  public image: HTMLImageElement
  public interval: any
  public frame= new Vector(0, 0)
  public animations: any
  public animationPlaying: boolean = false

  constructor(configuration: any) {
    super(configuration)
    this.load(configuration.src)
    this.loop = configuration.loop ? configuration.loop : true
    this.size = configuration.size ? configuration.size : new Vector(32, 32)
    this.scale = configuration.scale ? configuration.scale : new Vector(1, 1)
    this.frameRate = configuration.frameRate ? configuration.frameRate : 24
    this.animations = configuration.animations
    this.x = 0
    this.y = 0
  }

  playAnimation (name: string): void {    
    if (!this.animationPlaying) {
      this.animationPlaying = true
      this.frame.x = 0
      this.frame.y = this.animations[name][1]
      this.reproduceAnimation(name)
    }
  }

  reproduceAnimation (name: string): void {
    this.x = this.size.x * this.frame.x
    this.y = this.size.y * this.frame.y
    this.frame.x += 1
    if (this.frame.x >= this.animations[name][0]) {
      this.animationPlaying = false
    } else {
      setTimeout(() => this.reproduceAnimation(name), this.frameRate)
    }
  }

  mouseDown() {

  }

  onClick(func: Function): void { }

  load(src: string): void {
    this.image = new Image()
    this.image.src = src
  }

  getSize() {
    return new Vector(this.size.x * this.scale.x, this.size.y * this.scale.y)
  }

  render() {
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

  destroy() {
    clearInterval(this.interval)
  }
}

export default Animation
