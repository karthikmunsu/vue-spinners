import CircleLoader from './CircleLoader.vue';
import RainbowCircleLoader from './RainbowCircleLoader.vue';
import TilesLoader from './TilesLoader.vue';
import TraingleLoader from './TraingleLoader.vue';
import DottedLoader from './DottedLoader.vue';
import SpinLoader from './SpinLoader.vue';
import HourLoader from './HourLoader.vue';
import LineLoader from './LineLoader.vue';
import PacLoader from './PacLoader.vue';
import ProgressLoader from './ProgressLoader.vue';
import LadderLoader from './LadderLoader.vue';
import DominoLoader from './DominoLoader.vue';
import BoxLoader from './BoxLoader.vue';
import SphericalLoader from './SphericalLoader.vue';

Vue.config.debug = true

new Vue({
	el: '#app',
	components: {
    CircleLoader,
    RainbowCircleLoader,
    TilesLoader,
    TraingleLoader,
    DottedLoader,
    SpinLoader,
    HourLoader,
    LineLoader,
    PacLoader,
    ProgressLoader,
    LadderLoader,
    DominoLoader,
    BoxLoader,
    SphericalLoader
  },
  data () {
    return {
   		color: '#5dc596',
      size: '15px',
      margin: '2px',
      radius: '100%'
    }
  }
})

