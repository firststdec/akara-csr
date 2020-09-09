import _ from 'lodash'
import $ from 'jquery'
import {isActive, isShow, breakpointMD} from '../_variables'

export default class Module {
  constructor(props) {
    this.elm = document.querySelectorAll(props.target)
  }

  init(){
    if(this.elm.length){
      console.log(this.elm)
    }
  }
}