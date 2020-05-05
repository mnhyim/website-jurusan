<template>
  <div id="app">
    <CompNavbar/>
    <router-view/>
    <CompFooter/>
  </div>
</template>

<script>
  import CompNavbar from '@/components/Navbar.vue';
  import CompFooter from '@/components/Footer.vue';
  export default {
    components: {CompNavbar,CompFooter},
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .has-bottom-border{
    padding-bottom: 8px;
    border-bottom: 3px solid white;
  }
</style>
