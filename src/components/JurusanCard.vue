<template>
  <a href="X">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="require(`@/assets//${img}`)" :alt=" name ">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h2 class="title is-5 has-text-centered has-text-link">{{ name }}</h2>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: [
    'name',
    'img',
    'link'
  ]
}
</script>