import { isShow, breakpointMD } from '../_variables'
import { getOffsetTop, goToSection } from '../_functions'

export default class Gnav {
  constructor() {
    this.gnav = document.getElementById('gnav')
    this.init()
  }

  openMenu() {
    this.gnav.style.display = 'block'
    setTimeout(() => {
      this.gnav.classList.add(isShow)
    }, 100)
  }

  closeMenu() {
    this.gnav.classList.remove(isShow)
    setTimeout(() => {
      this.gnav.style.display = 'none'
    }, 100)
  }

  init() {
    // open SP menu
    document.getElementById('btn-open-menu').addEventListener('click', () => {
      this.openMenu()
    })

    // close SP menu
    document.getElementById('btn-close-menu').addEventListener('click', () => {
      this.closeMenu()
    })

    // link to section
    const gnavLinks = document.querySelectorAll('.c-gnav__link')
    for (const link of gnavLinks) {
      link.addEventListener('click', e => {
        e.preventDefault()
        const self = e.currentTarget
        if (window.innerWidth < breakpointMD) {
          this.closeMenu()
        }
        goToSection(self)
      })
    }
  }
}