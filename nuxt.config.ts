// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    typescript: {
        shim: false
    },
    components: {
        global: true,
        dirs: ['~/components'],
    },
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        cssPath: '~/assets/css/main.css',
        configPath: 'tailwind.config.js',
        exposeConfig: true,
        injectPosition: 0,
        viewer: true,
    },
    app: {
        baseURL: "./",
    }
})
