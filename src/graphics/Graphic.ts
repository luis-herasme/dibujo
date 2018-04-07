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

/*
enum Pattern {
  repeat = 'repeat',
  repeat_x = 'repeat-x',
  repeat_y = 'repeat-y',
  no_repeat = 'no-repeat'
}

var pat=ctx.createPattern(img,"repeat");
ctx.fillStyle=pat;
*/

class Graphic {
  public context: any
  public position: Vector
  public anchor: Vector
  public z_index: number
  public rotation: number = 0
  public lineCap: string = LineCap.round
  public lineJoin: string = LineJoin.round
  public miterLimit: number
  public stroke: boolean
  public color: string
  public lineColor: string
  public lineWidth: number

  public fill: boolean
  public shadowColor: string = 'rgba(0, 0, 0, 0)'
  public shadowBlur: number = 0
  public shadowOffsetX: number = 0
  public shadowOffsetY: number = 0
  public childs: Array<any> = []

  constructor(data?: any) {
    if (data.stroke !== undefined) {
      if (typeof data.stroke === 'boolean') {
        this.stroke = data.stroke
      } else {
        console.error(`Type of stroke is not boolean`)
      }
    } else {
      this.stroke = false
    }

    if (data.fill !== undefined) {
      if (typeof data.fill === 'boolean') {
        this.fill = data.fill
      } else {
        console.error(`Type of fill is not boolean`)
      }
    } else {
      this.fill = true
    }

    this.color = data.color ? data.color : 'grey'
    this.lineWidth = data.lineWidth ? data.lineWidth : 2
    this.lineColor = data.lineColor ? data.lineColor : 'black'

    if (data) {
      this.position = data.position ? data.position : new Vector(0, 0)
      this.anchor = data.anchor ? data.anchor : new Vector(0.5, 0.5)
      this.z_index = data.z_index ? data.z_index : 1
      this.lineCap = data.lineCap ? data.lineCap : LineCap.round
      this.miterLimit = data.miterLimit ? data.miterLimit : 10
      this.shadowColor = data.shadowColor ? data.shadowColor : 'rgba(0,0,0,0)'
      this.shadowBlur = data.shadowBlur ? data.shadowBlur : 0
      this.shadowOffsetX = data.shadowOffsetX ? data.shadowOffsetX : 0
      this.shadowOffsetY = data.shadowOffsetY ? data.shadowOffsetY : 0
    } else {
      this.position = new Vector(0, 0)
      this.anchor = new Vector(0.5, 0.5)
      this.z_index = 1
      this.miterLimit = 10
      this.lineCap = LineCap.round
    }
  }

  add(child: any): void {
    child.context = this.context
    this.childs.push(child)
  }

  setStyle(styles: any): void {
    for (let style in styles) {
      this.context[style] = styles[style]
    }
  }

  render(): void {
    this.context.save()
    this.context.miterLimit = this.miterLimit
    this.context.translate(this.position.x, this.position.y)
    this.context.rotate(this.rotation)
    this.renderChild()
    this.context.restore()
  }
}

export default Graphic
