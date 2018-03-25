
import Render   from './Render'
import Vector2D from './Vector2D'
import Graphic  from './graphics/Graphic'
import Camera   from './Camera'

class Scene {

  public camera           : Camera
  public context          : CanvasRenderingContext2D
  public childs           : Array<Graphic>           = []
  public renderer         : Render

  constructor (renderer: Render) {
    this.renderer = renderer
    this.context  = this.renderer.context
    this.camera   = new Camera(this)
  }

  // Adds an element to the scene
  add (element: Graphic): void {
    element.context = this.context
    this.childs.push(element)
    this.organizeByZindex()
  }

  // Removes an element from the scene
  remove (element: Graphic): void {
    this.childs.splice(this.childs.indexOf(element), 1)
  }

  // Removes an element from the scene
  clearScreen (): void {
    this.context.save()
    this.context.setTransform(1, 0, 0, 1, 0, 0)
    this.context.clearRect(0, 0, window.innerWidth, window.innerHeight)
    this.context.restore()
  }


  smoth (state: boolean): void {
    if (this.context.imageSmoothingEnabled) {
      this.context.imageSmoothingEnabled = state
    } else if (this.context.mozImageSmoothingEnabled) { 
      this.context.mozImageSmoothingEnabled = state
    } else if (this.context.webkitImageSmoothingEnabled) { 
      this.context.webkitImageSmoothingEnabled = state
    }
  }

  // Organizes the childs of the scene by their property z_indez
  organizeByZindex (): void {
    this.childs.sort((a,b) => a.z_index - b.z_index)
  }

  update (): void {
    this.clearScreen()
    this.childs.forEach(child => child.render())
    this.camera.update()
  }
}

export default Scene
