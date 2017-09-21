
let canvas
let render = {}

/**
 * This function creates an Point object
 * @param {number} x The X coordinate
 * @param {number} y The Y coordinate
 */
function Point (x, y) {
  this.x = x
  this.y = y
  return this
}

/**
 * This function initializes the canvas
 * @param {string} canvasName If this parameter is given the render will try to find a canvas with this ID to draw in
 * @param {number} width This will be the width of the canvas
 * @param {number} height This will be the height of the canvas
 */
function init (canvasName, width, height) {
  if (canvasName) {
    canvas = document.getElementById(canvasName)
    if (width && height) {
      canvas.width = width
      canvas.height = height
    } else {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
  } else {
    canvas = document.createElement('canvas')
    document.body.appendChild(canvas)

    if (width && height) {
      canvas.width = width
      canvas.height = height
    } else {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
  }
  render.width = canvas.width
  render.height = canvas.height

  render.center = [render.width / 2, render.height / 2]
  render.context = canvas.getContext('2d')
}

/**
 * This function sets the scale of the canvas to the parameter given
 * @param {number} scale This will be the scale of the canvas
 */
function setScale (scale) {
  render.width = render.width / scale
  render.height = render.height / scale
  render.center = [render.width / 2, render.height / 2]
  render.scale = scale
}

/**
 * This function puts all the styles given in the context
 * @param {object} style This object contains the styles
 */
function setStyle (style) {
  for (let i in style) render.context[i] = style[i]
}

/**
 * This function translates the context to the coordinates given
 * @param {array} vec This is an array of coordinates
 */
function setCenter (vec = render.center) {
  render.context.translate(vec[0], vec[1])
}

/**
 * Clears the entire screen
 * @param {string} color With this color the canvas will be clear
 */
function clear (color = '#000') {
  render.context.fillStyle = color
  render.context.save()
  render.context.setTransform(1, 0, 0, 1, 0, 0)
  render.context.fillRect(0, 0, canvas.width, canvas.height)
  render.context.restore()
}

/**
 * Enables and disbales canvas smoth
 * @param {boolean} state If true enables canvas smoth and if false disbales canvas smoth
 */
function smoth (state) {
  render.context.webkitImageSmoothingEnabled = state
  render.context.mozImageSmoothingEnabled = state
  render.context.imageSmoothingEnabled = state
}

/*
myMatrix
.translate(P.x, P.y)
.scale(xFactor, yFactor)
.translate(-P.x, -P.y);
*/

/**
 * This object contains all that will be render
 */
function Stage () {
  this.childs = []

  /**
   * This function adds objects to the stage
   */
  this.add = function () {
    Array.from(arguments).forEach((element) => {
      this.childs.push(element)
    })
  }.bind(this)

  /**
   * This function renders all the objects of the stage
   */
  this.update = () => {
    this.childs.forEach((child) => {
      child.render()
    })
  }

  /**
   * This function destroy an object from the stage
   * @param {string} name This is the name of the object
   */
  this.destroy = function (name) {
    this.childs = this.childs.filter((child) => child.name !== name)
  }.bind(this)

  return this
}

/**
 * This class creates an object that draws in the screen
 * @param {function} renderFunction This function draws in the screen
 * @param {object} configuration This object contais information as the position of where things will be drawn the rotation etc..
 */
function Graphic (renderFunction, configuration) {
  if (configuration) {
    if (configuration.position) this.position = configuration.position
    else this.position = new Point(0, 0)
    if (configuration.scale) this.scale = configuration.scale
    else this.scale = new Point(1, 1)
    if (configuration.rotation) this.rotation = configuration.rotation
    else this.rotation = 0
  } else {
    this.position = new Point(0, 0)
    this.scale = new Point(1, 1)
    this.rotation = 0
  }
  this.render = () => {
    render.context.save()
    if (this.position) render.context.translate(this.position.x, this.position.y)
    if (this.scale) render.context.scale(this.scale.x, this.scale.y)
    if (this.rotation) render.context.rotate(this.rotation)
    renderFunction()
    render.context.restore()
  }
  return this
}

module.exports = {
  init,
  setCenter,
  clear,
  width: 0,
  height: 0,
  setScale,
  setStyle,
  Point,
  Stage,
  smoth,
  Graphic,
  render
}
