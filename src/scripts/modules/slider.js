import $ from 'jquery'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

export const whyWeDoSlider = () => {
  const slider = new Swiper('.js-what-we-do-slider', {
    loop: false,
    speed: 500,
    spaceBetween: 50,
    pagination: false,
    resistanceRatio: 0
  })

  slider.on('slideChange', () => {
    $('.c-why-we-do__slider-prev').toggleClass(
      'is-disabled',
      slider.isBeginning
    )
    $('.c-why-we-do__slider-next').toggleClass(
      'is-disabled',
      slider.isEnd
    )
  })

  $('.c-why-we-do__slider-prev').on('click', () => {
    slider.slidePrev()
  })
  
  $('.c-why-we-do__slider-next').on('click', () => {
    slider.slideNext()
  })
}
