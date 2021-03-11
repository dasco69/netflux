require('dotenv').config();

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'newNetflux',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server : {
    host:'0',
    port: process.env.PORT || 4001
  },
  router: {
    
  },
  env: {
    urlMovieDB : process.env.URL_MOVIE || 'https://api.themoviedb.org/3/movie?api_key=',
    urImage : "https://image.tmdb.org/t/p/",
    MOVIE_LANG:  process.env.MOVIE_LANG,
    movieToken : process.env.MOVIE_TOKEN ,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    //CSS All project
    "@/assets/css/main.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/axios',
    '~/plugins/vue-slick-carousel.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/strapi',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: { baseURL: process.env.BASE_URL || 'http://localhost:1337' },
 
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
