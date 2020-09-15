import $ from 'jquery'

export const ourAssociateMore = () => {
  const $list = $('.js-our-associate-list')

  if (!$list.length) {
    return false
  }

  const $button = $('.js-our-associate-button')
  const view = 3
  const total = $list.children().length
  const HIDDEN_CLASS = 'is-hidden'
  let visible = 0


  if (total > view) {
    $list
      .children()
      .filter(`:gt(${view - 1})`)
      .addClass(HIDDEN_CLASS)
    visible = $list.children().filter(':visible').length
  } else {
    $button.hide()
  }

  $button.on('click', () => {
    console.log(visible, total)
    if (visible < total) {
      $list
        .children()
        .filter(`:lt(${visible + view})`)
        .removeClass(HIDDEN_CLASS)
      visible = $list.children().filter(':visible').length

      if (visible >= total) {
        $button.hide()
      }
    }

    return false
  })
}
