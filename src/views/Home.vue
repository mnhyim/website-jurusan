<template>
  <div class="home">
    <section class="hero is-fullheight">
      <div class="hero-body bgimage">
        <div class="container has-text-centered">
          <h1 class="title has-text-white">
            Institut Teknologi Kalimantan
          </h1>
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
        data: DataJurusan
      }
    }
  }
</script>

<style scoped>
  .bgimage{
    text-align: center;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../assets/cover.jpg") #005CAF no-repeat center;
    background-size: cover;
    min-height: 50vh;
    max-width: 100vw;
    padding: 25vh 0;
  }
</style>