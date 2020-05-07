<template>
  <div class="card">
    <div class="card-content">
      <p class="title is-4 has-text-white has-bottom-border">{{ name }}</p>
      <p class="subtitle is-6 has-text-white">{{ desc }}</p>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <span>
          Lihat <a v-bind:href="link.website">Website Prodi</a>
        </span>
      </p>
      <p class="card-footer-item">
        <span>
          Lihat <a v-bind:href="link.instagram">Instagram Prodi</a>
        </span>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  props: [
    'id',
    'name',
    'desc',
    'link'
  ],
}
</script>

<style>

</style>