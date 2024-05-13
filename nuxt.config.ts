// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/apollo','@nuxtjs/tailwindcss','@nuxt/image',
  ],

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://rickandmortyapi.com/graphql'
      }
    },
  },

  image: {
    domains: ['rickandmortyapi.com']
  },
})
