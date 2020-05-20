<template>
  <section>
    <b-carousel>
      <b-carousel-item v-for="item in 3" :key="item.id">
        <span class="image">
          <img v-bind:src="require(`@/assets/berita/${berita[item].images}`)" />
        </span>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>

export default {
  props:[
    "berita"
  ]
};
</script>

<style scoped>
.carousel-item {
  height: 450px !important;
}
.carousel-item img {
  height: 700px;
  object-fit: cover;
}
</style>