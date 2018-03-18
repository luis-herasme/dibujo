export class Circle extends Graphic {
  public radius : number
  public color  : string
  public stroke : boolean
  public lineColor : string
  public lineWidth : number = 1
  public fill   : boolean

  constructor (configuration) {
    super(configuration)
    if (configuration.radius) this.radius = configuration.radius
    if (configuration.color) this.color = configuration.color
    if (configuration.stroke) this.stroke = configuration.stroke
    if (configuration.lineWidth) this.lineWidth = configuration.lineWidth
    if (configuration.lineColor) this.lineColor = configuration.lineColor
    if (configuration.fill) this.fill = configuration.fill
  }

  onClick (func: Function): void {
    const f = func.bind(this)
    document.addEventListener('click', (event) => {
      const mouse = new Vector2D(event.clientX, event.clientY)
      const position = new Vector2D(this.position.x, this.position.y)
      mouse.sub(position)
      if (mouse.mag() < this.radius) {
        f()
      }
    })
  }

  render (): void {
    this.context.beginPath()
    this.context.fillStyle = this.color
    this.context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)
    this.context.fill()
    if (this.stroke) {
      this.context.lineWidth = this.lineWidth
      this.context.strokeStyle = this.lineColor
      this.context.stroke()
    }
  }
} 
