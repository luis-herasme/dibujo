
import Scene from './Scene'
import Graphic from './graphics/Graphic'
import { Vector2D } from 'vector_class'

class Render {
  
  public scene: Scene
  public canvas: HTMLCanvasElement
  public context: CanvasRenderingContext2D
  public interval: any
  public frameRate: number = 1000 / 60

  constructor(canvas?: string, width?: number, height?: number) {

    if (canvas) {
      const _canvas = document.getElementById(canvas)
      if (_canvas !== null) {
        if (_canvas.tagName === 'CANVAS') {
          this.canvas = _canvas
        } else {
          console.error('The ID provided is not a of canvas elements')
        }
      } else {
        console.error('The ID provided is not in the DOM')
      }
    } else {
      this.canvas = document.createElement('canvas')
      document.body.appendChild(this.canvas)
    }

    if (width && height) {
      this.canvas.width = width
      this.canvas.height = height
    } else {
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
    }

    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
    })

    this.context = this.canvas.getContext('2d')
    const scene = new Scene(this)
    this.setScene(scene)
  }

  add(element: any): void {
    this.scene.add(element)
  }

  remove(element: Graphic): void {
    this.scene.remove(element)
  }

  addMultiple(e: Array<Graphic>): void {
    e.forEach((m) => this.add(m))
  }

  /*
  autoUpdateRender (func?: Function) {
    this.scene.autoRender(func)
  }
  */

  getWidth(): number {
    return this.canvas.width
  }

  getHeight(): number {
    return this.canvas.height
  }

  getSize(): Vector2D {
    return new Vector2D(
      this.canvas.width,
      this.canvas.height)
  }

  getCenter(): Vector2D {
    return new Vector2D(
      this.canvas.width / 2,
      this.canvas.height / 2)
  }

  getCanvasImage() {
    return this.canvas.toDataURL()
  }
  /*
    filter () {
      let image = new Image()
      image.src = this.getCanvasImage() 
  
    }
  */
  fullScreen() {
    let isFull = false
    document.addEventListener('click', () => {
      if (!isFull) {
        this.canvas.webkitRequestFullScreen()
      }
    })
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

  render() {
    this.scene.render()
  }

  setScene(scene: Scene): void {
    this.scene = scene
    this.scene.renderer = this
    this.scene.context = this.context
    this.scene.smoth(false)
  }
}

export default Render
