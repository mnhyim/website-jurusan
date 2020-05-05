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
        <div class="column" v-for="card in jurusan" v-bind:key="card.id">
          <JurusanCard v-bind='card'/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  import JurusanCard from '@/components/JurusanCard.vue'
  export default {
    name: 'Home',
    components: {JurusanCard},
    data: function() {
      return {
        jurusan: [
          {
            name : 'JMTI',
            img : 'logo_jmti.png',
          },
          {
            name : 'JTIP',
            img : 'logo_jtip.png',
          },
          {
            name : 'JTSP',
            img : 'logo_jtsp.png',
          },
          {
            name : 'JIKL',
            img : 'logo_jikl.png',
          },
          {
            name : 'JSTPK',
            img : 'logo_jstpk.png',
          }
        ]
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