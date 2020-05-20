<template>
  <section class="section">
    <div class="top">
      <h1 class="title is-2">{{data.jurusan[id].name}}</h1>
      <h2 class="subtitle is-5">{{data.jurusan[id].abbr}} adalah {{data.jurusan[id].name}}. {{data.jurusan[id].desc}}</h2>
    </div>
    <!-- kolom atas -->
    <section class="section">
      <div class="columns">
        <div class="column">
          <img v-bind:src="require(`@/assets/${data.jurusan[id].image}`)">
        </div>
        <div class="column">
          <h1 class="title is-4">Jadwal kegiatan {{data.jurusan[id].abbr}}</h1>
          <tb-event/>
        </div>
      </div>
    </section>
    <!-- kolom bawah -->
    <section class="section" v-bind:class="data.jurusan[id].classDark">
      <div class="container">
        <div class="columns is-multiline is-vcentered is-centered">
          <div class="column is-6" v-for="prodi in data.jurusan[id].prodi" v-bind:key="prodi.id">
            <card-prodi v-bind:prodi="prodi" v-bind:jurusan="data.jurusan[id]"/>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import TableEventJurusan from '@/components/TableEventJurusan.vue'
import CardProdi from '@/components/CardProdi.vue'
import DataJurusan from '@/data/jurusan.json'

export default {
  components:{
    'tb-event' : TableEventJurusan,
    'card-prodi' : CardProdi
  },
  data: function() {
    return {
      'id' : this.$parent.id,
      'data' : DataJurusan,
    }
  },
  watch: {
    // Yang ini kalo ganti path tapi komponennya sama, contohnya pas dihalaman jurusan terus navigasi pake dropdown navbar
    '$route' () {
      if (this.$route.path === '/jurusan/jmti') {
        this.id = 0
      }
      else if (this.$route.path === '/jurusan/jtip') {
        this.id = 1
      }      
      else if (this.$route.path === '/jurusan/jtsp') {
        this.id = 2
      }        
      else if (this.$route.path === '/jurusan/jikl') {
        this.id = 3
      }        
      else if (this.$route.path === '/jurusan/jstpk') {
        this.id = 4
      }  
    }
  }
}
</script>

<style scoped>
  .top{
    text-align: left;
  }
</style>