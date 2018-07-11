import Scene from './Scene'
import { Vector2D } from 'vector_class'

class Render {
  public scene: Scene
  public canvas: HTMLCanvasElement
  public context: CanvasRenderingContext2D
  public frameRate: number = 1000 / 60

  constructor(canvas?: HTMLCanvasElement, width?: number, height?: number) {
    if (canvas) {
      this.canvas = canvas
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

    this.context = this.canvas.getContext('2d')
    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
    })
  }

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

  getCanvasImage(): string {
    return this.canvas.toDataURL()
  }

  fullScreen(): void {
    let isFull = false
    document.addEventListener('click', () => {
      if (!isFull) {
        this.canvas.webkitRequestFullScreen()
      }
    })
  }

  setScene(scene: Scene): void {
    this.scene = scene
    this.scene.renderer = this
    this.scene.context = this.context
    this.scene.smoth(false)
  }
}

export default Render
