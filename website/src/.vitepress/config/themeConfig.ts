import { stopCoverage } from "v8"
import type { DefaultTheme } from "vitepress"

import nav from "./navigation/navbar"
import sidebar from "./navigation/sidebar"

const themeConfig: DefaultTheme.Config = {
	logo: {
		src: "/img/logo-128px.png",
		width: 24,
		height: 24,
	},

	nav,
	sidebar,

	outline: [2, 3],

	socialLinks: [
		{
			icon: "github",
			link: "https://github.com/kaajjo/libre-sudoku",
			ariaLabel: "Project GitHub",
		},
		{
			icon: { 
				svg: '<svg xmlns="http://www.w3.org/2000/svg"><path d="m10 0c5.5228475 0 10 4.4771525 10 10s-4.4771525 10-10 10-10-4.4771525-10-10 4.4771525-10 10-10zm4.4415206 6c-.3809676.00676048-.9654656.20741135-3.7783726 1.36249773-.98518625.40455487-2.95417139 1.24188162-5.90695536 2.51198022-.47948605.18824745-.73066197.37240775-.75352779.55248085-.04389998.3457214.46024811.4533493 1.09457211.6569173.51716505.1659692 1.21284301.3601363 1.57449742.3678501.32805505.0069972.69420197-.1265275 1.09844073-.4005742 2.75887779-1.83860521 4.18302259-2.76792521 4.27243429-2.78795997.0630785-.01413416.1504898-.0319061.209715.02006453s.0534031.150393.0471296.17679721c-.0501614.21112097-2.64180575 2.53840323-2.79095662 2.69134493l-.07152329.071907c-.54955916.5428066-1.1050136.8971998-.14664109 1.5207107.865332.5629793 1.3689593.9221214 2.2604356 1.4990537.5697052.3686934 1.0163613.8059083 1.6045662.75247.2706591-.0245893.5502322-.2758513.6922173-1.0252274.3355531-1.7709992.9951258-5.60821561 1.1475582-7.18944073.013355-.13853576-.0034454-.3158341-.0169371-.39366392s-.0416856-.18872103-.1441568-.27081051c-.1213567-.09721858-.3087055-.11771989-.3924958-.11639754z"/></svg>'
			},
			link: "https://t.me/libresudoku_chat",
			ariaLabel: "Telegram Discussion"
		}
	],

	footer: {
		message: "<a href=\"https://www.apache.org/licenses/LICENSE-2.0\" target=\"_blank\">Open-source Apache Licensed</a> <span class=\"divider\">"
	},

	editLink: {
		pattern: "https://github.com/kaajjo/libre-sudoku/edit/master/website/src/:path",
		text: "Help us improve this page",
	},

	lastUpdated: {
		text: "Last updated",
		formatOptions: {
			forceLocale: true,
			dateStyle: "long",
			timeStyle: "short",
		},
	},

	search: {
		provider: "algolia",
		options: {
			// appId: "2C8EHFTRW7",
			apiKey: "fc1c45b5a3835e1882cbbf0751dfe705",
			indexName: "libresudoku",
		},
	},
}

export default themeConfig
