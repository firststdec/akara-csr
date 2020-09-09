import _ from 'lodash'
import $ from 'jquery'
import {isActive, isShow, breakpointMD} from '../_variables'

export default class Clickhere {
  constructor(props) {
    this.elm = document.querySelector(props.target)
  }

  init(){
    if(this.elm){
      this.elm.addEventListener('click', () => {
        alert('Yeah!')
      })
    }
  }
}