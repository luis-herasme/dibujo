
import { Render, Line, Circle, Color, Vector, Rect, Text, Wind } from './src/index'
//const render = new Render('lienzo')

setInterval(() => {
  const w = new Wind('asd')
  w.setMsg('You have won gold')
}, 10000)


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
   // this.c.alpha = 5 / this.vel.mag()
    //this.color = this.c.rgba()
    this.position.add(this.vel)
    this.vel.mult(0.75)
    this.vel.add(this.acc)
    this.acc.zero()
  }
}

const spacing = 35

for (let y = 0; y < 10; y++) {
  for (let x = 0; x < 10; x++) {
    const color = Color.random()
    const circle = new _Circle({
      position: new Vector((x * spacing) + 100, (spacing * y) + 100 ),
      color: 'white',//color.rgb(),
      z_index: 5
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
let links = []

for (let b1 = 0; b1 < balls.length; b1++) {
  balls[b1].lines = []
  for (let b2 = 0; b2 < balls.length; b2++) {
    if (b1 != b2) {
      const code = String(b1) + String(b2)
      const iCode = String(b1) + String(b2)
      if (!links.includes(code) || !links.includes(iCode)) {
        const line = new _Line({
          start: balls[b1],
          end: balls[b2],
          lineColor: balls[b1].color,
          lineWidth: 0.25
        })
        render.add(line)
        balls[b1].lines.push({line, ball: balls[b2]})
        links.push(code)
        links.push(iCode)
        
      }
    }
  }

  balls[b1].mouseMove((mouse) => {
    balls[b1].addForce(Vector.mult(Vector.normalize(Vector.sub(balls[b1].position, mouse)), 2))
  })
}

render.autoRender(() => {
  balls.forEach(ball => {
    ball.update()
    ball.lines.forEach((line) => {
      
      line.line.end = Vector.sub(line.ball.position, ball.position)
      line.line.update()
    })
  })
})

















*/



/*

import { Render, Color, Vector, Rect, Text } from './src/index'

const render = new Render('lienzo', 130, 100)
const scale = 1
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
*/
// render.autoRender()
