class Color {
  public red  : number
  public green: number
  public blue : number
  public alpha: number

  constructor (red = 0, green = 0, blue = 0, alpha = 1) {
    this.red   = Math.round(red * 255)
    this.green = Math.round(green * 255)
    this.blue  = Math.round(blue * 255)
    this.alpha = alpha
  
    if (this.red > 255) this.red = 255
    else if (this.red < 0) this.red = 0

    if (this.green > 255) this.green = 255
    else if (this.green < 0) this.green = 0

    if (this.blue > 255) this.blue = 255
    else if (this.blue < 0) this.blue = 0

    if (this.alpha > 1) this.alpha = 1
    else if (this.alpha < 0) this.alpha = 0
  }

  setRed (color: number) {
    if (color > 255) {
      this.red = 255
    } else if (color < 0) {
      this.red = 0
    } else {
      this.red = color
    }
  }

  setGree (color: number) {
    if (color > 255) {
      this.green = 255
    } else if (color < 0) {
      this.green = 0
    } else {
      this.green = color
    }
  }

  setBlue (color: number) {
    if (color > 255) {
      this.blue = 255
    } else if (color < 0) {
      this.blue = 0
    } else {
      this.blue = color
    }
  }

  rgba () {
    return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`
  }

  rgb () {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`
  }

  static random () {
    return new Color(Math.random(), Math.random(), Math.random())
  }
}

export default Color
