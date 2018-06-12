import CircleEvents from './CircleEvents'

class Arc extends CircleEvents {
  public eAngl: number
  public aAngl: number

  constructor(configuration?: any) {
    super(configuration)
    if (configuration) {
      this.eAngl = configuration.eAngl ? configuration.eAngl : 0
      this.aAngl = configuration.aAngl ? configuration.aAngl : Math.PI
    } else {
      this.eAngl = 0
      this.aAngl = Math.PI
    }
  }
  
  renderChild(): void {
    this.childs.forEach(c => c.context = this.context)
    this.childs.forEach(c => c.render())
    this.context.beginPath()
    this.context.arc(0, 0, this.radius, this.eAngl, this.aAngl, true)

    if (this.fill) {
      this.context.fillStyle = this.color
      this.context.fill()
    }

    if (this.stroke) {
      this.context.strokeStyle = this.lineColor
      this.context.lineWidth = this.lineWidth
      this.context.stroke()
    }
  }
}

export default Arc
