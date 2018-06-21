import Graphic from './Graphic'

class Text extends Graphic {
  public content: string
  public fontConfig: string = ''
  public lineHeight: number = 12
  public maxWidth: number = 500

  constructor(configuration: any) {
    super(configuration)
    if (configuration) {
      this.content = configuration.content ? configuration.content : ''
    }
  }

  wrapText() {
    let x = this.position.x
    let y = this.position.y
    var words = this.content.split(' ')
    var line = ''
  
    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' '
      var metrics = this.context.measureText(testLine)
      var testWidth = metrics.width
      if (testWidth > this.maxWidth && n > 0) {
        this.context.fillText(line, x, y)
        line = words[n] + ' '
        y += this.lineHeight
      }
      else {
        line = testLine
      }
    }
    this.context.fillText(line, x, y)
  }

  render(): void {
    this.context.fillStyle = this.color
    this.context.font = `${this.weight} ${this.size}px ${this.family}`
    this.context.textAlign = this.textAlign
    this.context.textBaseline = this.textBaseline
    if (this.stroke) {
      this.context.strokeText(this.content, this.position.x, this.position.y)
    }
    this.context.fillText(this.content, this.position.x, this.position.y)
  }
}

export default Text
