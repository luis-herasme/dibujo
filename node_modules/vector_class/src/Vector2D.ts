
class Vector2D {
  public x: number
  public y: number

  constructor (x: number, y: number) {
    this.x = x
    this.y = y
  }

  add (vector: Vector2D): void {
    this.x += vector.x
    this.y += vector.y
  }

  sub (vector: Vector2D): void {
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

  dot (vector: Vector2D): number {
    return this.x * vector.x + this.y * vector.y
  }

  distance (vector: Vector2D): number {
    return Vector2D.sub(this, vector).mag()
  }

  angle (): number {
    return Math.atan2(this.y, this.x)
  }

  copy (): Vector2D {
    return new Vector2D(this.x, this.y)
  }

  normalize (): void {
    this.div(this.mag())
  }

  setMag (mag: number): void {
    this.normalize()
    this.mult(mag)
  }

  setAngle (angle): void {
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

  moveTowards (vector: Vector2D, speed: number, stop: number): void {
    if (this.distance(vector) > stop) {
      const unit = Vector2D.normalize(vector)
      unit.mult(speed)
      this.add(unit)
    }
  }

  zero (): void {
    this.x = 0
    this.y = 0
  }

  static add (vector1: Vector2D, vector2: Vector2D): Vector2D {
    return new Vector2D(vector1.x + vector2.x, vector1.y + vector2.y)
  }

  static sub (vector1: Vector2D, vector2: Vector2D): Vector2D {
    return new Vector2D(vector1.x - vector2.x, vector1.y - vector2.y)
  }

  static mult (vector: Vector2D, scalar: number): Vector2D {
    return new Vector2D(vector.x * scalar, vector.y * scalar)
  }

  static div (vector: Vector2D, scalar: number): Vector2D {
    return new Vector2D(vector.x / scalar, vector.y / scalar)
  }

  static inverse (vector: Vector2D): Vector2D {
    return new Vector2D(vector.x * -1, vector.y * -1)
  }

  static distance (vector1: Vector2D, vector2: Vector2D): number {
    return this.sub(vector1, vector2).mag()
  }

  static normalize (vector: Vector2D): Vector2D {
    return this.div(vector, vector.mag())
  }

  static cross (vector1: Vector2D, vector2: Vector2D): number {
    return vector1.x * vector2.y - vector2.x * vector1.y
  }

  static random (x: number, y: number): Vector2D {
    if (Math.random() > 0.5) {
      return new Vector2D(x * Math.random(), y * Math.random())
    } else {
      return new Vector2D(-x * Math.random(), -y * Math.random())
    }
  }
}

export default Vector2D
