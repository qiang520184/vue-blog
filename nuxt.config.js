import path from 'path';
export default {
	mode: 'universal',
	router: {
		extendRoutes(routes) {
			routes.push({
				name: '/archives/:id',
				path: '/archives/:id',
				component: path.resolve(__dirname, './pages/archives/id.vue')
			});
		}
	},
	/*
   ** Headers of the page
   */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ]
	},
	/*
   ** Customize the progress-bar color
   */
	loading: { color: '#fff' },
	/*
   ** Global CSS
   */
	css: [
		{ src: 'mavon-editor/dist/css/index.css' },
		{ src: 'github-markdown-css/github-markdown.css' },
		{ src: 'element-ui/lib/theme-chalk/index.css' }
	],
	/*
   ** Plugins to load before mounting the App
   */
	plugins: [
		{ src: '@/plugins/element-ui', ssr: false },
		{ src: '@plugins/vue-markdown.js', ssr: false },
		{ src: '@plugins/highlight.js' },
		{ src: '@plugins/index.js' }
		// { src: '@/plugins/global-components'}
	],
	/*
   ** Nuxt.js modules
   */
  modules: [ '@nuxtjs/markdownit',
            '@nuxtjs/axios',
            '@nuxtjs/proxy' ],
  proxy: [
    ['/api', { target: 'http://localhost:9998/',pathRewrite: { '^/api': '/' } }]
],
	/*
   ** Build configuration
   */
	build: {
		// css 独立打包 link 的形式加载
		extractCSS: { allChunks: true },
		//sample/essays 打包的默认路径为 ‘_nuxt’ 或者可以指定cdn 域名
		publicPath: 'https://cdn.jsdelivr.net/gh/qiang520184/cdn@1.7.1/client',
		transpile: [ /^element-ui/ ],
		// css 和 js  img 打包时指定文件夹
		filenames: {
			// app: ({ isDev }) => isDev ? '[name].js' : '[chunkhash].js',
			// chunk: ({ isDev }) => isDev ? '[name].js' : '[chunkhash].js',
			// css: ({ isDev }) => isDev ? '[name].js' : '[contenthash].css',
			// img: ({ isDev }) => isDev ? '[path][name].[ext]' : '[hash:7].[ext]',
			// font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[hash:7].[ext]',
			// video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[hash:7].[ext]'
		},
		/*
     ** You can extend webpack config here
     */
		extend(config, ctx) {
			config.resolve.alias['components'] = path.resolve(__dirname, 'components');
			config.resolve.alias['config'] = path.resolve(__dirname, 'config');
			config.resolve.alias['static'] = path.resolve(__dirname, 'static');
			config.resolve.alias['source'] = path.resolve(__dirname, 'source');
			config.resolve.alias['utils'] = path.resolve(__dirname, 'utils');
			config.devtool = 'source-map';
		}
	}
};
