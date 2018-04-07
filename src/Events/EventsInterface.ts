interface Events {
  type: string,
  mouseDown(func: Function): void,
  mouseUp(func: Function): void,
  hover(func: Function): void,
  dragStart(func: Function): void,
  draging(func: Function): void,
  dragEnd(func: Function): void,
  whell(func: Function): void
}

export default Events
