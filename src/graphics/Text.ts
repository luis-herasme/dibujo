import Graphic from './Graphic'

class Text extends Graphic {
  public content: string
  public stroke: boolean
  public style: any
  public type: string = "text"

  constructor(configuration: any) {
    super(configuration)
    this.style = configuration.style ? configuration.style : {}
    this.content = configuration.content ? configuration.content : ''
    this.stroke = configuration.stroke ? configuration.stroke : false
  }

  render(): void {
    this.setStyle(this.style)
    if (this.stroke) {
      this.context.strokeText(this.content, this.position.x, this.position.y)
    }
    this.context.fillText(this.content, this.position.x, this.position.y)
  }
}

export default Text
