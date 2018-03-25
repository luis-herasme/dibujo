
import Point from '../Point'
import Vector2D from '../Vector2D'

class Graphic {
  public context
  public position : Vector2D
  public anchor   : Vector2D
  public z_index  : number

  constructor (data) {
    if (data.position) this.position = data.position    
    if (data.anchor)   this.anchor   = data.anchor
    if (data.z_index)  this.z_index  = data.z_index    
  }

  setStyle (styles): void {
    for (let style in styles) {
      this.context[style] = styles[style]
    }
  }

  render (): void {}
}

export default Graphic
