import {Vector2D} from 'vector_class'
import { weights, LineCap, LineJoin } from '../Properties'

class Graphic {
  public weight: weights = weights.normal
  public context: any
  public linearGradient: any
  public fill: Boolean = true
  public stroke: Boolean = false
  public anchor: Vector2D = new Vector2D(0.5, 0.5)
  public position: Vector2D = new Vector2D(0, 0)
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
          console.info(`Type of stroke is not boolean`)
        }
      } else {
        this.stroke = false
      }
      if (data.fill !== undefined) {
        if (typeof data.fill === 'boolean') {
          this.fill = data.fill
        } else {
          console.info(`Type of fill is not boolean`)
        }
      } else {
        this.fill = true
      }
      this.weight = data.weights ? data.weights : weights.normal
      this.anchor = data.anchor ? data.anchor : new Vector2D(0.5, 0.5)
      this.position = data.position ? data.position : new Vector2D(0, 0)
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
      this.lineColor = data.lineColor ? data.lineColor : 'rgb(50, 50, 50)'
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

  getFont() {
    return `${this.weight} ${this.size}px ${this.family}`
  }

  setStyle(): void {
    this.context.font = this.getFont()
    this.context.fillStyle = this.color
    this.context.lineCap = this.lineCap
    this.context.lineJoin = this.lineJoin
    this.context.strokeStyle = this.lineColor
    this.context.lineWidth = this.lineWidth
    this.context.textAlign = this.textAlign
    this.context.shadowColor = this.shadowColor
    this.context.textBaseline = this.textBaseline
    this.context.miterLimit = this.miterLimit
    this.context.shadowBlur = this.shadowBlur
    this.context.shadowOffsetX = this.shadowOffsetX
    this.context.shadowOffsetY = this.shadowOffsetY
  }

/*
    Most be somewhere here

    this.childs.forEach(c => c.context = this.context)
    this.childs.forEach(c => c.render())


*/

  render(): void {
    // this.context.save()
   this.context.beginPath()
   // if (this.context.fill || this.context.stroke) {
      this.setStyle()
      this.selfRender()
   // }
    // this.context.restore()
  }

  selfRender() { }
}

export default Graphic


/*




-------------------------------- GRUPO --------------------------------






import Graphic from './graphics/Graphic'
import {Vector2D} from 'vector_class'

export default class Group {
  private childs: Array<Graphic> = []
  private context: CanvasRenderingContext2D
  public position: Vector2D = new Vector2D(0, 0) // la posicion tu la tenias publica, asi que no tiene sentido ese metodo de translate que querias hacer
  public scale: Vector2D = new Vector2D(1, 1)
  public rotation: number

  add(child: Graphic): void {
    this.childs.push(child)
  }

  scaleObject(child: any) {
    if (child.type == "arc") {
      child.radius *= this.scale.x
      child.render()
      child.radius /= this.scale.x
    } else if (child.type == "line") {
      child.end = new Vector(child.end.x * this.scale.x, child.end.y * this.scale.y)
      child.render()
      child.end = new Vector(child.end.x / this.scale.x, child.end.y / this.scale.y)
    } else if (child.type == "img" || child.type == "rect") {
      child.width *= this.scale.x
      child.height *= this.scale.y
      child.render()
      child.width /= this.scale.x
      child.height /= this.scale.y
    } else if (child.type == "poligon") {
      child.cords.filter((pnt: any) => {
        return new Vector(pnt.x * this.scale.x, pnt.y * this.scale.y)
      })
      child.render()
      child.cords.filter((pnt: any) => {
        return new Vector(pnt.x / this.scale.x, pnt.y / this.scale.y)
      })
    } else if (child.type == "circle") {
      child.radius *= this.scale.x
      child.render()
      child.radius /= this.scale.x
    } else {
      throw "error, no se puede escalar dicho objeto"
    }
    return child
  }

  render(): void {
    // this.context.save()
    this.childs.forEach((child) => {
      child.position.add(this.position)
      child.context = this.context
      child.render()
      child.position.sub(this.position)
    })
    // this.context.restore()
  }
}

*/