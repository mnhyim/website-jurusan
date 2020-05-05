<template>
  <div id="app">
    <v-navbar/>
    <router-view/>
    <v-footer/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  export default {
    components: {
      'v-navbar' : Navbar,
      'v-footer' : Footer
    },
    watch: {
      '$route' (to) {
        document.title = to.meta.title
      }
    }
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
