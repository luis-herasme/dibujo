import Graphic from './Graphic'
import Vector from '../Vector'
import Events from '../Events/EventsInterface'

class Circle extends Graphic implements Events {
  public radius: number = 5
  public lineWidth: number = 1
  public color: string = '#000000'
  public lineColor: string = '#FFFFFF'
  public stroke: boolean = false
  public fill: boolean = true
  public type: string = "circle"

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
      if (configuration.lineWidth) this.lineWidth = configuration.lineWidth
      if (configuration.lineColor) this.lineColor = configuration.lineColor
      if (configuration.radius) this.radius = configuration.radius
      if (configuration.stroke) this.stroke = configuration.stroke
      if (configuration.color) this.color = configuration.color
      if (configuration.fill) this.fill = configuration.fill
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
    let mouse = new Vector()
    let isDraging = false
    let distance = new Vector()

    document.addEventListener('mousemove', (event) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
      if (isDraging) {
        this.position = Vector.add(distance, mouse)
      }
    })

    document.addEventListener('mousedown', (event) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
      distance = Vector.sub(this.position, mouse)
      if (distance.mag() < this.radius) {
        isDraging = true

        this.position = Vector.add(distance, mouse)
        this.shadowColor = '#999'
        this.shadowBlur = 20
        this.shadowOffsetX = 5
        this.shadowOffsetY = 5
        this.radius += 3
        document.body.style.cursor = "pointer"
      }
    })

    document.addEventListener('mouseup', (event) => {
      if (isDraging) {
        document.body.style.cursor = "cursor"
        isDraging = false
        this.shadowColor = '#FFF'
        this.shadowBlur = 0
        this.shadowOffsetX = 0
        this.shadowOffsetY = 0
        this.radius -= 3
        // this.position = mouse.copy()
      }
    })
  }

  onClick(func: Function): void {
    const f = func.bind(this)
    document.addEventListener('click', (event) => {
      const mouse = new Vector(event.clientX, event.clientY)
      const position = new Vector(this.position.x, this.position.y)
      mouse.sub(position)
      if (mouse.mag() < this.radius) {
        f()
      }
    })
  }

  render(): void {
    this.context.beginPath()
    this.context.shadowColor = this.shadowColor
    this.context.shadowBlur = this.shadowBlur
    this.context.shadowOffsetX = this.shadowOffsetX
    this.context.shadowOffsetY = this.shadowOffsetY
    if (this.fill) {
      this.context.fillStyle = this.color
      this.context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)
      this.context.fill()
    }
    if (this.stroke) {
      this.context.lineWidth = this.lineWidth
      this.context.strokeStyle = this.lineColor
      this.context.stroke()
    }
    this.context.shadowColor = 'rgba(0,0,0,0)'
  }
}

export default Circle
