import $ from 'jquery'
import modaal from 'modaal'
import 'modaal/dist/css/modaal.css'

export const initModal = () => {
  $('.js-modal-video').modaal({ type: 'video' })
}
