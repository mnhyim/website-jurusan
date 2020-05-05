<template>
  <div class="berita">
    <Navbar/>
    <h1>Ini halaman Berita</h1>
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar.vue';

  export default {
    name: 'Berita',
    components: {
      Navbar
    }
  }
</script>