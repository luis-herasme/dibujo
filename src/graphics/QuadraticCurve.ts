import Graphic from './Graphic'

class QuadraticCurve extends Graphic {
  public color: string
  public cords: Array<Array<number>>
  public width: number

  constructor (config: any) {
    super(config)
    this.color = config.color ? config.color : 'black'
    this.width = config.width ? config.width : 5
    this.cords = config.cords ? config.cords : [[20, 100], [200, 20]]
  }

  render () {
    this.context.save()
    this.context.beginPath()
    this.context.lineCap = this.lineCap
    this.context.lineJoin = this.lineJoin
    this.context.lineWidth = this.width
    this.context.strokeStyle = this.color
    this.context.moveTo(this.position.x, this.position.y)
    this.context.quadraticCurveTo(this.cords[0][0], this.cords[0][1], this.cords[1][0], this.cords[1][1])
    this.context.stroke()
    this.context.restore()
  }
}

export default QuadraticCurve
