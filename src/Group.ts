import Graphic from './graphics/Graphic'
import Vector from './Vector'

export default class Group {
  private childs: Array<Graphic> = []
  private context: CanvasRenderingContext2D
  public position: Vector = new Vector(0, 0) // la posicion tu la tenias publica, asi que no tiene sentido ese metodo de translate que querias hacer
  public scale: Vector = new Vector(1, 1)
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
