import Graphic from './Graphic'
import Events from '../Events'
import Vector from '../Vector'

class CircleEvents extends Graphic implements Events {
  public radius: number
  // Private
  private mouseDownEnabled: boolean = false
  private dragStartEnabled: boolean = false
  private dragEndEnabled: boolean = false
  private dragingEnabled: boolean = false
  private mouseUpEnabled: boolean = false
  private hoverEnabled: boolean = false
  private moveEnabled: boolean = false

  private moveMethods: Array<Function> = []
  private mouseDownMethods: Array<Function> = []
  private mouseUpMethods: Array<Function> = []
  private hoverMethods: Array<Function> = []
  private dragStartMethods: Array<Function> = []
  private dragEndMethods: Array<Function> = []
  private dragingMethods: Array<Function> = []

  constructor(configuration: any) {
    super(configuration)
    if (configuration) {
      if (configuration.radius) this.radius = configuration.radius
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
    if (!this.mouseDownEnabled) {
      this.mouseDownEnabled = !this.mouseDownEnabled
      this.enableEvent('mousedown', this.mouseDownMethods)
    }
    this.mouseDownMethods.push(func.bind(this))
  }

  mouseUp(func: Function): void {
    if (!this.mouseUpEnabled) {
      this.mouseUpEnabled = !this.mouseUpEnabled
      this.enableEvent('mouseup', this.mouseUpMethods)
    }
    this.mouseUpMethods.push(func.bind(this))
  }

  hover(func: Function): void {
    if (!this.hoverEnabled) {
      this.hoverEnabled = !this.hoverEnabled
      this.enableEvent('mousemove', this.hoverMethods)
    }
    this.hoverMethods.push(func.bind(this))
  }

  mouseMove(func: Function): void {
    if (!this.moveEnabled) {
      this.moveEnabled = !this.moveEnabled
      let mouse: any
      document.addEventListener('mousemove', (event) => {
        mouse = new Vector(event.clientX, event.clientY)
        this.moveMethods.forEach((method: Function) => method(mouse))
      })
    }
    func = func.bind(this)
    this.moveMethods.push(func)
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
}

export default CircleEvents
