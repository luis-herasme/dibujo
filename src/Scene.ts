import Render from './Render'
import Camera from './Camera'
import Video from './Media/Video'
import Picture from './Media/Picture'
import Graphic from './graphics/Graphic'

class Scene {
  public backgroundColor: string
  public camera: Camera
  public renderer: Render
  public childs: Array<any>
  public frameRate: number
  public interval: any
  public context: CanvasRenderingContext2D

  constructor(renderer: Render) {
    this.childs = []
    this.frameRate = 0
    this.renderer = renderer
    this.backgroundColor = 'black'
    this.context = this.renderer.context
    this.camera = new Camera(this.context)
  }

  dataLoaded(): boolean {
    // Gets all the pictures and videos from the scene.
    const elements = this.childs.filter((child) => {
      if (child instanceof Picture) return true
      if (child instanceof Video) return true
      return false
    })

    // If there is an image that is not loaded returns false
    return !elements.some((element) => !element.ready)
  }

  add(element: any): void {
    element.context = this.context
    this.childs.push(element)
    this.organizeByZindex()
  }

  remove(element: Graphic): void {
    let index = this.childs.indexOf(element)
    if (index >= 0) {
      this.childs.splice(index, 1)
    }
  }

  clearScreen(): void {
    this.context.save()
    this.context.setTransform(1, 0, 0, 1, 0, 0)
    this.context.fillStyle = this.backgroundColor
    this.context.fillRect(0, 0, window.innerWidth, window.innerHeight)
    this.context.restore()
  }

  smoth(state: boolean): void {
    if (this.context.imageSmoothingEnabled) {
      this.context.imageSmoothingEnabled = state
    } else if (this.context.mozImageSmoothingEnabled) {
      this.context.mozImageSmoothingEnabled = state
    } else if (this.context.webkitImageSmoothingEnabled) {
      this.context.webkitImageSmoothingEnabled = state
    }
  }

  organizeByZindex(): void {
    this.childs.sort((a, b) => a.z_index - b.z_index)
  }

  autoRender(func?: Function): void {
    this.interval = setInterval(() => {
      if (func) func()
      this.render()
    }, this.frameRate)
  }

  stopAutoRender(): void {
    clearInterval(this.interval)
  }

  render(): void {
    if (!this.dataLoaded()) {
      console.info('Waiting for images to load...')
      setTimeout(this.render.bind(this), 100)
    } else {
      this.clearScreen()
      this.childs.forEach(child => child.render())
      this.camera.update()
    }
  }
}

export default Scene
