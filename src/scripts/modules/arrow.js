import { getOffsetTop, goToSection } from '../_functions'

export default class Arrow {
  constructor(prop) {
    this.arrows = document.querySelectorAll(prop.target)
    this.init()
  }

  init() {
    if (this.arrows.length) {
      for (const arrow of this.arrows) {
        arrow.addEventListener('click', e => {
          e.preventDefault()
          const self = e.currentTarget
          goToSection(self)
        })
      }
    }
  }
}