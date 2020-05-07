<template>
  <div id="app">
    <v-navbar/>
    <transition name="fade">
      <router-view/>
    </transition>
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

<style lang="scss">
  // Customize Bulma here
  $primary: #335da1;
  $jmti: #005CAF;
  $jmti-darker: darken($color: $jmti, $amount: 8);
  $jtip: #cc565a;
  $jtip-darker: darken($color: $jtip, $amount: 8);
  $jtsp: #686868;
  $jtsp-darker: darken($color: $jtsp, $amount: 8);
  $jikl: #379458;
  $jikl-darker: darken($color: $jikl, $amount: 8);
  $jstpk: #5253a8;
  $jstpk-darker: darken($color: $jstpk, $amount: 8);

  // Import Bulma's core
  @import "~bulma/sass/utilities/_all";
  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";

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

  .has-background-jmti{
      background-color: $jmti;
      &-darker{
          background-color: $jmti-darker;
      }
  }
  .has-background-jtip{
      background-color: $jtip;
      &-darker{
          background-color: $jtip-darker;
      }
  }
  .has-background-jstpk{
      background-color: $jstpk;
      &-darker{
          background-color: $jstpk-darker;
      }
  }
  .has-background-jikl{
      background-color: $jikl;
      &-darker{
          background-color: $jikl-darker;
      }
  }
  .has-background-jtsp{
      background-color: $jtsp;
      &-darker{
          background-color: $jtsp-darker;
      }
  }  
</style>>
