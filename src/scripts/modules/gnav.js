import { isShow, isFixed, breakpointMD } from '../_variables'
import { goToSection } from '../_functions'

export default class Gnav {
  constructor() {
    this.gnav = document.getElementById('gnav')
    this.init()
  }

  stickyMenu() {
    const problems = document.querySelector('#problems')

    window.addEventListener('scroll', e => {
      if (window.innerWidth < breakpointMD) {
        return false
      }

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const start = problems.offsetTop - this.gnav.offsetHeight

      if (scrollTop >= start) {
        this.gnav.classList.add(isFixed)
      } else {
        this.gnav.classList.remove(isFixed)
      }
    })
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
      this.gnav.style.display = ''
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

    this.stickyMenu()
  }
}