import Render from './Render'
import Graphic from './graphics/Graphic'
import Camera from './Camera'
import Picture from './graphics/Picture'
import Video from './graphics/Video'
import Group from './Group'

/**
 * This is the detail about the constructor
 * @class This is the detail about the class
 * @memberOf namespace
 * @param {Render} renderer The first argument
 */
class Scene {

  public context: CanvasRenderingContext2D
  public backgroundColor: string = 'black'
  public camera: Camera
  public renderer: Render
  public childs: Array<any> = []
  public frameRate: number = 0
  public ready: boolean = false
  public interval: any

  constructor(renderer: Render) {
    this.renderer = renderer
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

  /**
   * This method adds one element to the scene
   * @param {Graphic} element any graphic object
   * @returns {void}
   */
  add(element: any): void {
    element.context = this.context
    this.childs.push(element)
    this.organizeByZindex()
  }

  /**
   * Removes an element from the scene
   * @param {Graphic} element any graphic object
   * @returns {void}
   */
  remove(element: Graphic): void {
    let index = this.childs.indexOf(element)
    if (index >= 0) {
      this.childs.splice(index, 1)
    }
  }

  /**
   * This method clears the screen
   */
  clearScreen(): void {
    this.context.save()
    this.context.setTransform(1, 0, 0, 1, 0, 0)
    this.context.fillStyle = this.backgroundColor
    this.context.fillRect(0, 0, window.innerWidth, window.innerHeight)
    this.context.restore()
  }

  /**
   * This method enables or disables the image smoothing
   * @param {boolean} state enable or disable
   */
  smoth(state: boolean): void {
    if (this.context.imageSmoothingEnabled) {
      this.context.imageSmoothingEnabled = state
    } else if (this.context.mozImageSmoothingEnabled) {
      this.context.mozImageSmoothingEnabled = state
    } else if (this.context.webkitImageSmoothingEnabled) {
      this.context.webkitImageSmoothingEnabled = state
    }
  }

  /**
   * This method organizes the childs of the scene by their property z_indez
   */
  organizeByZindex(): void {
    this.childs.sort((a, b) => a.z_index - b.z_index)
  }

  /**
   * This method renders the screne ultil you call stopAutoRender
   */
  autoRender(func?: Function): void {
    this.interval = setInterval(() => {
      if (func) func()
      this.render()
    }, this.frameRate)
  }

  /**
   * This method stops autoRender
   */
  stopAutoRender(): void {
    clearInterval(this.interval)
  }

  /**
   * This method renders the screne
   */
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
