<template>
  <div class="card">
    <header class="card-header has-background-jmti">
      <p class="card-header-title has-text-white">{{berita.title}}</p>
    </header>
    <div class="card-content">
      <figure class="image is-3by2 gmbr">
        <img v-bind:src="require(`@/assets/berita/${berita.images}`)" />
      </figure>
      <p>{{berita.berita}}</p>
    </div>
    <footer class="card-footer">
      <a v-bind:href="berita.link" class="card-footer-item">Baca lebih lengkap</a>
    </footer>
  </div>
</template>
<script>
export default {
  props:[
    "berita"
  ]
}
</script>
<style scoped>
  .card-header{
    height:125px !important;
  }
  .card-content{
    height:400px !important;
    overflow: auto;
    text-align: left;
  }
  .card-content figure{
    margin-bottom: 14px;
  }
  .gmbr img{
    border: 8px solid rgba(0, 93, 175, 0.5);
  }
</style>