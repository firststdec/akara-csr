import $ from 'jquery'
import countTo from 'jquery-countto'
import inview from 'jquery-inview'

const countUpDown = ($number, baseNumber, resultNumber) => {
  $number.countTo({
    from: baseNumber,
    to: resultNumber,
    speed: 800,
    formatter: (value, options) => {
      return Math.abs(value)
        .toFixed(options.decimals)
        .replace(/\B(?=(?:\d{3})+(?!\d))/g, ',')
    }
  })
}

export const animate = () => {
  $(window).on('load', () => {
    // $('.js-total-donate').find('[data-number]').each(function () {
    //   const number = $(this).data('number')
    //   countUpDown($(this), 0, number)
    // })

    $('.js-inview-number').one('inview', function(event, isInView) {
      if (isInView) {
        setTimeout(() => {
          const number = $(this).data('number')
          countUpDown($(this), 0, number)
        }, 700)
      }
    })

    $('.js-inview').on('inview', function(event, isInView) {
      $(this).addClass('is-animated')
    })
  })
}
