
class Color {
  constructor (r = 0, g = 0, b = 0, a = 1) {
    this.r = Math.round(r * 255)
    this.g = Math.round(g * 255)
    this.b = Math.round(b * 255)
    this.a = a
    this.insideRange()
  }

  insideRange () {
    if (this.r > 255) this.r = 255
    else if (this.r < 0) this.r = 0

    if (this.g > 255) this.g = 255
    else if (this.g < 0) this.g = 0

    if (this.b > 255) this.b = 255
    else if (this.b < 0) this.b = 0

    if (this.a > 1) this.a = 1
    else if (this.a < 0) this.a = 0
  }

  rgba () {
    // this.insideRange()
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
  }

  hex () {
    return ((this.r << 16) + (this.g << 8) + this.b).toString(16).padStart(6, '0')
  }

  rgb () {
    // this.insideRange()
    return `rgb(${this.r}, ${this.g}, ${this.b})`
  }

  static random () {
    const color = new Color(Math.random(), Math.random(), Math.random())
    return color.rgb()
  }
}

export default Color
