import $ from 'jquery'
import { breakpointMD } from './_variables'

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

export const goToSection = element => {
  const targetId = element.getAttribute('href')
  const targetElmt = document.querySelector(targetId)
  const offsetTop = getOffsetTop(targetElmt)

  $('html, body').animate(
    {
      scrollTop:
        window.innerWidth >= breakpointMD
          ? offsetTop - document.querySelector('#gnav').offsetHeight
          : offsetTop,
    },
    400
  )
}