
import Graphic from './Graphic'

export default class Picture extends Graphic {
  public width   : number = 1
  public height  : number = 1
  public opacity : number = 1
  public image
  public type: string = "img"

  constructor (data) {
    super(data)
    this.image     = new Image()
    this.image.src = data.src
    this.width     = data.width
    this.opacity   = data.opacity
    this.height    = data.height 
  }

  onClick (func: Function): void {}

  render (): void {
    this.context.beginPath()
    this.context.save()
    this.context.globalAlpha = this.opacity
    this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    this.context.restore()
  }
}

