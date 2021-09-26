const axiosURL = process.env.NODE_ENV === 'production' ? 'https://to-do-adonis.herokuapp.com' : 'http://localhost:3333';

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Too do',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['@/assets/global'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ['@/plugins/accessor', '@/plugins/axios'],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: [{ path: '@/components', pathPrefix: false }],

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode'
	],

	tailwindcss: {
		// add '~tailwind.config` alias
		exposeConfig: true
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		'cookie-universal-nuxt'
	],

	colorMode: {
		preference: 'system',
		fallback: 'dark',
		classSuffix: ''
	},

	loadingIndicator: {
		name: 'wandering-cubes',
		color: '#3B8070',
		background: 'white'
	},

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		baseURL: axiosURL
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
};
