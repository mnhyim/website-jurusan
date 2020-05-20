<template>
  <div class="about">
    <section class="hero is-large">
      <div class="hero-body bgimage">
        <div class="overlay  has-text-centered">
          <h1 class="title has-text-white">
            Institut Teknologi Kalimantan
          </h1>
          <img src="@/assets/logo-itk-1.png" alt="Logo ITK" width="100px">

        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <p class="paragraph" v-for="texts in data.paragraph" v-bind:key="texts.id">
          {{texts.text}}
        </p>
      </div>
    </section>

  </div>
</template>

<script>
  import DataAbout from '@/data/about.json'
  export default {
    name: 'Home',
    data: function() {
      return {
        'data' : DataAbout
      }
    }
  }
</script>

<style scoped>
  .paragraph{
    text-align: left;
    margin: 0 0 1rem 0;
  }
  .bgimage{
    text-align: center;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url("../assets/cover-about.jpeg") #005CAF no-repeat center;
    background-size: cover;
    max-height: 45vw;
    max-width: 100vw;
    padding: 25vh 0;
  }
  .overlay{
    padding: 16px;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  }
</style>