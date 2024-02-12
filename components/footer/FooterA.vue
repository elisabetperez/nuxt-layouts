<template>
  <footer class="c--footer-a">
    <div class="c--footer-a__ft">
      <div class="f--container">
        <div class="f--row">
          <div class="f--col-12">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { footerQuery } from "./../js/queries/settings.js";
import { GET_SETTINGS } from "./../js/services/GET.js";

const getCurrentYear = () => new Date().getFullYear();
const currentYear = ref(getCurrentYear());
const updateCurrentYear = () => {
  currentYear.value = getCurrentYear();
};

const footerInfo = await GET_SETTINGS({
  QUERY: footerQuery,
  TYPE: "footer",
});

onMounted(() => {
  updateCurrentYear();
});
</script>
