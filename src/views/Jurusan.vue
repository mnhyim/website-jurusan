<template>
  <div class="jurusan">
    <section class="section">
      <div class="container">
        <div class="top">
          <h1 class="title is-2">{{'placeholder'}}</h1>
          <h2 class="subtitle is-5">{{'placeholder'}} adalah {{'placeholder'}}. {{'placeholder'}} memiliki 3 program studi yaitu {{'placeholder'}}, {{'placeholder'}}, dan {{'placeholder'}}.</h2>
        </div>
        <!-- kolom atas -->
        <div class="columns">
          <div class="column">
            <img src="@/assets/logo_jmti.png">
          </div>
          <div class="column">
            <tb-event/>
          </div>
        </div>
        <!-- kolom bawah -->
        <section class="section has-background-dark has-text-white">
          <div class="container">
            <div class="columns is-multiline is-centered">
              <div class="column is-6" v-for="prodi in jurusan" v-bind:key="prodi.id">
                <card-prodi/>
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

export default {
  components:{
    'tb-event' : TableEventJurusan,
    'card-prodi' : CardProdi
  },
  data: function() {
    return {
      'jurusan' : 5
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