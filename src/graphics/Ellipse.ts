import Graphic from './Graphic'
import Vector from '../Vector'
import LinearGradient from '../LinearGradient'

class Ellipse extends Graphic {
  public radiusX: number = 10
  public radiusY: number = 5

  constructor(configuration?: any) {
    super(configuration)
    if (configuration) {
      this.lineWidth = configuration.lineWidth ? configuration.lineWidth : this.lineWidth
      this.lineColor = configuration.lineColor ? configuration.lineColor : this.lineColor
      this.radiusX = configuration.radiusX ? configuration.radiusX : this.radiusX
      this.radiusY = configuration.radiusY ? configuration.radiusY : this.radiusY
      this.stroke = configuration.stroke ? configuration.stroke : this.stroke
      this.color = configuration.color ? configuration.color : this.color
      this.fill = configuration.fill ? configuration.fill : this.fill
      if (configuration.linearGradient) {
        this.linearGradient = configuration.linearGradient
        // this.render = this.renderGradient
      }
    }
  }

  renderGradient () {
    this.color = new LinearGradient({
      context: this.context,
      colors: this.linearGradient,
      size: new Vector(this.position.x, this.position.y + this.radiusY),
      position: new Vector(this.position.x, this.position.y - this.radiusY / 2)
    }).gradient

    if (this.fill) {
      this.context.beginPath()
      this.context.fillStyle = this.color
      this.context.ellipse(this.position.x, this.position.y, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI)
      this.context.fill()
    }
    if (this.stroke) {
      this.context.lineWidth = this.lineWidth
      this.context.strokeStyle = this.lineColor
      this.context.stroke()
    }
  }

  render(): void {
    this.renderGradient()
    /*
    if (this.fill) {
      this.context.beginPath()
      this.context.fillStyle = this.color
      this.context.ellipse(this.position.x, this.position.y, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI)
      this.context.fill()
    }
    if (this.stroke) {
      this.context.lineWidth = this.lineWidth
      this.context.strokeStyle = this.lineColor
      this.context.stroke()
    }
    */
  }
}

export default Ellipse
