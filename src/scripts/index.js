import '../styles/index.scss'
import Gnav from './modules/gnav'
import Arrow from './modules/arrow'
import { whyWeDoSlider } from './modules/slider'

const gnav = new Gnav()
const arrow = new Arrow({
  target: '.c-arrow'
})

whyWeDoSlider()