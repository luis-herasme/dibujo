
import Point from '../Point'

export default class Graphic {
  public context
  public position: Point

  constructor (data) {
    if (data.position) this.position = data.position    
  }

  setStyle (styles): void {
    for (let style in styles) {
      this.context[style] = styles[style]
    }
  }

  render (): void {}
}
