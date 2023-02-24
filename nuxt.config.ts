// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    
    modules: ['@element-plus/nuxt'],
    routeRules: {
        // Static page generated on-demand, revalidates in background
        '/blog/**': { swr: true },
        // Static page generated on-demand once
        '/articles/**': { static: true },
        // Set custom headers matching paths
        '/_nuxt/**': { headers: { 'cache-control': 's-maxage=0' } },
        // Render these routes with SPA
        '/admin/**': { ssr: false },
        // Add cors headers
        '/devApi/**': { cors: true },
        // Add redirect headers
        '/old-page': { redirect: '/new-page' },
        '/old-page2': { redirect: { to: '/new-page', statusCode: 302 } }
      } ,

      nitro: {
        devProxy: {
            "/api": {
                target:"http://localhost:5000",
                changeOrigin: true,
                prependPath: true,
            }
        }
    },

})
