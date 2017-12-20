
import { Vector2D } from 'vector_class'

class Animation {
  public position: Vector2D
  public scale: Vector2D
  public frameRate: number
  public width: number
  public height: number
  public loop: boolean

  public x // Current frame
  public y // Current frame

  public context
  public image
  public interval

  constructor (src: string, scale, name, position, frameRate, render, image, width, height) {
    this.width = width
    this.height = height
    this.image = image
    this.position = position
    this.scale = scale
    this.render = render
    this.frameRate = frameRate

    let frame = new Vector2D(0, 0)

    this.x = 0
    this.y = 0

    this.interval = setInterval(() => {
      frame.x += 1
      if (this.x >= this.image.width - this.width) {
        frame.x = 0
        frame.y += 1
      }
      if (this.y >= this.image.height) {
        frame.y = 0
        if (this.loop) frame.y = 0
        else this.destroy()
      }
      this.x = this.width * frame.x
      this.y = this.height * frame.y
    }, this.frameRate)
  }

  render () {
    this.context.drawImage(
      this.image,
      this.x,
      this.y,
      this.width, this.height,
      this.position.x,
      this.position.y,
      this.width * this.scale.x,
      this.height * this.scale.y
    )
  }

  destroy () {
    clearInterval(this.interval)
  }
}

export default Animation
