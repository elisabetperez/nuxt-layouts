import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["supabase"]?: typeof import("@nuxtjs/supabase").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["sanity"]?: typeof import("@nuxtjs/sanity").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/supabase", Exclude<NuxtConfig["supabase"], boolean>] | ["@nuxtjs/sanity", Exclude<NuxtConfig["sanity"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   supabase: {
      serviceKey: any,
   },

   sanity: any,
  }
  interface PublicRuntimeConfig {
   supabase: {
      url: string,

      key: string,

      redirect: boolean,

      redirectOptions: {
         login: string,

         callback: string,

         exclude: Array<any>,

         cookieRedirect: boolean,
      },

      cookieName: string,

      cookieOptions: {
         maxAge: number,

         sameSite: string,

         secure: boolean,
      },

      clientOptions: {
         auth: {
            flowType: string,

            detectSessionInUrl: boolean,

            persistSession: boolean,

            autoRefreshToken: boolean,
         },
      },
   },

   sanity: {
      useCdn: boolean,

      projectId: string,

      dataset: string,

      apiVersion: string,

      withCredentials: boolean,

      token: any,

      perspective: string,

      additionalClients: any,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }