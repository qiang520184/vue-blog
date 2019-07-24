import path from 'path';
export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['element-ui/lib/theme-chalk/index.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['@/plugins/index'],
    /*
     ** Nuxt.js modules
     */
    modules: [],
    /*
     ** Build configuration
     */
    build: {
        transpile: [/^element-ui/],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            config.resolve.alias['components'] = path.resolve(
                __dirname,
                'components'
            );
            config.resolve.alias['config'] = path.resolve(
                __dirname,
                'config'
            );
            config.resolve.alias['static'] = path.resolve(
                __dirname,
                'static'
            );
            config.devtool = 'source-map';
        }
    }
};
