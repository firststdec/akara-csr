import $ from 'jquery'

export const activityScroller = () => {
  const $nav = $('.js-activity-nav')

  if (!$nav.length) {
    return false
  }

  const $scroller = $('.js-activity-scroller')
  const $prev = $nav.children('.c-activity__nav-prev')
  const $next = $nav.children('.c-activity__nav-next')
  const DISABLED_CLASS = 'is-disabled'

  const checkPosition = () => {
    const boxWidth = $scroller.width()
    const scrollWidth = $scroller.get(0).scrollWidth
    const left = $scroller.scrollLeft()
    
    $prev.toggleClass(DISABLED_CLASS, left <= 0)
    $next.toggleClass(DISABLED_CLASS, left + boxWidth >= scrollWidth)
  }

  $prev.on('click', function () {
    if ($(this).hasClass(DISABLED_CLASS)) {
      return false
    }

    $scroller.stop().animate({ scrollLeft: '-=600' }, 150, checkPosition)
  })

  $next.on('click', function () {
    if ($(this).hasClass(DISABLED_CLASS)) {
      return false
    }

    $scroller.stop().animate({ scrollLeft: '+=600' }, 150, checkPosition)
  })
}
