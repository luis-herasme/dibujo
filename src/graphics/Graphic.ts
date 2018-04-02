import Vector from '../Vector'

class Graphic {
  public context: any
  public position: Vector
  public anchor: Vector
  public z_index: number

  constructor(data: any) {
    this.position = data.position ? data.position : new Vector(0, 0)
    this.anchor = data.anchor ? data.anchor : new Vector(1, 1)
    this.z_index = data.z_index ? data.z_index : 1
  }

  setStyle(styles: any): void {
    for (let style in styles) {
      this.context[style] = styles[style]
    }
  }

  render(): void { }
}

export default Graphic
