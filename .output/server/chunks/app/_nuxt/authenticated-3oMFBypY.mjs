import { m as defineNuxtRouteMiddleware, o as useSupabaseUser, a as useSupabaseClient, p as groq, q as useSanity, s as executeAsync, n as navigateTo } from '../server.mjs';
import 'vue';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@supabase/supabase-js';
import '@terrahq/vue-form';
import 'vue/server-renderer';

const authenticated = defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  try {
    const user = useSupabaseUser();
    const supabase = useSupabaseClient();
    const query = groq`*[_type == "page" && isPrivate == true]{'slug' : slug.current}`;
    const sanity = useSanity();
    const privatePage = ([__temp, __restore] = executeAsync(() => sanity.fetch(query)), __temp = await __temp, __restore(), __temp);
    const users = ([__temp, __restore] = executeAsync(() => supabase.from("Users").select("*").eq("full_access", "TRUE")), __temp = await __temp, __restore(), __temp);
    var isPrivatePage = false;
    var isPublicPage = false;
    var publicPages = [];
    var idExists = false;
    if (privatePage)
      isPrivatePage = privatePage.some((obj) => to.fullPath.includes(`${obj.slug}`));
    if (isPrivatePage) {
      if (!user.value) {
        return navigateTo("/auth/log-in");
      } else if (users.data && users.data.length > 0 && user.value) {
        const idExists2 = users.data.some((obj) => obj.user_id === user.value.id);
        if (!idExists2 && to.fullPath != "/join-beta") {
          return navigateTo("/join-beta");
        }
      }
    } else {
      const query2 = groq`*[_type == "page" && isPrivate != true]{'slug' : slug.current}`;
      publicPages = ([__temp, __restore] = executeAsync(() => sanity.fetch(query2)), __temp = await __temp, __restore(), __temp);
      isPublicPage = publicPages.some((obj) => to.fullPath.includes(`/${obj.slug}`) || `/` === to.fullPath);
      if (!isPublicPage && to.fullPath != "/join-beta") {
        if (users.data && user.value) {
          idExists = users.data.some((obj) => obj.user_id === user.value.id);
          if (!idExists)
            return navigateTo("/auth/log-in");
        } else {
          navigateTo("/auth/log-in");
        }
      }
    }
  } catch (error) {
    console.log(error);
    return navigateTo("/auth/log-in");
  }
});

export { authenticated as default };
//# sourceMappingURL=authenticated-3oMFBypY.mjs.map
