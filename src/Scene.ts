import Render   from './Render'
import Graphic  from './graphics/Graphic'
import Camera   from './Camera'

/**
 * This is the detail about the constructor
 * @class This is the detail about the class
 * @memberOf namespace
 * @param {Render} renderer The first argument
 */
class Scene {

  public context          : CanvasRenderingContext2D
  public camera           : Camera
  public renderer         : Render
  public childs           : Array<Graphic> = []
  public frameRate        : number         = 0
  public interval         : any

  constructor (renderer: Render) {
    this.renderer = renderer
    this.context  = this.renderer.context
    this.camera   = new Camera(this)
  }

  /**
   * This method adds one element to the scene
   * @param {Graphic} element any graphic object
   * @returns {void}
   */
  add (element: Graphic): void {
    element.context = this.context
    this.childs.push(element)
    this.organizeByZindex()
  }

  /**
   * Removes an element from the scene
   * @param {Graphic} element any graphic object
   * @returns {void}
   */
  remove (element: Graphic): void {
    this.childs.splice(this.childs.indexOf(element), 1)
  }

  /**
   * This method clears the screen
   */
  clearScreen (): void {
    this.context.save()
    this.context.setTransform(1, 0, 0, 1, 0, 0)
    this.context.clearRect(0, 0, window.innerWidth, window.innerHeight)
    this.context.restore()
  }

  /**
   * This method enables or disables the image smoothing
   * @param {boolean} state enable or disable
   */
  smoth (state: boolean): void {
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
  organizeByZindex (): void {
    this.childs.sort((a,b) => a.z_index - b.z_index)
  }

  /**
   * This method renders the screne ultil you call stopAutoRender
   */
  autoRender (): void {
    this.interval = setInterval(() => this.render(), this.frameRate)
  }

  /**
   * This method stops autoRender
   */
  stopAutoRender (): void {
    clearInterval(this.interval)
  }

  /**
   * This method renders the screne
   */
  render (): void {
    this.clearScreen()
    this.childs.forEach(child => child.render())
    this.camera.update()
  }
}

export default Scene
