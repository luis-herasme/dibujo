/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {


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

function setStyle (style) {
  for (let i in style) render.context[i] = style[i]
}

// Sets the center of the screen in the given position by a 2D vector
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

function Stage () {
  this.childs = []

  this.add = function () {
    Array.from(arguments).forEach((element) => {
      this.childs.push(element)
    })
  }.bind(this)

  this.update = () => {
    this.childs.forEach((child) => {
      child.render()
    })
  }

  this.destroy = function (name) {
    this.childs = this.childs.filter((child) => child.name !== name)
  }.bind(this)

  return this
}

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


const render = __webpack_require__(0)
const image = __webpack_require__(2)
const geometry = __webpack_require__(3)

module.exports = {
  Sprite: image.Sprite,
  SpriteSheet: image.SpriteSheet,
  loadImage: image.loadImage,
  drawImage: image.drawImage,

  init: render.init,
  clear: render.clear,
  Stage: render.Stage,
  render: render.render,
  setCenter: render.setCenter,
  center: render.render.center,
  width: render.width,
  height: render.height,
  setScale: render.setScale,
  setStyle: render.setStyle,
  Point: render.Point,
  smoth: render.smoth,
  Graphic: render.Graphic,

  strokeArc: geometry.strokeArc,
  text: geometry.text,
  poligon: geometry.poligon,
  strokeCircle: geometry.strokeCircle,
  circle: geometry.circle,
  strokeRect: geometry.strokeRect,
  rect: geometry.rect,
  line: geometry.line
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/* global Image */

const render = __webpack_require__(0)

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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


const render = __webpack_require__(0)

/**
 * This function draws a line,
 * Takes a vector as start point and another vector as end point of the line
 * @param {array} start This will be the start point of the line
 * @param {array} end This will be the end point of the line
 * @param {object} style This will be the style of the line
 * @param {boolean} stroke If true the line will have an stroke
 */
function line (start, end, style) {
  render.render.context.beginPath()
  render.setStyle(style)
  render.render.context.moveTo(start[0], start[1])
  render.render.context.lineTo(end[0], end[1])
  render.render.context.stroke()
}

// Draws a poligon in the screen
function poligon (vecs, color, stroke) {
  render.render.context.beginPath()
  render.render.context.fillStyle = color
  render.render.context.moveTo(vecs[0][0], vecs[0][1])
  for (var i = 0; i < vecs.length; i++) {
    render.render.context.lineTo(vecs[i][0], vecs[i][1])
  }
  render.render.context.closePath()
  render.render.context.fill()
  if (stroke) render.render.context.stroke()
}

/**
 * This function draws a rect in the screen
 * @param {number} x This is the X coodinate of the rect
 * @param {number} y This is the Y coodinate of the rect
 * @param {number} width This is the width of the rect
 * @param {number} height This is the height of the rect
 * @param {string} color This will be the color of the rect
 */
function rect (position, width, height, color) {
  render.render.context.beginPath()
  render.render.context.fillStyle = color
  render.render.context.fillRect(position[0], position[1], width, height)
}

// Draws the borders of a rect in the screen
function strokeRect (position, width, height, color) {
  render.render.context.beginPath()
  render.render.context.fillStyle = color
  render.render.context.strokeRect(position[0], position[1], width, height)
}

// Puts text in the screen
function text (texto, pos, style, stroke) {
  render.setStyle(style)
  if (stroke) render.render.context.strokeText(texto, pos[0], pos[1])
  render.render.context.fillText(texto, pos[0], pos[1])
}

/**
 * Draws the borders of a circle in the screen
 * @param {array} position This array contains the X and Y coordinates
 * @param {number} radius This will be the radius of the circle
 * @param {string} color This will be the color of the circle
 * @param {number} width This is the width of the line
 */
function strokeCircle (position, radius, color, width) {
  render.render.context.beginPath()
  render.render.context.strokeStyle = color
  render.render.context.arc(position[0], position[1], radius, 0, 2 * Math.PI)
  render.render.context.lineWidth = width
  render.render.context.stroke()
}

/**
 * Draws a circle in the screen
 * @param {array} position This array contains the X and Y coordinates
 * @param {number} radius This will be the radius of the circle
 * @param {string} color This will be the color of the circle
 */
function circle (position, radius, color) {
  render.render.context.beginPath()
  render.render.context.fillStyle = color
  render.render.context.arc(position[0], position[1], radius, 0, 2 * Math.PI)
  render.render.context.fill()
}

// Draws the borders of an arc in the screen
function strokeArc (position, size, width, eAngl, aAngl, color) {
  render.render.context.beginPath()
  render.render.context.strokeStyle = color
  render.render.context.arc(position[0], position[1], size, eAngl, aAngl, true)
  render.render.context.lineWidth = width
  render.render.context.stroke()
}

module.exports = {strokeArc, text, poligon, strokeCircle, circle, strokeRect, rect, line}


/***/ })
/******/ ]);