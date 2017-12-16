
import Vector from '../Vector'

/**
 * This function renders an animation from an srpite sheet in the screen
 * @param {string} name This will be the name of the animation
 * @param {object} config This object contains the configuration of the animation
 */
class SpriteSheet {
  constructor (src, scale, name, position, frameRate, render, image, width, height) {
    this.width = width
    this.height = height
    this.image = image
    this.position = position
    this.scale = scale
    this.render = render
    this.frameRate = frameRate

    let frame = new Vector(0, 0)

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

  destroy () {
    clearInterval(this.interval)
  }

  render () {
    this.render.context.drawImage(
      this.image,
      this.x, this.y,
      this.width, this.height,
      this.position.x,
      this.position.y,
      this.width * this.scale.x,
      this.height * this.scale.y
    )
  }
}

export default SpriteSheet
