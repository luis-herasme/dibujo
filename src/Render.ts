import Vector from './Vector'
import Scene    from './Scene'
import Graphic  from './graphics/Graphic'
import Group from './Group'

class Render {
  public scene    : Scene
  public canvas   : HTMLCanvasElement
  public context  : CanvasRenderingContext2D

  constructor (canvas?: HTMLCanvasElement, width?: number, height?: number) {

    if (canvas) this.canvas = canvas
    else {
      this.canvas = document.createElement('canvas')
      document.body.appendChild(this.canvas)
    }

    if (width && height) {
      this.canvas.width  = width
      this.canvas.height = height
    } else {
      this.canvas.width  = window.innerWidth
      this.canvas.height = window.innerHeight
    }

    window.addEventListener('resize', () => {
      this.canvas.width  = window.innerWidth
      this.canvas.height = window.innerHeight
    })

    this.context = this.canvas.getContext('2d')
    const scene  = new Scene(this)
    this.setScene(scene)
  }

  add (element: any): void {
    this.scene.add(element)
  }

  remove (element: Graphic): void {
    this.scene.remove(element)
  }

  addMultiple (e: Array<Graphic>): void {
    e.forEach((m) => this.add(m))
  }

  autoUpdateRender (func?: Function) {
    this.scene.autoRender(func)
  }

  getWidth (): number {
    return this.canvas.width
  }

  getHeight (): number {
    return this.canvas.height
  }

  getSize (): Vector {
    return new Vector(
      this.canvas.width,
      this.canvas.height)
  }

  getCenter (): Vector {
    return new Vector(
      this.canvas.width / 2,
      this.canvas.height / 2)
  }

  getCanvasImage () {
    return this.canvas.toDataURL()
  }
/*
  filter () {
    let image = new Image()
    image.src = this.getCanvasImage()

  }
*/
  fullScreen () {
    let isFull = false
    document.addEventListener('click', () => {
      if (!isFull) {
        this.canvas.webkitRequestFullScreen()

      }
    })
  }

  render () {
    this.scene.render()
  }

  setScene (scene: Scene): void {
    this.scene = scene
    this.scene.renderer = this
    this.scene.context = this.context
    this.scene.smoth(false)
  }
}

export default Render
