<template>
  <div class="home">
    <section class="hero is-large">
      <div class="hero-body bgimage">
        <div class="container has-text-centered">
          <h1 class="title has-text-white is-size-4 ">
            Institut Teknologi Kalimantan
          </h1>
          <h2 class="has-text-grey-light is-size-7 has-text-weight-light is-family-monospace">{{countJrsPrd[0]}} Jurusan - {{countJrsPrd[1]}} Program Studi</h2>
        </div>
      </div>
    </section>
    <section class="section has-background-white-ter">
      <div class="columns">
        <div class="column" v-for="jurusans in data.jurusan" v-bind:key="jurusans.id">
          <router-link v-bind:to="jurusans.link">
            <card-jurusan v-bind:jurusan="jurusans"/>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import CardJurusan from "@/components/CardJurusan.vue"
  import DataJurusan from "@/data/jurusan.json"

  export default {
    name: "Home",
    components: {CardJurusan},
    data: function() {
      return {
        "card-jurusan" : CardJurusan,
        "data": DataJurusan
      }
    },
    computed: {
      countJrsPrd: function () {
        var i, j, p = 0, x = 0;
        for (i = 0; i < this.data.jurusan.length; i++) {
          for (j = 0; j < this.data.jurusan[i].prodi.length; j++){
            p += 1
          }
          x += 1
        }
        return [x,p]
      },
    }
  }
</script>

<style scoped>
  .bgimage{
    text-align: center;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/cover-home.jpg") #005CAF no-repeat center;
    background-size: cover;
    min-height: 50vh;
    max-width: 100vw;
    padding: 25vh 0;
  }
</style>