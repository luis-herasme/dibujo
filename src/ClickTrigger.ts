/*import Vector2D from './Vector2D'

export default class ClickTrigger {

    public position

    

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
}*/