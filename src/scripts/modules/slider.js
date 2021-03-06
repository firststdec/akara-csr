import $ from 'jquery'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

export const whyWeDoSlider = () => {
  const slider = new Swiper('.js-what-we-do-slider', {
    loop: false,
    speed: 500,
    spaceBetween: 50,
    draggable: true,
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

export const childrenSoundSlider = () => {
  const slider = new Swiper('.js-children-sound-slider', {
    loop: false,
    speed: 500,
    spaceBetween: 50,
    slidesPerView: 1,
    draggable: true,
    pagination: {
      el: '.js-children-sound-pagination',
      type: 'bullets',
      clickable: true
    },
    resistanceRatio: 0
  })
}

export const heroSlider = () => {
  const slider = new Swiper('.js-hero-slider', {
    loop: false,
    speed: 500,
    spaceBetween: 0,
    draggable: false,
    pagination: false,
    resistanceRatio: 0
  })

  slider.on('slideChange', () => {
    $('.c-hero__nav-prev').toggleClass(
      'is-disabled',
      slider.isBeginning
    )
    $('.c-hero__nav-next').toggleClass(
      'is-disabled',
      slider.isEnd
    )
  })

  $('.c-hero__nav-prev').on('click', () => {
    slider.slidePrev()
  })
  
  $('.c-hero__nav-next').on('click', () => {
    slider.slideNext()
  })
}
