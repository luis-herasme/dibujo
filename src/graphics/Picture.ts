import Graphic from './Graphic'

export default class Picture extends Graphic {
  public width: number
  public height: number
  public opacity: number
  public image: HTMLImageElement
  public type: string = "img"

  constructor(data: any) {
    super(data)
    this.image = new Image()
    this.image.src = data.src
    this.opacity = data.opacity ? data.opacity: 1
    this.width = data.width ? data.width : 100
    this.height = data.height ? data.height : 100
  }

  onClick(func: Function): void { }

  render(): void {
    this.context.beginPath()
    this.context.save()
    this.context.globalAlpha = this.opacity
    this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    this.context.restore()
  }
}

