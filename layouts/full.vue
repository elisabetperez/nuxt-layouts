
<template>
  <HeaderA />
    <h1>this is layout Full</h1><br>
   <slot/>
  <FooterA />
</template>

<script setup>
const user = useSupabaseUser();

</script>
<style scoped>
body {
  color: aquamarine;
}
</style>