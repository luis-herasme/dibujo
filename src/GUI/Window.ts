
class Wind {
    public name
    public sizeX
    public sizeY 
    public positionX
    public positionY
    public element
    public msg

    constructor (name, sizeX, sizeY, positionX, positionY) {
        this.name = name
        this.sizeX = sizeX
        this.sizeY = sizeY
        this.positionX = positionX
        this.positionY = positionY
        this.element = document.createElement('div')
        this.element.setAttribute('class', 'wind')

        this.element.setAttribute('style', `
            width: ${this.sizeX}px;
            height: ${this.sizeY}px;
            top: ${this.positionX}px;
            left: ${this.positionY}px
        `)

        this.render()
        document.body.appendChild(this.element)        
        dragElement(this.element)
    }

    public setMsg(msg : string) {
        this.msg = msg
        this.render()
    }

    remove() {
        document.body.removeChild(this.element)
    }

    render() {
        let btn  = document.createElement('button')
        btn.innerHTML = 'Close'
        btn.onclick = this.remove.bind(this)
        this.element.innerHTML = `
        <div style='
        background: #222;
        padding: 5px;
        '>${this.name}</div>
        <hr>
        <br>
        <p>${this.msg}</p>
        <br>
        `
        this.element.appendChild(btn)
    }
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

export default Wind
