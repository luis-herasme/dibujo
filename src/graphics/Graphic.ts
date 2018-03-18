
import Point from '../Point'

export default class Graphic {
  public context
  public position: Point

  public z_index: number

  constructor (data) {
    if (data.position) this.position = data.position    
    if (data.z_index) this.z_index = data.z_index    
  }

  setStyle (styles): void {
    for (let style in styles) {
      this.context[style] = styles[style]
    }
  }

  render (): void {}
}
