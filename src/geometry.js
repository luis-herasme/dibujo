
const render = require('./render.js')

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

/**
 * This function draws a poligon in the screen
 * @param {array} vecs This contains all the points of the figure
 * @param {string} color This is the color of the poligon
 * @param {boolean} stroke If this true the poligon will have borders
 */
function poligon (vecs, color, stroke) {
  render.render.context.beginPath()
  render.render.context.fillStyle = color
  render.render.context.moveTo(vecs[0][0], vecs[0][1])
  for (var i = 0; i < vecs.length; i++) render.render.context.lineTo(vecs[i][0], vecs[i][1])
  render.render.context.closePath()
  render.render.context.fill()
  if (stroke) render.render.context.stroke()
}

/**
 * This function draws a rect in the screen
 * @param {array} position This array contains the coordinates of the rect
 * @param {number} width This is the width of the rect
 * @param {number} height This is the height of the rect
 * @param {string} color This will be the color of the rect
 */
function rect (position, width, height, color) {
  render.render.context.beginPath()
  render.render.context.fillStyle = color
  render.render.context.fillRect(position[0], position[1], width, height)
}

/**
 * This function draws the borders of a a rect in the screen
 * @param {array} position This array contains the coordinates of the rect
 * @param {number} width This is the width of the rect
 * @param {number} height This is the height of the rect
 * @param {string} color This will be the color of the rect
 * @param {number} lineWidth This is the width of the line
 */
function strokeRect (position, width, height, color, lineWidth) {
  render.render.context.beginPath()
  render.render.context.strokeStyle = color
  render.render.context.strokeRect(position[0], position[1], width, height)
}

/**
 * This function draws a text in the screen
 * @param {string} texto This is the text that will be drawn
 * @param {array} position This array contains the coordinates of the text
 * @param {object} style This object contais the styles of the text
 * @param {boolean} stroke If true the text will have borders
 */
function text (texto, position, style, stroke) {
  render.setStyle(style)
  if (stroke) render.render.context.strokeText(texto, position[0], position[1])
  render.render.context.fillText(texto, position[0], position[1])
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

/**
 * This function draws the borders of an arc in the screen
 * @param {array} position This array contains the X and Y coordinates
 * @param {number} radius This is the radius of the arc
 * @param {number} lineWidth This is the width of the line
 * @param {number} eAngl This is the end angle
 * @param {number} aAngl This is the start angle
 * @param {string} color This is the color of the arc
 */
function strokeArc (position, radius, lineWidth, eAngl, aAngl, color) {
  render.render.context.beginPath()
  render.render.context.strokeStyle = color
  render.render.context.arc(position[0], position[1], radius, eAngl, aAngl, true)
  render.render.context.lineWidth = lineWidth
  render.render.context.stroke()
}

module.exports = {strokeArc, text, poligon, strokeCircle, circle, strokeRect, rect, line}
