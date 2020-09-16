import '../styles/index.scss'
import Gnav from './modules/gnav'
import Arrow from './modules/arrow'
import { whyWeDoSlider, childrenSoundSlider } from './modules/slider'
import { ourAssociateMore } from './modules/more'
import { activityScroller } from './modules/scroller'

const gnav = new Gnav()
const arrow = new Arrow({
  target: '.c-arrow'
})

whyWeDoSlider()
childrenSoundSlider()
ourAssociateMore()
activityScroller()
