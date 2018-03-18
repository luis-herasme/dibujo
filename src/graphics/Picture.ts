
export class Picture extends Graphic {
  public width  : number  = 1
  public height : number  = 1
  public image : Image

  constructor (data) {
    super(data)
    this.image = new Image()
    this.width = data.width
    this.height = data.height 
    this.image.src = data.src
  }

  render (): void {
    this.context.beginPath()
    this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
  }
}

