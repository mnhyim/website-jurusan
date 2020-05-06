<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{berita.title}}</p>
    </header>
    <div class="card-content">
      <figure class="image is-3by2">
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
<style>
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
</style>