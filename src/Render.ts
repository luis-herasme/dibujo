
import Vector2D from './Vector2D'
import Scene    from './Scene'
import Graphic  from './graphics/Graphic'

class Render {

  private scene    : Scene
  private canvas   : HTMLCanvasElement
  public context   : CanvasRenderingContext2D
  public timeFrame : number = 0

  constructor (canvas?: HTMLCanvasElement, width?: number, height?: number) {
    if (canvas) {
      this.canvas = canvas
    } else {
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

  add (element: Graphic): void {
    this.scene.add(element)
  }

  remove (element: Graphic): void {
    this.scene.remove(element)
  }

  addMultiple (e): void {
    e.forEach((m) => this.add(m))
  }

  getWidth (): number {
    return this.canvas.width
  }

  getHeight (): number {
    return this.canvas.height
  }

  getSize (): Vector2D {
    return new Vector2D(
      this.canvas.width,
      this.canvas.height)
  }

  getCenter (): Vector2D {
    return new Vector2D(
      this.canvas.width / 2,
      this.canvas.height / 2)
  }

  render () {
    this.scene.update()
  }

  update () {
    setInterval(() => {
      this.render()
    }, this.timeFrame)
  }

  setScene (scene): void {
    this.scene = scene
    this.scene.renderer = this
    this.scene.context = this.context
    this.scene.smoth(false)
  }
}

export default Render
