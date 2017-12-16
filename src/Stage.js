
class Stage {
  constructor () {
    this.childs = []
  }

  add () {
    Array.from(arguments).forEach((element) => {
      element.context = this.render.context
      this.childs.push(element)
    })
  }

  update () {
    this.childs.forEach((child) => child.render())
  }

  remove (g) {
    this.childs.splice(this.childs.indexOf(g), 1)
  }
}

export default Stage
