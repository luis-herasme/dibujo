import Graphic from './Graphic'

class Rect extends Graphic {
  public width: number = 1
  public height: number = 1

  constructor(data: any) {
    super(data)
    if (data.width) this.width = data.width
    if (data.height) this.height = data.height
  }

  selfRender(): void {
    if (this.fill) {
      this.context.fillRect(
        this.position.x,
        this.position.y,
        this.width,
        this.height
      )
    }

    if (this.stroke) {
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
