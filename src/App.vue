<template>
  <div id="app">
    <headerPage />
    <router-view />
    <footerPage />
  </div>
</template>

<script>
import headerPage from "./components/headerPage.vue";
import footerPage from "./components/footerPage.vue";

export default {
  components: { headerPage, footerPage },
}; 
</script> 

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}
</style>