export const getOffsetTop = element => {
  let offsetTop = 0
  while(element) {
    offsetTop += element.offsetTop
    element = element.offsetParent
  }
  return offsetTop
}

export const getOffsetLeft = element => {
  let offsetLeft = 0
  while(element) {
    offsetLeft += element.offsetLeft
    element = element.offsetParent
  }
  return offsetLeft
}