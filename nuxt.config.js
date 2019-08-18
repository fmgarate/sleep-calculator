
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sleep Calculator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/layouts.css',
    '~/assets/fonts/gilroy.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/moment'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  /*
  ** Build configuration
  */
  build: {
    splitChunks: {
      layouts: true
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
