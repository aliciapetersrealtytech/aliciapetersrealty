// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  css: [
    '~/assets/css/main.css',
    '~/assets/css/tailwind.css',
    'vue-final-modal/style.css'
  ],
  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
    'nuxt3-lenis',
    '@vee-validate/nuxt',
    '@nuxtjs/tailwindcss',
    'vue3-carousel-nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
        Jost: {
          wght: [100, 300, 400],
          ital: [100]
        },
        Baskervville: true,
        Prata: true,
        Cormorant: true
      }
    }],
    'nuxt-swiper',
    'vue3-carousel-nuxt',
    '@nuxt/scripts',
    '@nuxtjs/strapi',
    'nuxt-nodemailer'
  ],
  nodemailer: {
    service: 'Gmail',
    from: '"Alicia Peters" <aliciapetersrealtytech@gmail.com>',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  },
  carousel: {
    prefix: 'carousel'
  },
  image: {
    dir: 'assets/img',
  },
  imports: {
    dirs: [
      'composables',
      'composables/**',
      'types/*.ts',
      'utils/**'
    ],
  },
  nitro: {
    preset: 'node-server'
  },
  features: {
    inlineStyles: true
  },
  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },
  router: {
    scrollBehaviour(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    script: [],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
      }
    ],
    // please note that this is an area that is likely to change
    style: [],
    noscript: []
  },
  scripts: {
    globals: {
      myScript: 'https://unpkg.com/vue3-google-map',
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      strapi: {
        url: 'http://localhost:1337',
        prefix: '/api'
      },
      apiBaseDev: process.env.API_DEV_URL,
      apiBaseProd: process.env.API_PROD_URL,
      cmsDevUrl: process.env.CMS_DEV_URL,
      cmsProdUrl: process.env.CMS_PROD_URL,
      strapiToken: process.env.STRAPI_DEV_TOKEN,
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY
    }
  }
})
