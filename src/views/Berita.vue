<template>
  <div class="berita">
    <carousel-berita v-bind:berita="data.berita" class="crsl"/>
    
    <section  class="section">
      <div class="columns is-multiline">
        <div class="column" v-for="item in data.berita.slice(this.hitungStartItem, this.hitungEndItem+1)" v-bind:key="item.id">
          <!-- <h1>{{item}}</h1> -->
          <card-berita v-bind:beritabs="item"/>
        </div>
      </div>
      <b-pagination
        :total="this.totalBerita"
        :current.sync="pagination.current"
        :range-before="pagination.rangeBefore"
        :range-after="pagination.rangeAfter"
        :order="pagination.order"
        :size="pagination.size"
        :simple="pagination.isSimple"
        :rounded="pagination.isRounded"
        :per-page="pagination.perPage"
        :icon-prev="pagination.prevIcon"
        :icon-next="pagination.nextIcon"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"/>
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
      data: DataBerita,
      pagination: {
        current: 1,
        perPage: 3,
        rangeBefore: 3,
        rangeAfter: 1,
        order: 'is-centered',
        prevIcon: 'chevron-left',
        nextIcon: 'chevron-right'
      }
    };
  },
  computed: {
    totalBerita: function () {
      return this.data.berita.length
    },
    hitungStartItem: function() {
      return (this.hitungEndItem - this.pagination.perPage + 1)
    },
    hitungEndItem: function() {
      return (this.pagination.current * this.pagination.perPage - 1)
    }
  }
};
</script>

<style scoped>
.crsl{
  border-bottom: 8px solid #272944;
}
</style>