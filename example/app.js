Vue.config.debug = true // turn on debugging mode

var CircleLoader = VueSpinners.CircleLoader
var RainbowCircleLoader  = VueSpinners.RainbowCircleLoader
var TilesLoader  = VueSpinners.TilesLoader
var TraingleLoader  = VueSpinners.TraingleLoader
var DottedLoader  = VueSpinners.DottedLoader
var SpinLoader  = VueSpinners.SpinLoader
var HourLoader  = VueSpinners.HourLoader
var LineLoader  = VueSpinners.LineLoader
var PacLoader  = VueSpinners.PacLoader
var ProgressLoader  = VueSpinners.ProgressLoader
var LadderLoader  = VueSpinners.LadderLoader
var DominoLoader  = VueSpinners.DominoLoader
var BoxLoader  = VueSpinners.BoxLoader
var SphericalLoader  = VueSpinners.SphericalLoader


new Vue({
	el: '#app',
	components: {
        CircleLoader,
        RainbowCirlceLoader,
        TilesLoader,
        TraingleLoader,
        DottedLoader,
        SpinLoader,
        HourLoader,
        LineLoader,
        PacLoaders,
        ProgressLoader,
        LadderLoader,
        DominoLoader,
        BoxLoader,
        SphericalLoader
	},
	data () {
		return {
			color: '#3AB982',
            height: '35px',
            width: '4px',
            margin: '2px',
            radius: '2px'
		}
	}
})