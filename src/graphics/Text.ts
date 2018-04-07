import Graphic from './Graphic'

enum weights {
  lighter = 'lighter',
  normal = 'normal',
  bolder = 'bolder',
  bold = 'bold'
}

class Text extends Graphic {
  public content: string
  public stroke: boolean
  public type: string = "text"
  public style: any
  public color: string
  public weight: weights
  public family: string
  public size: number
  public fontConfig: string = ''
  public textAlign:string
  public textBaseline:string
  constructor(configuration: any) {
    super(configuration)
    this.textAlign = configuration.textAlign ? configuration.textAlign : 'center'
    this.textBaseline = configuration.textBaseline ? configuration.textBaseline : 'middle'
    this.color = configuration.color ? configuration.color : 'black'
    this.weight = configuration.weight ? configuration.weight : weights.normal
    this.size = configuration.size ? configuration.size : 12
    this.family = configuration.family ? configuration.family : 'Arial'
    this.content = configuration.content ? configuration.content : ''
    this.stroke = configuration.stroke ? configuration.stroke : false
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
