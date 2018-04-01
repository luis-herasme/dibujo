
import Event from './Event'

class KeyBoard extends Event{
  public keys: Array<string> = []

  press (key: string, func: Function) {
    const func2 = (self: any, event: any) => {
      // console.log(event.key === key)
      // console.log(event.key, key)
      if (event.key === key) {
        // console.log(func)
        func(this, event)
      }
    }

    if (!this.events.keypressActive) {
      this.events.keypressActive = true
      this.initEvent('keypress')
    }
    this.events.keypress.push(func2)
  }

  down (key: string, func: Function) {
    func = (self: any, event: any) => {
      if (event.key === key) func(this, event)
    }

    if (!this.events.keydownActive) {
      this.events.keydownActive = true
      this.initEvent('keydown')
    }
    this.events.keydown.push(func)
  }

  up (key: string, func: Function) {
    const func2 = (self: any, event: any) => {
      if (event.key === key) func(this, event)
    }

    if (!this.events.keyupActive) {
      this.events.keyupActive = true
      this.initEvent('keyup')
    }
    this.events.keyup.push(func2)
  }
}

export default KeyBoard
