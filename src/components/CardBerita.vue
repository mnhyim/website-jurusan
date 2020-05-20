<template>
  <div class="card">
    <header class="card-header has-background-jmti">
      <p class="card-header-title has-text-white">{{beritabs.title}}</p>
    </header>
    <div class="card-content">
      <figure class="image is-3by2 gmbr">
        <img v-bind:src="require(`@/assets/berita/${beritabs.images}`)" />
      </figure>
      <p>{{beritabs.berita}}</p>
    </div>
    <footer class="card-footer">
      <a v-bind:href="beritabs.link" class="card-footer-item" target="_blank">Baca lebih lengkap</a>
    </footer>
  </div>
</template>
<script>
export default {
  props:[
    "beritabs"
  ]
}
</script>
<style scoped>
  .card-header{
    height:125px !important;
  }
  .card-header-title{
    display: block;
    margin: auto;
    text-align: center;
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
    border: 4px solid rgba(0, 93, 175, 0.24);
  }
</style>