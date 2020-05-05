<template>
  <div class="about">
    <Navbar/>
    <h1>Ini halaman About</h1>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';

  export default {
    name: 'Home',
    components: {
      Navbar
    }
  }
</script>