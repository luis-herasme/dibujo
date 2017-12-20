
import { Vector2D } from 'vector_class'
import Scene from './Scene'

class Render {
  private scene: Scene
  private canvas
  public context

  constructor (canvasName: string, width: number, height: number) {
    if (canvasName) {
      this.canvas = document.getElementById(canvasName)
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
  }

  getWidth (): number {
    return this.canvas.width
  }

  getHeight (): number {
    return this.canvas.height
  }

  getCenter (): Vector2D {
    return new Vector2D(
      this.canvas.width / 2,
      this.canvas.height / 2)
  }

  clear (color: string = '#000'): void {
    this.context.fillStyle = color
    this.context.fillRect(0, 0, this.getWidth(), this.getHeight())
  }

  smoth (state: boolean): void {
    this.context.webkitImageSmoothingEnabled = state
    this.context.mozImageSmoothingEnabled = state
    this.context.imageSmoothingEnabled = state
  }

  setStage (scene): void {
    this.scene = scene
    this.scene.renderer = this
  }

  zoom (where: Vector2D, howMuch: Vector2D): void {
    this.context.translate(where.x, where.y)
    this.context.scale(howMuch.x, howMuch.y)
    this.context.translate(-where.x, -where.y)
  }
}

export default Render
