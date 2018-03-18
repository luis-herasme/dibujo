/* globla Image */

import Vector2D from './Vector2D'

class Point {
  public x: number
  public y: number
  constructor (x = 0, y = 0) {
    this.x = x
    this.y = y
  }
}

export class Graphic {
  public context
  public position: Point

  setStyle (styles): void {
    for (let style in styles) {
      this.context[style] = styles[style]
    }
  }

  render (): void {}
}

export class Picture extends Graphic {
  public width  : number  = 1
  public height : number  = 1
  public image : Image

  constructor (data) {
    super()
    this.image = new Image()
    this.position = data.position
    this.width = data.width
    this.height = data.height 
    this.image.src = data.src
  }

  render (): void {
    this.context.beginPath()
    this.context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
  }
}

export class Rect extends Graphic {
  public color  : string  = '#FFFFFF'
  public width  : number  = 1
  public height : number  = 1
  public lineWidth : number  = 1
  public fill   : boolean = true
  public stroke : boolean = false
  public lineColor: string = '#000000'

  constructor (data) {
    super()
    if (data.color)  this.color = data.color
    if (data.position) this.position = data.position
    if (data.width)  this.width = data.width
    if (data.height) this.height = data.height
    if (data.fill)   this.fill = data.fill
    if (data.stroke) this.stroke = data.stroke
    if (data.lineWidth) this.lineWidth = data.lineWidth
    if (data.lineColor) this.lineColor = data.lineColor
  }

  render(): void {
    this.context.fillStyle = this.color
    this.context.beginPath()

    if (this.fill) {
      this.context.fillRect(
        this.position.x,
        this.position.y,
        this.width,
        this.height
      )
    }

    if (this.stroke) {
      this.context.strokeStyle = this.lineColor
      this.context.lineWidth = this.lineWidth
      this.context.strokeRect(
        this.position.x,
        this.position.y,
        this.width,
        this.height
      )
    }
  }
}

export class Line extends Graphic{
  public color: string
  public start: Point = {x: 0, y: 0}
  public end  : Point = {x: 1, y: 1}

  constructor (start, end, color) {
    super()
    if (start) this.start = start
    if (end)   this.end   = end
    if (color) this.color = color
  }

  render (): void {
    this.context.beginPath()
    this.context.moveTo(this.start.x, this.start.y)
    this.context.lineTo(this.end.x, this.end.y)
    this.context.stroke()
  }
}

export class Poligon extends Graphic {
  public cords      : Array<Point>
  public fill       : boolean = true
  public stroke     : boolean = false
  public color      : string  = '#FFF'
  public strokeColor: string  = '#000'

  constructor (configuration) {
    super()
    if (configuration.color) this.color = configuration.color
    if (configuration.stroke) this.stroke = configuration.stroke
    if (configuration.cords) this.cords = configuration.cords
    if (configuration.fill) this.fill = configuration.fill
    if (configuration.strokeColor) this.strokeColor = configuration.strokeColor
  }

  render (): void {
    this.context.beginPath()
    this.context.fillStyle = this.color
    this.context.moveTo(this.cords[0].x, this.cords[0].y)

    for (var i = 0; i < this.cords.length; i++) {
      this.context.lineTo(this.cords[i].x, this.cords[i].y)
    }

    this.context.closePath()
    this.context.fill()
    if (this.stroke) this.context.stroke
  }
}

export class Text extends Graphic {
  public content : string
  public stroke  : boolean
  public style

  constructor (configuration) {
    super()
    if (configuration.style) this.style = configuration.style
    if (configuration.content) this.content = configuration.content
    if (configuration.position) this.position = configuration.position
    if (configuration.stroke) this.stroke = configuration.stroke
  }

  render () :void{
    this.setStyle(this.style)
    if (this.stroke) {
      this.context.strokeText(this.content, this.position.x, this.position.y)
    }
    this.context.fillText(this.content, this.position.x, this.position.y)
  }
}

export class Circle extends Graphic {
  public radius : number
  public color  : string
  public stroke : boolean
  public lineColor : string
  public lineWidth : number = 1
  public fill   : boolean

  constructor (configuration) {
    super()
    if (configuration.position) this.position = configuration.position
    if (configuration.radius) this.radius = configuration.radius
    if (configuration.color) this.color = configuration.color
    if (configuration.stroke) this.stroke = configuration.stroke
    if (configuration.lineWidth) this.lineWidth = configuration.lineWidth
    if (configuration.lineColor) this.lineColor = configuration.lineColor
    if (configuration.fill) this.fill = configuration.fill
  }

  onClick (func: Function): void {
    const f = func.bind(this)
    document.addEventListener('click', (event) => {
      const mouse = new Vector2D(event.clientX, event.clientY)
      const position = new Vector2D(this.position.x, this.position.y)
      mouse.sub(position)
      if (mouse.mag() < this.radius) {
        f()
      }
    })
  }

  render (): void {
    this.context.beginPath()
    this.context.fillStyle = this.color
    this.context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)
    this.context.fill()
    if (this.stroke) {
      this.context.lineWidth = this.lineWidth
      this.context.strokeStyle = this.lineColor
      this.context.stroke()
    }
  }
} 

export class Arc extends Graphic {
  public color: string
  public radius: number
  public lineWidth: number
  public stroke : boolean
  public eAngl: number
  public aAngl: number
  public lineColor: string  = '#000'

  constructor  (configuration){
    super()
    if (configuration.stroke) this.stroke = configuration.stroke
    if (configuration.color) this.color = configuration.color
    if (configuration.position) this.position = configuration.position
    if (configuration.radius) this.radius = configuration.radius
    if (configuration.lineWidth) this.lineWidth = configuration.lineWidth
    if (configuration.eAngl) this.eAngl = configuration.eAngl
    if (configuration.aAngl) this.aAngl = configuration.aAngl
    if (configuration.lineColor) this.lineColor = configuration.lineColor

  }

  render (): void {
    this.context.beginPath()
    this.context.fillStyle = this.color
    this.context.arc(this.position.x, this.position.y, this.radius, this.eAngl, this.aAngl, true)
    if (this.stroke) {
      this.context.strokeStyle = this.lineColor
      this.context.lineWidth = this.lineWidth
      this.context.stroke()
    }
  }
}

export class Group {
  private childs : Array<Graphic> = []
  private context
  public position: Point
  public scale   : Point
  public rotation: number

  add (child: Graphic): void {
    this.childs.push(child)
  }

  render (): void {
    this.context.save()
    this.context.scale(this.scale.x, this.scale.y)
    this.context.rotate(this.rotation)
    this.context.translate(this.position.x, this.position.y)

    this.childs.forEach((child) => child.render())

    this.context.restore()
  }
}

