
import Vector from '../Vector'

/**
 * This function initializes the canvas
 * @param {string} canvasName If this parameter is given the render will try to find a canvas with this ID to draw in
 * @param {number} width
 * @param {number} height
 */
class Render {
  constructor (canvasName, width, height) {
    if (canvasName) {
      this.canvas = document.getElementById(canvasName)
    } else {
      this.canvas = document.createElement('canvas')
      document.body.appendChild(this.canvas)
    }

    if (width && height) {
      this.canvas.width = width
      this.canvas.height = height
    } else {
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
    }

    this.context = this.canvas.getContext('2d')
    this.smoth(false)
  }

  get center () {
    return new Vector(
      this.canvas.width / 2,
      this.canvas.height / 2)
  }

  get width () {
    return this.canvas.width
  }

  get height () {
    return this.canvas.height
  }

  /**
   * This function translates the context to the coordinates given
   * @param {number} x
   * @param {number} y
   */
  setCenter (x, y) {
    this.context.translate(x, y)
  }

  /**
   * Clears the entire screen
   * @param {string} color With this color the canvas will be clear
   */
  clear (color = '#000') {
    this.context.fillStyle = color
    this.context.fillRect(0, 0, this.width, this.height)
  }

  /**
   * Enables and disbales canvas smoth
   * @param {boolean} state
   */
  smoth (state) {
    this.context.webkitImageSmoothingEnabled = state
    this.context.mozImageSmoothingEnabled = state
    this.context.imageSmoothingEnabled = state
  }

  setStage (stage) {
    this.stage = stage
    this.stage.render = this
  }

  /*
  myMatrix
  .translate(P.x, P.y)
  .scale(xFactor, yFactor)
  .translate(-P.x, -P.y);
  */
}

export default Render
