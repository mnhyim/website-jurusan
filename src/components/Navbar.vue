<template>
  <b-navbar fixed-top>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/logo.png" alt="Institut Teknologi Kalimantan">
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="router-link" :to="{ path: '/about' }">About</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/berita' }">Berita</b-navbar-item>
      <b-navbar-dropdown label="Jurusan" collapsible>
        <b-navbar-item tag="router-link" v-bind:to="data.jurusan[item.id].link" v-for="item in data.jurusan" v-bind:key="item.id">
          {{data.jurusan[item.id].abbr}}
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<script>
  import Data from '@/data/jurusan.json'
  
  export default {
    data: function() {
      return {
        'data' : Data,
      }
    }
  }
</script>