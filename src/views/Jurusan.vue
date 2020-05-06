<template>
  <div class="jurusan">
    <section class="section">
      <div class="container">
        <div class="top">
          <h1 class="title is-2">{{data.jurusan[0].name}}</h1>
          <h2 class="subtitle is-5">{{data.jurusan[0].abbr}} adalah {{data.jurusan[0].name}}. {{data.jurusan[0].desc}}</h2>
        </div>
        <!-- kolom atas -->
        <div class="columns">
          <div class="column">
            <img src="@/assets/logo_jmti.png">
          </div>
          <div class="column">
            <h1 class="title is-4">Jadwal kegiatan {{data.jurusan[0].abbr}}</h1>
            <tb-event/>
          </div>
        </div>
        <!-- kolom bawah -->
        <section class="section has-background-dark has-text-white">
          <div class="container">
            <div class="columns is-multiline is-vcentered is-centered">
              <div class="column is-6" v-for="prodi in data.jurusan[0].prodi" v-bind:key="prodi.id">
                <card-prodi v-bind="prodi"/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import TableEventJurusan from '@/components/TableEventJurusan.vue'
import CardProdi from '@/components/CardProdi.vue'
import DataJurusan from '@/data/jurusan.json'

export default {
  props:{
    id: Number
  },
  components:{
    'tb-event' : TableEventJurusan,
    'card-prodi' : CardProdi
  },
  data: function() {
    return {
      'data' : DataJurusan
    }
  }
}
</script>

<style scoped>
  .top{
    text-align: left;
    margin: 0 0 24px 0;
  }
</style>