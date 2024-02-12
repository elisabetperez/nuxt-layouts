// https://nuxt.com/docs/api/configuration/nuxt-config

import path from 'path';

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/supabase',
    '@nuxtjs/sanity'
  ],
  sanity: {
    projectId: 'ihhks8v0',
    dataset: process.env.SECRET_DATASET,
    apiVersion : "2021-03-25"
  },
  css: [
    "./assets/style.scss", // this is a default file
  ],
  supabase: {
    // Options
    url:process.env.SUPABASE_URL,
    key:process.env.SUPABASE_ANON_KEY,
    redirect: false,
  },
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  vite:{
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        '@styles': path.resolve(__dirname, './scss'),
        '@utilities': path.resolve(__dirname, './utilities'),
      },
    },
    
    css: {
      // same setup as Astro since it uses Astro
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "./scss/framework/_vars/_vars.scss";
          @import "./scss/framework/_vars/_global-vars.scss";
          @import "./scss/framework/_mixins/_mixins.scss";
          @import "./scss/framework/foundation/foundation.scss";
          @import "./scss/framework/utilities/utilities.scss";
          @import '@terra-hq/gc/library';
          @import '@terra-hq/wysiwyg/sanity';
          `,
        },
      },
    },
   
  }
},
)



// // https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from 'path'
// import path from 'path';

// export default defineNuxtConfig({
//   devtools: { enabled: true },
//   modules: [
//     '@nuxtjs/supabase',
//   ],
//   supabase: {
//     // Options
//     url:process.env.SUPABASE_URL,
//     key:process.env.SUPABASE_ANON_KEY,
//     redirectOptions: {
//       login: '/login', // ruta la cual sera redireccionado el susuario en caso de no estar logueado
//       callback: '/confirm',
//       exclude: ['/'], // routes that are not PWD protected 
//     }
//   },
  
//   css: [
//     "./assets/style.scss", // this is a default file
//   ],
//   vite:{
//     resolve: {
//       alias: {
//         '@': path.resolve(__dirname, '.'),
//         '@styles': path.resolve(__dirname, './scss'),
//       },
//     },
//     css: {
//       // same setup as Astro since it uses Astro
//       preprocessorOptions: {
//         scss: {
//           additionalData: `
//           @import "./scss/framework/_vars/_vars.scss";
//           @import "./scss/framework/_mixins/_mixins.scss";
//           @import "./scss/framework/foundation/foundation.scss";
//           @import "./scss/framework/utilities/utilities.scss";
//           `,
//         },
//       },
//     },
//   }
  
// })


