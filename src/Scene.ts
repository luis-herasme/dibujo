
import Render from './Render'

class Scene {
  public renderer: Render
  public childs: Array<any>

  constructor () {
    this.childs = []
  }

  add (element): void {
    element.context = this.renderer.context
    this.childs.push(element)
  }

  remove (g): void {
    this.childs.splice(this.childs.indexOf(g), 1)
  }

  render (): void {
    this.childs.forEach(child => child.render())
  }
}

export default Scene
