import Graphic from '../graphics/Graphic'
import Vector from '../Vector';

class Video extends Graphic {
  public width: number
  public height: number
  public opacity: number
  public video: HTMLVideoElement
  public angle: number
  public type: string = "img"
  public data: any
  public ready: boolean = false
  public todo: Array<Function> = []
  public params: Array<any> = []
  public filterEnable: boolean = false
  public filterColors: Array<number> = []

  constructor(data: any) {
    super(data)
    this.video = document.createElement('video')
    this.video.src = data.src
    this.video.play()
    this.video.crossOrigin = "Anonymous"

    this.video.addEventListener('loadedmetadata', () => {
      this.ready = true
      console.info(`Video ${data.src} correctly loaded.`)
      console.log(this.todo)
      console.log(this.params)
      this.todo.forEach((met, i) => {
        met(...this.params[i])
      })
    })

    this.video.addEventListener('error', () => {
      console.error('Error loading the video...')
    })
    this.angle = data.angle ? data.angle : 0
    this.opacity = data.opacity ? data.opacity : 1
    this.width = data.width ? data.width : this.video.width
    this.height = data.height ? data.height : this.video.height
  }

  filter() {

  }

  getImageData() {
    const canvas = document.createElement('canvas')
    // console.log(canvas)
    document.body.appendChild(canvas)
    const context = canvas.getContext('2d')
    canvas.width = this.width
    canvas.height = this.height
    context.translate((this.anchor.x * this.width), (this.anchor.y * this.height))
    context.rotate(this.angle)
    context.drawImage(this.video, -(this.anchor.x * this.width), -(this.anchor.y * this.height), this.width, this.height)
    document.body.removeChild(canvas)
    // return context.getImageData( -this.width / 2 , - this.height/2, this.width + this.width/2, this.height + this.height/2)
    return context.getImageData( 0, 0, this.width, this.height)
  }
/*
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
*/
  onClick(func: Function): void {

  }
  realPosition() {
    return new Vector(this.position.x - (this.anchor.x * this.width), this.position.y - (this.anchor.y * this.height))
  }

  renderData(): void {
    if (this.filterEnable) {
      this.filterColor(this.filterColors[0], this.filterColors[1], this.filterColors[2])
    }
  //  console.log('here')
    //console.log(this.data)
    this.context.beginPath()
    this.context.save()
    // this.context.translate(this.position.x -(this.anchor.x *  this.width), this.position.y -(this.anchor.y *  this.height))
    // this.context.rotate(this.angle)
    // this.context.globalAlpha = this.opacity
    // console.log(this.data)
    this.context.putImageData(this.data, this.position.x -(this.anchor.x *  this.width), this.position.y -(this.anchor.y *  this.height))// -(this.anchor.x *  this.width), -(this.anchor.y *  this.height), this.position.x, this.position.y, this.width, this.height)
    // this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    this.context.restore()
  }

  filterColor(r: number, g: number, b: number) {
    if (this.ready) {
      this.filterEnable = true
      this.filterColors = [r, g, b]
      let image = this.getImageData()

      for (let pixel = 0; pixel < image.data.length; pixel += 4) {
        image.data[pixel] += r
        image.data[pixel + 1] += g
        image.data[pixel + 2] += b
        // image.data[pixel + 3]
      }

      this.data = image
      this.render = this.renderData
    } else {
      this.todo.push(this.filterColor.bind(this))
      this.params.push([r, g, b])
    }
    
  }

  render(): void {
    this.context.beginPath()
    this.context.save()
    this.context.translate(this.position.x, this.position.y)
    this.context.rotate(this.angle)
    this.context.globalAlpha = this.opacity
    this.context.drawImage(this.video, -(this.anchor.x * this.width), -(this.anchor.y * this.height), this.width, this.height)
    // this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    this.context.restore()
  }
}

export default Video
