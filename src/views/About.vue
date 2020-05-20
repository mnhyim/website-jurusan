<template>
  <div class="about">
    <section class="hero is-medium bgimage">
      <div class="hero-body ">
        <div class="container">
          <h1 class="title has-text-white">
            Institut Teknologi Kalimantan
          </h1>
          <img src="@/assets/logo-itk-1.png" alt="Logo ITK" width="100px"/>
          <blockquote>"Selamat Datang Putra-Putri Terbaik di Kampus ITK" - Rektor ITK</blockquote>  
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <iframe style="width:500px;height:300px;" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" src="https://www.youtube.com/embed/Yzw1orHQWeA"/>
        <p class="paragraph" v-for="texts in data.paragraph" v-bind:key="texts.id">
          {{texts.text}}
        </p>
        <iframe style="width:500px;height:300px;" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" src="https://www.youtube.com/embed/xrJNf1xxoeg"/>
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
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url("../assets/cover-about.jpeg") #005CAF no-repeat center center;
    background-size: cover;
  }
  blockquote{
    margin: 16px 0 0 0;
    color: rgb(128, 128, 128);
  }
  iframe:first-of-type{
    margin: 0 0 1rem 0 ;
  }
</style>