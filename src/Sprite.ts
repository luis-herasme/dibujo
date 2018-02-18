
/* global Image */

import Vector2D from './Vector'

export default class Sprite {
  public context  : CanvasRenderingContext2D
  public image    : HTMLImageElement
  public position : Vector2D
  public scale    : Vector2D
  public anchor   : Vector2D
  public rotation : number

  constructor (
    src     : string,
    position: Vector2D = new Vector2D(),
    scale   : Vector2D = new Vector2D(1, 1),
    rotation: number = 0,
    anchor  : Vector2D = new Vector2D(0.5, 0.5)) {
    this.load(src)
    this.position = position
    this.scale    = scale
    this.anchor   = anchor
    this.rotation = rotation
  }

  load (src: string): void {
    this.image = new Image()
    this.image.src = src
  }

  getSize (): Vector2D {
    const realSize = new Vector2D(
      this.scale.x * this.image.width,
      this.scale.y * this.image.height)

    return realSize 
  }

  render (): void{
    this.context.save()
    this.context.translate(this.position.x, this.position.y)
    this.context.rotate(this.rotation)
    const realWidth = this.scale.x * this.image.width
    const realHeight = this.scale.y * this.image.height

    this.context.drawImage(
      this.image,
      -(realWidth * this.anchor.x),
      -(realHeight * this.anchor.y),
      realWidth,
      realHeight
    )

    this.context.restore()
  }
}
