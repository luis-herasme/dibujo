
import Vector from '../Vector'

/**
 * This class creates an object that draws in the screen
 * @param {function} renderFunction This function draws in the screen
 */
class Graphics {
  constructor (renderFunction, position = new Vector(1, 1), scale = new Vector(1, 1), rotation = 0) {
    this.renderFunction = renderFunction.bind(this)
    this.position = position
    this.scale = scale
    this.rotation = 0
  }

  /**
   * This function draws a line,
   * Takes a vector as start point and another vector as end point of the line
   * @param {array} start
   * @param {array} end
   * @param {object} style
   * @param {boolean} stroke
   */
  line (start, end, style) {
    this.context.beginPath()
    this.render.setStyle(style)
    this.context.moveTo(start[0], start[1])
    this.context.lineTo(end[0], end[1])
    this.context.stroke()
  }

  /**
   * This function draws a poligon in the screen
   * @param {array} vecs This contains all the points of the figure
   * @param {string} color This is the color of the poligon
   * @param {boolean} stroke If this true the poligon will have borders
   */
  poligon (vecs, color, stroke) {
    this.context.beginPath()
    this.context.fillStyle = color
    this.context.moveTo(vecs[0][0], vecs[0][1])
    for (var i = 0; i < vecs.length; i++) {
      this.context.lineTo(vecs[i][0], vecs[i][1])
    }
    this.context.closePath()
    this.context.fill()
    if (stroke) {
      this.context.stroke()
    }
  }

  /**
   * This function draws a rect in the screen
   * @param {array} position This array contains the coordinates of the rect
   * @param {number} width This is the width of the rect
   * @param {number} height This is the height of the rect
   * @param {string} color This will be the color of the rect
   */
  rect (x, y, width, height, color = '#fff') {
    this.context.beginPath()
    this.context.fillStyle = color
    this.context.fillRect(x, y, width, height)
  }

  /**
   * This function draws the borders of a a rect in the screen
   * @param {array} position This array contains the coordinates of the rect
   * @param {number} width This is the width of the rect
   * @param {number} height This is the height of the rect
   * @param {string} color This will be the color of the rect
   * @param {number} lineWidth This is the width of the line
   */
  strokeRect (x, y, width, height, color = '#fff', lineWidth) {
    this.context.beginPath()
    this.context.strokeStyle = color
    this.context.strokeRect(x, y, width, height)
  }

  /**
   * This function puts all the styles given in the context
   * @param {object} style
   */
  setStyle (styles) {
    for (let style in styles) {
      this.context[style] = styles[style]
    }
  }

  /**
   * This function draws a text in the screen
   * @param {string} texto This is the text that will be drawn
   * @param {array} position This array contains the coordinates of the text
   * @param {object} style This object contais the styles of the text
   * @param {boolean} stroke If true the text will have borders
   */
  text (texto, x, y, style, stroke) {
    this.setStyle(style)
    if (stroke) {
      this.context.strokeText(texto, x, y)
    }
    this.context.fillText(texto, x, y)
  }

  /**
   * Draws the borders of a circle in the screen
   * @param {array} position This array contains the X and Y coordinates
   * @param {number} radius This will be the radius of the circle
   * @param {string} color This will be the color of the circle
   * @param {number} width This is the width of the line
   */
  strokeCircle (positionx, positiony, radius, color = '#fff', width = 1) {
    this.context.beginPath()
    this.context.strokeStyle = color
    this.context.arc(positionx, positiony, radius, 0, 2 * Math.PI)
    this.context.lineWidth = width
    this.context.stroke()
  }

  /**
   * Draws a circle in the screen
   * @param {array} position This array contains the X and Y coordinates
   * @param {number} radius This will be the radius of the circle
   * @param {string} color This will be the color of the circle
   */
  circle (x, y, radius, color = '#fff') {
    this.context.beginPath()
    this.context.fillStyle = color
    this.context.arc(x, y, radius, 0, 2 * Math.PI)
    this.context.fill()
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
  strokeArc (position, radius, lineWidth, eAngl, aAngl, color) {
    this.context.beginPath()
    this.context.strokeStyle = color
    this.context.arc(position[0], position[1], radius, eAngl, aAngl, true)
    this.context.lineWidth = lineWidth
    this.context.stroke()
  }

  render () {
  // this.context.save()
  // this.context.scale(this.scale.x, this.scale.y)
  // this.context.rotate(this.rotation)
    this.renderFunction()
  // this.context.restore()
  }
}

export default Graphics
