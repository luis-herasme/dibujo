import Graphic from './Graphic'
import Events from '../Events'
import Vector from '../Vector'

class Arc extends Graphic implements Events {
  // Dynamic properties
  public color: string
  public radius: number
  public fill: boolean
  public lineWidth: number
  public stroke: boolean
  public eAngl: number
  public aAngl: number
  public lineColor: string

  // Private
  private mouseDownEnabled: boolean = false
  private dragStartEnabled: boolean = false
  private dragEndEnabled: boolean = false
  private dragingEnabled: boolean = false
  private mouseUpEnabled: boolean = false
  private hoverEnabled: boolean = false

  private mouseDownMethods: Array<Function> = []
  private mouseUpMethods: Array<Function> = []
  private hoverMethods: Array<Function> = []
  private dragStartMethods: Array<Function> = []
  private dragEndMethods: Array<Function> = []
  private dragingMethods: Array<Function> = []

  constructor(configuration?: any) {
    super(configuration)
    if (configuration) {
      this.stroke = configuration.stroke ? configuration.stroke : false
      this.fill = configuration.fill ? configuration.fill : true
      this.color = configuration.color ? configuration.color : 'grey'
      this.radius = configuration.radius ? configuration.radius : 5
      this.lineWidth = configuration.lineWidth ? configuration.lineWidth : 2
      this.eAngl = configuration.eAngl ? configuration.eAngl : 0
      this.aAngl = configuration.aAngl ? configuration.aAngl : Math.PI
      this.lineColor = configuration.lineColor ? configuration.lineColor : 'black'
    } else {
      this.stroke = false
      this.fill = true
      this.color = 'grey'
      this.radius = 5
      this.lineWidth = 2
      this.eAngl = 0
      this.aAngl = Math.PI
      this.lineColor = 'black'
    }
  }

  checkIfInside(point: Vector): boolean {
    return this.position.distance(point) < this.radius
  }

  private enableEvent (eventName: string, methods: Array<Function>): void {
    let mouse: Vector
    document.addEventListener(eventName, (event) => {
      mouse = new Vector(event.clientX, event.clientY)
      if (this.checkIfInside(mouse)) {
        methods.forEach((method: Function) => method(mouse))
      }
    })
  }

  mouseDown(func: Function): void {
    if (!this.mouseDownEnabled) this.enableEvent('mousedown', this.mouseDownMethods)
    this.mouseDownMethods.push(func.bind(this))
  }

  mouseUp(func: Function): void {
    if (!this.mouseUpEnabled) this.enableEvent('mouseup', this.mouseUpMethods)
    this.mouseUpMethods.push(func.bind(this))
  }

  hover(func: Function): void {
    if (!this.hoverEnabled) this.enableEvent('mousemove', this.hoverMethods)
    this.hoverMethods.push(func.bind(this))
  }

  dragStart(func: Function): void {
    this.dragStartMethods.push(func.bind(this))
  }

  draging(func: Function): void {
    this.dragingMethods.push(func.bind(this))
  }

  dragEnd(func: Function): void {
    this.dragEndMethods.push(func.bind(this))
  }

  enableMouseDrag() {
    let isDraging = false
    let distance: Vector = new Vector()

    document.addEventListener('mousemove', (event) => {
      if (isDraging) {
        this.position = Vector.add(distance, new Vector(event.clientX, event.clientY))
        this.dragingMethods.forEach((meth: Function) => meth())
      }
    })

    this.mouseDown((mouse: Vector) => {
      if (!isDraging) {
        isDraging = true
        distance = Vector.sub(this.position, mouse)
        this.position = Vector.add(distance, mouse)
        document.body.style.cursor = 'pointer'
        this.dragStartMethods.forEach((meth: Function) => meth())
      }
    })

    this.mouseUp(() => {
      if (isDraging) {
        isDraging = false
        document.body.style.cursor = 'default'
        this.dragEndMethods.forEach((meth: Function) => meth())
      }
    })
  }

  render(): void {
    this.context.beginPath()
    if (this.fill) {
      this.context.fillStyle = this.color
      this.context.arc(this.position.x, this.position.y, this.radius, this.eAngl, this.aAngl, true)
      this.context.fill()
    }
    if (this.stroke) {
      this.context.strokeStyle = this.lineColor
      this.context.lineWidth = this.lineWidth
      this.context.stroke()
    }
  }
}

export default Arc
