import '../styles/index.scss'
import Gnav from './modules/gnav'
import Arrow from './modules/arrow'
import { whyWeDoSlider, childrenSoundSlider, heroSlider } from './modules/slider'
import { ourAssociateMore } from './modules/more'
import { activityScroller } from './modules/scroller'
import { animate } from './modules/animate'
import { initModal } from './modules/modal'

const gnav = new Gnav()
const arrow = new Arrow({
  target: '.c-arrow'
})

heroSlider()
whyWeDoSlider()
childrenSoundSlider()
ourAssociateMore()
activityScroller()
animate()
initModal()