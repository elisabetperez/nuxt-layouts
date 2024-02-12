<template>
  <header class="c--header-a">
    <div class="f--container">
      <div class="f--row">
        <div class="f--col-12">
          <div class="c--header-a__wrapper">
            <div class="c--header-a__wrapper__item-left">
              <NuxtLink to="/" class="c--brand-a" aria-label="global components homepage">
                <TImage className="c--brand-a__media" :image="headerInfo.logo_nav.url" :width="headerInfo.logo_nav.width" :height="headerInfo.logo_nav.height" showAspectRatio="true" />
              </NuxtLink>
            </div>
            <div class="c--header-a__wrapper__item-right">
              <NuxtLink
               
                to="/library"
                class="c--header-a__wrapper__item-right__item"
              >Other page, layout 'sidenav'
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { headerQuery } from "./../js/queries/settings.js";
import { GET_SETTINGS } from "./../js/services/GET.js";

const headerInfo = await GET_SETTINGS({
  QUERY: headerQuery,
  TYPE: "header",
});
</script>
