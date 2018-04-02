interface Events {
  mouseDown(func: Function): void,
  mouseUp(func: Function): void,
  hover(func: Function): void,
  dragStart(func: Function): void,
  draging(func: Function): void,
  dragEnd(func: Function): void,
  enableMouseDrag(func: Function): void
}

export default Events
