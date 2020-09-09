import '../styles/index.scss'
import Module from './modules/module'
import Clickhere from './modules/clickhere'

const module = new Module({
  target: '.js-module-target'
})

const clickhere = new Clickhere({
  target: '#btn-click-here'
})

module.init()
clickhere.init()