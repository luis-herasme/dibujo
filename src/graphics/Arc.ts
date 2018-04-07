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

  public childs: Array<any> = []

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
      if (configuration.stroke !== undefined) {
        if (typeof configuration.stroke === 'boolean') {
          this.stroke = configuration.stroke
        } else {
          console.error(`Type of stroke is not boolean`)
        }
      } else {
        this.stroke = false
      }

      if (configuration.fill !== undefined) {
        if (typeof configuration.fill === 'boolean') {
          this.fill = configuration.fill
        } else {
          console.error(`Type of fill is not boolean`)
        }
      } else {
        this.fill = true
      }

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

  add(child: any): void {
    child.context = this.context
    this.childs.push(child)
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
        document.body.style.cursor = 'pointer'
        isDraging = true
        distance = Vector.sub(this.position, mouse)
        this.position = Vector.add(distance, mouse)
        this.dragStartMethods.forEach((meth: Function) => meth())
      }
    })

    this.mouseUp(() => {
      if (isDraging) {
        document.body.style.cursor = 'default'
        isDraging = false
        this.dragEndMethods.forEach((meth: Function) => meth())
      }
    })
  }

  renderChild(): void {
    // this.context.save()
    // this.context.translate(this.position.x, this.position.y)
    this.context.lineCap = this.lineCap
    this.context.lineJoin = this.lineJoin
    this.childs.forEach(c => c.context = this.context)
 
    this.childs.forEach(c => c.render())
    this.context.beginPath()
    this.context.arc(0, 0, this.radius, this.eAngl, this.aAngl, true)

    if (this.fill) {
      this.context.fillStyle = this.color
      this.context.fill()
    }
    if (this.stroke) {
      this.context.strokeStyle = this.lineColor
      this.context.lineWidth = this.lineWidth
      this.context.stroke()
    }

    // this.context.restore()
  }
}

export default Arc
