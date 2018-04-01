
import Vector from '../Vector'
import Event from './Event'

class Mouse extends Event {
  public position: Vector = new Vector(0, 0)
  public clicked: boolean = false

  constructor () {
    super()
    this.move((self: any, event: any) => {
      this.position.x = event.clientX
      this.position.y = event.clientY
    })
  }

  move (func: Function): void {
    if (!this.events.mousemoveActive) {
      this.initEvent('mousemove')
      this.events.mousemoveActive = true
    }
    this.events.mousemove.push(func)
  }

  up (func: Function): void {
    if (!this.events.mouseupActive) {
      this.initEvent('mouseup')
      this.events.mouseupActive = true
    }
  }

  down (func: Function): void {
    if (!this.events.mousedownActive) {
      this.initEvent('mousedown')
      this.events.mousedownActive = true
    }
  }
}

export default Mouse
