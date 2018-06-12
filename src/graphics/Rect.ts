import Graphic from './Graphic'

class Rect extends Graphic {
  public width: number = 1
  public height: number = 1

  constructor(data: any) {
    super(data)
    if (data.color) this.color = data.color
    if (data.width) this.width = data.width
    if (data.height) this.height = data.height
    if (data.fill) this.fill = data.fill
    if (data.stroke) this.stroke = data.stroke
    if (data.lineWidth) this.lineWidth = data.lineWidth
    if (data.lineColor) this.lineColor = data.lineColor
  }

  render(): void {
    this.context.fillStyle = this.color
    this.context.beginPath()

    if (this.fill) {
      this.context.fillRect(
        this.position.x,
        this.position.y,
        this.width,
        this.height
      )
    }

    if (this.stroke) {
      this.context.strokeStyle = this.lineColor
      this.context.lineWidth = this.lineWidth
      this.context.strokeRect(
        this.position.x,
        this.position.y,
        this.width,
        this.height
      )
    }
  }
}

export default Rect
