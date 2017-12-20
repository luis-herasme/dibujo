
class Vector3D {
  public x: number
  public y: number
  public z: number

  constructor (x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }

  add (vector: Vector3D): void {
    this.x += vector.x
    this.y += vector.y
    this.z += vector.z
  }

  sub (vector: Vector3D): void {
    this.x -= vector.x
    this.y -= vector.y
    this.z -= vector.z
  }

  mult (scalar: number): void {
    this.x *= scalar
    this.y *= scalar
    this.z *= scalar
  }

  div (scalar: number): void {
    this.x /= scalar
    this.y /= scalar
    this.z /= scalar
  }

  inverse (): void {
    this.x *= -1
    this.y *= -1
    this.z *= -1
  }

  mag (): number {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
  }

  dot (vector: Vector3D): number {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z
  }

  distance (vector: Vector3D): number {
    return Vector3D.sub(this, vector).mag()
  }

  angle (): number {
    return Math.atan2(this.y, this.x)
  }

  copy (): Vector3D {
    return new Vector3D(this.x, this.y, this.z)
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

  moveTowards (vector: Vector3D, speed: number, stop: number): void {
    if (this.distance(vector) > stop) {
      const unit = Vector3D.normalize(vector)
      unit.mult(speed)
      this.add(unit)
    }
  }

  zero (): void {
    this.x = 0
    this.y = 0
    this.z = 0
  }

  static add (vector1: Vector3D, vector2: Vector3D): Vector3D {
    return new Vector3D(vector1.x + vector2.x, vector1.y + vector2.y, vector1.z + vector2.z)
  }

  static sub (vector1: Vector3D, vector2: Vector3D): Vector3D {
    return new Vector3D(vector1.x - vector2.x, vector1.y - vector2.y, vector1.z - vector2.z)
  }

  static mult (vector: Vector3D, scalar: number): Vector3D {
    return new Vector3D(vector.x * scalar, vector.y * scalar, vector.z * scalar)
  }

  static div (vector: Vector3D, scalar: number): Vector3D {
    return new Vector3D(vector.x / scalar, vector.y / scalar, vector.z / scalar)
  }

  static inverse (vector: Vector3D): Vector3D {
    return new Vector3D(vector.x * -1, vector.y * -1, vector.z * -1)
  }

  static distance (vector1: Vector3D, vector2: Vector3D): number {
    return this.sub(vector1, vector2).mag()
  }

  static normalize (vector: Vector3D): Vector3D {
    return this.div(vector, vector.mag())
  }

  static cross (vector1: Vector3D, vector2: Vector3D): number {
    return vector1.x * vector2.y - vector2.x * vector1.y
  }

  static random (x: number, y: number, z: number): Vector3D {
    if (Math.random() > 0.5) {
      return new Vector3D(x * Math.random(), y * Math.random(), z * Math.random())
    } else {
      return new Vector3D(-x * Math.random(), -y * Math.random(), -z * Math.random())
    }
  }
}

export default Vector3D
