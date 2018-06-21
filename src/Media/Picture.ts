import Graphic from '../graphics/Graphic'
import Vector from '../Vector'

// Imaginary canvas
const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')    

class Picture extends Graphic {
  public width: number
  public height: number
  public opacity: number
  public image: HTMLImageElement
  public angle: number
  public type: string = "img"
  public data: any
  public ready: boolean = false
  public todo: Array<Function> = []
  public params: Array<any> = []

  constructor(data: any) {
    super(data)
    this.image = new Image()
    this.image.src = data.src

    this.image.addEventListener('load', () => {
      this.ready = true
      this.todo.forEach((met, i) => {
        met(...this.params[i])
      })
    })

    this.image.addEventListener('error', () => {
      console.error('Error loading the image...')
    })

    this.angle = data.angle ? data.angle : 0
    this.opacity = data.opacity ? data.opacity : 1
    this.width = data.width ? data.width : this.image.width
    this.height = data.height ? data.height : this.image.height
  }

  filter() {

  }

  getImageData() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight)
    canvas.width = this.width
    canvas.height = this.height
    context.drawImage(this.image, 0, 0, this.width, this.height)
    return context.getImageData(0, 0, this.width, this.height)
  }

  removeColor(color: Array<number>) {
    if (this.ready) {
      let image
      if (!this.data) {
        image = this.getImageData()
      } else {
        image = this.data
      }

      for (let pixel = 0; pixel < image.data.length; pixel += 4) {
        if (image.data[pixel] === color[0] && image.data[pixel + 1] === color[1] && image.data[pixel + 2] === color[2]) {
          image.data[pixel + 3] = 0
        }
      }

      this.data = image
      this.render = this.renderData
    } else {
      this.todo.push(this.removeColor.bind(this))
      this.params.push([color])
    }
  }

  onClick(func: Function): void {

  }
  realPosition() {
    return new Vector(this.position.x - (this.anchor.x * this.width), this.position.y - (this.anchor.y * this.height))
  }

  renderData(): void {
  //  console.log('here')
    //console.log(this.data)
    this.context.beginPath()
    this.context.save()
    // this.context.translate(this.position.x -(this.anchor.x *  this.width), this.position.y -(this.anchor.y *  this.height))
    //this.context.rotate(this.angle)
    // this.context.globalAlpha = this.opacity
    // console.log(this.data)
    this.context.putImageData(this.data, this.position.x -(this.anchor.x *  this.width), this.position.y -(this.anchor.y *  this.height))// -(this.anchor.x *  this.width), -(this.anchor.y *  this.height), this.position.x, this.position.y, this.width, this.height)
    // this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    this.context.restore()
  }

  render(): void {
    this.context.beginPath()
    this.context.save()
    this.context.translate(this.position.x, this.position.y)
    this.context.rotate(this.angle)
    this.context.globalAlpha = this.opacity
    this.context.drawImage(this.image, -(this.anchor.x * this.width), -(this.anchor.y * this.height), this.width, this.height)
    // this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    this.context.restore()
  }
}

export default Picture
