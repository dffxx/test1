// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            SERVER: process.env.SERVER,
        },
    },
    ssr: false,
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: ['@nuxt/ui'],
    app: {
        head: {
            charset: 'UTF-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
 
    routeRules: {
        '/_nuxt/**': { headers: { 'access-control-allow-methods': 'GET,POST,OPTIONS' } },
        '/api/v1/**': { cors: true },
    },   
})