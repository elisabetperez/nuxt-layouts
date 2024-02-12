<template>
  <HeaderB />
  <h1>this is layout Sidenav</h1><br>
  <slot></slot>
  <FooterA />
</template>

<script setup>
const user = useSupabaseUser();

</script>
<style scoped>
body {
  color: pink;
}
</style>
