
/* global Image */

const render = require('./render.js')

let imageCache = {}

/**
 * This function loads an image and saves it.
 * @param {string} name With this name the loaded image will be save in a image cache for later use
 * @param {string} src This is where the image is save
 */
function loadImage (name, src) {
  const image = new Image()
  image.src = src
  imageCache[name] = image
}

/**
 * This function draws an image on the screen
 * @param {string} name This is the name of the image saved in the imageCache
 * @param {object} position This object contains the position of the image
 * @param {object} anchor This will be the point of rotation of the image
 * @param {number} rotation This will be the rotation of the image
 * @param {number} width This will be the width of the image
 * @param {number} height This will be the height of the image
 */
function drawImage (name, position, anchor, rotation, scale) {
  render.render.context.save()
  render.render.context.translate(position.x, position.y)
  render.render.context.rotate(rotation)
  let realWidth = scale.x * imageCache[name].width
  let realHeight = scale.y * imageCache[name].height
  render.render.context.drawImage(imageCache[name], -(realWidth * anchor.x), -(realHeight * anchor.y), realWidth, realHeight)
  render.render.context.restore()
}

/**
 * This function renders an animation from an srpite sheet in the screen
 * @param {string} name This will be the name of the animation
 * @param {object} config This object contains the configuration of the animation
 */
function SpriteSheet (name, config) {
  loadImage(name, config.src)
  let frame = new render.Point(0, 0)
  this.position = config.position
  this.scale = config.scale
  this.x = 0
  this.y = 0
  this.interval = setInterval(() => {
    frame.x += 1
    if (this.x >= imageCache[name].width - config.width) {
      frame.x = 0
      frame.y += 1
    }
    if (this.y >= imageCache[name].height) {
      frame.y = 0
      /*
      if (this.configuration.loop) frame.y = 0
      else this.destroy()
      */
    }
    this.x = config.width * frame.x
    this.y = config.height * frame.y
    // console.log(this.x, this.y)
  }, config.time)
  // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  this.destroy = () => clearInterval(this.interval)
  this.render = () => render.render.context.drawImage(imageCache[name], this.x, this.y, config.width, config.height, this.position.x, this.position.y, config.width * this.scale.x, config.height * this.scale.y)
  return this
}

/**
 * This function creates an image object
 * @param {string} name This will be the name of the image
 * @param {object} position This object contains the position of the image
 * @param {object} scale This object contains the scale of the image
 * @param {number} rotation This is the rotation of the image
 * @param {object} anchor This will be the point of rotation of the image
 * @param {string} src This will be the location where the image is saved
 */
function Sprite (name, config) {
  this.name = name
  this.position = config.position
  this.rotation = config.rotation
  this.anchor = config.anchor
  this.scale = config.scale
  if (config.src) loadImage(this.name, config.src)
  this.render = () => drawImage(this.name, this.position, this.anchor, this.rotation, this.scale)
  return this
}

module.exports = {Sprite, SpriteSheet, drawImage, loadImage}
