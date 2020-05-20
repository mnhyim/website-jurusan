<template>
  <div class="card">
    <div class="card-content" v-bind:class="jurusan.classBg">
      <p class="title is-4 has-text-white has-bottom-border">{{ prodi.name }}</p>
      <p class="subtitle is-6" v-bind:class="jurusan.classText" >{{ prodi.desc }}</p>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <span>
          Lihat <a v-bind:href="prodi.link.website">Website Prodi</a>
        </span>
      </p>
      <p class="card-footer-item">
        <span>
          Lihat <a v-bind:href="prodi.link.instagram">Instagram Prodi</a>
        </span>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  props: [
    'prodi',
    'jurusan'
  ],
}
</script>

<style scoped>
  .subtitle{
    padding: 12px;
    text-align: justify;
  }
</style>