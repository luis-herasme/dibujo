class Vector {
  public x: number
  public y: number

  constructor (x: number = 0, y: number = 0) {
    this.x = x
    this.y = y
  }

  add (vector: Vector): void {
    this.x += vector.x
    this.y += vector.y
  }

  sub (vector: Vector): void {
    this.x -= vector.x
    this.y -= vector.y
  }

  mult (scalar: number): void {
    this.x *= scalar
    this.y *= scalar
  }

  div (scalar: number): void {
    this.x /= scalar
    this.y /= scalar
  }

  inverse (): void {
    this.x *= -1
    this.y *= -1
  }

  mag (): number {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  dot (vector: Vector): number {
    return this.x * vector.x + this.y * vector.y
  }

  distance (vector: Vector): number {
    return Vector.sub(this, vector).mag()
  }

  angle (): number {
    return Math.atan2(this.y, this.x)
  }

  copy (): Vector {
    return new Vector(this.x, this.y)
  }

  normalize (): void {
    this.div(this.mag())
  }

  setMag (mag: number): void {
    this.normalize()
    this.mult(mag)
  }

  setAngle (angle: number): void {
    const magnitude = this.mag()

    this.x = magnitude * Math.cos(angle)
    this.y =  magnitude * Math.sin(angle)
  }

  addAngle (angle: number): void {
    this.setAngle(this.angle() + angle)
  }

  limit (scalar: number): void {
    if (this.mag() > scalar) {
      this.setMag(scalar)
    }
  }

  moveTowards (vector: Vector, speed: number = 1, stop: number = 1): void {
    if (this.distance(vector) > stop) {
      const unit = Vector.normalize(Vector.sub(vector, this))
      unit.mult(speed)
      this.add(unit)
    }
  }

  zero (): void {
    this.x = 0
    this.y = 0
  }

  static add (vector1: Vector, vector2: Vector): Vector {
    return new Vector(vector1.x + vector2.x, vector1.y + vector2.y)
  }

  static sub (vector1: Vector, vector2: Vector): Vector {
    return new Vector(vector1.x - vector2.x, vector1.y - vector2.y)
  }

  static mult (vector: Vector, scalar: number): Vector {
    return new Vector(vector.x * scalar, vector.y * scalar)
  }

  static div (vector: Vector, scalar: number): Vector {
    return new Vector(vector.x / scalar, vector.y / scalar)
  }

  static inverse (vector: Vector): Vector {
    return new Vector(vector.x * -1, vector.y * -1)
  }

  static distance (vector1: Vector, vector2: Vector): number {
    return this.sub(vector1, vector2).mag()
  }

  static normalize (vector: Vector): Vector {
    return this.div(vector, vector.mag())
  }

  static cross (vector1: Vector, vector2: Vector): number {
    return vector1.x * vector2.y - vector2.x * vector1.y
  }

  static randomP (x: number, y: number): Vector {
    return new Vector(x * Math.random(), y * Math.random())
  }

  static random (x: number, y: number): Vector {
    let s1 = 1
    let s2 = 1
    if (Math.random() > 0.5) s1 = -1
    if (Math.random() > 0.5) s2 = -1
    return new Vector(x * Math.random() * s1, y * Math.random() * s2)
  }
}

export default Vector
