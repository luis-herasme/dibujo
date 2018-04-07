import Vector from '../Vector'

enum LineCap {
  butt = 'butt',
  square = 'square',
  round = 'round'
}

enum LineJoin {
  bevel = 'bevel',
  round = 'round',
  miter = 'miter'
}

class Graphic {
  public context: any
  public position: Vector
  public anchor: Vector
  public z_index: number
  public rotation: number = 0
  public lineCap: string = LineCap.round
  public lineJoin: string = LineJoin.round

  constructor(data?: any) {
    if (data) {
      this.position = data.position ? data.position : new Vector(0, 0)
      this.anchor = data.anchor ? data.anchor : new Vector(0.5, 0.5)
      this.z_index = data.z_index ? data.z_index : 1
      this.lineCap = data.lineCap ? data.lineCap : LineCap.round
    } else {
      this.position = new Vector(0, 0)
      this.anchor = new Vector(0.5, 0.5)
      this.z_index = 1
      this.lineCap = LineCap.round
    }
  }

  setStyle(styles: any): void {
    for (let style in styles) {
      this.context[style] = styles[style]
    }
  }

  render(): void {
    this.context.save()
    this.context.translate(this.position.x, this.position.y)
    this.context.rotate(this.rotation)
    this.renderChild()
    this.context.restore()
  }
}

export default Graphic
