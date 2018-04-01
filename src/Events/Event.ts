
interface EventsManager {
  mousemove: Array<Function>,
  mouseup: Array<Function>,
  mousedown: Array<Function>,
  mousemoveActive: Boolean,
  mouseupActive: Boolean,
  mousedownActive: Boolean,

  keypress: Array<Function>,
  keyup: Array<Function>,
  keydown: Array<Function>,
  keypressActive: Boolean,
  keyupActive: Boolean,
  keydownActive: Boolean,
}

class Event {
  public events: any = {
    // Mouse
    mousemove: [],
    mouseup: [],
    mousedown: [],
    mousemoveActive: false,
    mousedownActive: false,
    mouseupActive: false,

    // KeyBoard
    keypress: [],
    keyup: [],
    keydown: [],
    keypressActive: false,
    keydownActive: false,
    keyupActive: false
  }

  public initEvent (name: string): void {
    document.addEventListener(name, (event) => {
      this.events[name].forEach((func: Function) => func(this, event))
    })
  }
}

export default Event
