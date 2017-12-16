/* global Image */

import Vector from '../Vector'

/**
 * This class creates an sprite object
 * @param {string} name This will be the name of the image
 * @param {object} position This object contains the position of the image
 * @param {object} scale This object contains the scale of the image
 * @param {number} rotation This is the rotation of the image
 * @param {object} anchor This will be the point of rotation of the image
 * @param {string} src This will be the location where the image is saved
 */
class Sprite {
  constructor (
    src,
    position = new Vector(0, 0),
    scale = new Vector(1, 1),
    rotation = 0,
    anchor = new Vector(0.5, 0.5)
  ) {
    this.load(src)
    this.position = position
    this.scale = scale
    this.anchor = anchor
    this.rotation = rotation
  }

  /**
   * This function loads an image and saves it.
   * @param {string} name With this name the loaded image will be save in a image cache for later use
   * @param {string} src This is where the image is save
   */
  load (src) {
    this.image = new Image()
    this.image.src = src
  }

  /**
   * Draws an image on the screen
   * @param {object} position
   * @param {object} anchor
   * @param {number} rotation
   * @param {number} width
   * @param {number} height
   */
  render (position, anchor, rotation, scale) {
    this.render.context.save()
    this.render.context.translate(position.x, position.y)
    this.render.context.rotate(rotation)
    let realWidth = scale.x * this.image.width
    let realHeight = scale.y * this.image.height
    this.render.context.drawImage(this.image, -(realWidth * anchor.x), -(realHeight * anchor.y), realWidth, realHeight)
    this.render.context.restore()
  }
}

export default Sprite
