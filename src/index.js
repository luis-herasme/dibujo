
const render = require('./render.js')
const image = require('./image.js')
const geometry = require('./geometry.js')

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
