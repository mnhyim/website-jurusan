<template>
  <div class="berita">
    <carousel-berita v-bind:berita="data.berita" class="crsl"/>
    <section  class="section">
      <div class="columns is-multiline">
        <div class="column" v-for="item in data.berita" v-bind:key="item.id">
          <card-berita v-bind:beritabs="item"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CarouselBerita from "@/components/CarouselBerita.vue";
import CardBerita from "@/components/CardBerita.vue";
import DataBerita from "@/data/berita.json";

export default {
  name: "Berita",
  components: {
    "carousel-berita": CarouselBerita,
    "card-berita": CardBerita
  },
  data: function() {
    return {
      data: DataBerita
    };
  }
};
</script>

<style scoped>
.crsl{
  border-bottom: 8px solid #272944;
}
</style>