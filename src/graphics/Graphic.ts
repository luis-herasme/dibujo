import Vector from '../Vector'
import { weights, LineCap, LineJoin } from '../Properties'

class Graphic {
  public weight: weights = weights.normal
  public context: any
  public linearGradient: any
  public fill: Boolean = true
  public stroke: Boolean = false
  public anchor: Vector = new Vector(0.5, 0.5)
  public position: Vector = new Vector(0, 0)
  public color: String = 'grey'
  public family: String = 'Arial'
  public lineCap: String = LineCap.round
  public lineJoin: String = LineJoin.round
  public lineColor: String = 'rgb(0, 0, 0)'
  public textAlign: String = 'center'
  public shadowColor: String = 'rgba(0, 0, 0, 0)'
  public textBaseline: String = 'middle'
  public size: Number = 12
  public rotation: Number = 0
  public z_index: Number = 1
  public lineWidth: Number = 1
  public miterLimit: Number = 10
  public shadowBlur: Number = 0
  public shadowOffsetX: Number = 0
  public shadowOffsetY: Number = 0
  public childs: Array<any> = []

  constructor(data?: any) {
    if (data) {
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
      this.weight = data.weights ? data.weights : weights.normal
      this.anchor = data.anchor ? data.anchor : new Vector(0.5, 0.5)
      this.position = data.position ? data.position : new Vector(0, 0)
      this.z_index = data.z_index ? data.z_index : 1
      this.shadowBlur = data.shadowBlur ? data.shadowBlur : 0
      this.shadowOffsetX = data.shadowOffsetX ? data.shadowOffsetX : 0
      this.shadowOffsetY = data.shadowOffsetY ? data.shadowOffsetY : 0
      this.shadowColor = data.shadowColor ? data.shadowColor : 'rgba(0,0,0,0)'
      this.miterLimit = data.miterLimit ? data.miterLimit : 10
      this.lineCap = data.lineCap ? data.lineCap : LineCap.round
      this.color = data.color ? data.color : 'grey'
      this.family = data.family ? data.family : 'Arial'
      this.lineJoin = data.lineJoin ? data.lineJoin : LineJoin.round
      this.lineColor = data.lineColor ? data.lineColor : 'rgb(0, 0, 0)'
      this.textAlign = data.textAlign ? data.textAlign : 'center'
      this.textBaseline = data.textBaseline ? data.textBaseline : 'middle'
      this.size = data.size ? data.size : 12
      this.rotation = data.rotation ? data.rotation : 0
      this.lineWidth = data.lineWidth ? data.lineWidth : 1
    }
  }

  add(child: any): void {
    child.context = this.context
    this.childs.push(child)
  }

  remove(child: any): void {
    this.childs.push(child)
  }

  font() {
    return `${this.weight} ${this.size}px ${this.family}`
  }

  setStyle(): void {
    this.context.font = this.font()
    this.context.fillStyle = this.color
    this.context.lineCap = this.lineCap
    this.context.lineJoin = this.lineJoin
    this.context.lineColor = this.lineColor
    this.context.lineWidth = this.lineWidth
    this.context.textAlign = this.textAlign
    this.context.shadowColor = this.shadowColor
    this.context.textBaseline = this.textBaseline
    this.context.miterLimit = this.miterLimit
    this.context.shadowBlur = this.shadowBlur
    this.context.shadowOffsetX = this.shadowOffsetX
    this.context.shadowOffsetY = this.shadowOffsetY
  }

  render(): void {
    this.context.save()
    this.context.beginPath()
    if (this.context.fill || this.context.stroke) {
      this.setStyle()
      this.selfRender()
    }
    this.context.restore()
  }

  selfRender() {}
}

export default Graphic

  /*
  locate() {
    // this.context.anchor:         Vector = new Vector(0.5, 0.5)
    this.context.translate(this.position.x, this.position.y)
    this.context.rotate(this.rotation)
  }

  var pat=ctx.createPattern(img,"repeat");
  ctx.fillStyle=pat;
  // this.context.linearGradient: any
  public linearGradient: any
  
  // renderChild() { }
  */

