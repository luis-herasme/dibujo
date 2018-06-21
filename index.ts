/*

import { Render, Line, Circle, Color, Vector, Rect, Text } from './src/index'
const render = new Render('lienzo')

let balls = []

class _Circle extends Circle {
  public vel: Vector = new Vector()
  public acc: Vector = new Vector()
  constructor (data) {
    super(data)
  }
  addForce(f: Vector) {
    this.acc.add(f)
  }
  update() {
    this.c.alpha = 5 / this.vel.mag()
    this.color = this.c.rgba()
    this.position.add(this.vel)
    this.vel.mult(0.5)
    this.vel.add(this.acc)
    this.acc.zero()
  }
}

for (let y = 0; y < 5; y++) {
  for (let x = 0; x < 5; x++) {
    const color = Color.random()
    const circle = new _Circle({
      position: new Vector((x * 50) + 100, (50 * y) + 100 ),
      color: color.rgb()
    })
    circle.c = color
    balls.push(circle)
    render.add(circle)
  }
}

class _Line extends Line{
  public b1: _Circle
  public b2: _Circle
  public rest
  public k = 0.0005

  constructor (data) {
    super({
      start: data.start.position,
      end: data.end.position
    })
  
    this.lineColor = data.lineColor
    this.b1 = data.start
    this.b2 = data.end
    this.lineWidth = data.lineWidth
    this.rest = Vector.distance(data.start.position, data.end.position)
  }

  update () {
    
    let v = Vector.sub(this.b1.position, this.b2.position)
    v.normalize()
    let x = (this.rest - Vector.distance(this.b1.position, this.b2.position))
    v.mult(x)
    v.mult(this.k)
  
    v.mult(0.25)

    this.b1.addForce(v)
    v.inverse()
    this.b2.addForce(v)
  }
}

for (let b1 = 0; b1 < balls.length; b1++) {
  balls[b1].lines = []
  for (let b2 = 0; b2 < balls.length; b2++) {
    if (b1 != b2) {
      const line = new _Line({
        start: balls[b1],
        end: balls[b2],
        lineColor: balls[b1].color,
        lineWidth: 0.5
      })
      render.add(line)
      balls[b1].lines.push({line, ball: balls[b2]})
    }
  }

  balls[b1].mouseMove((mouse) => {
    balls[b1].addForce(Vector.normalize(Vector.sub(balls[b1].position, mouse)))
  })
}

render.autoRender(() => {
  balls.forEach(ball => {
    ball.update()
    for (let i = 0; i < balls.length - 1; i++) {
      ball.lines[i].line.end = Vector.sub(ball.lines[i].ball.position, ball.position)
      ball.lines[i].line.update()
    }
  })
})
*/























import { Render, Color, Vector, Rect, Text } from './src/index'

const render = new Render('lienzo', 800, 600)
const scale = 50
let balls = []
for (let x = 0; x < render.getWidth() / scale; x++) {
    for (let y = 0; y < render.getHeight() / scale; y++) {
      let color = Color.random()
     // color.setRed(255)
      color.setBlue(255)
      const ball = new Rect({
        position: new Vector((x * scale), (y * scale)),
        color: color.rgb(),
        //radius: scale / 2
         width: scale,
         height: scale
      })
      ball.c = color
      balls.push(ball)
      render.add(ball)
  }
}


document.addEventListener('mousemove', (e) => {
  const mouse = new Vector(e.clientX, e.clientY)
  balls.forEach((ball) => {
    ball.color = `rgba(${ball.c.red}, ${ball.c.green}, ${ball.c.blue}, ${+mouse.distance(ball.position) / render.getWidth() * 4})`
  })
  render.render()
})

render.add(new Text({
  content: 'Hola mundo',
  size: 24,
  position: new Vector(300, 300)
}))

// render.autoRender()
